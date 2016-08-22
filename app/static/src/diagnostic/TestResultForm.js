import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Modal from 'react-bootstrap/lib/Modal';
import EquipmentTestForm from './EquipmentTestForm';


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


var TestResultForm = React.createClass ({
    getInitialState: function () {
        return {
            loading: false,
            isVisible: true,
            data: false,
            source: this.props.source,
            showEquipmentTestForm: false
        }
    },

    closeEquipmentTestForm: function () {
        this.setState({
            showEquipmentTestForm: false
        })
    },

    onRowClick: function (row) {
        console.log('row clicked', row);
        this.setState({showEquipmentTestForm: true});
    },

    updateSource: function(source){
        // console.log('list triggered', source);
        this.serverRequest = $.get(source, function (result){
            var arr = (result['result']);
            var data = [];
            for (var i=0;i < arr.length; i++) {
                var item = arr[i];
                // item.test_result = {
                //     test_reason: 'Repair',
                //     test_type: 'Fluid',
                //     test_status: 'In progress'
                // };
                data.push({
                    date: item.date_analyse,
                    reason: item.reason_id,
                    type: item.test_type_id,
                    contract: null,
                    test_status: item.test_status_id,
                    analysis_number: item.analysis_number,
                    serial: item.equipment.serial,
                    equipment_number: item.equipment.equipment_number
                });
            }
            // console.log(data);
            this.setState({
                data: data
            });
        }.bind(this), 'json');

        this.setState({
            source: source
        });
    },
    render: function() {

        {if (!this.state.data) { return null }}

        const options = {
            onRowClick: this.onRowClick
        };

        return (
            <div>
                <BootstrapTable data={this.state.data}
                                cellEdit={cellEditProp}
                                striped={true}
                                hover={true}
                                selectRow={selectRowProp}
                                search={true}
                                updateSource={this.updateSource}
                                options={options}
                                >
                    <TableHeaderColumn editable={false} dataField="date" dataSort={true} >Acquisition Date</TableHeaderColumn>
                    <TableHeaderColumn editable={false} dataField="reason" dataSort={true}>Reason</TableHeaderColumn>
                    <TableHeaderColumn editable={false} dataField="type" dataSort={true}>Type</TableHeaderColumn>
                    <TableHeaderColumn editable={false} dataField="contract"
                                       filter={{type: "TextFilter", placeholder: "Contract number"}}
                                       dataSort={true}>Contract No.</TableHeaderColumn>
                    <TableHeaderColumn dataField="test_status" dataSort={true}>Analysis stage</TableHeaderColumn>
                    <TableHeaderColumn editable={false}
                                       dataField="analysis_number"
                                       isKey={true}>Analysis Nr</TableHeaderColumn>
                    <TableHeaderColumn editable={false}
                                       dataField="serial"
                                       filter={{type: "TextFilter", placeholder: "Please enter a value"}}
                                       dataSort={true}>Serial No.</TableHeaderColumn>
                    <TableHeaderColumn editable={false} dataField="equipment_number">Equipment No.</TableHeaderColumn>
                </BootstrapTable>
                <Modal show={this.state.showEquipmentTestForm}>
                    <EquipmentTestForm handleClose={this.closeEquipmentTestForm}/>
                </Modal>
            </div>
        );
    }
});


export default TestResultForm;