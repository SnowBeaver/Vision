import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import DATETIMEPICKER_FORMAT from './appConstants.js';

var options = [];
var test_result_id;


var TaskList = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            maxRowId: 0,
            deleteOnSubmit: [],
            errors: {},
            tasks: [],
            keys: 1,
            testData: {'test_result_id': 1, 'taps': []},
            fields: [
                'date_start', 'description', 'priority', 'id', 'date_created',
                'description', 'recurring', 'notify_before_in_days', 'test_recommendation',
                'assigned_to'
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
        var tasks = [];
        for ( var i = 0; i < res.length; i++ ) {
            var task = { uniqueKey: this.getUniqueKey() };
            var data = res[i];
            for (var j = 0; j < fields.length; j++) {
                var key = fields[j];
                if (data.hasOwnProperty(key)) {
                    if (key == 'test_recommendation') {
                        task.test_type = (data[key].test_type ? data[key].test_type.name : "");
                        task.test_result_id = (data[key].test_result_id ? data[key].test_result_id : "");
                    } else if (key == 'assigned_to') {
                        task.assigned_to = (data[key] ? data[key].name : "");
                    } else {
                        task[key] = data[key];
                    }
                }
            }
            tasks[i] = task;
        }
        this.setState({tasks: tasks});
    },

    componentDidMount: function () {
        this.serverRequest = $.get('/api/v1.0/schedule', this.addResultToState, 'json');
        this._getUsers();
    },

    _create: function () {
        var fields = this.state.fields;
        var tasks = this.state.tasks;
        var data = [];
        for (var i = 0; i < tasks.length; i++) {
            var task = {test_result_id: this.props.testResultId};
            var tap = tasks[i.toString()];
            for (var j = 0; j < fields.length; j++) {
                var key = fields[j];
                task[key] = tap[key];
            }
            data.push(task)
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
            type: 'DELETE'
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
        this.state.tasks = this.refs.table.state.data;
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
        NotificationManager.success('Task values have been saved successfully.');
    },
    _onDeleteSuccess: function (data) {
        NotificationManager.success('Task values have been deleted successfully.');
    },
    _onError: function (data) {

        var message = "Failed to create";
        var res = data.responseJSON;
        if (res.message) {
            message = data.responseJSON.message;
        }
        if (res.error) {
            this.setState({
                errors: res.error
            });
        }
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
        }
    },

    dataFormatPosition: function(cell, row, formatExtraData, rowIdx){
        return rowIdx + 1;
    },

    _validateDict: {
        assigned_to: {data_type: "int", label: "Assigned To"}
    },

    _validateFieldType: function (value, type){
        var error = "";
        if (type != undefined && value){
            var typePatterns = {
                "float": /^(-|\+?)[0-9]+(\.)?[0-9]*$/,
                "int": /^(-|\+)?(0|[1-9]\d*)$/
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
        var fields = this.state.fields.slice();
        var index = fields.indexOf("id");
        if (index >= 0) {
            fields.splice( index, 1 );
        }
        var tasks = this.state.tasks;
        var is_valid = true;
        var msg = '';
        for (var i = 0; i < tasks.length; i++) {
            var tap = tasks[i];
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
        if (name == "assigned_to") {
            this.setState({"assigned_to": this.state.userIdMapping[value]});
        }
        var data_type = this._validateDict[name]['data_type'];
        var label = this._validateDict[name]['label'];
        var error = this._validateFieldType(value, data_type);
        if (error) {
            NotificationManager.error('Value of (' + label + ') must by of type ' + data_type);
        }
        return true;
    },

    _formatDateTime: function(date) {
        // TODO: make nicer date formatting
        if (date) {
            date = moment(date).format(DATETIMEPICKER_FORMAT).replace(/T/g, ' ');
        }
        return date;
    },

    _getUsers: function () {
        $.get('/api/v1.0/user', this.addUsersToState, 'json');
    },

    addUsersToState: function (result) {
        var res = (result['result']);
        var usersList = [];
        var users = {};

        for (var i = 0; i < res.length; i++) {
            usersList.push(res[i].name);
            users[res[i].name] = res[i].id;
        }
        this.setState({usersList: usersList, userIdMapping: users});
    },

    render: function () {
        return (
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} >
                    <BootstrapTable data={this.state.tasks}
                                    striped={true}
                                    hover={true}
                                    condensed={true}
                                    search={true}
                                    ignoreSinglePage={true}
                                    selectRow={{mode: "checkbox", clickToSelect: true, bgColor: "rgb(238, 193, 213)"}}
                                    cellEdit={{mode: "click", blurToSave:true, beforeSaveCell:this.beforeSaveCell}}
                                    ref="table"
                    >
                        <TableHeaderColumn dataField="uniqueKey" isKey hidden>Key</TableHeaderColumn>
                        <TableHeaderColumn dataField="id"
                                           width="70"
                                           dataSort={true}
                                           editable={false}>ID
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="test_result_id"
                                           width="80"
                                           dataSort={true}
                                           editable={false}>Test Result
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="test_type"
                                           width="150"
                                           dataSort={true}
                                           editable={false}>Test Type
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="date_start"
                                           width="130"
                                           dataFormat={this._formatDateTime}
                                           dataSort={true}
                                           editable={false}>Start on
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="date_created"
                                           width="130"
                                           dataFormat={this._formatDateTime}
                                           dataSort={true}
                                           editable={false}>Created on
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="date_updated"
                                           width="130"
                                           dataFormat={this._formatDateTime}
                                           dataSort={true}
                                           editable={false}>Updated on
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="description"
                                           dataSort={true}
                                           editable={false}>Description
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="priority"
                                           width="90"
                                           dataSort={true}
                                           editable={false}>Priority
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="recurring"
                                           width="100"
                                           dataSort={true}
                                           editable={false}>Recurring
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="notify_before_in_days"
                                           width="80"
                                           dataSort={true}
                                           editable={false}>Notify before (days)
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="assigned_to"
                                           width="130"
                                           dataSort={true}
                                           editable={{type: 'select', options: {values: this.state.usersList}}}>Assigned To
                        </TableHeaderColumn>
                    </BootstrapTable>
                    <div className="row">
                        <div className="col-md-2">
                            <a href="javascript:void(0)"
                               className="glyphicon glyphicon-plus"
                               onClick={this.addNewStringToTable}
                               aria-hidden="true"
                            >Add new</a>
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


export default TaskList;
