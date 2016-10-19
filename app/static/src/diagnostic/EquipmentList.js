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
    
}

function onAfterSaveCell(row, cellName, cellValue){
}

const EquipmentList = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            isVisible: true,
            data: false,
            source: this.props.source
        }
    },
    componentDidMount: function(){
        this.serverRequest = $.authorizedGet(this.state.source, function (result){

            var arr = (result['result']);
            var data = [];
            for (var i=0;i < arr.length; i++) {
                var item = arr[i];
                item.test_result = {
                    test_reason: 'Repair',
                    test_type: 'Fluid',
                    test_status: 'In progress'
                };

                var serial = ''; 
                var eqnumb; 
                if (typeof item.equipment != 'undefined') {
                    serial = item.equipment.serial;
                    eqnumb = item.equipment.equipment_number
                }
                
                data.push({
                    date: item.date,
                    reason: item.test_result.test_reason,
                    type: item.test_result.test_type,
                    contract: item.contract.code,
                    test_status: item.test_result.test_status,
                    analysis_number: item.analysis_number,
                    serial: serial,
                    equipment_number: eqnumb
                });
            }
            console.log(data);
            this.setState({
                data: data
            });
        }.bind(this), 'json');
    },
    
    onRowClick: function (row) {
       console.log('row clicked', row);
    },

    onCellClick: function (cell) { 
        console.log('cell clicked', row);
    },
    
    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    hideLoading: function () {
        this.setState({loading: false});
    },
    
    updateSource: function(source){ 
        // console.log('list triggered', source);
        this.serverRequest = $.authorizedGet(source, function (result){
            var arr = (result['result']);
            var data = [];
            for (var i=0;i < arr.length; i++) {
                var item = arr[i];
                item.test_result = {
                    test_reason: 'Repair',
                    test_type: 'Fluid',
                    test_status: 'In progress'
                };
                var serial = '';
                var eqnumb = '';
                if (typeof item.equipment != 'undefined') {
                    serial = item.equipment.serial;
                    eqnumb = item.equipment.equipment_number
                }
                data.push({
                    date: item.date,
                    reason: item.test_result.test_reason,
                    type: item.test_result.test_type,
                    contract: item.contract.code,
                    test_status: item.test_result.test_status,
                    analysis_number: item.analysis_number,
                    serial: serial,
                    equipment_number: eqnumb
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

    render: function() {

        {if (!this.state.data) { return null }}
        
        const options = {
            onRowClick: function (row) {
                console.log( row, 'on row click'); 
            }
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
            </div>
        );
    }
});

export default EquipmentList; 
