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
            for (var k in data){
                var row = data[k];
                if (row.value != null && typeof(row.value) == "object" && Object.keys(row.value).length){
                    row.value = row.value.name;
                }
            }
            _self.setState({"data" : data, "isVisible" : true})
        }, "json");
    },
    render: function () {
        var _self = this;
        if (!this.state.data || !this.state.data.length) {
            return null
        }
        return (
            <div className={"col-md-12" + (!this.state.isVisible ? " collapse": "")} id="infoBlock">
                <BootstrapTable data={this.state.data}
                                striped={true}
                                hover={true}
                                search={false}
                                condensed={true}
                                ref="table">
                    <TableHeaderColumn editable={false}
                                       dataSort={true}
                                       isKey={true}
                                       dataField="key"
                                       width="250px">Key
                    </TableHeaderColumn>
                    <TableHeaderColumn editable={false}
                                       dataField="value"
                                       dataSort={true} >Value
                    </TableHeaderColumn>
                    
                </BootstrapTable>
            </div>
        );
    }
});

export default ItemDetails;
