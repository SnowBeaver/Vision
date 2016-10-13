import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Radio from 'react-bootstrap/lib/Radio';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var options = [];
var test_result_id;

var ActualTapSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })

    },

    getInitialState: function () {
        return {
            items: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        };
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        options = [];
        for (var key in this.state.items) {
            options.push(<option key={this.state.items[key]}
                                 value={this.state.items[key]}>{`${this.state.items[key]}`}</option>);


        }

        return (
            <div>
                <FormGroup>
                    <ControlLabel>Actual Tap Position</ControlLabel>
                    <FormControl componentClass="select"
                                 placeholder="select tap"
                                 onChange={this.handleChange}
                    >
                        <option value="select">{this.state.items[0]}</option>
                        {options}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var TapTestPanel = React.createClass({
    _onChange: function (e) {
        this.props.onChange(this.props.testId, e.target.name, e.target.value);
    },
    render: function () {
        var data = (this.props.data != null) ? this.props.data: {};
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>H1-H2/X0-X2</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase1"
                                         name="measured_current1"
                                         value={data.measured_current1}
                                         onChange={this._onChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Exc.Curr.</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase1"
                                         name="calculated_current1"
                                         value={data.calculated_current1}
                                         onChange={this._onChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Err.(%)</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase1"
                                         name="error1"
                                         value={data.error1}
                                         onChange={this._onChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>H1-H2/X0-X2</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase2"
                                         name="measured_current2"
                                         value={data.measured_current2}
                                         onChange={this._onChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Exc.Curr.</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase2"
                                         name="calculated_current2"
                                         value={data.calculated_current2}
                                         onChange={this._onChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Err.(%)</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase2"
                                         name="error2"
                                         value={data.error2}
                                         onChange={this._onChange}
                            />
                        </FormGroup>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>H2-H3/X0-X3</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase3"
                                         name="measured_current3"
                                         value={data.measured_current3}
                                         onChange={this._onChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Exc.Curr.</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase3"
                                         name="calculated_current3"
                                         value={data.calculated_current3}
                                         onChange={this._onChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Err.(%)</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase3"
                                         name="error3"
                                         value={data.error3}
                                         onChange={this._onChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-1">
                        <FormGroup>
                            <ControlLabel>Winding</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0.0"
                                         name="winding"
                                         value={data.winding}
                                         onChange={this._onChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-1">
                        <FormGroup>
                            <ControlLabel>Ratio</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0.0"
                                         name="ratio"
                                         value={data.ratio}
                                         onChange={this._onChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Tap Position</ControlLabel>
                            <FormControl type="text"
                                         placeholder="tap pos"
                                         name="tap_position"
                                         value={data.tap_position}
                                         onChange={this._onChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2 ">
                        <ActualTapSelectField />
                    </div>
                </div>
            </div>
        )
    }
});


var NewTransformerTestForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            maxRowId: 0,
            deleteOnSubmit: [],
            errors: {},
            tests: [],
            keys: 1,
            testData: {'test_result_id': 1, 'taps': []},
            fields: [
                'measured_current1', 'measured_current2', 'measured_current3',
                'calculated_current1', 'calculated_current2', 'calculated_current3',
                'error1', 'error2', 'error3',
                'tap_position', 'winding', 'ratio', 'select', 'id'
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
        this.serverRequest = $.authorizedGet(source, this.addResultToState, 'json');
    },

    _create: function () {
        var fields = this.state.fields;
        // var numberOfTaps = this.state.numberOfTaps;
        var tests = this.state.tests;
        var data = [];
        for (var i = 0; i < tests.length; i++) {
            var test = {test_result_id: this.props.testResultId};
            var tap = tests[i.toString()];
            for (var j = 0; j < fields.length; j++) {
                var key = fields[j];
                test[key] = tap[key];
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
    _validate: function () {
        var errors = {};
        // if(this.state.created_by_id == "") {
        //   errors.created_by_id = "Create by field is required";
        // }
        // if(this.state.performed_by_id == "") {
        //     errors.performed_by_id = "Performed by field is required";
        // }
        return errors;
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
        measured_current1: {data_type: "float", label: "H1-H2/X0-X2"},
        calculated_current1: {data_type: "float", label: "Exc.Curr."},
        error1: {data_type: "float", label: "Err.(%)"},
        measured_current2: {data_type: "float", label: "H1-H2/X0-X2"},
        calculated_current2: {data_type: "float", label: "Exc.Curr."},
        error2: {data_type: "float", label: "Err.(%)"},
        measured_current3: {data_type: "float", label: "H2-H3/X0-X3"},
        calculated_current3: {data_type: "float", label: "Exc.Curr."},
        error3: {data_type: "float", label: "Err.(%)"},
        ratio: {data_type: "int", label: "Ratio"},
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
        var fields = this.state.fields.slice();
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
                                           dataFormat={this.dataFormatPosition}>N</TableHeaderColumn>
                        <TableHeaderColumn dataField="measured_current1">H1-H2/X0-X2</TableHeaderColumn>
                        <TableHeaderColumn dataField="calculated_current1">Exc.Curr.</TableHeaderColumn>
                        <TableHeaderColumn dataField="error1">Err.(%)</TableHeaderColumn>
                        <TableHeaderColumn dataField="measured_current2">H1-H2/X0-X2</TableHeaderColumn>
                        <TableHeaderColumn dataField="calculated_current2">Exc.Curr.</TableHeaderColumn>
                        <TableHeaderColumn dataField="error2">Err.(%)</TableHeaderColumn>
                        <TableHeaderColumn dataField="measured_current3">H2-H3/X0-X3</TableHeaderColumn>
                        <TableHeaderColumn dataField="calculated_current3">Exc.Curr.</TableHeaderColumn>
                        <TableHeaderColumn dataField="error3">Err.(%)</TableHeaderColumn>
                        <TableHeaderColumn dataField="winding">Winding</TableHeaderColumn>
                        <TableHeaderColumn dataField="ratio">Ratio</TableHeaderColumn>
                        <TableHeaderColumn dataField="tap_position">Tap Position</TableHeaderColumn>

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
                        <div className="col-md-3">
                            <Checkbox>100/Ratio(% Ratio)</Checkbox>
                        </div>
                        <div className="col-md-3">
                            <Radio name="filter">Prim./Sec.(P)</Radio>
                        </div>
                        <div className="col-md-3">
                            <Radio name="filter">Prim./Tet.(P)</Radio>
                        </div>
                        <div className="col-md-3">
                            <Radio name="filter">Prim./Tet.(T)</Radio>
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


export default NewTransformerTestForm;
