import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";

var ItemDetails = React.createClass({
    getInitialState: function () {
        return {
            isVisible: false,
            action: 'hide',
            data:[]
        }
    },

    toggle: function (action) {
        if (action != 'hide') {
            // Mode to choose equipment in the tree
            this.setState({isVisible: true});
        } else {
            // Mode to load graph for selected equipment
            this.setState({isVisible: false});
        }
    },
    componentDidMount: function () { 
        
    },
    load: function(equipmentId){
        var _self = this;
        
        $.get(url.info.replace(":id", equipmentId), function(data){
            _self.setState({"data" : data, "isVisible" : true})
        }, "json");
    },
    render: function () {
        var _self = this;
        if (!this.state.data || !this.state.data.length) {
            return null
        }
        var final_rows = [];
        this.state.data.map(function(row){
            var tmp_row = [];
            row.value.map(function(subrow){
                if (typeof(subrow.value) == "boolean"){
                    if (subrow.value)
                        subrow.value = <i className={['fa', 'fa-check-circle'].join(' ')} style={{color:'green'}}></i>;
                    else
                        subrow.value = <i className={['fa', 'fa-minus-circle'].join(' ')} style={{color:'red'}} ></i>;
                }
                else{
                    if (typeof(subrow.value) == "object" && subrow.value != null){
                        var tmp_subrow = [];
                        for (var sub_row_key in subrow.value){
                            tmp_subrow.push(<li key={sub_row_key}>{sub_row_key} - {subrow.value[sub_row_key]}</li>);
                        }
                        subrow.value = <ul>{tmp_subrow}</ul>
                    }
                }
                
                tmp_row.push(<tr key={subrow.key}>
                    <td>{subrow.key}</td><td>{subrow.value}</td> 
                </tr>);
            })
            final_rows.push(<div key={row.cat}><h4>{row.cat}</h4><table className="grapth_table" width="100%"><tbody>{tmp_row}</tbody></table></div>);
        })
        return (
            <div className={"col-md-12" + (!this.state.isVisible ? " collapse": "")} id="infoBlock">
                {final_rows}
            </div>
        );
    }
});

export default ItemDetails;
