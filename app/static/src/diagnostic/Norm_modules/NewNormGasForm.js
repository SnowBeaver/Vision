import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import TextField from './TextField';
import {validate, updateFieldErrors} from '../helpers';


var NewNormGasRow = React.createClass({
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
                            label="Condition"
                            name="condition"
                            value={data.condition}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="H2"
                            name="h2"
                            value={data.h2}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="CH4"
                            name="ch4"
                            value={data.ch4}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="C2H2"
                            name="c2h2"
                            value={data.c2h2}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="C2H4"
                            name="c2h4"
                            value={data.c2h4}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="C2H6"
                            name="c2h6"
                            value={data.c2h6}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="CO"
                            name="co"
                            value={data.co}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="CO2"
                            name="co2"
                            value={data.co2}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="TDCG"
                            name="tdcg"
                            value={data.tdcg}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Fluid Level"
                            name="fluid_level"
                            value={data.fluid_level}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                </div>
        )
    }

});

var NewNormGasForm = React.createClass({

    getInitialState: function () {
        return {
            errors: {},
            fields: ['name', 'condition', 'h2', 'ch4', 'c2h2', 'c2h4', 'c2h6', 'co',
                     'co2', 'tdcg', 'fluid_level'],
            predefinedNorms: [],
            norms: {}
        }
    },

    _validateDict: {
        name: {type: "text", maxLen: 50, label: "Name"},
        condition: {type: "int", label: "Condition"},
        h2: {type: "float", label: "H2"},
        ch4: {type: "float", label: "CH4"},
        c2h2: {type: "float", label: "C2H2"},
        c2h4: {type: "float", label: "C2H4"},
        c2h6: {type: "float", label: "C2H6"},
        co: {type: "float", label: "CO"},
        co2: {type: "float", label: "CO2"},
        tdcg: {type: "float", label: "TDCG"},
        fluid_level: {type: "int", label: "Fluid level"}
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
        this.props.saveNormGlobally('norm_gas', state.norms);
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
                url: '/api/v1.0/norm_gas_data/',
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
        //this.props.cleanForm();
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
                <NewNormGasRow
                        data={this.state.norms}
                        handleChange={this.handleChange}
                        normId={this.state.predefinedNorms.id}
                        errors={this.state.errors}/>
            </div>

        )
    }
});

export default NewNormGasForm;
