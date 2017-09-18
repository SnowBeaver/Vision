import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";


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
            
            var data = {
                'h2':{
                    'label':'H2 label',
                    'data':[
                        {day:'02-11-2016',count:180},
                        {day:'02-12-2016',count:250},
                        {day:'02-13-2016',count:150},
                        {day:'02-14-2016',count:496},
                        {day:'02-15-2016',count:140},
                        {day:'02-16-2016',count:380},
                        {day:'02-17-2016',count:100},
                        {day:'02-18-2016',count:150}
                    ]
                },
                'co2':{
                    'label':'Co2 label',
                    'data':[
                        {day:'02-11-2016',count:100},
                        {day:'02-12-2016',count:150},
                        {day:'02-13-2016',count:250},
                        {day:'02-14-2016',count:228},
                        {day:'02-15-2016',count:200},
                        {day:'02-16-2016',count:300},
                        {day:'02-17-2016',count:290},
                        {day:'02-18-2016',count:275}
                    ]
                }
            };
            
            ReactDOM.render(<LineChart chart_data={data} />,document.getElementById("graph"));
            
        }).fail(function () { //, "json"
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
        var width=150,height=70;
        var transformText='translate('+width/2+','+(height/2-5)+')';
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

        return (
            <g transform={transform}>
                <rect class="shadow" is width={width} height={height} rx="5" ry="5" visibility={visibility} fill="#6391da" opacity=".9"/>
                <polygon class="shadow" is points="10,0  30,0  20,10" transform={transformArrow}
                         fill="#6391da" opacity=".9" visibility={visibility}/>
                <text is visibility={visibility} transform={transformText}>
                    <tspan is x="0" text-anchor="middle" font-size="15px" fill="#ffffff">{this.props.tooltip.data.key}</tspan>
                    <tspan is x="0" text-anchor="middle" dy="25" font-size="20px" fill="#a9f3ff">{this.props.tooltip.data.value+" visits"}</tspan>
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
        console.log("dot render");
        
        var _self=this;

        //remove last & first point
        var data=this.props.data.splice(1);
        data.pop();

        var circles=data.map(function(d,i){
            var formatter = d3.timeParse("%b %e");
            return (<circle className="dot" r="7" cx={_self.props.x(d.date)} cy={_self.props.y(d.count)} fill="#7dc7f4"
                            stroke="#3f5175" strokeWidth="5px" key={i}
                            onMouseOver={_self.props.showToolTip} onMouseOut={_self.props.hideToolTip}
                            data-key={d.day} data-value={d.count}/>)
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
            width:this.props.width
        };
    },
    render:function(){
        var _self=this;

        console.log(_self.props.chart_data);
        console.log("render chart");
        var chart_data =  Object.assign({},_self.props.chart_data);
        console.log("before parse");
        console.log(chart_data);

        var margin = {top: 5, right: 50, bottom: 20, left: 50},
            w = this.state.width - (margin.left + margin.right),
            h = this.props.height - (margin.top + margin.bottom);

        for (var key in chart_data) {
            var d = chart_data[key];
            for (var d_key in d['data']) {
                var one_row = d['data'][d_key];
                chart_data[key]['data'][d_key].date = d3.timeParse("%m-%d-%Y")(one_row.day);
            };
        };
        console.log("after parse");
        console.log(chart_data);

        var x = d3.scaleTime()
            .domain(d3.extent(chart_data.h2['data'], function (d) {
                return d.date;
            }))
            .rangeRound([0, w]);

        var y = d3.scaleLinear()
            .domain([0,d3.max(chart_data.h2['data'],function(d){
                return d.count+100;
            })])
            .range([h, 0]);

        var yAxis = d3.axisLeft(y)
            .ticks(5);

        var xAxis = d3.axisBottom(x)
            .tickValues(chart_data.h2['data'].map(function(d,i){
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
        
        console.log("before loop");
        console.log(chart_data);

        var rows = [];
        for (var i in chart_data){
            var className = "line shadow " + i;
            rows.push(<g><path className={className} d={line(chart_data[i].data)} strokeLinecap="round"/><Dots data={chart_data[i].data} x={x} y={y} showToolTip={this.showToolTip} hideToolTip={this.hideToolTip}/></g>);
            console.log("in loop");
            console.log(chart_data[i].data);
        }

        return (
            <div>
                <svg id={this.props.chartId} width={this.state.width} height={this.props.height}>

                    <g transform={transform}>

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
    },
    showToolTip:function(e){
        e.target.setAttribute('fill', '#FFFFFF');
        
        this.setState({tooltip:{
            display:true,
            data: {
                key:e.target.getAttribute('data-key'),
                value:e.target.getAttribute('data-value')
                },
            pos:{
                x:e.target.getAttribute('cx'),
                y:e.target.getAttribute('cy')
            }

            }
        });
    },
    hideToolTip:function(e){
        e.target.setAttribute('fill', '#7dc7f4');
        this.setState({tooltip:{ display:false,data:{key:'',value:''}}});
    }


});


export default Graph;