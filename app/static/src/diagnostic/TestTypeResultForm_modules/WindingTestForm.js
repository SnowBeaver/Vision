import React from 'react';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Panel from 'react-bootstrap/lib/Panel';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import {NotificationContainer, NotificationManager} from 'react-notifications';


var TapTestPanel = React.createClass({
    _onChange: function (e) {
        this.props.onChange(this.props.testId, e.target.name, e.target.value);
    },
    render: function () {
        var data = (this.props.data != null) ? this.props.data : {};
        var errors = this.props.errors;
        return (
            <div>
                <div className="row">
                    <div className="col-md-1">
                        <FormGroup validationState={(errors.test_kv1) ? 'error' : null}>
                            <ControlLabel>Test KV</ControlLabel>
                            <FormControl type='text'
                                         placeholder='0'
                                         name="test_kv1"
                                         value={data.test_kv1}
                                         data-type="float"
                                         onChange={this._onChange}
                            />
                            <HelpBlock className="warning">{errors.test_kv1}</HelpBlock>
                            <FormControl.Feedback />
                        </FormGroup>
                    </div>
                    <div className="col-md-1">
                        <FormGroup validationState={(errors.m_meter1) ? 'error' : null}>
                            <ControlLabel>Reading</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0"
                                         name="m_meter1"
                                         value={data.m_meter1}
                                         data-type="float"
                                         onChange={this._onChange}
                            />
                            <HelpBlock className="warning">{errors.m_meter1}</HelpBlock>
                            <FormControl.Feedback />
                        </FormGroup>
                    </div>
                    <div className="col-md-1">
                        <FormGroup validationState={(errors.m_multiplier1) ? 'error' : null}>
                            <ControlLabel>Mult.</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0"
                                         name="m_multiplier1"
                                         value={data.m_multiplier1}
                                         data-type="float"
                                         onChange={this._onChange}
                            />
                            <HelpBlock className="warning">{errors.m_multiplier1}</HelpBlock>
                            <FormControl.Feedback />
                        </FormGroup>
                    </div>
                    <div className="col-md-1">
                        <FormGroup validationState={(errors.milliamperes) ? 'error' : null}>
                            <ControlLabel>Milliamperes</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0"
                                         value={data.milliamperes}
                                         disabled
                            />
                            <HelpBlock className="warning">{errors.milliamperes}</HelpBlock>
                            <FormControl.Feedback />
                        </FormGroup>
                    </div>
                    <div className="col-md-1">
                        <FormGroup validationState={(errors.w_meter1) ? 'error' : null}>
                            <ControlLabel>Reading</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0"
                                         name="w_meter1"
                                         value={data.w_meter1}
                                         data-type="float"
                                         onChange={this._onChange}
                            />
                            <HelpBlock className="warning">{errors.w_meter1}</HelpBlock>
                            <FormControl.Feedback />
                        </FormGroup>
                    </div>
                    <div className="col-md-1">
                        <FormGroup validationState={(errors.w_multiplier1) ? 'error' : null}>
                            <ControlLabel>Mult.</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0"
                                         name="w_multiplier1"
                                         value={data.w_multiplier1}
                                         data-type="float"
                                         onChange={this._onChange}
                            />
                            <HelpBlock className="warning">{errors.w_multiplier1}</HelpBlock>
                            <FormControl.Feedback />
                        </FormGroup>
                    </div>
                    <div className="col-md-1">
                        <FormGroup validationState={(errors.watts) ? 'error' : null}>
                            <ControlLabel>Watts</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0"
                                         value={data.watts}
                                         disabled
                            />
                            <HelpBlock className="warning">{errors.watts}</HelpBlock>
                            <FormControl.Feedback />
                        </FormGroup>
                    </div>
                    <div className="col-md-1">
                        <FormGroup validationState={(errors.pf) ? 'error' : null}>
                            <ControlLabel>PF</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0"
                                         value={data.pf}
                                         disabled
                            />
                            <HelpBlock className="warning">{errors.pf}</HelpBlock>
                            <FormControl.Feedback />
                        </FormGroup>
                    </div>
                    <div className="col-md-1">
                        <FormGroup validationState={(errors.corr) ? 'error' : null}>
                            <ControlLabel>Corr 20C</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0"
                                         value={data.corr}
                                         disabled
                            />
                            <HelpBlock className="warning">{errors.corr}</HelpBlock>
                            <FormControl.Feedback />
                        </FormGroup>
                    </div>
                </div>
            </div>
        )
    }
});

var WindingTestForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            numberOfTaps: 1,
            errors: {},
            tests: {'1': {}},
            keys: 1,
            testData: {'test_result_id': 1, 'taps': []},
            fields: [
                'type_doble', 'humidity', 'test_kv1',
                'w_multiplier1', 'w_meter1', 'm_multiplier1', 'm_meter1'
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
        // Do not propagate the submit event of the main form
        e.stopPropagation();
        if (!this.is_valid()){
			NotificationManager.error('Please correct the errors');
            e.stopPropagation();
			return false;
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
        NotificationManager.success('Test values have been saved successfully.');
    },

    _onError: function (data) {
        var message = "Failed to create";
        var res = data.responseJSON;
        if (res.message) {
            message = data.responseJSON.message;
        }
        if (res.error) {
			// We get list of errors
			if (data.status >= 500) {
				message = res.error.join(". ");
			} else if (res.error instanceof Object){
				// We get object of errors with field names as key
				for (var field in res.error) {
					var errorMessage = res.error[field];
					if (Array.isArray(errorMessage)) {
						errorMessage = errorMessage.join(". ");
					}
					res.error[field] = errorMessage;
				}
				this.setState({
					errors: res.error
				});
			} else {
				message = res.error;
			}
		}
		NotificationManager.error(message);
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

        var errors = this._validate(e);
        state = this._updateFieldErrors(e.target.name, state, errors);
        this.setState(state);
    },

    _validate: function (e) {
        var errors = [];
        var error;
        error = this._validateFieldType(e.target.value, e.target.getAttribute("data-type"));
        if (error){
            errors.push(error);
        }
        return errors;
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

    _updateFieldErrors: function (fieldName, state, errors){
        // Clear existing errors related to the current field as it has been edited
        state.errors = this.state.errors;
        delete state.errors[fieldName];

        // Update errors with new ones, if present
        if (Object.keys(errors).length){
            state.errors[fieldName] = errors.join(". ");
        }
        return state;
    },

    is_valid: function () {
        return (Object.keys(this.state.errors).length <= 0);
    },

    _formGroupClass: function (field) {
        var className = "form-group ";
        if (field) {
            className += " has-error"
        }
        return className;
    },

    handleFieldChange: function(testId, name, value, type) {
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
                data: this.state.tests[i.toString()],
                errors: this.state.errors
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

export default WindingTestForm;
