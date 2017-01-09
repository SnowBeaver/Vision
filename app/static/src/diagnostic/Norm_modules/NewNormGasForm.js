import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import TextField from './TextField';

var NewNormGasForm = React.createClass({

    getInitialState: function () {
        return {
            params: [],
            phase_number: '',
            sealed: '',
            welded_cover: '',
            current_rating: '',
            errors: {},
            fields: ['name', 'c1', 'c2', 'c3', 'c4']
        }
    },

    handleChange: function(e){
        e.stopPropagation();
        var state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    },

    submit: function () {
        if (!this.is_valid()) {
            NotificationManager.error('Please correct the errors');
            return;
        }
        this._clearErrors();
        var xhr = this._save();
        if (xhr) {
            xhr.done(this._onSuccess)
                .fail(this._onError)
                .always(this.hideLoading)
        }
    },

    is_valid: function () {
        return (Object.keys(this.state.errors).length <= 0);
    },

    _clearErrors: function () {
        this.setState({errors: {}});
    },

    _onSuccess: function (data) {
        // Clean the form
        this.setState(this.getInitialState());
        NotificationManager.success('Equipment has been successfully saved');
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

    _save: function () {
        var fields = this.state.fields;
        var data = {};

        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            var value = this.state[key];
            if (value == "") {
                value = null;
            }
            data[key] = value;
        }
        var xhr;
        if (Object.keys(data).length) {
           xhr = $.authorizedAjax({
                url: '/api/v1.0/norm_gas_data/',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data)
            });
        }
        return xhr;
    },

    render: function () {
        var errors = (Object.keys(this.state.errors).length) ? this.state.errors : this.props.errors;
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="Name"
                            name="name"
                            value={this.state.name}
                            data-type="text"
                            data-len="50"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="Condition"
                            name="condition"
                            value={this.state.condition}
                            data-type="int"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="H2"
                            name="h2"
                            value={this.state.h2}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="CH4"
                            name="ch4"
                            value={this.state.ch4}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="C2H2"
                            name="c2h2"
                            value={this.state.c2h2}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="C2H4"
                            name="c2h4"
                            value={this.state.c2h4}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="C2H6"
                            name="c2h6"
                            value={this.state.c2h6}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="CO"
                            name="co"
                            value={this.state.co}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="CO2"
                            name="co2"
                            value={this.state.co2}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="TDCG"
                            name="tdcg"
                            value={this.state.tdcg}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="Fluid Level"
                            name="fluid_level"
                            value={this.state.fluid_level}
                            data-type="int"
                            errors={errors}
                        />
                    </div>
                </div>
            </div>

        )
    }
});

export default NewNormGasForm;
