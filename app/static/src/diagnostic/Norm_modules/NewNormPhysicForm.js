import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

import TextField from './TextField';
import {validate, updateFieldErrors} from '../helpers';


var FluidTypeSelectField = React.createClass({
    getInitialState: function () {
        return {
            items: []
        };
    },

    componentDidMount: function () {
        this.serverRequest = $.authorizedGet(this.props.source, function (result) {
            var items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    _onChange: function (e) {
        this.props.onChange(e);
    },

    render: function () {
        var options = [];
        var normId = (this.props["data-normId"] != null) ? this.props["data-normId"]: undefined;
        var name = (this.props.name != null) ? this.props.name : "";
        var errorName = name + '_' + normId;
        var validationState = (this.props.errors[errorName]) ? 'error' : null;
        var error = this.props.errors[errorName];

        for (var key in this.state.items) {
            options.push(<option key={this.state.items[key].id}
                                 value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect"
                           validationState={validationState}>
                    <FormControl componentClass="select"
                                 name="fluid_type_id"
                                 placeholder="Select fluid type"
                                 data-normId={normId}
                                 onChange={this._onChange}
                                 value={this.props.value}>
                        <option value="">Select fluid type</option>
                        {options}
                    </FormControl>
                    <HelpBlock className="warning">{error}</HelpBlock>
                </FormGroup>
            </div>
        );
    }
});

var NewNormPhysicRow = React.createClass({
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
                            label="Name *"
                            name="name"
                            value={data.name}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Acid min"
                            name="acid_min"
                            value={data.acid_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Acid max"
                            name="acid_max"
                            value={data.acid_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Ift min"
                            name="ift_min"
                            value={data.ift_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Ift max"
                            name="ift_max"
                            value={data.ift_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="d1816 min"
                            name="d1816_min"
                            value={data.d1816_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="d1816 max"
                            name="d1816_max"
                            value={data.d1816_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="d877 min"
                            name="d877_min"
                            value={data.d877_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="d877 max"
                            name="d877_max"
                            value={data.d877_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Color min"
                            name="color_min"
                            value={data.color_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Color max"
                            name="color_max"
                            value={data.color_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Density min"
                            name="density_min"
                            value={data.density_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Density max"
                            name="density_max"
                            value={data.density_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="pf20 min"
                            name="pf20_min"
                            value={data.pf20_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="pf20 max"
                            name="pf20_max"
                            value={data.pf20_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Water min"
                            name="water_min"
                            value={data.water_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Water max"
                            name="water_max"
                            value={data.water_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Flashpoint min"
                            name="flashpoint_min"
                            value={data.flashpoint_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Flashpoint max"
                            name="flashpoint_max"
                            value={data.flashpoint_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Pourpoint min"
                            name="pourpoint_min"
                            value={data.pourpoint_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Pourpoint max"
                            name="pourpoint_max"
                            value={data.pourpoint_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Viscosity min"
                            name="viscosity_min"
                            value={data.viscosity_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="Viscosity max"
                            name="viscosity_max"
                            value={data.viscosity_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="d1816_2 min"
                            name="d1816_2_min"
                            value={data.d1816_2_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="d1816_2 max"
                            name="d1816_2_max"
                            value={data.d1816_2_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="p100 min"
                            name="p100_min"
                            value={data.p100_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="p100 max"
                            name="p100_max"
                            value={data.p100_max}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
                        <FluidTypeSelectField
                            onChange={this.handleChange}
                            source="/api/v1.0/fluid_type"
                            label="fluid_type_id"
                            name="fluid_type_id"
                            value={data.fluid_type_id}
                            data-normId={this.props.normId}
                            errors={errors}
                            />
                    </div>
                    <div className="col-md-2">
                        <TextField
                            onChange={this.handleChange}
                            label="cei156 min"
                            name="cei156_min"
                            value={data.cei156_min}
                            data-normId={this.props.normId}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-2">
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
        name: {type: "text", required: true, maxLen: 20, label: "Name"},
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
        $.authorizedGet("/api/v1.0/norm_physic_data/item_id/" + this.props.equipmentId, function (result) {
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
        this.props.saveNormGlobally('norm_physic', state.norms, state.errors);
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
        var errors = this.state.errors;
        for (var fld in this._validateDict) {
            for (var norm in this.state.norms) {
                if (this._validateDict[fld].required === true && !this.state.norms[norm]) {
                    errors[fld] = "This field is required";
                }
            }
        }
        this.setState({errors: errors});

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
                url: '/api/v1.0/norm_physic_data/' + norm_id,
                type: 'POST',
                dataType: 'json',
                beforeSend: function(jqXHR, settings) {
                    jqXHR.normName = 'norm_physic';
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
        var message = "Failed to add physic norms";
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
                <NewNormPhysicRow
                        data={this.state.norms}
                        handleChange={this.handleChange}
                        normId={this.state.predefinedNorms.id}
                        errors={errors}/>
            </div>

        )
    }
});

export default NewNormPhysicForm;
