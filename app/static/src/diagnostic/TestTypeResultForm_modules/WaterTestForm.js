import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';


const TextField = React.createClass({
    render: function() {
        var label = (this.props.label != null) ? this.props.label: "";
        var name = (this.props.name != null) ? this.props.name: "";
        var value = (this.props.value != null) ? this.props.value: "";
        var type = (this.props["data-type"] != null) ? this.props["data-type"]: undefined;
        var len = (this.props["data-len"] != null) ? this.props["data-len"]: undefined;
        var validationState = (this.props.errors[name]) ? 'error' : null;
        var error = this.props.errors[name];
        return (
            <FormGroup validationState={validationState}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type="text"
                             placeholder={label}
                             name={name}
                             value={value}
                             data-type={type}
                             data-len={len}
                             />
                <HelpBlock className="warning">{error}</HelpBlock>
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

var WaterTestForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ['remark', 'water', 'water_flag']
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
            delete data.id;
        }
        return $.authorizedAjax({
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
        if ($.isNumeric(data.result)) {
            this.setState({id: data.result});
        }
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

    render: function() {
        return (
            <div className="form-container">
                <h3>Dissolved water(ppm)</h3>
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div className="tab_row text-center">
                        <div className="col-lg-12 nopadding">
                            <div className="col-lg-1 nopadding padding-right-xs">
                                <FormGroup>
                                    <ControlLabel> </ControlLabel>
                                    <CheckBox name="water_flag" value={this.state.water_flag}/>
                                </FormGroup>
                            </div>
                            <div className="col-lg-6 nopadding padding-right-xs">
                                <TextField label="Dissolved water"
                                           name="water"
                                           value={this.state.water}
                                           data-type="float"
                                           errors={this.state.errors}/>
                            </div>
                            <div className="col-lg-5 nopadding padding-right-xs">
                                Moisture at 25C(%): 17,8
                            </div>
                        </div>
                        <div className="col-lg-12 nopadding">
                            <TextField label="Remark"
                                       name="remark"
                                       value={this.state.remark}
                                       data-len="80"
                                       errors={this.state.errors}/>
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

export default WaterTestForm;
