import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


var selectRowProp = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "rgb(238, 193, 213)",
    onSelect: onRowSelect
};

var cellEditProp = {
    mode: "click",
    blurToSave: true,
    afterSaveCell: onAfterSaveCell
};


function onRowSelect(row, isSelected){
    console.log(row);
    console.log("selected: " + isSelected);
}

function onAfterSaveCell(row, cellName, cellValue){
    console.log("Save cell '"+cellName+"' with value '"+cellValue+"'");
    console.log("Thw whole row :");
    console.log(row);
}

const EquipmentList = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            isVisible: true,
            data: false
        }
    },
    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            var arr = (result['result']);
            var data = [];
            for (var i=0;i < arr.length; i++) {
                var item = arr[i];
                item.test_result = {
                    test_reason: 'Repair',
                    test_type: 'Fluid',
                    test_status: 'In progress'
                };
                data.push({
                    date: item.date,
                    reason: item.test_result.test_reason,
                    type: item.test_result.test_type,
                    contract: item.contract.code,
                    test_status: item.test_result.test_status,
                    analysis_number: item.analysis_number,
                    serial: item.equipment.serial,
                    equipment_number: item.equipment.equipment_number
                });
            }
            console.log(data);
            this.setState({
                data: data
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    hideLoading: function () {
        this.setState({loading: false});
    },

    render: function() {

        {if (!this.state.data) { return null }}
        return (
            <div>
                <BootstrapTable data={this.state.data}
                                cellEdit={cellEditProp}
                                striped={true}
                                hover={true}
                                selectRow={selectRowProp}
                                search={true}>
                    <TableHeaderColumn editable={false} dataField="date" dataSort={true}>Acquisition Date</TableHeaderColumn>
                    <TableHeaderColumn editable={false} dataField="reason" dataSort={true}>Reason</TableHeaderColumn>
                    <TableHeaderColumn editable={false} dataField="type" dataSort={true}>Type</TableHeaderColumn>
                    <TableHeaderColumn editable={false} dataField="contract"
                                       filter={{type: "TextFilter", placeholder: "Contract number"}}
                                       dataSort={true}>Contract No.</TableHeaderColumn>
                    <TableHeaderColumn dataField="test_status" dataSort={true}>Analysis stage</TableHeaderColumn>
                    <TableHeaderColumn editable={false} dataField="analysis_number" isKey={true}>Analysis Nr</TableHeaderColumn>
                    <TableHeaderColumn deditable={false} ataField="serial"
                                       filter={{type: "TextFilter", placeholder: "Please enter a value"}}
                                       dataSort={true}>Serial No.</TableHeaderColumn>
                    <TableHeaderColumn editable={false} dataField="equipment_number">Equipment No.</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
});

export default EquipmentList; 
