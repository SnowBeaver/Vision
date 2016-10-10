import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import TestTypeSelectField from './NewTestForm_modules/TestTypeSelectField';


const TextField = React.createClass({
    _onChange: function (e) {
        this.props.onChange(e);
    },

    render: function () {
        let tooltip = <Tooltip id={this.props.label}>{this.props.label}</Tooltip>;
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var type = (this.props["data-type"] != null) ? this.props["data-type"] : undefined;
        var len = (this.props["data-len"] != null) ? this.props["data-len"] : undefined;
        var validationState = (this.props.errors[name]) ? 'error' : null;
        var error = this.props.errors[name];
        return (
            <OverlayTrigger overlay={tooltip} placement="top">
                <FormGroup validationState={validationState}>
                    <FormControl type="text"
                                 placeholder={label}
                                 name={name}
                                 data-type={type}
                                 data-len={len}
                                 onChange={this._onChange}
								 required={this.props.required}
                    />
                    <HelpBlock className="warning">{error}</HelpBlock>
                    <FormControl.Feedback />
                </FormGroup>
            </OverlayTrigger>
        );
    }
});

const TextArea = React.createClass({
    render: function () {
        let tooltip = <Tooltip id={this.props.label}>{this.props.label}</Tooltip>;
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var error = this.props.errors[name];
        return (
            <OverlayTrigger overlay={tooltip} placement="top">
                <FormGroup>
                    <FormControl componentClass="textarea"
                                 placeholder={label}
                                 name={name}
                                 value={value}
                                 onChange={this.props.onChange}
                                 required={this.props.required}
                                 disabled={this.props.disabled}
                    />
                    <HelpBlock className="warning">{error}</HelpBlock>
                    <FormControl.Feedback />
                </FormGroup>
            </OverlayTrigger>
        );
    }
});

var NewDiagnosisForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            predefinedDiagnosisFields: ['name', 'code', 'description', 'test_type_id'],
            testDiagnosisFields: ['diagnosis_id', 'test_type_id', 'test_result_id', 'diagnosis_notes'],
            public_diagnosis: false,
            current_select_value: null
        }
    },

    _create: function () {
        if (this.state.public_diagnosis) {
            this._createPredefinedDiagnoses();
        }
        else {
            this._createTestDiagnoses();
        }
    },

    _createTestDiagnoses: function () {
        var fields = this.state.testDiagnosisFields;
        var data = {};
        var that = this;
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            var value = this.state[key];
            if (value == "") {
                value = null;
            }
            data[key] = value;
        }
        data.test_result_id = this.props.testResultId;
        data.diagnosis_id = this.props.diagnosisId;
        return $.ajax({
            url: '/api/v1.0/test_diagnosis/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (response) {
                that.props.onSuccess(response.result, data.test_type_id, "test");
            },
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })
    },

    _createPredefinedDiagnoses: function () {
        var fields = this.state.predefinedDiagnosisFields;
        var data = {};
        var that = this;
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            var value = this.state[key];
            if (value == "") {
                value = null;
            }
            data[key] = value;
        }
        return $.ajax({
            url: '/api/v1.0/diagnosis/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (response) {
                that.props.onSuccess(response.result, data.test_type_id, "predefined");
            },
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })
    },

    _onSuccess: function (data, status, xhr) {
        var diagnosisType = "Test";
        if (this.state.public_diagnosis) {
            diagnosisType = "Predefined";
        }
        NotificationManager.success(diagnosisType + " diagnosis has been successfully added");
        this.props.handleClose();
    },

    _onSubmit: function (e) {
        var xhr = this._create();
        if (xhr) {
            xhr.done(this._onSuccess)
                .fail(this._onError)
                .always(this.hideLoading);
        }
    },

    hideLoading: function () {
        this.setState({loading: false});
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
            } else if (res.error instanceof Object) {
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
        e.stopPropagation();
        var state = this.state.predefinedDiagnosisFields;

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
        if (error) {
            errors.push(error);
        }
        error = this._validateFieldLength(e.target.value, e.target.getAttribute("data-len"));
        if (error) {
            errors.push(error);
        }
        return errors;
    },

    _validateFieldType: function (value, type) {
        var error = "";
        if (type != undefined && value) {
            var typePatterns = {
                "float": /^(-|\+?)[0-9]+(\.)?[0-9]*$/,
                "int": /^(-|\+)?(0|[1-9]\d*)$/
            };
            if (!typePatterns[type].test(value)) {
                error = "Invalid " + type + " value";
            }
        }
        return error;
    },

    _validateFieldLength: function (value, length) {
        var error = "";
        if (value && length) {
            if (value.length > length) {
                error = "Value should be maximum " + length + " characters long"
            }
        }
        return error;
    },

    _updateFieldErrors: function (fieldName, state, errors) {
        state.errors = this.state.errors;
        delete state.errors[fieldName];

        if (Object.keys(errors).length) {
            state.errors[fieldName] = errors.join(". ");
        }
        return state;
    },

    render: function () {
        return (
            <div className="form-container" onChange={this._onChange}>
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div className="row">
                        <div className="col-md-5">
                            <TestTypeSelectField selectedSubtests={this.props.selectedSubtests}
                                                 testType={this.props.testType}
                                                 value={this.state.test_type_id}
                                                 name="test_type_id"
                                                 handleChange={this._onChange}
                                                 errors={this.state.errors}
                                                 required/>
                        </div>
                        <div className="col-md-1">
                            <Checkbox checked={this.state.public_diagnosis}
                                      name="public_diagnosis"
                            >Public</Checkbox>
                        </div>
                        {this.state.public_diagnosis ?
                            <div>
                                <div className="col-md-3">
                                    <TextField label="Name*"
                                               name='name'
                                               value={this.state.name}
                                               onChange={this._onChange}
                                               errors={this.state.errors}
                                               data-len="50"
                                               required/>
                                </div>
                                <div className="col-md-3">
                                    <TextField label="Code"
                                               name='code'
                                               value={this.state.code}
                                               onChange={this._onChange}
                                               errors={this.state.errors}
                                               data-len="50"/>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <TextArea label={this.state.public_diagnosis ? "Description": "Diagnosis Notes"}
                                      name={this.state.public_diagnosis ? "description": "diagnosis_notes"}
                                      value={this.state.public_diagnosis ? this.state.description: this.state.diagnosis_notes}
                                      errors={this.state.errors}
                            />
                        </div>
                        <div className="col-md-12 ">
                            <Button bsStyle="success"
                                    className="btn btn-success pull-right"
                                    type="submit"
                            >Add {this.state.public_diagnosis ? "Predefined" : "Test"} Diagnosis</Button>
                            &nbsp;
                            <Button bsStyle="danger"
                                    onClick={this.props.handleClose}
                                    className="pull-right margin-right-xs"
                            >Cancel</Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

export default NewDiagnosisForm;
