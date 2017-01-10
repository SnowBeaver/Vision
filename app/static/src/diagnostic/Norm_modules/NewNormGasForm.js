import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import TextField from './TextField';


var NewNormGasRow = React.createClass({
    handleChange: function (e) {
        this.props.handleChange(e, this.props.normId);
    },
    render: function () {
        var data = this.props.data;
        var errors = this.props.errors;
        return (
                <div className="col-md-11">
                    <div className="col-md-1">
                        <TextField
                            onChange={this.handleChange}
                            label="Name"
                            name="name"
                            value={data.name}
                            data-type="text"
                            data-len="50"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-1">
                        <TextField
                            onChange={this.handleChange}
                            label="Condition"
                            name="condition"
                            value={data.condition}
                            data-type="int"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-1">
                        <TextField
                            onChange={this.handleChange}
                            label="H2"
                            name="h2"
                            value={data.h2}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-1">
                        <TextField
                            onChange={this.handleChange}
                            label="CH4"
                            name="ch4"
                            value={data.ch4}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-1">
                        <TextField
                            onChange={this.handleChange}
                            label="C2H2"
                            name="c2h2"
                            value={data.c2h2}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-1">
                        <TextField
                            onChange={this.handleChange}
                            label="C2H4"
                            name="c2h4"
                            value={data.c2h4}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-1">
                        <TextField
                            onChange={this.handleChange}
                            label="C2H6"
                            name="c2h6"
                            value={data.c2h6}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-1">
                        <TextField
                            onChange={this.handleChange}
                            label="CO"
                            name="co"
                            value={data.co}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-1">
                        <TextField
                            onChange={this.handleChange}
                            label="CO2"
                            name="co2"
                            value={data.co2}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-1">
                        <TextField
                            onChange={this.handleChange}
                            label="TDCG"
                            name="tdcg"
                            value={data.tdcg}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-1">
                        <TextField
                            onChange={this.handleChange}
                            label="Fluid Level"
                            name="fluid_level"
                            value={data.fluid_level}
                            data-type="int"
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
                     'co2, tdcg', 'fluid_level'],
            predefinedNorms: [],
            norms: {}
        }
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
        return (Object.keys(this.state.errors).length <= 0);
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
                url: '/api/v1.0/norm_data/multi/norm_gas_data',
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
        var errors = (Object.keys(this.state.errors).length) ? this.state.errors : this.props.errors;
        var items = [];

        for (var key in this.state.predefinedNorms) {
            items.push(
                <div className="row" key={this.state.predefinedNorms[key].id}>
                    <div className="col-md-1"><strong>{this.state.predefinedNorms[key].name}</strong></div>
                    <NewNormGasRow
                        data={this.state}
                        handleChange={this.handleChange}
                        normId={this.state.predefinedNorms[key].id}
                        errors={this.state.errors}/>
                </div>
            );
        }
        return (
            <div>
                {items}
            </div>

        )
    }
});

export default NewNormGasForm;
