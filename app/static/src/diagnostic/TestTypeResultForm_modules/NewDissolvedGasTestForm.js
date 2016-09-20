import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Panel from 'react-bootstrap/lib/Panel';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const TextField = React.createClass({
    render: function() {
        var label = (this.props.label != null) ? this.props.label: "";
        var name = (this.props.name != null) ? this.props.name: "";
        var value = (this.props.value != null) ? this.props.value: "";
        return (
            <FormGroup validationState={this.props.errors[name] ? 'error' : null}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type="text"
                             placeholder={label}
                             name={name}
                             value={value}
                             data-type={this.props["data-type"]}
                />
                <HelpBlock className="warning">{this.props.errors[name]}</HelpBlock>
                <FormControl.Feedback />
            </FormGroup>
        );
    }
});

const CheckBox = React.createClass({
    render: function () {
        var name = (this.props.name != null) ? this.props.name: "";
        var checked = (this.props.value != null) ? this.props.value: false;
        var is_checked = (checked) ? 'checked': '';
        return (
           <Checkbox checked={is_checked} name={name}>
               <span className="glyphicon glyphicon-menu-left">
               </span>
           </Checkbox>
        );
    }
});


var NewDissolvedGasTestForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'h2', 'o2', 'n2',
                'co', 'co2', 'ch4', 'c2h2', 'c2h4', 'c2h6',
                'h2_flag', 'o2_flag', 'n2_flag', 'co_flag', 'ch4_flag',
                'co2_flag', 'c2h2_flag', 'c2h6_flag',
                'cap_gaz'
            ]
        }
    },

    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.tableName + '/?test_result_id=' + this.props.testResultId;
        this.serverRequest = $.get(source, function (result) {
            var res = (result['result']);
            if (res.length > 0) {
                var fields = this.state.fields;
                fields.push('id');
                var data = res[0];
                var state = {};
                for (var i = 0; i < fields.length; i++) {
                    var key = fields[i];
                    if (data.hasOwnProperty(key)) {
                        state[key] = data[key];
                    }
                }
                this.setState(state);
            }
        }.bind(this), 'json');
    },

    _create: function () {
        var fields = this.state.fields;
        var data = {test_result_id: this.props.testResultId};
        var url = '/api/v1.0/' + this.props.tableName + '/';
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }
        if ('id' in this.state) {
            url += this.state['id'];
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
        if (!this._validate()){
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
        this.props.handleClose();
    },

    _onError: function (data) {

        var message = "Failed to create";
        var res = data.responseJSON;
        if (res.message) {
            message = data.responseJSON.message;
        }
        if (res.error) {
            // Join multiple error messages
            if (res.error instanceof Object){
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
        }
        else if (e.target.type == 'radio') {
            state[e.target.name] = e.target.value;
        }
        else if (e.target.type == 'select-one') {
            state[e.target.name] = e.target.value;
        }
        else {
            state[e.target.name] = $.trim(e.target.value);
        }
        var errors = this._validateFieldType(e.target.value, e.target.getAttribute("data-type"));
        state = this._updateFieldErrors(e.target.name, state, errors);
        this.setState(state);
   },

    _validateFieldType: function (value, type){
        var errors = {};
        var errorMessages = {
            "float": "Invalid float value"
        };
        if (type != undefined && value){
            var typePatterns = {
                "float": /^(-|\+?)[0-9]+(\.)?[0-9]*$/
            };
            if (!typePatterns[type].test(value)){
                errors = errorMessages[type];
            }
        }
        return errors;
    },

    _updateFieldErrors: function (fieldName, state, errors){
        // Clear existing errors related to the current field as it has been edited
        state.errors = this.state.errors;
        delete state.errors[fieldName];

        // Update errors with new ones, if present
        if (Object.keys(errors).length){
            state.errors[fieldName] = errors
        }
        return state;
    },

    _validate: function () {
        var response = true;
        if (Object.keys(this.state.errors).length > 0){
            response = false;
        }
        return response;
    },

    _formGroupClass: function (field) {
        var className = "form-group ";
        if (field) {
            className += " has-error"
        }
        return className;
    },

    render: function () {
        return (
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-1 ">
                                    <CheckBox name="h2_flag" value={this.state.h2_flag}/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="Hydrogen-H2" name="h2" value={this.state.h2}
                                               errors={this.state.errors} data-type="float"/>
                                </div>
                                <div className="col-md-1">
                                    <CheckBox name="o2_flag" value={this.state.o2_flag}/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="Oxygen-O2" name="o2" value={this.state.o2}
                                               errors={this.state.errors} data-type="float"/>
                                </div>
                                <div className="col-md-1">
                                    <CheckBox name="n2_flag" value={this.state.n2_flag}/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="Nitrogen-N2" name="n2" value={this.state.n2}
                                               errors={this.state.errors} data-type="float"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-1 ">
                                    <CheckBox name="co_flag" value={this.state.co_flag}/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="CO" name="co" value={this.state.co}
                                               errors={this.state.errors} data-type="float"/>
                                </div>
                                <div className="col-md-1">
                                    <CheckBox name="ch4_flag" value={this.state.ch4_flag}/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="Methane-CH4" name="ch4" value={this.state.ch4}
                                               errors={this.state.errors} data-type="float"/>
                                </div>
                                <div className="col-md-1">
                                    <CheckBox name="co2_flag" value={this.state.co2_flag}/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="CO2" name="co2" value={this.state.co2}
                                               errors={this.state.errors} data-type="float"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-1 ">
                                    <CheckBox name="c2h4_flag" value={this.state.c2h4_flag}/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="Ethylene-C2H4" name="c2h4" value={this.state.c2h4}
                                               errors={this.state.errors} data-type="float"/>
                                </div>
                                <div className="col-md-1">
                                    <CheckBox name="c2h6_flag" value={this.state.c2h6_flag}/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="Ethane-C2H6" name="c2h6" value={this.state.c2h6}
                                               errors={this.state.errors} data-type="float"/>
                                </div>
                                <div className="col-md-1">
                                    <CheckBox name="c2h2_flag" value={this.state.c2h2_flag}/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="Acetylene-C2H2" name="c2h2" value={this.state.c2h2}
                                               errors={this.state.errors} data-type="float"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3">
                                    <TextField label="TDCG" name="" value="" errors={{}}/>
                                </div>
                                <div className="col-md-3">
                                    <TextField label="Total Hydrocarbons" name="" value="" errors={{}}/>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <Panel header="Gas Content(%)">
                            </Panel>
                            <TextField label="Cap gaz" name="cap_gaz" value={this.state.cap_gaz}
                                       errors={this.state.errors}/>
                            <TextField label="Content gaz" name="content_gaz" value={this.state.content_gaz}
                                       errors={this.state.errors}/>
                        </div>
                    </div>

                    <fieldset className="scheduler-border">
                        <legend className="scheduler-border">Gas Analyzer: concentration(ppm)</legend>
                        <div className="row">

                            <div className="col-md-4 ">
                                <TextField label="Measured" name="" value="" errors={{}}/>
                            </div>
                            <div className="col-md-4">
                                <TextField label="Calculated" name="" value="" errors={{}}/>
                            </div>
                            <div className="col-md-4">
                                <TextField label="+Calculated" name="" value="" errors={{}}/>
                            </div>
                        </div>
                    </fieldset>

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


export default NewDissolvedGasTestForm;
