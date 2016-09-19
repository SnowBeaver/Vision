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
            numberOfTaps: 1,
            errors: {},
            tests: {'1': {}},
            keys: 1,
            testData: {'test_result_id': 1, 'taps': []},
            fields: [
                'measured_current1', 'measured_current2', 'measured_current3',
                'calculated_current1', 'calculated_current2', 'calculated_current3',
                'error1', 'error2', 'error3',
                'tap_position', 'winding', 'ratio', 'select'
            ]
        }
    },

    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.tableName + '/?test_result_id=' + this.props.testResultId;
        this.serverRequest = $.get(source, function (result) {
            var res = (result['result']);
            var fields = this.state.fields;
            fields.push('id');
            var tests = {};
            for (var i = 1; i <= res.length; i++) {
                var test = {};
                var data = res[i-1];
                for (var j = 0; j < fields.length; j++) {
                    var key = fields[j];
                    if (data.hasOwnProperty(key)) {
                        test[key] = data[key];
                    }
                }
                tests[i.toString()] = test;
            }
            this.setState({numberOfTaps: res.length, tests: tests});
        }.bind(this), 'json');
    },

    _create: function () {
        var fields = this.state.fields;
        var numberOfTaps = this.state.numberOfTaps;
        var tests = this.state.tests;
        var data = [];
        for (var i = 1; i <= numberOfTaps; i++) {
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

    _onSubmit: function (e) {
        e.preventDefault();
        var errors = this._validate();
        if (Object.keys(errors).length != 0) {
            this.setState({
                errors: errors
            });
            return;
        }
        var xhr = this._create();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },

    hideLoading: function () {
        this.setState({loading: false});
    },

    _onSuccess: function (data) {
        // this.setState(this.getInitialState());
        this.props.handleClose();
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

    _onChange: function (e) {
        var state = {};
        if (e.target.type == 'checkbox') {
            state[e.target.name] = e.target.checked;
        } else if (e.target.type == 'select-one') {
            state[e.target.name] = e.target.value;
        } else {
            state[e.target.name] = e.target.value;
        }
        this.setState(state);
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

    handleFieldChange: function(testId, name, value) {
        var tests = this.state.tests;
        var fieldNameValue = this.state.tests[testId] || {};
        fieldNameValue[name] = value;
        tests[testId] = fieldNameValue;
        this.setState({tests: tests});
    },

    onClickTapAdd: function () {
        this.setState({
            numberOfTaps: this.state.numberOfTaps + 1
        });
    },

    onClickTapRemove: function () {
        this.setState({
            numberOfTaps: this.state.numberOfTaps - 1
        });
    },

    render: function () {
        var taps = [];
        var numberOfTaps = this.state.numberOfTaps;
        for (var i = 1; i <= numberOfTaps; i++) {
            var headName = "Tap Number " + i;
            var props = {
                testId: i.toString(),
                onChange: this.handleFieldChange,
                data: this.state.tests[i.toString()]
            };
            taps.push(
                <Panel header={headName} eventKey={i} id={i} key={'tap' + i}>
                    <TapTestPanel {...props}/>
                </Panel>
            );
        }

        return (
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div className="row">
                        <PanelGroup defaultActiveKey={this.state.eventKey=1} accordion>
                            {taps}
                        </PanelGroup>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <a href="javascript:void(0)"
                               className="glyphicon glyphicon-plus"
                               onClick={this.onClickTapAdd}
                               aria-hidden="true">&nbsp;</a>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <a href="javascript:void(0)"
                                   className="glyphicon glyphicon-minus"
                                   onClick={this.onClickTapRemove}
                                   aria-hidden="true">&nbsp;</a>
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
