import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import {findDOMNode} from 'react-dom';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var items = [];


var NewFluidForm = React.createClass({

	getInitialState: function () {
		return {
			loading: false,
			errors: {},
			fields: [
				'name'
			],
			changedFields: []
		}
	},

	_create: function () {
		var fields = this.state.changedFields;
		if (fields.length == 0){
			NotificationManager.info("No values were entered.");
			return false;
		}

		var data = {};
		for (var i = 0; i < fields.length; i++) {
			var key = fields[i];
			var value = this.state[key];
            if (value == ""){
                value = null;
            }
            data[key] = value;
		}

		return $.authorizedAjax({
			url: '/api/v1.0/fluid_type/',
			type: 'POST',
			dataType: 'json',
			contentType: 'application/json',
			data: JSON.stringify(data),
			success: function (data, textStatus) {
			},
			beforeSend: function () {
				this.setState({loading: true});
			}.bind(this)
		})
	},
	_onSubmit: function (e) {
		e.preventDefault();
		if (!this.is_valid()){
			NotificationManager.error('Please correct the errors');
			return false;
		}
		var xhr = this._create();
		if (xhr){
			xhr.done(this._onSuccess)
			.fail(this._onError)
			.always(this.hideLoading);
		}
	},

	hideLoading: function () {
		this.setState({loading: false});
	},

	_onSuccess: function (data) {
		this.setState(this.getInitialState());
		this.props.handleClose();
		this.props.onCreate(data);
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

		state.changedFields = this.state.changedFields.concat([e.target.name]);
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
        error = this._validateFieldLength(e.target.value, e.target.getAttribute("data-len"));
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

    _validateFieldLength: function (value, length){
        var error = "";
        if (value && length){
            if (value.length > length){
                error = "Value should be maximum " + length + " characters long"
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

	handleClick: function() {
		document.getElementById('test_prof').remove();
	},

	render: function () {

		return (
			<div className="form-container">
				<form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
						<div className="maxwidth">
							<FormGroup validationState={this.state.errors.name ? 'error' : null}>
								<FormControl type="text"
											 placeholder="Name"
											 name="name"
											 data-len="50"
								/>
								<HelpBlock className="warning">{this.state.errors.name}</HelpBlock>
								<FormControl.Feedback />
							</FormGroup>
						</div>
						<div className="row">
							<div className="col-md-12 ">
								<Button bsStyle="success"
										className="btn btn-success pull-right"
										type="submit"
								>Save</Button>
								&nbsp;
								<Button bsStyle="danger"
										className="pull-right"
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


export default NewFluidForm;
