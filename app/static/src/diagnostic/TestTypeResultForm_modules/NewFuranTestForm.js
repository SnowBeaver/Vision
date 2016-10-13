import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
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

var NewFuranTestForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'hmf', 'fol', 'fal', 'acf', 'mef',
                'hmf_flag', 'fol_flag', 'fal_flag', 'acf_flag', 'mef_flag'
            ]
        }
    },

    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.tableName + '/?test_result_id=' + this.props.testResultId;
        this.serverRequest = $.authorizedGet(source, function (result) {
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
        // Do not propagate the submit event of the main form
        e.stopPropagation();
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
        if (type != undefined && value){
            var typePatterns = {
                "float": /^(-|\+?)[0-9]+(\.)?[0-9]*$/
            };
            if (!typePatterns[type].test(value)){
                errors = "Invalid " + type + " value";
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
                        <div className="col-md-1 ">
                            <CheckBox name="hmf_flag" value={this.state.hmf_flag}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="5-HMF" name="hmf" value={this.state.hmf} errors={this.state.errors}
                                data-type="float"/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="fol_flag" value={this.state.fol_flag}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="2-FOL" name="fol" value={this.state.fol} errors={this.state.errors}
                                data-type="float"/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="fal_flag" value={this.state.fal_flag}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="2-FAL" name="fal" value={this.state.fal} errors={this.state.errors}
                                data-type="float"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1 ">
                             <CheckBox name="acf_flag" value={this.state.acf_flag}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="2-ACF" name="acf" value={this.state.acf} errors={this.state.errors}
                                data-type="float"/>
                        </div>
                        <div className="col-md-1">
                             <CheckBox name="mef_flag" value={this.state.mef_flag}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="5-MEF" name="mef" value={this.state.mef} errors={this.state.errors}
                                data-type="float"/>
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


export default NewFuranTestForm;
