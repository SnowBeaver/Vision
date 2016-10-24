import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
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

function onRowSelect(row, isSelected) {
}

function onAfterSaveCell(row, cellName, cellValue) {
}


var TestResultForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            isVisible: true,
            data: false,
            source: this.props.source,
            showEquipmentTestForm: false,
            selectedRowId: null
        }
    },

    closeEquipmentTestForm: function () {
        this.setState({
            showEquipmentTestForm: false
        })
    },

    onRowClick: function (row) {
        
        this.setState({showEquipmentTestForm: true, selectedRowId: row.id});
    },

    updateSource: function (source) {
        this.serverRequest = $.authorizedGet(source, function (result) {
            var arr = this.sortItemsByKey(result['result'], 'date_analyse');
            var data = [];
            for (var i = 0; i < arr.length; i++) {
                var item = arr[i];
                data.push({
                    id: item.id,
                    date: item.date_analyse,
                    reason: item.test_reason && item.test_reason.name,
                    type: item.test_type && item.test_type.name,
                    contract: null,
                    test_status: item.test_status && item.test_status.name,
                    analysis_number: item.analysis_number,
                    serial: item.equipment && item.equipment.serial,
                    equipment_number: item.equipment && item.equipment.equipment_number
                });
            }
            this.setState({
                data: data
            });
        }.bind(this), 'json');

        this.setState({
            source: source
        });
    },

    sortItemsByKey: function (array, key){
        return array.sort(function(a, b) {
            var a = a[key];
            var b = b[key];
            if (a === null) {
                return 1;
            } else if (b === null) {
                return -1;
            } else if (a === b) {
                return 0;
            } else {
                return a < b ? 1 : -1;
            }
        });
    },

    _formatDateTime: function(date) {
        if (date) {
            var dateFormat = 'MM/DD/YYYY hh:mm A';
            date = moment(date).utcOffset(0).format(dateFormat);
        }
        return date;
    },

    searchTests: function (e) {
        var src = '/api/v1.0/test_result/?search_all=' + e.target.value;
        this.updateSource(src);
    },

    render: function () {

        if (!this.state.data) {
            return null
        }

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
                                search={false}
                                condensed={true}
                                updateSource={this.updateSource}
                                options={options}
                                ref="table">
                    <TableHeaderColumn editable={false} dataField="id" hidden={true} width="15">Id</TableHeaderColumn>
                    <TableHeaderColumn editable={false}
                                       dataField="date"
                                       dataSort={true}
                                       width="95"
                                       dataFormat={this._formatDateTime}>Acquisition Date
                    </TableHeaderColumn>
                    <TableHeaderColumn editable={false}
                                       dataField="reason"
                                       dataSort={true}
                                       width="85">Reason
                    </TableHeaderColumn>
                    <TableHeaderColumn editable={false} dataField="type" dataSort={true}>Type</TableHeaderColumn>
                    <TableHeaderColumn editable={false}
                                       dataField="contract"
                                       filter={{type: "TextFilter", placeholder: "Contract number"}}
                                       dataSort={true}
                                       width="85">Contract No.
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="test_status" dataSort={true} width="155">Analysis stage</TableHeaderColumn>
                    <TableHeaderColumn editable={false}
                                       dataField="analysis_number"
                                       filter={{type: "TextFilter", placeholder: "Analysis number"}}
                                       isKey={true}
                                       width="85">Analysis Nr
                    </TableHeaderColumn>
                    <TableHeaderColumn editable={false}
                                       dataField="serial"
                                       filter={{type: "TextFilter", placeholder: "Please enter a value"}}
                                       dataSort={true}
                                       width="80">Serial No.
                    </TableHeaderColumn>
                    <TableHeaderColumn editable={false}
                                       dataField="equipment_number"
                                       width="80">Equipment No.
                    </TableHeaderColumn>
                </BootstrapTable>
                <Modal show={this.state.showEquipmentTestForm}>
                    <EquipmentTestForm handleClose={this.closeEquipmentTestForm}
                                       selectedRowId={this.state.selectedRowId}
                                       updateSource={this.updateSource}/>
                </Modal>
            </div>
        );
    }
});


export default TestResultForm;