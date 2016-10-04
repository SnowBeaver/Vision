import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Radio from 'react-bootstrap/lib/Radio';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';


const TextField = React.createClass({
    render: function() {
        var label = (this.props.label != null) ? this.props.label: "";
        var name = (this.props.name != null) ? this.props.name: "";
        var value = (this.props.value != null) ? this.props.value: "";
        return (
            <FormGroup>
                <FormControl type="text"
                             placeholder={label}
                             name={name}
                             value={value}
                             onChange={this.props.onChange}
                />
                <FormControl.Feedback />
            </FormGroup>
        );
    }
});

var NewWindingResistanceTestForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            maxRowId: 0,
            deleteOnSubmit: [],
            showPrimaryWindingTestPanel: true,
            showSecondaryWindingTestPanel: false,
            showTertiaryWindingTestPanel: false,
            tests: [],
            errors: {},
            fields: [
                'temp1', 'corr1', 'mesure1', 'temp2', 'corr2', 'mesure2',
                'temp3', 'corr3', 'mesure3', 'winding', 'tap_position', 'id'

            ]
        }
    },
    getUniqueKey: function() {
        var maxRowId = this.state.maxRowId + 1;
        this.state.maxRowId += 1;
        return "key-" + maxRowId;
    },
    addResultToState: function (result) {
        var res = (result['result']);
        var fields = this.state.fields;
        var tests = [];
        for ( var i = 0; i < res.length; i++ ) {
            var test = { uniqueKey: this.getUniqueKey() };
            var data = res[i];
            for (var j = 0; j < fields.length; j++) {
                var key = fields[j];
                if (data.hasOwnProperty(key)) {
                    test[key] = data[key];
                }
            }
            tests[i] = test;
        }
        this.setState({tests: tests});
    },

    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.tableName + '/?test_result_id=' + this.props.testResultId;
        this.serverRequest = $.get(source, this.addResultToState, 'json');
    },

    _create: function () {
        var fields = this.state.fields;
        var tests = this.state.tests;
        var data = [];
        for (var i = 0; i < tests.length; i++) {
            var test = {test_result_id: this.props.testResultId};
            var tap = tests[i];
            for (var j = 0; j < fields.length; j++) {
                var key = fields[j];
                if (tap.hasOwnProperty(key)) {
                    test[key] = tap[key];
                }
            }
            data.push(test)
        }
        return $.ajax({
            url: '/api/v1.0/test_result/multi/' + this.props.tableName,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })
    },
    _delete: function (id) {
        return $.ajax({
            url: '/api/v1.0/' + this.props.tableName + '/' + id,
            type: 'DELETE',
        })
    },

    _onSubmit: function (e) {
        e.preventDefault();
        // Do not propagate the submit event of the main form
        e.stopPropagation();
        if (!this.is_valid()){
            NotificationManager.error('Please correct the errors');
            e.stopPropagation();
            return false;
        }
        this.state.tests = this.refs.table.state.data;
        var xhr = this._create();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading);

        for (var i = 0; i < this.state.deleteOnSubmit.length; i++) {
            var xhr_del = this._delete(this.state.deleteOnSubmit[i]);
            xhr_del.done(this._onDeleteSuccess)
                   .fail(this._onError)
        }
        this.state.deleteOnSubmit = [];
    },

    hideLoading: function () {
        this.setState({loading: false});
    },

    _onSuccess: function (data) {
        // this.setState(this.getInitialState());
        this.addResultToState(data);
        NotificationManager.success('Test values have been saved successfully.');
    },
    _onDeleteSuccess: function (data) {
        NotificationManager.success('Test values have been deleted successfully.');
    },
    _onError: function (data) {
        var message = "Failed";
        var res = data.responseJSON;
        if (res.message) {
            message = data.responseJSON.message;
        }
        if (res.error) {
            this.setState({
                errors: res.error
            });
        }
        NotificationManager.error(message);
    },
    _onFilterChange: function (e) {
        var state = {
            showPrimaryWindingTestPanel: false,
            showSecondaryWindingTestPanel: false,
            showTertiaryWindingTestPanel: false
        };
        if (e.target.id === 'primary') {
            state['showPrimaryWindingTestPanel'] = true;
        }
        else if (e.target.id === 'secondary') {
            state['showSecondaryWindingTestPanel'] = true;
        }
        else if (e.target.id === 'tertiary') {
            state['showTertiaryWindingTestPanel'] = true;
        }
        this.setState(state);
    },

    _formGroupClass: function (field) {
        var className = "form-group ";
        if (field) {
            className += " has-error"
        }
        return className;
    },
    addToDeleteOnSubmit: function(el) {
        if (el.hasOwnProperty('id')) {
            this.state.deleteOnSubmit.push(el.id);
        }
    },
    addNewStringToTable: function() {
        var newRow = { uniqueKey: this.getUniqueKey() };
        this.refs.table.handleAddRow(newRow);
    },
    deleteStringsFromTable: function() {
        var selectedRowKeys = this.refs.table.state.selectedRowKeys;
        var table = this.refs.table.state.data;
        var selectedRows = table.filter(function(el){
            return selectedRowKeys.indexOf(el.uniqueKey) !== -1;
        });
        selectedRows.map(this.addToDeleteOnSubmit);
        var result = this.refs.table.handleDropRow(selectedRowKeys);
        if( result ) {
            console.log(result); // error logging
        }
    },
    dataFormatPosition: function(cell, row, formatExtraData, rowIdx){
        return rowIdx + 1;
    },
    _validateDict: {
        mesure1: {data_type: "float", label: "H1-H2"},
        temp1: {data_type: "float", label: "Temp(3d column)"},
        corr1: {data_type: "float", label: "Corr (4th column)"},
        mesure2: {data_type: "float", label: "H2-H3"},
        temp2: {data_type: "float", label: "Temp(6th column)"},
        corr2: {data_type: "float", label: "Corr(7th column)"},
        mesure3: {data_type: "float", label: "H3-H1"},
        temp3: {data_type: "float", label: "Temp(9th column)"},
        corr3: {data_type: "float", label: "Corr(10th column)"},
        winding: {data_type: "int", label: "Winding"},
        tap_position: {data_type: "int", label: "Tap position"},
    },
    _validateFieldType: function (value, type){
        var error = "";
        if (type != undefined && value){
            var typePatterns = {
                "float": /^(-|\+?)[0-9]+(\.)?[0-9]*$/,
                "int": /^(-|\+)?(0|[1-9]\d*)$/,
            };
            if (!typePatterns[type].test(value)){
                error = "Invalid " + type + " value";
            }
        }
        return error;
    },
    is_valid: function () {
        if (Object.keys(this.state.errors).length > 0) {
            return false;
        }
        var fields = this.state.fields;
        var index = fields.indexOf("id");
        if (index >= 0) {
            fields.splice( index, 1 );
        }
        var tests = this.state.tests;
        var is_valid = true;
        var msg = '';
        console.log(tests);
        for (var i = 0; i < tests.length; i++) {
            var tap = tests[i];
            for (var j = 0; j < fields.length; j++) {
                var field_name = fields[j];
                if (tap.hasOwnProperty(field_name)) {
                    var value = tap[field_name];
                    if (value) {
                        var data_type = this._validateDict[field_name]['data_type'];
                        var label = this._validateDict[field_name]['label'];
                        var error = this._validateFieldType(value, data_type);
                        msg = 'Value of (' + label + ') in row N' + ( i + 1 )
                             + ' must be of type ' + data_type + '      \n\n';
                        if (error) {
                            is_valid = false;
                            NotificationManager.error(msg, 'Validation error', 20000);
                        }
                    }
                }
            }
        }
        return is_valid;
    },
    beforeSaveCell: function(row, name, value) {
        var data_type = this._validateDict[name]['data_type'];
        var label = this._validateDict[name]['label'];
        var error = this._validateFieldType(value, data_type);
        if (error) {
            NotificationManager.error('Value of (' + label + ') must by of type ' + data_type);
        }
        return true;
    },

    render: function () {
        return (
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} >
                    <BootstrapTable data={this.state.tests}
                                    striped={true}
                                    hover={true}
                                    condensed={true}
                                    ignoreSinglePage={true}
                                    selectRow={{mode: "checkbox", clickToSelect: true, bgColor: "rgb(238, 193, 213)",}}
                                    cellEdit={{mode: "click", blurToSave:true, beforeSaveCell:this.beforeSaveCell}}
                                    ref="table"
                    >
                        <TableHeaderColumn dataField="id" hidden>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="uniqueKey" isKey hidden>Key</TableHeaderColumn>
                        <TableHeaderColumn dataField="position"
                                           dataFormat={this.dataFormatPosition}
                        >N</TableHeaderColumn>
                        <TableHeaderColumn dataField="mesure1">H1-H2</TableHeaderColumn>
                        <TableHeaderColumn dataField="temp1">Temp(C)</TableHeaderColumn>
                        <TableHeaderColumn dataField="corr1">Corr.75C</TableHeaderColumn>
                        <TableHeaderColumn dataField="mesure2">H2-H3</TableHeaderColumn>
                        <TableHeaderColumn dataField="temp2">Temp(C)</TableHeaderColumn>
                        <TableHeaderColumn dataField="corr2">Corr.75C</TableHeaderColumn>
                        <TableHeaderColumn dataField="mesure3">H3-H1</TableHeaderColumn>
                        <TableHeaderColumn dataField="temp3">Temp</TableHeaderColumn>
                        <TableHeaderColumn dataField="corr3">Corr.75C</TableHeaderColumn>
                        <TableHeaderColumn dataField="winding">Winding</TableHeaderColumn>
                        <TableHeaderColumn dataField="tap_position">Tap pos</TableHeaderColumn>
                        {/*<TableHeaderColumn dataField="tap_position"*/}
                                           {/*editable={{ validator: this.tap_positionValidator}}*/}
                        {/*>Tap pos</TableHeaderColumn>*/}
                    </BootstrapTable>
                    <div className="row">
                        <div className="col-md-2">
                            <a href="javascript:void(0)"
                               className="glyphicon glyphicon-plus"
                               onClick={this.addNewStringToTable}
                               aria-hidden="true"
                            >Add new</a>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <a href="javascript:void(0)"
                                   className="glyphicon glyphicon-minus"
                                   onClick={this.deleteStringsFromTable}
                                   aria-hidden="true"
                                >Delete selected</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-offset-7">
                            <div className="col-md-3" >
                                <Radio name="filter" id="primary" onClick={this._onFilterChange}>Primary(H)</Radio>
                            </div>
                            <div className="col-md-3" >
                                <Radio name="filter" id="secondary" onClick={this._onFilterChange} >Secondary(X)</Radio>
                            </div>
                            <div className="col-md-3" >
                                <Radio name="filter" id="tertiary" onClick={this._onFilterChange} >Tertiary(T)</Radio>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ">
                            <Button bsStyle="success"
                                    className="pull-right"
                                    type="submit">Save</Button>
                            &nbsp;
                            <Button bsStyle="danger"
                                    className="pull-right margin-right-xs"
                                    onClick={this.props.handleClose}
                            >Cancel</Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});


export default NewWindingResistanceTestForm;
