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
            
        ReactDOM.render((<div><LineChart chart_data={chart_data} /><Legend chart_data={chart_data}/></div>),document.getElementById("graph"));
            
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

        return (
            <g className="axis" transform={this.props.axisType=='x'?translate:""} >
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

        //remove last & first point
        var data=this.props.data;
        
        var circles=data.map(function(d,i){
            var formatter = d3.timeParse("%b %e");
            return (<circle className="dot" r="7" cx={_self.props.x(d.date)} cy={_self.props.y(d.count)} fill="#7dc7f4"
                            stroke="#3f5175" strokeWidth="5px" key={i}
                            onMouseOver={_self.props.showToolTip} onMouseOut={_self.props.hideToolTip}
                            data-date={d.date} data-count={d.count} label={_self.props.label}/>)
        });

        return(
            <g>
                {circles}
            </g>
        );
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
            zoom:1,
            margin:{top: 5, right: 50, bottom: 20, left: 50},
            pos_x:0,
            pos_y:0,
            offset_x:0,
            offset_y:0
        };
    },
    
    componentDidMount() {
        var self = this;
        d3.select("#" + self.props.chartId)
        .call(d3.zoom()
        .scaleExtent([-10000, 10000])
        .on("zoom", function(){
            var translation = d3.zoomTransform(this);
            
            self.setState({zoom:translation.k, 
                           pos_x:translation.x, 
                           pos_y:translation.y, 
                           offset_x:self.props.width - d3.event.sourceEvent.layerX,
                           offset_y:self.props.width - d3.event.sourceEvent.layerY});
        }));
    },

    render:function(){
        console.log("redraw")
        var chart_data =  clone(this.props.chart_data);
        
        var margin = {top: 5, right: 50, bottom: 20, left: 50},
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

        
        
        var max_y = d3.max(all_data,function(d){
            return d.count;
        }) / this.state.zoom;
        
        var min_y = this.state.pos_y == 0 ? 0 : ((this.state.pos_y + 25 ) / h * max_y);
        max_y += min_y;



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
            }).curve(d3.curveCardinal);

        var transform='translate(' + margin.left + ',' + margin.top + ')';
        
        var rows = [];
        for (var i in chart_data){
            var className = "line shadow " + i;
            var dot_data = clone(chart_data[i].data);
            rows.push(<g><path className={className} d={line(dot_data)} strokeLinecap="round"/><Dots data={dot_data} label={chart_data[i].label} x={x} y={y} showToolTip={this.showToolTip} hideToolTip={this.hideToolTip}/></g>);

        }

        return (
            <div >
                <svg id={this.props.chartId} width={this.state.width} height={this.props.height} >

                    <g transform={transform} >

                        <Grid h={h} grid={yGrid} gridType="y"/>
                        {/*<Grid h={h} grid={xGrid} gridType="x"/> */}

                        <Axis h={h} axis={yAxis} axisType="y" />
                        <Axis h={h} axis={xAxis} axisType="x"/>

                        {rows}

                        <ToolTip tooltip={this.state.tooltip}/>
                    </g>

                </svg>


            </div>
        );
        // return (
        //     <div></div>
        // );
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
            }

            }
        });
    },
    hideToolTip:function(e){
        e.target.setAttribute('fill', '#7dc7f4');
        this.setState({tooltip:{ display:false,data:{},label:''}});
    }


});


var Legend =React.createClass({
    
        render:function(){
            console.log("legend draw")
            var chart_data =  clone(this.props.chart_data);
            
    
            return (
                <div className="legend">
                    {Object.keys(chart_data).map(function(key, index){
                        var classname = "line " + key;
                        return <div className="item" key={index}><div className={classname}></div>{chart_data[key].label}</div>;
                    })}
                </div>
            );
        },
    
    
    
    });
    
export default Graph;