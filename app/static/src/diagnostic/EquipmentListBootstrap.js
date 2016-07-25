import React from 'react';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


// products will be presented by react-bootstrap-table
var data = [{
    id: 1,
    date: '12/02/2016',
    reason: "Repair",
    type: 100,
    contract_no: "contract 33399",
    rem: 1,
    dc: 938,
    analysis_stage: "Repair",
    analysis_id: 738,
    serial: '9839499934882',
    equipment_number: '340900'

},{
    id: 2,
    date: '28/06/2016',
    reason: "Maintenance",
    type: 100,
    contract_no: "contract 2283",
    rem: 0,
    dc: 938,
    analysis_stage: "Repair",
    analysis_id: 738,
    serial: '98394922934882',
    equipment_number: '340902'
}];

function onRowSelect(row, isSelected){
    console.log(row);
    console.log("selected: " + isSelected)
}

var selectRowProp = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "rgb(238, 193, 213)",
    onSelect: onRowSelect
};


const EquipmentList = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            isVisible: true,
        }
    },
    hideLoading: function () {
        this.setState({loading: false});
    },
    render: function() {

        return (
            <div>
                <BootstrapTable data={data} striped={true} hover={true} insertRow={true} deleteRow={true} selectRow={selectRowProp} search={true}>
                    <TableHeaderColumn dataField="id" isKey={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="date" dataSort={true}>Acquisition Date</TableHeaderColumn>
                    <TableHeaderColumn dataField="reason" dataSort={true}>Reason</TableHeaderColumn>
                    <TableHeaderColumn dataField="type" dataSort={true}>Type</TableHeaderColumn>
                    <TableHeaderColumn dataField="contract_no"
                                       filter={{type: "TextFilter", placeholder: "Please enter a value"}}
                                       dataSort={true}>Contract No.</TableHeaderColumn>
                    <TableHeaderColumn dataField="rem" dataSort={true}>REM</TableHeaderColumn>
                    <TableHeaderColumn dataField="dc">DC</TableHeaderColumn>
                    <TableHeaderColumn dataField="analysis_stage" dataSort={true}>Analysis stage</TableHeaderColumn>
                    <TableHeaderColumn dataField="analysis_id">Analysis ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="serial"
                                       filter={{type: "TextFilter", placeholder: "Please enter a value"}}
                                       dataSort={true}>Serial No.</TableHeaderColumn>
                    <TableHeaderColumn dataField="equipment_number">Equipment No.</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
});

export default EquipmentList;
