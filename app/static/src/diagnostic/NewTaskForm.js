import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Radio from 'react-bootstrap/lib/Radio';
import {hashHistory} from 'react-router';
import {findDOMNode} from 'react-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {DATETIMEPICKER_FORMAT} from './appConstants.js';

var items = [];


var TestRecommendationSelectField = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            isVisible: false,
        };
    },
    isVisible: function () {
        return this.state.isVisible;
    },
    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.source + '/';
        this.serverRequest = $.authorizedGet(source, function (result) {
            this.setState({items: (result['result'])});
        }.bind(this), 'json');
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    setVisible: function () {
        this.state.isVisible = true;
    },
    render: function () {
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>
                {`${this.state.items[key].recommendation ? this.state.items[key].recommendation.name : this.state.items[key].recommendation_notes}`}
            </option>);
        }
        return (
            <FormGroup>
                <FormControl componentClass="select"
                             onChange={this.props.onChange}
                             name={name}
                             value={value}
                             disabled={this.props.disabled}
                >
                    <option>{label}</option>
                    {menuItems}
                    <FormControl.Feedback />
                </FormControl>
            </FormGroup>
        );
    }
});

var SelectField = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            isVisible: false,
        };
    },
    isVisible: function () {
        return this.state.isVisible;
    },
    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.source + '/';
        this.serverRequest = $.authorizedGet(source, function (result) {
            this.setState({items: (result['result'])});
        }.bind(this), 'json');
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    setVisible: function () {
        this.state.isVisible = true;
    },
    render: function () {
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        return (
            <FormGroup>
                <FormControl componentClass="select"
                             onChange={this.props.onChange}
                             name={name}
                             value={value}
                             disabled={this.props.disabled}
                >
                    <option>{label}</option>
                    {menuItems}
                    <FormControl.Feedback />
                </FormControl>
            </FormGroup>
        );
    }
});

const DateTimeFieldWithLabel = React.createClass({
    _onChange: function (timestamp) {
        this.props.onDateTimeFieldChange(timestamp, this.props.name);
    },
    render: function () {
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        // Do not set dateTime property if date is null/undefined/empty string, calendar will be broken
        var dateValue = this.props.dateTime;
        dateValue = (dateValue) ? {dateTime: dateValue, format: DATETIMEPICKER_FORMAT} : {defaultText: label};

        return (
            <div className="datetimepicker input-group date ">
                <DateTimeField name={name} onChange={this._onChange} {...dateValue}/>
            </div>
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
                    />
                    <HelpBlock className="warning">{error}</HelpBlock>
                    <FormControl.Feedback />
                </FormGroup>
            </OverlayTrigger>
        );
    }
});

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
                    />
                    <HelpBlock className="warning">{error}</HelpBlock>
                    <FormControl.Feedback />
                </FormGroup>
            </OverlayTrigger>
        );
    }
});

var NewTaskForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            campaign_id: false,
            date_created: new Date().toISOString(),
            errors: {},
            showCreatedByForm: false,
            showNewContractForm: false,
            showNewLabForm: false,
            fields: [
                'test_recommendation_id', 'status_id', 'assigned_to_id', 'date_started',
                'notify_before_in_days', 'description', 'recurring', 'period_years', 'period_month', 'period_days'
            ]
        }
    },

    _create: function () {
        var fields = this.state.fields;
        var url = "";
        var data = {};
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }

        return $.ajax({
            url: url,
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
        if (!this.is_valid()) {
            NotificationManager.error('Please correct the errors');
            e.stopPropagation();
            return false;
        }
        this._clearErrors();
        var xhr = this._create();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },

    hideLoading: function () {
        this.setState({loading: false});
    },

    _onSuccess: function (data) {
        this.setState({
            campaign_id: data.result
        });
        NotificationManager.success('Task has been successfully saved.', null, 4000);
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
        // Clear existing errors related to the current field as it has been edited
        state.errors = this.state.errors;
        delete state.errors[fieldName];

        // Update errors with new ones, if present
        if (Object.keys(errors).length) {
            state.errors[fieldName] = errors.join(". ");
        }
        return state;
    },

    _clearErrors: function () {
        this.setState({errors: {}});
    },

    is_valid: function () {
        return (Object.keys(this.state.errors).length <= 0);
    },

    setStartDate: function (timestamp, name) {
        this._setDateTimeFieldDate(timestamp, name);
    },

    _setDateTimeFieldDate(timestamp, fieldName){
        var state = {};
        // If date is not valid (for example, date is deleted) string "Invalid date" is received
        if (timestamp == "Invalid date") {
            timestamp = null;
        } else if (timestamp) {
            // It is UNIX timestamp in milliseconds if dateTimeField was empty on load
            // Format date here instead of specifying format in DateTimeField,
            // because error is raised when format is specified, but date is null/undefined/empty string.
            if (/^\d+$/.test(timestamp)) {
                timestamp = parseInt(timestamp);
                timestamp = moment(timestamp).toISOString();
            }
            state[fieldName] = timestamp;    // Already formatted to ISO string
        }
        this.setState(state);
    },

    render: function () {
        // Do not set dateTime property if date is null/undefined/empty string, calendar will be broken
        var dateStarted = this.state.date_started;
        dateStarted = (dateStarted) ? {
            dateTime: dateStarted,
            format: DATETIMEPICKER_FORMAT
        } : {defaultText: "Start date"};
        return (
            <div className="form-container">
                <Panel header="New Task">
                    <form  method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                        <div className="row">
                            <div className="col-md-4">
                                <TestRecommendationSelectField source="test_recommendation"
                                                               label="Test recommendation"
                                                               name='test_recommendation_id'
                                                               value={this.state.test_recommendation_id}/>
                            </div>
                            <div className="col-md-2">
                                <SelectField source="task_status"
                                             label="Status"
                                             name='status_id'
                                             value={this.state.status_id}/>
                            </div>
                            <div className="col-md-3">
                                <SelectField source="user"
                                             label="Assigned To"
                                             name='assigned_to_id'
                                             value={this.state.assigned_to_id}/>
                            </div>
                            <div className="col-md-3" key={this.state.date_started}>
                                <DateTimeFieldWithLabel label="Start date"
                                                        name='date_started'
                                    {...dateStarted}
                                                        onChange={this._onChange}
                                                        onDateTimeFieldChange={this.setStartDate}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <TextField onChange={this._onChange}
                                           label="Notify before (in days)"
                                           name="notify_before_in_days"
                                           value={this.state.notify_before_in_days}
                                           errors={this.state.errors}
                                           data-type="int"/>
                            </div>
                            <div className="col-md-6">
                                <TextArea label="Task Description"
                                          name='description'
                                          value={this.state.description}
                                          onChange={this._onChange}
                                          errors={this.state.errors}/>
                            </div>
                            <div className="col-md-2">
                                <Checkbox name="recurring"
                                          checked={this.state.recurring ? 'checked': null}
                                          value="1">Recurring</Checkbox>
                            </div>
                        </div>
                        {this.state.recurring ?
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="col-md-2 nopadding">
                                        <Radio name="shared" value="1">
                                            <b>Each</b>
                                        </Radio>
                                    </div>
                                    <div className="col-md-6 nopadding">
                                        <TextField label="Each year"
                                                   onChange={this._onChange}
                                                   name="period_years"
                                                   value={this.state.period_years}
                                                   errors={this.state.errors}
                                                   data-type="int"/>
                                    </div>
                                    <div className="col-md-2">
                                        <b>year</b>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="col-md-2 nopadding">
                                        <Radio name="shared" value="0">
                                            <b>Each</b>
                                        </Radio>
                                    </div>
                                    <div className="col-md-6 nopadding">
                                        <TextField label="Each month"
                                                   onChange={this._onChange}
                                                   name="period_months"
                                                   value={this.state.period_months}
                                                   errors={this.state.errors}
                                                   data-type="int"/>
                                    </div>
                                    <div className="col-md-2">
                                        <b>month</b>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="col-md-2 nopadding">
                                        <Radio name="shared" value="0">
                                            <b>Each</b>
                                        </Radio>
                                    </div>
                                    <div className="col-md-6 nopadding">
                                        <TextField label="Each day"
                                                   onChange={this._onChange}
                                                   name="period_days"
                                                   value={this.state.period_days}
                                                   errors={this.state.errors}
                                                   data-type="int"/>
                                    </div>
                                    <div className="col-md-2 ">
                                        <b>day</b>
                                    </div>
                                </div>
                            </div> : null}

                        <div className="row">
                            <div className="col-md-1 pull-right nopadding padding-right-xs">
                                <FormGroup>
                                    <Button bsStyle="success"
                                            type="submit">Schedule</Button>
                                </FormGroup>
                            </div>
                            <div className="col-md-1 pull-right ">
                                <FormGroup>
                                    <Button bsStyle="danger">Cancel</Button>
                                </FormGroup>
                            </div>
                        </div>
                    </form>
                </Panel>
                <hr/>
            </div>
        );
    }
});


export default NewTaskForm;
