import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var NewEquipmentTypeForm = React.createClass({

	getInitialState: function () {
		return {
			loading: false,
			errors: {},
			fields: [
				'name',
				'code',
				'table_name'
			],
			changedFields: []
		}
	},

	_create: function () {
		var fields = this.state.changedFields;
		if (fields.length == 0){
			NotificationManager.info("No values are entered.");
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

		return $.ajax({
			url: '/api/v1.0/equipment_type/',
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
		NotificationManager.success("Equipment Type added.");
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
		} else if (e.target.type == 'select-one') {
			state[e.target.name] = e.target.value;
		} else {
			state[e.target.name] = e.target.value;
		}
		state.changedFields = this.state.changedFields.concat([e.target.name]);
		state.errors = this.state.errors;
		delete state.errors[e.target.name];
		this.setState(state);
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
							<div className="col-md-12">
								<FormGroup validationState={this.state.errors.name ? 'error' : null}>
									<HelpBlock className="warning">{this.state.errors.name}</HelpBlock>
									<FormControl type="text"
												 placeholder="Name"
												 name="name"
									/>
								</FormGroup>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">
								<FormGroup validationState={this.state.errors.code ? 'error' : null}>
									<HelpBlock className="warning">{this.state.errors.code}</HelpBlock>
									<FormControl type="text"
												 placeholder="Code"
												 name="code"
									/>
								</FormGroup>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">
								<FormGroup validationState={this.state.errors.table_name ? 'error' : null}>
									<HelpBlock className="warning">{this.state.errors.table_name}</HelpBlock>
									<FormControl type="text"
												 placeholder="Table Name"
												 name="table_name"
									/>
								</FormGroup>
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
					<br/>
				</form>
			</div>
		);
	}
});


export default NewEquipmentTypeForm;
