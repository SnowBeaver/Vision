import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import TextField from './TextField';
import {validate, updateFieldErrors} from '../helpers';


var NewNormIsolationRow = React.createClass({
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
                            label="C"
                            name="c"
                            value={data.c}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="F"
                            name="f"
                            value={data.f}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Seal"
                            name="seal"
                            value={data.seal}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Not Seal"
                            name="notseal"
                            value={data.notseal}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                </div>
        )
    }
});

var NewNormIsolationForm = React.createClass({

    getInitialState: function () {
        return {
            errors: {},
            predefinedNorms: [],
            norms: {}
        }
    },

    _validateDict: {
        c: {type: "float", label: "C"},
        f: {type: "float", label: "F"},
        notseal: {type: "float", label: "Not seal"},
        seal: {type: "float", label: "Seal"}
    },

    componentDidMount: function () {
        if (this.props.source) {
            this.serverRequest = $.authorizedGet(this.props.source, function (result) {
                var predefinedNorms = (result['result']);
                this.setState({
                    predefinedNorms: predefinedNorms
                });
            }.bind(this), 'json');
        }
        this.setState({norms: this.props.data || {}});
    },

    handleChange: function(e){
        e.stopPropagation();
        var state = this.state;
        state.norms[e.target.name] = e.target.value;
        this.setState(state);
        this.props.saveNormGlobally('norm_isolation', state.norms);
    },

    submit: function (equipmentId) {
        if (!this.is_valid()) {
            NotificationManager.error('Please correct the errors');
            return;
        }
        this._clearErrors();
        var xhr = this._save(equipmentId);
        if (xhr) {
            xhr.done(this._onSuccess)
                .fail(this._onError)
                .always(this.hideLoading)
        }
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
                url: '/api/v1.0/norm_isolation_data/',
                type: 'POST',
                dataType: 'json',
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
                // We get object of errors with field names as key,
                // grouped by norm_id
                for (var normId in res.error) {
                    for (var field in res.error[normId]) {
                        var errorMessage = res.error[normId][field];
                        if (Array.isArray(errorMessage)) {
                            errorMessage = errorMessage.join(". ");
                        }
                        res.error[field + '_' + normId] = errorMessage;
                        delete res.error[normId][field];
                        if (Object.keys(res.error[normId]).length == 0) {
                            delete res.error[normId];
                        }
                    }
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
                <NewNormIsolationRow
                        data={this.state.norms}
                        handleChange={this.handleChange}
                        normId={this.state.predefinedNorms.id}
                        errors={this.state.errors}/>
            </div>

        )
    }
});

export default NewNormIsolationForm;
