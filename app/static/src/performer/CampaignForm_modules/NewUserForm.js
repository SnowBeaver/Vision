import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var items = [];


var RoleSelectField = React.createClass({

	handleChange: function (event, index, value) {
		this.setState({
			value: event.target.value
		});
	},

	getInitialState: function () {
		return {
			items: [],
			isVisible: false
		};
	},

	isVisible: function () {
		return this.state.isVisible;
	},

	componentDidMount: function () {
		this.serverRequest = $.authorizedGet(this.props.source, function (result) {

			items = (result['result']);
			this.setState({
				items: items
			});
		}.bind(this), 'json');
	},

	componentWillUnmount: function () {
		this.serverRequest.abort();
	},

	setVisible: function () {
		this.state.isVisible = true;
	},

	render: function () {
		var required = this.props.required;
		var menuItems = [];
		for (var key in this.state.items) {
			menuItems.push(<option key={this.state.items[key].id}
								   value={this.state.items[key].id}>
				{`${this.state.items[key].name}`}</option>);
		}

		return (
			<div>
				<FormGroup validationState={this.props.errors.roles ? 'error' : null}>
					<ControlLabel>Roles</ControlLabel><span className="text-danger"> *</span>
					<FormControl
						componentClass="select"
						placeholder="select"
						onChange={this.handleChange}
						name="roles"
						required={required}>
						<option key="0" value="">Roles</option>
						{menuItems}
					</FormControl>
					<HelpBlock className="warning">{this.props.errors.roles}</HelpBlock>
				</FormGroup>
			</div>
		);
	}
});


var CountrySelectField = React.createClass({

	handleChange: function (event, index, value) {
		this.setState({
			value: event.target.value
		});
	},

	getInitialState: function () {
		return {
			items: []
		};
	},

	componentDidMount: function () {
		this.serverRequest = $.authorizedGet(this.props.source, function (result) {

			items = (result['result']);
			this.setState({
				items: items
			});
		}.bind(this), 'json');
	},

	componentWillUnmount: function () {
		this.serverRequest.abort();
	},

	render: function () {
		var menuItems = [];
		for (var key in this.state.items) {
			menuItems.push(<option key={this.state.items[key].id}
								   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
		}

		return (
			<div>
				<FormGroup validationState={this.props.errors.country ? 'error' : null}>
					<ControlLabel>Country</ControlLabel>
					<FormControl
						componentClass="select"
						placeholder="select"
						onChange={this.handleChange}
						name="country_id">
						<option key="0" value="">Country</option>
						{menuItems}
					</FormControl>
					<HelpBlock className="warning">{this.props.errors.country}</HelpBlock>
				</FormGroup>
			</div>
		);
	}
});


var NewUserForm = React.createClass({


	_create: function () {
		var fields = [
			'roles', 'name', 'email', 'alias',
			'website', 'photo', 'address', 'description',
			'country_id', 'mobile', 'active', 'password'
		];
		var data = {};
		for (var i = 0; i < fields.length; i++) {
			var key = fields[i];
			data[key] = this.state[key];
		}

		return $.authorizedAjax({
			url: '/api/v1.0/user/',
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
		this.setState(this.getInitialState());
		this.props.handleClose();
		this.props.onCreate(data, this.props.fieldName);
		NotificationManager.success("User added.");
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
                "int": /^(-|\+)?(0|[1-9]\d*)$/,
				"email": /\S+@\S+\.\S+/,
				"url": /^\S+\.\S+$/
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

	getInitialState: function () {
		return {
			loading: false,
			errors: {},
			equipment_number: ''
		}
	},

	handleClick: function () {
		document.getElementById('test_prof').remove();
	},

	render: function () {

		return (
			<div className="form-container">
				<form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
					<div className="row">
						<div className="col-md-12">
							<RoleSelectField
								source="/api/v1.0/role"
								handleChange={this.handleChange}
								errors={this.state.errors}
								required
							/>
						</div>
					</div>
					<div className="maxwidth">
						<FormGroup validationState={this.state.errors.name ? 'error' : null}>
							<ControlLabel>Name</ControlLabel>
							<FormControl type="text"
										 placeholder="Full Name"
										 name="name"
										 data-len="50"
							/>
							<HelpBlock className="warning">{this.state.errors.name}</HelpBlock>
							<FormControl.Feedback />
						</FormGroup>
					</div>

					<div className="maxwidth">
						<FormGroup validationState={this.state.errors.alias ? 'error' : null}>
							<ControlLabel>Username</ControlLabel><span className="text-danger"> *</span>
							<FormControl type="text"
										 placeholder="Username"
										 name="alias"
										 required
										 data-len="50"
							/>
							<HelpBlock className="warning">{this.state.errors.alias}</HelpBlock>
							<FormControl.Feedback />
						</FormGroup>
					</div>

					<div className="maxwidth">
						<FormGroup validationState={this.state.errors.password ? 'error' : null}>
							<ControlLabel>Password</ControlLabel><span className="text-danger"> *</span>
							<FormControl type="password"
										 placeholder="Password"
										 name="password"
										 required
										 data-len="50"
							/>
							<HelpBlock className="warning">{this.state.errors.password}</HelpBlock>
							<FormControl.Feedback />
						</FormGroup>
					</div>

					<div className="maxwidth">
						<FormGroup validationState={this.state.errors.email ? 'error' : null}>
							<ControlLabel>E-mail</ControlLabel><span className="text-danger"> *</span>
							<FormControl type="text"
										 placeholder="E-mail"
										 name="email"
										 data-type="email"
										 data-len="120"
										 required/>
							<HelpBlock className="warning">{this.state.errors.email}</HelpBlock>
							<FormControl.Feedback />
						</FormGroup>
					</div>

					<div className="maxwidth">
						<FormGroup validationState={this.state.errors.address ? 'error' : null}>
							<ControlLabel>Address</ControlLabel>
							<FormControl type="text"
										 placeholder="Address"
										 name="address"
										 data-len="255"
							/>
							<HelpBlock className="warning">{this.state.errors.address}</HelpBlock>
							<FormControl.Feedback />
						</FormGroup>
					</div>

					<div className="maxwidth">
						<FormGroup validationState={this.state.errors.mobile ? 'error' : null}>
							<ControlLabel>Mobile</ControlLabel>
							<FormControl type="text"
										 placeholder="Mobile"
										 name="mobile"
										 data-len="50"
							/>
							<HelpBlock className="warning">{this.state.errors.mobile}</HelpBlock>
							<FormControl.Feedback />
						</FormGroup>
					</div>

					<div className="maxwidth">
						<FormGroup validationState={this.state.errors.website ? 'error' : null}>
							<ControlLabel>Website</ControlLabel>
							<FormControl type="text"
										 placeholder="Website"
										 name="website"
										 data-type="url"
										 data-len="255"
							/>
							<HelpBlock className="warning">{this.state.errors.website}</HelpBlock>
							<FormControl.Feedback />
						</FormGroup>
					</div>

					<div className="maxwidth">
						<FormGroup>
							<CountrySelectField
								source="/api/v1.0/country/"
								handleChange={this.handleChange}
								errors={this.state.errors}
							/>
						</FormGroup>
					</div>
					<div className="row">
						<div className="col-md-12">
							<FormGroup validationState={this.state.errors.description ? 'error' : null}>
								<ControlLabel>Description</ControlLabel>
								<FormControl
									componentClass="textarea"
									placeholder="Description"
									name="description"/>
								<HelpBlock className="warning">{this.state.errors.description}</HelpBlock>
								<FormControl.Feedback />
							</FormGroup>
						</div>
					</div>

					<div className="maxwidth">
						<div className="col-md-4 nopadding padding-right-xs">
							<FormGroup validationState={this.state.errors.active ? 'error' : null}>
								<HelpBlock className="warning">{this.state.errors.active}</HelpBlock>
								<Checkbox name="active">Active</Checkbox>
							</FormGroup>
						</div>
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

export default NewUserForm;
