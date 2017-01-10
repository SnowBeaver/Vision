import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import TextField from './TextField';


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
                            label="C"
                            name="c"
                            value={data.c}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="F"
                            name="f"
                            value={data.f}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Seal"
                            name="seal"
                            value={data.seal}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Not Seal"
                            name="notseal"
                            value={data.notseal}
                            data-type="float"
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
                url: '/api/v1.0/norm_data/multi/norm_isolation_data',
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
                    <div className="col-md-1"><strong>{this.state.predefinedNorms[key].c}</strong></div>
                    <NewNormIsolationRow
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

export default NewNormIsolationForm;
