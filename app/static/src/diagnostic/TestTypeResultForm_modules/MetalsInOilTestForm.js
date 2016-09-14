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


var MetalsInOilTestForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'iron', 'nickel', 'aluminium', 'copper',
                'tin', 'silver', 'lead', 'zinc', 'arsenic',
                'cadmium', 'chrome',
                'iron_flag', 'nickel_flag', 'aluminium_flag', 'copper_flag',
                'tin_flag', 'silver_flag', 'lead_flag', 'zinc_flag',
                'arsenic_flag', 'cadmium_flag', 'chrome_flag'
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
                "float": /^(-|\+?)[0-9]+(\.)?[0-9]*$/
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
        return (Object.keys(this.state.errors).length > 0) ? false : true;
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
                        <div className="col-md-1 ">
                            <CheckBox name="iron_flag" value={this.state.iron_flag}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Iron" name="iron" value={this.state.iron}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="nickel_flag" value={this.state.nickel_flag}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Nickel" name="nickel" value={this.state.nickel}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="aluminium_flag" value={this.state.aluminium_flag}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Aluminium" name="aluminium" value={this.state.aluminium}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="copper_flag" value={this.state.copper_flag}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Copper" name="copper" value={this.state.copper}
                                       errors={this.state.errors} data-type="float"/>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <CheckBox name="tin_flag" value={this.state.tin_flag}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Tin" name="tin" value={this.state.tin}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-1 ">
                            <CheckBox name="silver_flag" value={this.state.silver_flag}/>
                        </div>

                        <div className="col-md-2">
                            <TextField label="Silver" name="silver" value={this.state.silver}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="lead_flag" value={this.state.lead_flag}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Lead" name="lead" value={this.state.lead}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="zinc_flag" value={this.state.zinc_flag}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Zinc" name="zinc" value={this.state.zinc}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <CheckBox name="arsenic_flag" value={this.state.arsenic_flag}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Arsenic" name="arsenic" value={this.state.arsenic}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="cadmium_flag" value={this.state.cadmium_flag}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Cadmium" name="cadmium" value={this.state.cadmium}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="chrome_flag" value={this.state.chrome_flag}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Chrome" name="chrome" value={this.state.chrome}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ">
                            <Button bsStyle="success"
                                    className="pull-right"
                                    onClick={this.props.handleClose}
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


export default MetalsInOilTestForm;
