import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";

var GraphDetails = React.createClass({
    getInitialState: function () {
        return {
            data:{},
            equipment:''
        }
    },
    componentDidMount: function () { 
        var _self = this;
        $.get(url.graph_details + "?equipmentId=" + this.props.params['equipmentId'] + "&date=" + this.props.params['date'], function(result){
            _self.setState({"data" : result.data, "equipment" : result.equipment})
        }, "json");
    },

    render: function () {
        console.log("e id", this.props.params['equipmentId']);
        console.log("date", this.props.params['date']);
        var _self = this;
        return (
            <div>
                <h2>{_self.state.equipment}</h2>
                <h4>{_self.props.params['date']}</h4>
                <table className="table">
                    {Object.keys(_self.state.data).map(function(key, index){
                        return (<tr>
                                <td>{_self.state.data[key].label}</td>
                                {Object.keys(_self.state.data[key].data).map(function(keyx, indexx){
                                return (
                                    <td>{_self.state.data[key].data[keyx].count}</td>
                                );
                                })}
                            </tr>
                        );
                    })}
                    
                </table>
            </div>
        );
    }
});

export default GraphDetails;