import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import {NotificationContainer, NotificationManager} from 'react-notifications';


const TextField = React.createClass({
    render: function () {
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";

        return (
            <FormGroup validationState={this.props.errors[name] ? 'error' : null}>
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


var NewInsulationResistanceTestForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'test_kv1', 'test_kv2', 'test_kv3', 'test_kv4', 'test_kv5',
                'resistance1', 'resistance2', 'resistance3', 'resistance4', 'resistance5',
                'multiplier1', 'multiplier2', 'multiplier3', 'multiplier4', 'multiplier5'
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

    _onSuccess: function (data, status, xhr) {
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
            state.errors[fieldName] = errors
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

                        <div className="col-md-2">
                            <b>HI to LO+TER+GND</b>
                        </div>

                        <div className="col-md-2">
                            <TextField label="Test kV" name="test_kv1" value={this.state.test_kv1}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Mego ohM" name="resistance1" value={this.state.resistance1}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Multiplier" name="multiplier1" value={this.state.multiplier1}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Measured" name="" value="" errors={{}}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Corr. 20C" name="" value="" errors={{}}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <b>LO to HI+TER+GND</b>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Test kV" name="test_kv2" value={this.state.test_kv2}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Mego ohM" name="resistance2" value={this.state.resistance2}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Multiplier" name="multiplier2" value={this.state.multiplier2}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Measured" name="" value="" disabled errors={{}}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Corr. 20C" name="" value="" disabled errors={{}}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <b>TER to HI+LO+GND</b>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Test kV" name="test_kv3" value={this.state.test_kv3}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Mego ohM" name="resistance3" value={this.state.resistance3}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Multiplier" name="multiplier3" value={this.state.multiplier3}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Measured" name="" value="" disabled errors={{}}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Corr. 20C" name="" value="" disabled errors={{}}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <b>Hi+LO+TER to GND</b>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Test kV" name="test_kv4" value={this.state.test_kv4}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Mego ohM" name="resistance4" value={this.state.resistance4}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Multiplier" name="multiplier4" value={this.state.multiplier4}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Measured" name="" value="" disabled errors={{}}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Corr. 20C" name="" value="" disabled errors={{}}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <b>Core to GND</b>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Test kV" name="test_kv5" value={this.state.test_kv5}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Mego ohM" name="resistance5" value={this.state.resistance5}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Multiplier" name="multiplier5" value={this.state.multiplier5}
                                       errors={this.state.errors} data-type="float"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Measured" name="" value="" disabled errors={{}}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Corr. 20C" name="" value="" disabled errors={{}}/>
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


export default NewInsulationResistanceTestForm;
