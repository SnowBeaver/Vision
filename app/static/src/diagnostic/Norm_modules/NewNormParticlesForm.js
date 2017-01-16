import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import TextField from './TextField';
import {validate, updateFieldErrors} from '../helpers';


var NewNormParticlesRow = React.createClass({
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
                            label="_2um"
                            name="_2um"
                            value={data._2um}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="_5um"
                            name="_5um"
                            value={data._5um}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="_10um"
                            name="_10um"
                            value={data._10um}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="_15um"
                            name="_15um"
                            value={data._15um}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="_25um"
                            name="_25um"
                            value={data._25um}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="_50um"
                            name="_50um"
                            value={data._50um}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="_100um"
                            name="_100um"
                            value={data._100um}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="nas1638"
                            name="nas1638"
                            value={data.nas1638}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="iso4406_1"
                            name="iso4406_1"
                            value={data.iso4406_1}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="iso4406_2"
                            name="iso4406_2"
                            value={data.iso4406_2}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="iso4406_3"
                            name="iso4406_3"
                            value={data.iso4406_3}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                </div>
        )
    }
});

var NewNormParticlesForm = React.createClass({

    getInitialState: function () {
        return {
            errors: {},
            predefinedNorms: [],
            norms: {}
        }
    },

     _validateDict: {
        "_2um": {type: "float", label: "_2um"},
        "_5um": {type: "float", label: "_5um"},
        "_10um": {type: "float", label: "_10um"},
        "_15um": {type: "float", label: "_15um"},
        "_25um": {type: "float", label: "_25um"},
        "_50um": {type: "float", label: "_50um"},
        "_100um": {type: "float", label: "_100um"},
        "iso4406_1": {type: "float", label: "iso4406_1"},
        "iso4406_2": {type: "float", label: "iso4406_2"},
        "iso4406_3": {type: "float", label: "iso4406_3"},
        "nas1638": {type: "float", label: "nas1638"}
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
    },

    handleChange: function(e, normId){
        e.stopPropagation();
        var state = this.state;
        if (!state.norms[normId]) {
            state.norms[normId] = {};
        }
        state.norms[normId][e.target.name] = e.target.value;
        if (this._validateDict[e.target.name]) {
            var errors = validate(e, this._validateDict);
            state = updateFieldErrors(
                this.state,
                e.target.name + '_' + e.target.getAttribute('data-normId'),
                state,
                errors
            );
        }
        this.setState(state);
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
        var data = [];
        for (var normId in norms) {
            var normData = {norm_id: normId, equipment_id: equipmentId};
            for (var key in norms[normId]) {
                var value = norms[normId][key];
                if (value == "") {
                    value = null;
                }
                normData[key] = value;
            }
            data.push(normData);
        }
        var xhr;
        if (Object.keys(data).length) {
           xhr = $.authorizedAjax({
                url: '/api/v1.0/norm_data/multi/norm_particles_data',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data)
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
                <NewNormParticlesRow
                        data={this.state}
                        handleChange={this.handleChange}
                        normId={this.state.predefinedNorms.id}
                        errors={this.state.errors}/>
            </div>

        )
    }
});

export default NewNormParticlesForm;
