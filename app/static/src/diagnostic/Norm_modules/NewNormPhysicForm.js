import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import TextField from './TextField';
import {validate, updateFieldErrors} from '../helpers';

// Can be moved to CSS file, if one is loaded with the page
const overflowRowStyle = {
    'overflowX': "scroll",
    'whiteSpace': 'nowrap',
    'marginBottom': '10px'
};
const wrapCellStyle = {
    display: 'inline-block',
    float: 'none',
    'whiteSpace': 'initial'
};

var NewNormPhysicRow = React.createClass({
    handleChange: function (e) {
        this.props.handleChange(e, this.props.normId);
    },
    render: function () {
        var data = this.props.data;
        var errors = this.props.errors;
        return (
            <div className="col-md-11" style={overflowRowStyle}>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Name *"
                            name="name"
                            value={data.name}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Acid min"
                            name="acid_min"
                            value={data.acid_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Acid max"
                            name="acid_max"
                            value={data.acid_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Ift min"
                            name="ift_min"
                            value={data.ift_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Ift max"
                            name="ift_max"
                            value={data.ift_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="d1816 min"
                            name="d1816_min"
                            value={data.d1816_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="d1816 max"
                            name="d1816_max"
                            value={data.d1816_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="d877 min"
                            name="d877_min"
                            value={data.d877_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="d877 max"
                            name="d877_max"
                            value={data.d877_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Ift min"
                            name="ift_min"
                            value={data.ift_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Color min"
                            name="color_min"
                            value={data.color_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Ift min"
                            name="ift_min"
                            value={data.ift_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Color max"
                            name="color_max"
                            value={data.color_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Ift min"
                            name="ift_min"
                            value={data.ift_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Density min"
                            name="density_min"
                            value={data.density_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Density max"
                            name="density_max"
                            value={data.density_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Ift min"
                            name="ift_min"
                            value={data.ift_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="pf20 min"
                            name="pf20_min"
                            value={data.pf20_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Ift min"
                            name="ift_min"
                            value={data.ift_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="pf20 max"
                            name="pf20_max"
                            value={data.pf20_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Water min"
                            name="water_min"
                            value={data.water_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Water max"
                            name="water_max"
                            value={data.water_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Flashpoint min"
                            name="flashpoint_min"
                            value={data.flashpoint_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Flashpoint max"
                            name="flashpoint_max"
                            value={data.flashpoint_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Pourpoint min"
                            name="pourpoint_min"
                            value={data.pourpoint_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Pourpoint max"
                            name="pourpoint_max"
                            value={data.pourpoint_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Viscosity min"
                            name="viscosity_min"
                            value={data.viscosity_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Viscosity max"
                            name="viscosity_max"
                            value={data.viscosity_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="d1816_2 min"
                            name="d1816_2_min"
                            value={data.d1816_2_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="d1816_2 max"
                            name="d1816_2_max"
                            value={data.d1816_2_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="Water min"
                            name="water_min"
                            value={data.water_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="p100 min"
                            name="p100_min"
                            value={data.p100_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="p100 max"
                            name="p100_max"
                            value={data.p100_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="fluid_type_id"
                            name="fluid_type_id"
                            value={data.fluid_type_id}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="cei156 min"
                            name="cei156_min"
                            value={data.cei156_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2" style={wrapCellStyle}>
                        <TextField
                            onChange={this.handleChange}
                            label="cei156 max"
                            name="cei156_max"
                            value={data.cei156_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                </div>
        )
    }
});

var NewNormPhysicForm = React.createClass({

    getInitialState: function () {
        return {
            errors: {},
            predefinedNorms: [],
            norms: {}
        }
    },

    _validateDict: {
        name: {type: "text", required: true, maxLen: 50, label: "Name"},
        acid_min: {type: "float", label: "Acid min"},
        acid_max: {type: "float", label: "Acid max"},
        ift_min: {type: "float", label: "Ift min"},
        ift_max: {type: "float", label: "Ift max"},
        d1816_min: {type: "float", label: "d1816 min"},
        d1816_max: {type: "float", label: "d1816 max"},
        d877_min: {type: "float", label: "d877 min"},
        d877_max: {type: "float", label: "d877 max"},
        color_min: {type: "float", label: "Color min"},
        color_max: {type: "float", label: "Color max"},
        density_min: {type: "float", label: "Density min"},
        density_max: {type: "float", label: "Density max"},
        pf20_min: {type: "float", label: "pf20 min"},
        pf20_max: {type: "float", label: "pf20 max"},
        water_min: {type: "float", label: "Water min"},
        water_max: {type: "float", label: "Water max"},
        flashpoint_min: {type: "float", label: "Flashpoint min"},
        flashpoint_max: {type: "float", label: "Flashpoint max"},
        pourpoint_min: {type: "float", label: "Pourpoint min"},
        pourpoint_max: {type: "float", label: "Pourpoint max"},
        viscosity_min: {type: "float", label: "Viscosity min"},
        viscosity_max: {type: "float", label: "Viscosity max"},
        d1816_2_min: {type: "float", label: "d1816_2 min"},
        d1816_2_max: {type: "float", label: "d1816_2 max"},
        p100_min: {type: "float", label: "p100 min"},
        p100_max: {type: "float", label: "p100 max"},
        fluid_type_id: {type: "int", label: "fluid Type Id"},
        cei156_min: {type: "int", label: "cei156 min"},
        cei156_max: {type: "int", label: "cei156 max"}
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
        var errors = this.state.errors;
        for (var fld in this._validateDict) {
            for (var normId in this.state.norms) {
                if (this._validateDict[fld].required === true && !this.state.norms[normId][fld]) {
                    errors[fld + '_' + normId] = "This field is required";
                }
            }
        }
        this.setState({errors: errors});

        // Check errors only if there are norms
        if (Object.keys(this.state.norms) > 0) {
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
                url: '/api/v1.0/norm_data/multi/norm_physic_data',
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
        var items = [];

        for (var key in this.state.predefinedNorms) {
            var errorClass = '';
            Object.keys(this.state.errors).map(
                function(el) {
                    if (new RegExp('_' + this.state.predefinedNorms[key].id + '$').test(el)) {
                        errorClass = 'text-danger';
                    }
                }.bind(this)
            );

            items.push(
                <div className="row" key={this.state.predefinedNorms[key].id}>
                    <div className={errorClass + " col-md-1"}>
                        <strong>{this.state.predefinedNorms[key].name}</strong>
                    </div>
                    <NewNormPhysicRow
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

export default NewNormPhysicForm;
