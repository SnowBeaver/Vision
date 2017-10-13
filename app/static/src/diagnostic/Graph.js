import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";


function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}


var Graph = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            isVisible: false,
            action: 'choose'
        }
    },

    toggle: function (action) {
        if (action != 'hide') {
            // Mode to choose equipment in the tree
            this.setState({loading: true, isVisible: true, action: 'add'});
        } else {
            // Mode to load graph for selected equipment
            this.setState({loading: false, isVisible: false, action: 'choose'});
        }
    },

    onClick: function () {
        if (this.state.action === 'add') {
            // Show checkboxes for selecting equipment
            let state = this.state;
            state.action = 'choose';
            this.setState(state);
            this.props.onClick();
        } else {
            // Load graph for the selected equipment
            this.setState({loading: true, isVisible: true, action: 'add'});
            let ids = $('#tree').jstree(true).get_checked().map(function(id) {
                let equipment_id = $('#tree').jstree(true).get_node(id).state.equipment_id;
                return equipment_id ? equipment_id : null
            });
            if (ids.length) {
                this.load(ids.join(','));
            }
            this.props.onClick(false);
        }
    },

    load: function (equipmentId) {
        let that = this;
        $.get(url.graph + '?id=' + equipmentId, function (data) {
            let state = that.state;
            state.loading = false;
            that.setState(state);
            
            var chart_data = {};
            data.map(function(v){
                var ind = v.label.split(" ")[0].toLowerCase();
                chart_data[ind] = {
                    'label': v.label,
                    'data': []
                }
                v.data.map(function(data_obj){
                    data_obj.date = d3.timeParse("%d.%m.%Y %H:%M")(data_obj.day);
                    chart_data[ind]['data'].push(data_obj);
                })
            })
            
        ReactDOM.render((<LineChart chart_data={chart_data} equipmentId={equipmentId}/>),document.getElementById("graph"));
            
        }, "json").fail(function () { //, "json"
            that.props.toggleGraphBlock('hide');
        });
    },

    render: function () {
        return (
            <div className={"col-md-12" + (!this.state.isVisible ? " collapse": "")} id="graphBlock">
                <button className="btn btn-success pull-right"
                        disabled={this.state.loading ? "disabled":null}
                        onClick={this.onClick}>
                    {(this.state.action === 'add' ?'Choose':'Add') + ' equipment'}
                    </button>
                <div id="graph" >
                    {this.state.loading ? 'Loading...':null}
                </div>
            </div>
        );
    }
});

var Axis=React.createClass({
    propTypes: {
        h:React.PropTypes.number,
        axis:React.PropTypes.func,
        axisType:React.PropTypes.oneOf(['x','y'])

    },

    componentDidUpdate: function () { this.renderAxis(); },
    componentDidMount: function () { this.renderAxis(); },
    renderAxis: function () {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.axis);

    },
    render: function () {

        var translate = "translate(0,"+(this.props.h)+")";
        if (this.props.axisType == "y")
            var rect = "";
        else
            var rect = <rect width="800" height="20" style={{"fill":"white"}} x="-20" y="1"/>
        return (
            <g transform={this.props.axisType=='x'?translate:""}>
                {rect}
                <g className="axis"  ></g>
            </g>
        );
    }

});

var Grid=React.createClass({
    propTypes: {
        h:React.PropTypes.number,
        grid:React.PropTypes.func,
        gridType:React.PropTypes.oneOf(['x','y'])
    },

    componentDidUpdate: function () { this.renderGrid(); },
    componentDidMount: function () { this.renderGrid(); },
    renderGrid: function () {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.grid);

    },
    render: function () {
        var translate = "translate(0,"+(this.props.h)+")";
        return (
            <g className="y-grid" transform={this.props.gridType=='x'?translate:""}>
            </g>
        );
    }

});

var ToolTip=React.createClass({
    propTypes: {
        tooltip:React.PropTypes.object
    },
    render:function(){

        var visibility="hidden";
        var transform="";
        var x=0;
        var y=0;
        var width=250,height=100;
        var transformText='translate('+width/2+',20)';
        var transformArrow="";

        if(this.props.tooltip.display==true){
            var position = this.props.tooltip.pos;

            x= position.x;
            y= position.y;
            visibility="visible";

            if(y>height){
                transform='translate(' + (x-width/2) + ',' + (y-height-20) + ')';
                transformArrow='translate('+(width/2-20)+','+(height-2)+')';
            }else if(y<height){

                transform='translate(' + (x-width/2) + ',' + (Math.round(y)+20) + ')';
                transformArrow='translate('+(width/2-20)+','+0+') rotate(180,20,0)';
            }


        }else{
            visibility="hidden"
        }
        var date = new Date(this.props.tooltip.date).toLocaleDateString();
        return (
            <g transform={transform}>
                <rect class="shadow" is width={width} height={height} rx="5" ry="5" visibility={visibility} fill="#6391da" opacity=".9"/>
                <polygon class="shadow" is points="10,0  30,0  20,10" transform={transformArrow}
                         fill="#6391da" opacity=".9" visibility={visibility}/>
                <text is visibility={visibility} transform={transformText}>
                    <tspan is x="0" text-anchor="middle" dy="0" font-size="15px" fill="#ffffff" textLength="200" lengthAdjust="spacingAndGlyphs">{this.props.tooltip.label}</tspan>
                    <tspan is x="0" text-anchor="middle" dy="20" font-size="15px" fill="#ffffff">{date}</tspan>
                    <tspan is x="0" text-anchor="middle" dy="35" font-size="20px" fill="#a9f3ff">{this.props.tooltip.count}</tspan>
                </text>
            </g>
        );
    }
});


var Dots=React.createClass({
    propTypes: {
        data:React.PropTypes.array,
        x:React.PropTypes.func,
        y:React.PropTypes.func

    },
    render:function(){
        var _self=this;

        var data=this.props.data;
        
        var circles=data.map(function(d,i){
            var formatter = d3.timeParse("%b %e");
            return (<circle className="dot" r="7" cx={_self.props.x(d.date)} cy={_self.props.y(d.count)} fill="#7dc7f4"
                            stroke="#3f5175" strokeWidth="5px" key={i}
                            onMouseOver={_self.props.showToolTip} onMouseOut={_self.props.hideToolTip}
                            data-date={d.date} data-day={d.day} data-count={d.count} label={_self.props.label} onClick={_self.openPop}/>)
        });

        return(
            <g>
                {circles}
            </g>
        );
    },
    openPop:function(e){
        var d = e.target.getAttribute('data-day');
        window.open(url.graph_details + "?id=" + this.props.equipmentId + "&date=" + d, "", "width=600,height=400");
    }
});


var LineChart=React.createClass({

    propTypes: {
        width:React.PropTypes.number,
        height:React.PropTypes.number,
        chartId:React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            width: 800,
            height: 400,
            chartId: 'v1_chart'
        };
    },
    getInitialState:function(){
        return {
            tooltip:{ display:false,data:{key:'',value:''}},
            width:this.props.width,
            scale:1,
            margin:{top: 5, right: 50, bottom: 20, left: 50},
            delta:0,
            offset_y:0,
            origin:0,
            chart_data:this.props.chart_data
        };
    },
    
    componentDidMount() {
        var self = this;
        var down = false,
            origin = 0;
        
        d3.select("#" + self.props.chartId)
        .on("mousedown", function() {
            down = true;
            d3.event.preventDefault();
            origin = d3.event.offsetY;
        })
        .on("mouseup", function() {
            down = false;
        })
        .on("mousemove", function() {
            if (down == true){
                var dif = d3.event.offsetY - origin;
                self.setState({
                    offset_y:self.state.offset_y + dif
                });
                origin = d3.event.offsetY;
            }
        })
        .on("wheel", function(){
            d3.event.preventDefault();
            var zoom = (d3.event.wheelDelta / 120) * 0.2;
            self.setState({
                old_scale : self.state.scale,
                scale:self.state.scale * 1 + zoom,
                is_zoom : true,
                mouse_pos : d3.event.layerY - 40
            });
        })
        
        /*
        .call(d3.zoom().scaleExtent([-10000, 10000])
            .on("zoom", function(){
                //var translation = d3.zoomTransform(this);
               // console.log(d3.event);
                //self.setState({
               //             offset_y:self.props.width - d3.event.sourceEvent.offsetY - 5,
              //              delta:d3.event.sourceEvent.wheelDelta
                //            });
            })
        );
        */
    },
    handleChange(event){
        let value = event.target.value;
        if(this.state.scale != value)
        {
            this.setState({
                old_scale : this.state.scale,
                scale:value,
                is_zoom : true,
                mouse_pos : 375
            });
        }
    },
    render:function(){
        var _self = this;
        var chart_data =  clone(this.state.chart_data);
        
        var margin = {top: 5, right: 50, bottom: 20, left: 70},
            w = this.state.width - (margin.left + margin.right),
            h = this.props.height - (margin.top + margin.bottom);

        var all_data = [];
        for (var i in chart_data){
            all_data = all_data.concat(chart_data[i].data);
        }

        var x = d3.scaleTime()
            .domain(d3.extent(all_data, function (d) {
                return d.date;
            }))
            .rangeRound([0, w]);
        
        var visible_one = false;
        var visible_row = [];
        Object.keys(chart_data).map(function(key, index){
            if (chart_data[key].hide == true)
            {
                visible_one = true;
                _self.state.pos_y = 0;
            }
            else
                visible_row = chart_data[key].data;
        })

        var max_y = 0,
            min_y = 0;

        if (visible_one){
            max_y = d3.max(visible_row,function(d){
                return d.count;
            });
            var dif_pos = (this.state.offset_y / 375) * max_y;
            min_y = d3.min(visible_row,function(d){
                return d.count;
            }) + dif_pos;
            max_y += dif_pos;

            if (max_y == min_y){
                max_y = max_y * 1.2;
                min_y = min_y * 0.8;
            }
        }
        else{
            max_y = d3.max(all_data,function(d){
                return d.count;
            }) / Math.pow(this.state.scale, 2);
            var original_max_y = max_y;

            if(this.state.is_zoom){
                var pos = this.state.mouse_pos; // where mouse is now
                var px1 = max_y / 375; // how many units per pixel
                
                var pos_y =  this.state.old_max_y - (pos / 375) * (this.state.old_max_y - this.state.old_min_y) ; // Y coordinate of unit under mouse
                
                var offset_top = 375 - pos_y / px1; // new Y coordinate of unit that was under mouse
                this.state.offset_y = pos - offset_top; // moving grid to get to the same unit uder mouse
            }

            var dif_pos = (this.state.offset_y / 375) * max_y;
            max_y += dif_pos ;
            min_y = dif_pos;

            this.state.old_max_y = max_y;
            this.state.old_min_y = min_y;
            
            this.state.is_zoom = false;
        }
        
        var y = d3.scaleLinear()
            .domain([min_y,max_y])
            .range([h, 0]);

        var yAxis = d3.axisLeft(y)
            .ticks(5);

        var xAxis = d3.axisBottom(x)
            .tickValues(all_data.map(function(d,i){
                return d.date;
            }))
            .ticks(4);

        var yGrid = d3.axisLeft(y)
            .ticks(5)
            .tickSize(-w, 0, 0)
            .tickFormat("");

        var line = d3.line()
            .x(function (d) {
                return x(d.date);
            })
            .y(function (d) {
                return y(d.count);
            }).curve(d3.curveLinear);

        var transform='translate(' + margin.left + ',' + margin.top + ')';
        
        var rows = [];
        for (var i in chart_data){
            var className = "line shadow " + i ;
            var dot_data = clone(chart_data[i].data);
            if (chart_data[i].hide == true)
                var style = {opacity:0.3};
            else
                style = {};
            rows.push(<g key={i} style={style} ><path className={className} d={line(dot_data)} strokeLinecap="round"/><Dots data={dot_data} label={chart_data[i].label} x={x} y={y} showToolTip={this.showToolTip} hideToolTip={this.hideToolTip} equipmentId={this.props.equipmentId}/></g>);

        }

        return (
            <div >
                <svg id={this.props.chartId} width={this.state.width} height={this.props.height} >

                    <g transform={transform} >

                        <Grid h={h} grid={yGrid} gridType="y"/>
                        {rows}
                        
                        <g fill="white">
                            <Axis h={h} axis={yAxis} axisType="y" fill="white" />
                            <Axis h={h} axis={xAxis} axisType="x" fill="white"/>
                        </g>


                        <ToolTip tooltip={this.state.tooltip}/>
                    </g>
                </svg>
                <input type="range" min="1" step="0.2" max="100" value={this.state.scale} onChange={this.handleChange}/>
                <div>
                    <i className="fa fa-search-plus" style={{fontSize:22+'px', float:'right'}}></i>
                    <i className="fa fa-search-minus"></i>
                    <div className="clearfix"></div>
                </div>
                <div className="legend">
                    <div className="col-md-6">
                        {Object.keys(chart_data).map(function(key, index){
                            if (index % 2){
                                var classname = "line " + key;
                                var lineClassName = "item " + (chart_data[key].selected == true ? "active" : "");
                                return <div className={lineClassName} key={index} onClick={_self.selectRow} data-row={key}><div className={classname}></div>{chart_data[key].label}</div>;
                            }
                        })}
                    </div>
                    <div className="col-md-6">
                        {Object.keys(chart_data).map(function(key, index){
                            if (index % 2 != 1){
                                var classname = "line " + key;
                                var lineClassName = "item " + (chart_data[key].selected == true ? "active" : "");
                                return <div className={lineClassName} key={index} onClick={_self.selectRow} data-row={key}><div className={classname}></div>{chart_data[key].label}</div>;
                            }
                        })}
                    </div>
                    <div className="item" key="all" onClick={_self.showAll} >View all</div>
                </div>
            </div>
        );
    },

    selectRow:function(e){
        var s_key = e.target.getAttribute('data-row');
        var chart_data = this.state.chart_data 
        Object.keys(chart_data).map(function(key, index){
            if (key != s_key){
                chart_data[key].hide = true;
                chart_data[key].selected = false;
            }
            else{
                chart_data[key].hide = false;
                chart_data[key].selected = true;
            }
        })
        d3.zoomTransform(d3.select("#" + this.props.chartId)).scale(1);
        this.setState({chart_data:chart_data, offset_y:0});
    },

    showAll:function(){
        var chart_data = this.state.chart_data 
        Object.keys(chart_data).map(function(key, index){
            chart_data[key].hide = false;
            chart_data[key].selected = false;
        })

        this.setState({chart_data:chart_data,offset_y:0, scale:1, old_scale:1});
    },

    showToolTip:function(e){
        e.target.setAttribute('fill', '#FFFFFF');
        
        this.setState({tooltip:{
            display:true,
            date:e.target.getAttribute('data-date'),
            count:e.target.getAttribute('data-count'),
            label:e.target.getAttribute('label'),
            pos:{
                x:e.target.getAttribute('cx'),
                y:e.target.getAttribute('cy')
            }}
        });
    },
    hideToolTip:function(e){
        e.target.setAttribute('fill', '#7dc7f4');
        this.setState({tooltip:{ display:false,data:{},label:''}});
    }

});
    
export default Graph;