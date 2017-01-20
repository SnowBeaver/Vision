import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import TextField from './TextField';
import {validate, updateFieldErrors} from '../helpers';

var NewNormFuranRow = React.createClass({
    handleChange: function (e) {
        this.props.handleChange(e, this.props.normId);
    },
    render: function () {
        var data = this.props.data;
        var errors = this.props.errors;
        return (
            <div className="col-md-11">
                <div className="col-md-2">
                    <TextField
                        onChange={this.handleChange}
                        label="Name"
                        name="name"
                        value={data.name}
                        data-normId={this.props.normId}
                        errors={errors}
                        />
                </div>
                <div className="col-md-2">
                    <TextField
                        onChange={this.handleChange}
                        label="C1"
                        name="c1"
                        value={data.c1}
                        data-normId={this.props.normId}
                        errors={errors}
                        />
                </div>
                <div className="col-md-2">
                    <TextField
                        onChange={this.handleChange}
                        label="C2"
                        name="c2"
                        value={data.c2}
                        data-normId={this.props.normId}
                        errors={errors}
                        />
                </div>
                <div className="col-md-2">
                    <TextField
                        onChange={this.handleChange}
                        label="C3"
                        name="c3"
                        value={data.c3}
                        data-normId={this.props.normId}
                        errors={errors}
                        />
                </div>
                <div className="col-md-2">
                    <TextField
                        onChange={this.handleChange}
                        label="C4"
                        name="c4"
                        value={data.c4}
                        data-normId={this.props.normId}
                        errors={errors}
                        />
                </div>
            </div>
        )
    }
});


var NewNormFuranForm = React.createClass({

    getInitialState: function () {
        return {
            errors: {},
            fields: ['name', 'c1', 'c2', 'c3', 'c4'],
            predefinedNorms: [],
            norms: {}
        }
    },

    componentDidMount: function () {
        this.setState({norms: this.props.data || {}, errors: this.props.errorData || {}});
    },

    _validateDict: {
        name: {type: "text", maxLen: 50, label: "Name"},
        c1: {type: "text", label: "C1"},
        c2: {type: "float", label: "C2"},
        c3: {type: "float", label: "C3"},
        c4: {type: "float", label: "C4"}
    },

    handleChange: function(e){
        e.stopPropagation();
        var state = this.state;
        state.norms[e.target.name] = e.target.value;
        if (this._validateDict[e.target.name]) {
            var errors = validate(e, this._validateDict);
            state = updateFieldErrors(this.state, e.target.name, state, errors);
        }
        this.setState(state);
        this.props.saveNormGlobally('norm_furan', state.norms, state.errors);
    },

    submit: function (equipmentId) {
        if (!this.is_valid()) {
            NotificationManager.error('Please correct the errors');
            return;
        }
        //this._clearErrors();
        var xhr = this._save(equipmentId);
        return xhr;
        //if (xhr) {
        //    xhr.done(this._onSuccess)
        //        .fail(this._onError)
        //        .always(this.hideLoading)
        //}
    },

    is_valid: function () {
        // Check errors only if there are norms
        if (Object.keys(this.state.norms).length > 0) {
            return Object.keys(this.state.errors).length == 0;
        } else {
            return true;
        }
    },

    _save: function (equipmentId) {
        var norms = this.state.norms;
        var normData = {equipment_id: equipmentId};

        for (var key in norms) {
            var value = norms[key];
            if (value == "") {
                value = null;
            }
            normData[key] = value;
        }

        var xhr;
        if (Object.keys(normData).length) {
           xhr = $.authorizedAjax({
                url: '/api/v1.0/norm_furan_data/',
                type: 'POST',
                dataType: 'json',
                beforeSend: function(jqXHR, settings) {
                    jqXHR.normName = 'norm_furan';
                },
                contentType: 'application/json',
                data: JSON.stringify(normData)
            });
        }
        return xhr;
    },

    _clearErrors: function () {
        this.setState({errors: {}});
    },

    _onSuccess: function (data) {
        // Clean the form
        this.setState(this.getInitialState());
        this.props.cleanForm();
        this.props.setNormSubformSaved();
        NotificationManager.success('Norms have been successfully saved');
    },

    _onError: function (data) {
        var message = "Failed to add norms";
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

    render: function () {
        return (
            <div>
                <NewNormFuranRow
                        data={this.state.norms}
                        handleChange={this.handleChange}
                        normId={this.state.predefinedNorms.id}
                        errors={this.state.errors}/>
            </div>
        )
    }
});

export default NewNormFuranForm;
