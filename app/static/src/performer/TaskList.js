import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {DATETIMEPICKER_FORMAT} from './appConstants.js';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


// TODO: Should be received from API
const PRIORITY_ID_MAPPING = {
    "Immediate": 1,
    "Urgent": 2,
    "High": 3,
    "Normal": 4,
    "Low": 5
};

var options = [];
var test_result_id;


var TaskList = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            maxRowId: 0,
            errors: {},
            tasks: [],
            keys: 1,
            testData: {'test_result_id': 1, 'taps': []},
            fields: [
                'date_start', 'description', 'priority', 'id', 'date_created', 'date_updated',
                'recurring', 'notify_before_in_days', 'test_recommendation', 'assigned_to', 'status'
            ],
            changedTasks: []
        }
    },

    getUniqueKey: function() {
        var maxRowId = this.state.maxRowId + 1;
        this.state.maxRowId += 1;
        return "key-" + maxRowId;
    },

    addResultToState: function (result) {
        var res = (result['result']);
        var tasks = this.state.tasks;
        for ( var i = 0; i < res.length; i++ ) {
            var task = { uniqueKey: this.getUniqueKey() };
            var data = res[i];
            task = this.prepareOneTask(data, task);
            tasks[tasks.length] = task;
        }
        this.setState({tasks: tasks});
        this.addTasksToState(result);
    },

    prepareOneTask: function (data, task) {
        var fields = this.state.fields;
        for (var j = 0; j < fields.length; j++) {
            var key = fields[j];
            if (data.hasOwnProperty(key)) {
                task = this._setProperties(task, key, data);
            }
        }
        return task;
    },

    _setProperties: function (task, key, data) {
        switch (key) {
            case 'test_recommendation':
                task.test_type = (data[key].test_type ? data[key].test_type.name : "");
                task.test_result_id = (data[key].test_result_id ? data[key].test_result_id : "");
                task.test_recommendation = this._composeRecommendationNote(data[key]);
                break;
            case 'status':
                task.status = (data[key] ? data[key].name : "");
                break;
            case 'assigned_to':
                task.assigned_to = (data[key] ? data[key].name : "");
                break;
            case 'priority':
                var value = data[key];
                var priorityLabel = Object.keys(PRIORITY_ID_MAPPING).find(key => PRIORITY_ID_MAPPING[key] === value);
                task.priority = (priorityLabel ? priorityLabel : "");
                break;
            case 'date_start':
                task.date_start = this._formatDateTime(data[key]);
                break;
            default:
                task[key] = data[key];
        }
        return task;
    },

    addOneTaskToState: function (data) {
        // Prepare recently added task
        var task = {};
        task = this.prepareOneTask(data, task);
        var tasks = this.state.tasks;
        tasks[tasks.length] = task;

        // Delete the same task, but without id from the state
        for (var i = 0; i < tasks.length; i++) {
            var obj = tasks[i];
            if (!obj.hasOwnProperty('id')) {
                tasks.splice(tasks.indexOf(obj), 1);
            }
        }
        this.setState({tasks: tasks});
    },

    componentDidMount: function () {
        this.serverRequest = $.authorizedGet('/api/v1.0/schedule', this.addResultToState, 'json');
        this._getUsers();
        this._getTestRecommendations();
        this._getPriorities();
        this._getTaskStatuses();
    },

    _create: function (data) {
        // Save only one task
        var tasks = data;
        var task = {test_result_id: this.props.testResultId};

        for (var key in tasks) {
            if (key == "assigned_to") {
                task.assigned_to_id = this.state.userIdMapping[tasks[key]];
                delete task.assigned_to;
            } else if (key == "test_recommendation") {
                task.test_recommendation_id = this.state.recommendationIdMapping[this.state.recommendationList.indexOf(tasks[key])];
            } else if (key == "priority") {
                task.priority = PRIORITY_ID_MAPPING[tasks[key]];
            } else if (key == "status") {
                task.status_id = this.state.statusIdMapping[tasks[key]];
                delete task.status;
            } else {
                task[key] = tasks[key];
            }
        }
        ['uniqueKey', 'test_type', 'test_result_id'].forEach(function(fld){delete task[fld]});

        var url = '/api/v1.0/schedule/';
        if (task.id) {
            // Url for updating a task
            url += task.id;
            delete task.id;
        }
        return $.authorizedAjax({
            url: url,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(task),
            beforeSend: function (xhr) {
                this.setState({loading: true});
            }.bind(this)
        })
    },

    _onSubmit: function (data) {
        if (!this.is_valid()){
            NotificationManager.error('Please correct the errors');
            return false;
        }
        this.state.tasks = this.refs.table.state.data;
        var xhr = this._create(data);
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading);
    },

    hideLoading: function () {
        this.setState({loading: false});
    },

    _onSuccess: function (data) {
        var message = 'Task has been saved successfully.';
        var taskId = data.result.id || data.result;
        if (!isNaN(parseInt(data.result))) {
            message = 'Task for another user has been added successfully.';
        }
        this.deleteTaskFromState(taskId);
        NotificationManager.success(message);
    },

    deleteTaskFromState: function (taskId) {
        var tasks = this.state.tasks;
        for (var i = 0; i < tasks.length; i++) {
            var obj = tasks[i];
            if (!obj.hasOwnProperty('id') || obj.id == taskId) {
                tasks.splice(tasks.indexOf(obj), 1);
            }
        }
        this.setState({tasks: tasks});
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

    dataFormatPosition: function(cell, row, formatExtraData, rowIdx){
        return rowIdx + 1;
    },

    _validateDict: {
        assigned_to: {data_type: "alnum", label: "Assigned To"},
        test_recommendation: {data_type: "any", label: "Test Recommendation"},
        priority: {data_type: "alnum", label: "Priority"},
        recurring: {data_type: "bool", label: "Recurring"}
    },

    _validateFieldType: function (value, type){
        var error = "";
        if (type != undefined && value){
            var typePatterns = {
                "float": /^(-|\+?)[0-9]+(\.)?[0-9]*$/,
                "int": /^(-|\+)?(0|[1-9]\d*)$/,
                "alnum": /^[a-zA-Z\s0-9]*$/,
                "any": /(\w|\W)+$/,
                "bool": /^(true|false)$/
            };
            if (!typePatterns[type].test(value)){
                error = "Invalid " + type + " value";
            }
        }
        return error;
    },

    _validateDateTime: function (value) {
        var isValid = moment(value, 'MM/DD/YYYY hh:mm A', true).isValid();
        if (!isValid) {
            isValid = moment(value, 'YYYY-MM-DDTHH:mm', true).isValid();
        }
        if (!isValid) {
            NotificationManager.error('Start on should of the following format mm/dd/yyyy HH:MM AM', 'Validation Error', 20000);
        }
        return isValid;
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
                    if (value && this._validateDict[field_name]) {
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
        // Do not trigger save if value hasn't been changed
        if (row[name] == value) {
            return false;
        }
        if (this._validateDict[name]) {
            var data_type = this._validateDict[name]['data_type'];
            var label = this._validateDict[name]['label'];
            var error = this._validateFieldType(value, data_type);
            if (error) {
                NotificationManager.error('Value of (' + label + ') must by of type ' + data_type);
            }
        }

        row.date_updated = moment().utc().toISOString();
        return true;
    },

    afterSaveCell: function (row) {
        this._onSubmit(row);
    },

    afterInsertRow: function (row) {
        this._onSubmit(row);
    },

    _formatDateTime: function(date, offset) {
        // TODO: make nicer date formatting
        if (date) {
            date = moment(date).utcOffset(0).format('MM/DD/YYYY hh:mm A');
        }
        return date;
    },

    _formatText: function(text) {
        var response = "";
        if (text) {
            response = "<span title='" + text + "'>" + text.substr(0, 25) + "</span>" ;
        }
        return response;
    },

    _formatRecurring: function (recurring) {
        // Can be text or boolean value
        return JSON.parse(recurring) ? "true" : "false";
    },

    _getUsers: function () {
        $.authorizedGet('/api/v1.0/user', this.addUsersToState, 'json');
    },

    addUsersToState: function (result) {
        var res = (result['result']);
        var userList = [""];
        var users = {};

        for (var i = 0; i < res.length; i++) {
            userList.push(res[i].name);
            users[res[i].name] = res[i].id;
        }
        this.setState({userList: userList, userIdMapping: users});
    },

    _getPriorities: function () {
        var res = PRIORITY_ID_MAPPING;
        var prioritiesList = [""];

        for (var name in res) {
            prioritiesList.push(name);
        }
        this.setState({prioritiesList: prioritiesList});
    },

    _getTaskStatuses: function () {
        $.authorizedGet('/api/v1.0/task_status', this.addTaskStatusesToState, 'json');
    },

    addTaskStatusesToState: function (result) {
        var res = (result['result']);
        var statusList = [""];
        var statusIdMapping = {};

        for (var i = 0; i < res.length; i++) {
            statusList.push(res[i].name);
            // Keep mapping in a list to preserve name/id positions.
            // Dictionary cannot be used as the names are not unique
            statusIdMapping[res[i].name] = res[i].id;
        }
        this.setState({statusList: statusList, statusIdMapping: statusIdMapping});
    },

    _getTestRecommendations: function () {
        $.authorizedGet('/api/v1.0/test_recommendation', this.addTestRecommendationsToState, 'json');
    },

    addTestRecommendationsToState: function (result) {
        var res = (result['result']);
        var recommendationList = [""];
        var recommendationIdMapping = [""];

        for (var i = 0; i < res.length; i++) {
            recommendationList.push(this._composeRecommendationNote(res[i]));
            // Keep mapping in a list to preserve name/id positions.
            // Dictionary cannot be used as the names are not unique
            recommendationIdMapping.push(res[i].id);
        }
        this.setState({recommendationList: recommendationList, recommendationIdMapping: recommendationIdMapping});
    },

    _composeRecommendationNote: function (record) {
        // Format nice name for recommendation select field
        var fullName = [record.recommendation_notes, record.recommendation ? record.recommendation.name : null];
        fullName.map(function (name) {
            if (!name) {
                fullName.splice(fullName.indexOf(name), 1)
            }
        });

        return fullName.join(" | ");
    },

    addTasksToState: function (result) {
        var res = (result['result']);
        var taskList = [""];
        var taskIdMapping = [""];

        for (var i = 0; i < res.length; i++) {
            taskList.push(this._composeTaskDescription(res[i]));
            // Keep mapping in a list to preserve name/id positions.
            // Dictionary cannot be used as the names are not unique
            taskIdMapping.push(res[i].id);
        }
        this.setState({taskList: taskList, taskIdMapping: taskIdMapping});
    },

    _composeTaskDescription: function (record) {
        // Format nice name for parent task select field
        var fullName = [record.id, record.description ? record.description.substr(0, 50) : null];
        fullName.map(function (name) {
            if (!name) {
                fullName.splice(fullName.indexOf(name), 1)
            }
        });

        return fullName.join(" | ");
    },

    getLatestTask: function (taskId) {
        $.authorizedGet('/api/v1.0/schedule/' + taskId, this._addOneTaskToStateWrapper, 'json');
    },

    _addOneTaskToStateWrapper: function (data) {
        this.addOneTaskToState(data.result);
    },

    cleanSelected: function () {
        this.refs.table.cleanSelected();
    },

    onAddRow: function (row) {
        var error = false;
        ["assigned_to", "date_start", "test_recommendation", "priority"].forEach(fld => {if (!row[fld]) {NotificationManager.error(this._validateDict[fld].label + ' is required.'); error=true;}})
        if (error) {
            return;
        }

        // TODO: optimize
        for (var fld in row) {
            if (row[fld] == "") {
                delete row[fld];
            }
        }

        ["id", "date_created", "date_updated"].forEach(e => delete row[e]);
        if (row.date_start == "") {
            delete row.date_start;
        }
        row.uniqueKey = this.getUniqueKey();
        row.recurring = row.recurring === 'true' ? true: false;
    },

    render: function () {
        return (
            <div className="form-container">
                <BootstrapTable data={this.state.tasks}
                                striped={true}
                                hover={true}
                                condensed={true}
                                search={true}
                                ignoreSinglePage={true}
                                pagination={true}
                                paginationShowsTotal={true}
                                insertRow={true}
                                cellEdit={{mode: "click",
                                           blurToSave: true,
                                           beforeSaveCell: this.beforeSaveCell,
                                           afterSaveCell: this.afterSaveCell
                                           }}
                                options={{ignoreEditable: true,
                                          onAddRow: this.onAddRow,
                                          afterInsertRow: this.afterInsertRow,
                                          defaultSortName: 'priority',
                                          defaultSortOrder: 'desc'}}
                                ref="table"
                    >
                    <TableHeaderColumn dataField="uniqueKey" isKey hidden hiddenOnInsert={true}>Key</TableHeaderColumn>
                    <TableHeaderColumn dataField="id"
                                       width="70"
                                       dataSort={true}
                                       editable={false}
                                       hiddenOnInsert={true}
                                       ref="id">ID
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="parent_id"
                                       width="80"
                                       hidden={true}
                                       hiddenOnInsert={false}
                                       editable={{type: 'select', options: {values: this.state.taskList}}}
                                       ref="parent_id">Parent Task
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="assigned_to"
                                       width="130"
                                       dataSort={true}
                                       editable={{type: 'select', options: {values: this.state.userList}}}
                                       ref="assigned_to">Assigned To
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="priority"
                                       width="90"
                                       dataSort={true}
                                       hidden={true}
                                       editable={{type: 'select', options: {values: this.state.prioritiesList}}}>Priority
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="status"
                                       width="90"
                                       dataSort={true}
                                       editable={{type: 'select', options: {values: this.state.statusList}}}
                                       ref="status">Status
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="test_recommendation"
                                       width="80"
                                       dataFormat={this._formatText}
                                       dataSort={true}
                                       editable={{type: 'select', options: {values: this.state.recommendationList}}}
                                       ref="test_recommendation">Test Rec
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="test_result_id"
                                       width="80"
                                       dataSort={true}
                                       editable={false}
                                       hiddenOnInsert={true}
                                       ref="test_result_id">Test Result
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="test_type"
                                       width="150"
                                       dataSort={true}
                                       editable={false}
                                       hiddenOnInsert={true}
                                       ref="test_type">Test Type
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="date_start"
                                       width="80"
                                       dataSort={true}
                                       editable={{type: 'datetime', validator: this._validateDateTime}}
                                       ref="date_start">Start
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="date_created"
                                       width="80"
                                       dataFormat={this._formatDateTime}
                                       dataSort={true}
                                       editable={false}
                                       hiddenOnInsert={true}
                                       ref="date_created">Created
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="date_updated"
                                       width="80"
                                       dataFormat={this._formatDateTime}
                                       dataSort={true}
                                       editable={false}
                                       hiddenOnInsert={true}
                                       ref="date_updated">Updated
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="description"
                                       dataSort={true}
                                       dataFormat={this._formatText}
                                       editable={{type: 'textarea'}}
                                       ref="description">Description
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="recurring"
                                       width="100"
                                       dataSort={true}
                                       dataFormat={this._formatRecurring}
                                       editable={{type: 'checkbox', options: {values: "true:false"}}}
                                       ref="recurring">Recurring
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="notify_before_in_days"
                                       width="80"
                                       dataSort={true}
                                       editable={false}
                                       ref="notify_before_in_days">Notify before (days)
                    </TableHeaderColumn>
                </BootstrapTable>

                <div className="row">
                    <div className="col-md-12 ">
                        <Button bsStyle="danger"
                                className="pull-right margin-right-xs"
                                onClick={this.cleanSelected}
                            >Cancel</Button>
                    </div>
                </div>
            </div>
        );
    }
});


export default TaskList;
