import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import {findDOMNode} from 'react-dom';
import { hashHistory } from 'react-router';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import {NotificationContainer, NotificationManager} from 'react-notifications';



var NewManufacturerForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'name',
                'markings',
                'location',
                'description'
            ],
            changedFields: []
        }
    },

    _create: function () {
        var fields = this.state.changedFields;
        var data = {};
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }

        return $.ajax({
            url: '/api/v1.0/manufacturer/',
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
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },

    hideLoading: function () {
        this.setState({loading: false});
    },

    _onSuccess: function (data) {
        NotificationManager.success("Manufacturer added.");
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
            state[e.target.name] = $.trim(e.target.value);
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

    handleClick: function () {
        document.getElementById('test_prof').remove();
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
                                                 placeholder="Name *"
                                                 name="name"
                                                 required
                                    />
                                </FormGroup>
                            </div>
                        </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <FormGroup validationState={this.state.errors.markings ? 'error' : null}>
                                        <HelpBlock className="warning">{this.state.errors.markings}</HelpBlock>
                                        <FormControl componentClass="textarea"
                                                     placeholder="Markings"
                                                     name="markings"/>
                                    </FormGroup>
                                </div>
                            </div>

                        <div className="row">
                            <div className="col-md-12">
                                <FormGroup validationState={this.state.errors.location ? 'error' : null}>
                                    <HelpBlock className="warning">{this.state.errors.location}</HelpBlock>
                                    <FormControl type="text"
                                                 placeholder="Location"
                                                 name="location"
                                    />
                                </FormGroup>
                            </div>
                        </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <FormGroup validationState={this.state.errors.description ? 'error' : null}>
                                        <HelpBlock className="warning">{this.state.errors.description}</HelpBlock>
                                        <FormControl componentClass="textarea"
                                                     placeholder="Description"
                                                     name="description"/>
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
                    </form>
            </div>
        );
    }
});


export default NewManufacturerForm;
