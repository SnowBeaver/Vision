import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";
import Masonry from 'react-masonry-component';

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
        $.get(url.graph + '?id=' + equipmentId, function (chart_data) {
            let state = that.state;
            state.loading = false;
            that.setState(state);
            for (var key in chart_data){
                for (var obj_key in chart_data[key]){
                    for (var data_key in chart_data[key][obj_key].data){
                        chart_data[key][obj_key].data[data_key].date = d3.timeParse("%Y.%m.%d")(chart_data[key][obj_key].data[data_key].day);
                        chart_data[key][obj_key].show = true;
                    }
                }
            }
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
                <div className="clearfix"></div>
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
            var rect = <rect width="70" height="410" x="-70" y="-10"style={{"fill":"white"}} />;
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
        var win = window.open("#/graph_details/" + this.props.equipmentId + "/" + d, "", "width=600,height=600");
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
            margin:{top: 5, right: 50, bottom: 20, left: 50},
            chart_data:this.props.chart_data,
            scale_x:1,
            scale_y:1,
            offset_y:0,
            offset_x:0,
            mouse_pos_y:170,
            mouse_pos_x:335
        };
    },
    
    componentDidMount() {
        var self = this;
        var down = false,
            origin_x = 0,
            origin_y = 0,
            downTime;
        
        d3.select("#" + self.props.chartId)
        .on("mousedown", function() {
            down = true;
            //d3.event.preventDefault();
            origin_x = d3.event.offsetX - 14;
            origin_y = d3.event.offsetY - 82;
            downTime = new Date()
            
            /*
            self.setState({
                mouse_pos_y : d3.event.offsetY - 14,
                mouse_pos_x : d3.event.offsetX - 82
            });
            */
            
        })
        .on("mouseup", function() {
            down = false;
            var dif = new Date() - downTime;
            if (dif < 300){
                if (d3.event.button == 0){
                    self.setState({
                        old_scale_x : self.state.scale_x,
                        scale_x:self.state.scale_x * 1 + 0.2,
                        old_scale_y : self.state.scale_y,
                        scale_y:self.state.scale_y * 1 + 0.2,
                        is_zoom : true,
                        mouse_pos_y : d3.event.offsetY - 14,
                        mouse_pos_x : d3.event.offsetX - 82
                    });
                }
                else{
                    if (self.state.scale >= 1.2){
                        self.setState({
                            old_scale_x : self.state.scale_x,
                            scale_x:self.state.scale_x * 1 - 0.2,
                            old_scale_y : self.state.scale_y,
                            scale_y:self.state.scale_y * 1 - 0.2,
                            is_zoom : true,
                            mouse_pos_y : d3.event.offsetY - 14,
                            mouse_pos_x : d3.event.offsetX - 82
                        });
                    }
                }
            }
            else{
                self.setState({
                    mouse_pos_y : d3.event.offsetY - 14,
                    mouse_pos_x : d3.event.offsetX - 82
                });
            }
            d3.event.preventDefault();
            d3.event.stopPropagation();
        })
        .on('contextmenu', function(){
            d3.event.preventDefault();
            d3.event.stopPropagation();
            return false;
        })
        .on("mousemove", function() {
            if (down == true){
                var dif_y = d3.event.offsetY - 82 - origin_y;
                var dif_x = d3.event.offsetX - 14 - origin_x;
                self.setState({
                    offset_y:self.state.offset_y + dif_y,
                    offset_x:self.state.offset_x + dif_x
                });
                origin_y = d3.event.offsetY - 82;
                origin_x = d3.event.offsetX - 14;
            }
        })
        .on("wheel", function(){
            d3.event.preventDefault();
            var zoom = (d3.event.wheelDelta / 120) * 0.2;
            if (self.state.scale_x * 1 + zoom <  1)
                self.state.scale_x = 1.2;
            if (self.state.scale_y * 1 + zoom <  1)
                self.state.scale_y = 1.2;
            
            self.setState({
                old_scale_x : self.state.scale_x,
                old_scale_y : self.state.scale_y,
                scale_x:self.state.scale_x * 1 + zoom,
                scale_y:self.state.scale_y * 1 + zoom,
                is_zoom : true,
                mouse_pos_y : d3.event.offsetY - 14,
                mouse_pos_x : d3.event.offsetX - 82
            });
        })
    },
    handleChange(type, event){
        let value = event.target.value;
        if(this.state['scale_type'] != value)
        {
            var obj = {
                is_zoom : true
            }
            if (type == 'x'){
                obj.old_scale_x = this.state.old_scale_x;    
                obj.scale_x = value;
            }
            else{
                obj.old_scale_y = this.state.old_scale_y;    
                obj.scale_y = value;
            }
            this.setState(obj);
        }
    },
    render:function(){
        var _self = this;
        var chart_data =  clone(this.state.chart_data);
        
        var margin = {top: 5, right: 50, bottom: 20, left: 70},
            w = this.state.width - (margin.left + margin.right),
            h = this.props.height - (margin.top + margin.bottom);

        var all_data = [];
        var all_dates = [];
        for (var i in chart_data){
            for (var k in chart_data[i]){
                if (chart_data[i][k].show){
                    all_data = all_data.concat(chart_data[i][k].data);
                    for (var d in chart_data[i][k].data){
                        all_dates.push(new Date(chart_data[i][k].data[d].day))
                    }
                }
            }
        }

        var max_y = 0,
            min_y = 0,
            max_x = 0,
            min_x = 0;

        // for Y axex calculation
        max_y = d3.max(all_data,function(d){
            return d.count;
        }) / Math.pow(this.state.scale_y, 2);
        var original_max_y = max_y;

        if(this.state.is_zoom){
            var pos = this.state.mouse_pos_y+10; // where mouse is now
            var px1 = max_y / h; // how many units per pixel
            
            var pos_y =  this.state.old_max_y - (pos / h) * (this.state.old_max_y - this.state.old_min_y) ; // Y coordinate of unit under mouse
            
            var offset_top = h - pos_y / px1; // new Y coordinate of unit that was under mouse
            this.state.offset_y = pos - offset_top; // moving grid to get to the same unit uder mouse
        }

        var dif_pos = (this.state.offset_y / h) * max_y;
        max_y += dif_pos ;
        min_y = dif_pos;

        this.state.old_max_y = max_y;
        this.state.old_min_y = min_y;
        
        // for X axex calculation
        max_x = new Date(Math.max.apply(null,all_dates)) * 1;
        min_x = new Date(Math.min.apply(null,all_dates)) * 1;
        var dif = (max_x - min_x) / Math.pow(this.state.scale_x, 2);
        var px1 = dif / w; // how many units per pixel
        
        if(this.state.is_zoom){
            var pos = this.state.mouse_pos_x+10; // where mouse is now
            var pos_x =  this.state.old_min_x + (pos / w) * (this.state.old_max_x - this.state.old_min_x) ; // Y coordinate of unit under mouse
            
            var offset_left = (pos_x - min_x) / px1; // new Y coordinate of unit that was under mouse
            this.state.offset_x = pos - offset_left ; // moving grid to get to the same unit uder mouse

        }
        var dif_pos = (this.state.offset_x / w) * dif;
        min_x -= dif_pos;
        max_x = min_x + px1 * w;
        
        this.state.old_max_x = max_x;
        this.state.old_min_x = min_x;
        
        this.state.is_zoom = false;
    
        
        var x = d3.scaleTime()
        .domain([min_x, max_x])
        .rangeRound([0, w]);

        var y = d3.scaleLinear()
            .domain([min_y,max_y])
            .range([h, 0]);

        var yAxis = d3.axisLeft(y)
            .ticks(5);

        var xAxis = d3.axisBottom(x)
            //.tickValues(all_data.map(function(d,i){
                //return d.date;
            //}))
            //.ticks(4);

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
            for (var k in chart_data[i]){
                if (chart_data[i][k].show){
                    var split_label = chart_data[i][k].label.split(" ");
                    var className = "line shadow " + split_label[0].toLowerCase() ;
                    var dot_data = clone(chart_data[i][k].data);
                    if (chart_data[i][k].hide == true)
                        var style = {opacity:0.3};
                    else
                        style = {};
                    var key = i + "_" + split_label[0].toLowerCase() + "_" + split_label[split_label.length - 1].toLowerCase();
                    rows.push(<g key={key} style={style} ><path className={className} d={line(dot_data)} strokeLinecap="round"/><Dots data={dot_data} label={chart_data[i][k].label} x={x} y={y} showToolTip={this.showToolTip} hideToolTip={this.hideToolTip} equipmentId={this.props.equipmentId}/></g>);
                }
            }
        }
        var legend = [];
        Object.keys(chart_data).map(function(key, index){
            var legend_inner = [];
            var total = chart_data[key].length;
            var total_visible = 0;
            for (var i in chart_data[key]){
                var className = "line " + chart_data[key][i].label.split(" ")[0].toLowerCase();
                if (chart_data[key][i].show == true)
                    total_visible++;
                legend_inner.push(
                    <div className="item">
                        <div className={className}></div>
                        <label>
                            <input type="checkbox" checked={chart_data[key][i].show} data-k={key} data-i={i} onChange={_self.toggleChange}/> {chart_data[key][i].label}
                        </label>
                    </div>    
                );
            }
            
            var checkbox_id = "checkbox_" + key;

            var checked = false;
            var indeterminate = false;
            if (total == total_visible)
                checked = true;
            if (total != total_visible && total_visible > 0)
                indeterminate = true;
            legend.push(<div className="legend_block">
                    <div className="legend_head">
                        <label>
                            <input type="checkbox" checked={checked} ref={elem => elem && (elem.indeterminate = indeterminate)} data-key={key} onChange={_self.toggleSuperChange}/> {key}
                        </label>
                    </div>
                    <div>
                        {legend_inner}
                    </div>
                </div>
            );
        })

        return (
            <div key="graph_div">
                <div style={{float:'left'}}>
                    <i className="fa fa-search-plus" style={{fontSize:22+'px'}} data-zoom="0.2" data-axes="y" onClick={this.changeZoom}></i>
                    <input type="range" orient="vertical" min="1" step="0.2" max="100" value={this.state.scale_y} onChange={this.handleChange.bind(this, 'y')}/>
                    <i className="fa fa-search-minus" data-zoom="-0.2" data-axes="y" onClick={this.changeZoom}></i>
                </div>
                <svg id={this.props.chartId} width={this.state.width} height={this.props.height} >

                    <g transform={transform}>

                        <Grid h={h} grid={yGrid} gridType="y"/>
                        {rows}
                        
                        <g fill="white" className="graph">
                            <Axis h={h} axis={yAxis} axisType="y" fill="white" />
                            <Axis h={h} axis={xAxis} axisType="x" fill="white"/>
                        </g>

                        <image href="../app/static/img/center.png" width="20" height="20" x={this.state.mouse_pos_x}  y={this.state.mouse_pos_y} />
                        <ToolTip tooltip={this.state.tooltip}/>
                    </g>
                </svg>
                <input type="range" min="1" step="0.2" max="100" value={this.state.scale_x} onChange={this.handleChange.bind(this, 'x')}/>
                <div>
                    <i className="fa fa-search-plus" style={{fontSize:22+'px', float:'right'}} data-zoom="0.2" data-axes="x" onClick={this.changeZoom}></i>
                    <i className="fa fa-search-minus"  data-zoom="-0.2" data-axes="x" onClick={this.changeZoom}></i>
                    <div className="clearfix"></div>
                </div>
                <div className="legend">
                    <Masonry className={'my-gallery-class'} >{legend}</Masonry>   
                    <div className="item" key="all" onClick={_self.showAll} >View all</div>
                </div>
            </div>
        );
    },
    toggleChange: function(e) {
        var i = e.target.getAttribute("data-i");
        var k = e.target.getAttribute("data-k");
        this.state.chart_data[k][i].show = !this.state.chart_data[k][i].show; 
        this.setState({
          chart_data: this.state.chart_data,
          offset_x:0,
          offset_y:0,
          scale_x:1,
          scale_y:1
        }, function() {
           
        }.bind(this));
    },
    
    changeZoom: function(e){
        var value = e.target.getAttribute("data-zoom");
        var axes = e.target.getAttribute("data-axes");
        this.state['scale_' + axes] = this.state['scale_' + axes] * 1 + value * 1;
        if (this.state['scale_' + axes] < 1)
            this.state['scale_' + axes] = 1;
        this.state.is_zoom = true;
        this.setState(this.state);
    },

    toggleSuperChange: function(e) {
        var key = e.target.getAttribute("data-key");
        var chart_data = this.state.chart_data;
        
        var total = chart_data[key].length;
        var total_visible = 0;
        for (var i in chart_data[key]){
            if (chart_data[key][i].show == true)
                total_visible++;
        }
        var show = false;
        if (total_visible == 0){
            show = true;
        }
        if (total != total_visible && total_visible > 0)
            show = true;

        for (var i in chart_data[key]){
            chart_data[key][i].show = show;
        }
       
        this.setState({
          chart_data: this.state.chart_data,
          offset_x:0,
          offset_y:0,
          scale_x:1,
          scale_y:1
        }, function() {
           
        }.bind(this));
    },

    showAll:function(){
        var chart_data = this.state.chart_data 
        for (var i in chart_data){
            for (var k in chart_data[i]){
                chart_data[i][k].show = true;
            }
        }

        this.setState({
            chart_data:chart_data,
            offset_x:0,
            offset_y:0,
            scale_x:1,
            scale_y:1
        });

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