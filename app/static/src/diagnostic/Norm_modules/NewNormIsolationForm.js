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
        "name": {type: "text", maxLen: 50, label: "Name"},
        c: {type: "float", label: "C"},
        f: {type: "float", label: "F"},
        notseal: {type: "float", label: "Not seal"},
        seal: {type: "float", label: "Seal"}
    },

    componentDidMount: function () {
        $.authorizedGet("/api/v1.0/norm_isolation_data/item_id/" + this.props.equipmentId, function (result) {
            var item = (result['result']);
            var norms = this.props.data || {};
            for (var key in norms){
                item[key] = norms[key];
            }
            this.setState({norms: item, errors: this.props.errorData || {}});
        }.bind(this), 'json');
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
        this.props.saveNormGlobally('norm_isolation', state.norms, state.errors);
    },

    submit: function (equipmentId) {
        if (!this.isValid()) {
            NotificationManager.error('Please correct the errors');
            return;
        }
        var xhr = this._save(equipmentId);
        return xhr;
    },

    isValid: function () {
        // Check errors only if there are norms
        if (Object.keys(this.state.norms).length > 0) {
            return Object.keys(this.props.errorData).length == 0 || Object.keys(this.state.errors).length == 0;
        } else {
            return true;
        }
    },

    _save: function (equipmentId) {
        var norms = this.state.norms;
        var norm_id = norms.id;
        var normData = {equipment_id: equipmentId};

        for (var key in norms) {
            var value = norms[key];
            if (value === "") {
                value = null;
            }
            normData[key] = value;
        }
        delete normData.equipment;
        delete normData.id;
        delete normData.date_created;
        delete normData.norm;

        var xhr;
        if (Object.keys(normData).length) {
           xhr = $.authorizedAjax({
                url: '/api/v1.0/norm_isolation_data/' + norm_id,
                type: 'POST',
                beforeSend: function(jqXHR, settings) {
                    jqXHR.normName = 'norm_isolation';
                },
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
        var message = "Failed to add isolation norms";
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
				}
            } else {
                message = res.error;
            }
        }
        NotificationManager.error(message);
    },

    render: function () {
        let errors = this.props.errorData || this.state.errors;
        return (
            <div>
                <NewNormIsolationRow
                        data={this.state.norms}
                        handleChange={this.handleChange}
                        normId={this.state.predefinedNorms.id}
                        errors={errors}/>
            </div>

        )
    }
});

export default NewNormIsolationForm;
