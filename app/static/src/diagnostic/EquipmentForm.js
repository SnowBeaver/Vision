import React from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import DateTimePicker from 'react-bootstrap-datetimepicker';
import Panel from 'react-bootstrap/lib/Panel';
import Modal from 'react-bootstrap/lib/Modal';
import NewManufacturerForm from './EquipmentForm_modules/NewManufacturerForm';
import NewLocationForm from './EquipmentForm_modules/NewLocationForm';
import NewNormForm from './EquipmentForm_modules/NewNormForm';
import NewEquipmentTypeForm from './EquipmentForm_modules/NewEquipmentTypeForm';
import CreatedByForm from './CampaignForm_modules/NewUserForm';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import AirBreakerParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/AirBreakerParams';
import BushingParams  from './EquipmentForm_modules/AditionalEqupmentParameters_modules/BushingParams';
import CapacitorParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/CapacitorParams';
import BreakerParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/BreakerParams';
import PowerSourceParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/PowerSourceParams';
import CableParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/CableParams';
import SwitchGearParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/SwitchGearParams';
import InductionMachineParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/InductionMachineParams';
import SyncroMachineParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/SyncroMachineParams';
import TapChangerParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/TapChangerParams';
import RectifierParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/RectifierParams';
import TransformerParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/TransformerParams';
import TankParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/TankParams';
import SwitchParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/SwitchParams';
import InductanceParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/InductanceParams';
import GasSensorParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/GasSensorParams';

import {findDOMNode} from 'react-dom';
injectTapEventPlugin();

var options = [];
var items = [];

var first_year = 1900;
var current_date = new Date();
var current_year = current_date.getFullYear();
var year_array = [];
year_array.push(first_year);
while (first_year != current_year) {
    first_year++;
    year_array.push(first_year.toString());
}


var EquipmentTypeSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value

        });
    },

    getInitialState: function () {
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');

    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}
                                   accessKey={this.state.items[key].table_name}
            >{`${this.state.items[key].name}`}</option>);

        }
        return (
            <div>
                <FormGroup controlId="formControlsSelect1"
                           validationState={this.props.errors.equipment_type_id ? 'error' : null}>
                    <HelpBlock className="warning">{this.props.errors.equipment_type_id}</HelpBlock>
                    <FormControl
                        componentClass="select"
                        name="equipment_type_id"
                        placeholder="Equipment type"
                        onChange={this.handleChange}
                        required={this.props.required}
                        value={this.props.value}>
                        <option value="">Choose equipment type{this.props.required ? " *" : ""}</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var EquipmentSelectField = React.createClass({

    getInitialState: function () {
        return {
            items: []
        };
    },

    handleChange: function (event, index, value) {

        this.setState({
            value: event.target.value
        })
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {
            var items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    removeSelect: function () {
        this.props.removeSelect(this.props.index);
    },

    getSelected: function () {
        return this.state.selected || this.state.value;
    },

    setSelected: function (selected) {
        this.setState({
            selected: selected
        })
    },

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(
                <option key={this.state.items[key].id}
                        value={this.state.items[key].id}>
                    {`${this.state.items[key].name} ${this.state.items[key].serial}`}
                </option>
            );
        }

        return (
            <div>
                <FormGroup validationState={this.props.errors.equipment_id ? 'error' : null}>
                    <HelpBlock className="warning">{this.props.errors.equipment_id}</HelpBlock>
                    <FormControl
                        componentClass="select"
                        placeholder="Select equipment in upstream"
                        name="equipment_id"
                        onChange={this.handleChange}
                        value={this.props.value}>
                        <option value="select">Choose equipment in upstream</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var ManufacturerSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

    getInitialState: function () {
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        return (
            <div>
                <FormGroup controlId="formControlsSelect2"
                           validationState={this.props.errors.manufacturer_id ? 'error' : null}>
                    <HelpBlock className="warning">{this.props.errors.manufacturer_id}</HelpBlock>
                    <FormControl
                        name="manufacturer_id"
                        componentClass="select"
                        placeholder="Manufacturer"
                        onChange={this.handleChange}
                        value={this.props.value}>
                        <option value="select">Choose manufacturer</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var LocationSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value,
        })

    },

    getInitialState: function () {
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect3"
                           validationState={this.props.errors.location_id ? 'error' : null}>
                    <HelpBlock className="warning">{this.props.errors.location_id}</HelpBlock>
                    <FormControl
                        name="location_id"
                        componentClass="select"
                        placeholder="Select location"
                        onChange={this.handleChange}
                        required={this.props.required}
                        value={this.props.value}>
                        <option value="">Select equipment location{this.props.required ? " *" : ""}</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var VisualInspBySelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

    getInitialState: function () {
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option value={this.state.items[key].id}
                                   key={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect4"
                           validationState={this.props.errors.visual_inspection_by_id ? 'error' : null}>
                    <HelpBlock className="warning">{this.props.errors.visual_inspection_by_id}</HelpBlock>
                    <FormControl
                        name="visual_inspection_by_id"
                        componentClass="select"
                        placeholder="Visual inspection by"
                        onChange={this.handleChange}
                        required={this.props.required}
                        value={this.props.value}>
                        <option value="">Visual inspection by{this.props.required ? " *" : ""}</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var AssignedToSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

    getInitialState: function () {
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option value={this.state.items[key].id}
                                   key={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect5"
                           validationState={this.props.errors.assigned_to_id ? 'error' : null}>
                    <HelpBlock className="warning">{this.props.errors.assigned_to_id}</HelpBlock>
                    <FormControl
                        componentClass="select"
                        name="assigned_to_id"
                        placeholder="Assigned to"
                        onChange={this.handleChange}
                        required={this.props.required}
                        value={this.props.value}>
                        <option value="">Assign performer{this.props.required ? " *" : ""}</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var NormSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

    getInitialState: function () {
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect6"
                           validationState={this.props.errors.norm_id ? 'error' : null}>
                    <HelpBlock className="warning">{this.props.errors.norm_id}</HelpBlock>
                    <FormControl
                        name="norm_id"
                        componentClass="select"
                        placeholder="Select norm"
                        onChange={this.handleChange}
                        required={this.props.required}
                        value={this.props.value}>
                        <option value="">Select norm{this.props.required ? " *" : ""}</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var FrequencySelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })

    },

    getInitialState: function () {
        return {
            items: ['25', '50', '60', 'DC'],
            isVisible: false,
            showNewEquipmentTypeForm: false,
            showNewManufacturerForm: false,
            showNewLocationForm: false,
            showCreatedByForm: false,
            showNewNormForm: false
        };
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        options = [];
        for (var key in this.state.items) {
            options.push(<option key={this.state.items[key]}
                                 value={this.state.items[key]}>{`${this.state.items[key]}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect7"
                           validationState={this.props.errors.frequency ? 'error' : null}>
                    <HelpBlock className="warning">{this.props.errors.frequency}</HelpBlock>
                    <FormControl componentClass="select"
                                 name="frequency"
                                 placeholder="Select frequency"
                                 onChange={this.handleChange}
                                 value={this.props.value}>
                        <option value="select">Choose Frequency</option>
                        {options}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var ManufacturedSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

    getInitialState: function () {
        return {
            items: year_array,
            isVisible: false
        };
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        options = [];
        for (var key in this.state.items) {
            options.push(<option key={this.state.items[key]}
                                 value={this.state.items[key]}>{`${this.state.items[key]}`}</option>);
        }

        return (
            <div>

                <FormGroup controlId="formControlsSelect8"
                           validationState={this.props.errors.manufactured ? 'error' : null}>
                    <HelpBlock className="warning">{this.props.errors.manufactured}</HelpBlock>
                    <FormControl componentClass="select"
                                 name="manufactured"
                                 placeholder="Select manufactured date"
                                 onChange={this.handleChange}
                                 value={this.props.value}>

                        <option value="select">Year manufactured</option>
                        {options}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var EqAdditionalParams = React.createClass({

    getInitialState: function () {
        return {
            tableName: ''
        }
    },
    componentDidMount: function () {
    },

    render: function () {

        if (typeof this.props.data.option_text == 'undefined') {
            return (<div></div>);
        }
        switch (this.props.data.option_text.text) {
            case 'Air circuit breaker':
                return (<AirBreakerParams />);
                break;
            case 'Bushing':
                return (<BushingParams />);
                break;
            case 'Capacitor':
                return (<CapacitorParams/>);
                break;
            case 'Breaker':
                return (<BreakerParams/>);
                break;
            case 'Power Source':
                return (<PowerSourceParams />);
                break;
            case 'Cable':
                return (<CableParams />);
                break;
            case 'Switchgear':
                return (<SwitchGearParams />);
                break;
            case 'Induction machine':
                return (<InductionMachineParams />);
                break;
            case 'Synchronous machine':
                return (<SyncroMachineParams />);
                break;
            case 'Tap changer':
                return (<TapChangerParams />);
                break;
            case 'Rectifier':
                return (<RectifierParams />);
                break;
            case 'Transformer':
                return (<TransformerParams />);
                break;
            case 'Tank':
                return (<TankParams />);
                break;
            case 'Switch':
                return (<SwitchParams />);
                break;
            case 'Inductance':
                return (<InductanceParams />);
                break;
            case 'Gas sensor':
                return (<GasSensorParams />);
                break;

            default:
                return null;
        }
    }
});


const EquipmentForm = React.createClass({

    getInitialState: function () {

        var response = {
            loading: false,
            errors: {},
            visual_date: new Date().toISOString(),
            subform: {},
            fields: [
                'equipment_type_id',
                'manufacturer_id',
                'location_id',
                'visual_inspection_by_id',
                'assigned_to_id',
                'norm_id',
                'name',
                'serial',
                'equipment_number',
                'frequency',
                'description',
                'comments',
                'visual_inspection_comments',
                'nbr_of_tap_change_ltc',
                //'upstream1',  // TODO: Exclude upstream field or let adding multiple upstreams
                'phys_position',
                'tension4',
                'validated',
                'invalidation',
                'prev_serial_number',
                'prev_equipment_number',
                'manufactured'
            ],
            changedFields: []
        };

        for (var i = 0; i < response.fields.length; i++) {
            response[response.fields[i]] = "";
        }
        response["visual_date"] = new Date().toISOString();
        return response;
    },


    _save: function () {

        var fields = this.state.fields;
        var subform = this.state.subform;
        var data = {};

        var path = this.state.table_name;


        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }

        return $.ajax({
            url: '/api/v1.0/equipment/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
                if (subform != 0) {
                    $.ajax({
                        url: '/api/v1.0/' + path + '/',
                        type: 'POST',
                        dataType: 'json',
                        contentType: 'application/json',
                        data: JSON.stringify(subform),
                        success: function (data) {
                        }
                    });
                }
            },
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })

    },

    _onSubmit: function (e) {
        e.preventDefault();
        if (!this._validate()){
            NotificationManager.error('Please correct the errors');
            return;
        }
        this._clearErrors();
        var xhr = this._save();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },

    hideLoading: function () {
        this.setState({loading: false});
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
            // Join multiple error messages
            for (var field in res.error){
                var errorMessage = res.error[field];
                if (Array.isArray(errorMessage)){
                     errorMessage = errorMessage.join(". ");
                }
                res.error[field] = errorMessage;
            }
            this.setState({
                errors: res.error
            });
        }
        NotificationManager.error(message);
    },

    _clearErrors: function () {
        this.setState({errors: {}});
    },

    _onChange: function (e) {
        var state = {};

        if(typeof e.target.options[e.target.selectedIndex].accessKey!= 'undefined'){
              state['table_name']= e.target.options[e.target.selectedIndex].accessKey;
        }

        if ((this.state.fields.indexOf(e.target.name) == -1) || e.target.name === 'serial') {
            if (e.target.type == 'checkbox') {
                this.state.subform[e.target.name] = e.target.checked;
            } else if (e.target.type == 'radio') {
                this.state.subform[e.target.name] = e.target.value;
            } else if (e.target.type == 'select-one') {
                this.state.subform[e.target.name] = e.target.value;
            } else {
                this.state.subform[e.target.name] = e.target.value;
            }
        }

// ||e.target.name === 'equipment_type_id'
//

        if (e.target.type == 'checkbox') {
            state[e.target.name] = e.target.checked;
        } else if (e.target.type == 'radio') {
            state[e.target.name] = e.target.value;
        } else if (e.target.type == 'select-one') {
            state[e.target.name] = e.target.value;
        } else {
            state[e.target.name] = e.target.value;
        }

        if (e.target.name == 'equipment_type_id') {
            state['option_text'] = {
                name: e.target.name,
                id: e.target.value,
                text: e.target[e.target.selectedIndex].text
            }
        }

        // TODO: Exclude upstream field or let adding multiple upstreams
        if (e.target.name != "upstream1"){
            state.changedFields = this.state.changedFields.concat([e.target.name]);
        }

        var errors = this._validateFieldType(e.target.value, e.target.getAttribute("data-type"));
        state = this._updateFieldErrors(e.target.name, state, errors);

        this.setState(state);

    },

    _validateFieldType: function (value, type){
        var errors = {};
        if (type != undefined && value){
            var typePatterns = {
                "int": /^(-|\+)?(0|[1-9]\d*)$/,
                "float": /^(-|\+?)[0-9]+(\.)?[0-9]*$/
            };
            if (!typePatterns[type].test(value)){
                errors = "Invalid value. Should be " + type;
            }
        }
        return errors;
    },

    _updateFieldErrors: function (fieldName, state, errors){
        // Clear existing errors related to the current field as it has been edited
        state.errors = this.state.errors;
        delete state.errors[fieldName];

        // Update errors with new ones, if present
        if (Object.keys(errors).length){
            state.errors[fieldName] = errors
        }
        return state;
    },

    _validate: function () {
        var response = true;
        if (Object.keys(this.state.errors).length > 0){
            response = false;
        }
        return response;
    },

    _formGroupClass: function (field) {
        var className = "form-group ";
        if (field) {
            className += " has-error"
        }
        return className;
    },

    onEquipmentTypeChange: function (e) {
        $.get('/api/v1.0/equipment_type/1', function (result) {

            var eqtype_fields = (result['result']);
            this.setState({
                eqtype_fields: eqtype_fields
            });
        }.bind(this), 'json');
    },

    handleClose: function (e) {

    },

    closeNewEquipmentTypeForm: function () {
        this.setState({
            showNewEquipmentTypeForm: false
        })
    },

    closeNewManufacturerForm: function () {
        this.setState({
            showNewManufacturerForm: false
        })
    },

    closeNewLocationForm: function () {
        this.setState({
            showNewLocationForm: false
        })
    },

    closeCreatedByForm: function () {
        this.setState({
            showCreatedByForm: false
        })
    },

    closeNewNormForm: function () {
        this.setState({
            showNewNormForm: false
        })
    },

    onNewButtonClick: function (e) {
        if (e.target.id === 'eq_type') {
            this.setState({
                showNewEquipmentTypeForm: true,
                showNewManufacturerForm: false,
                showNewLocationForm: false,
                showCreatedByForm: false,
                showNewNormForm: false
            })
        }
        else if (e.target.id === 'manufac') {
            this.setState({
                showNewEquipmentTypeForm: false,
                showNewManufacturerForm: true,
                showNewLocationForm: false,
                showCreatedByForm: false,
                showNewNormForm: false
            })
        }
        else if (e.target.id === 'location') {
            this.setState({
                showNewEquipmentTypeForm: false,
                showNewManufacturerForm: false,
                showNewLocationForm: true,
                showCreatedByForm: false,
                showNewNormForm: false
            })
        }
        else if (e.target.id === 'vis_insp_by') {
            this.setState({
                showNewEquipmentTypeForm: false,
                showNewManufacturerForm: false,
                showNewLocationForm: false,
                showCreatedByForm: true,
                showNewNormForm: false
            })
        }
        else if (e.target.id === 'assign_to') {
            this.setState({
                showNewEquipmentTypeForm: false,
                showNewManufacturerForm: false,
                showNewLocationForm: false,
                showCreatedByForm: true,
                showNewNormForm: false
            })
        }
        else if (e.target.id === 'norm') {
            this.setState({
                showNewEquipmentTypeForm: false,
                showNewManufacturerForm: false,
                showNewLocationForm: false,
                showCreatedByForm: false,
                showNewNormForm: true
            })
        }
    },


    render: function () {
        return (
            <div className="form-container">
                <form id="eqtype_form" ref="eqtype_form" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div>
                        <Panel header="Add Equipment">

                            <div className="row">
                                <div className="col-lg-11">
                                    <EquipmentTypeSelectField
                                        source="/api/v1.0/equipment_type"
                                        value={this.state.equipment_type_id}
                                        onChange={this.onEquipmentTypeChange}
                                        errors={this.state.errors}
                                        required
                                    />
                                </div>
                                <div className="col-md-1">
                                    <a id="eq_type"
                                       className="btn btn-primary"
                                       onClick={this.onNewButtonClick}
                                    >New</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-11">
                                    <EqAdditionalParams data={this.state}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-11">
                                    <ManufacturerSelectField
                                        ref="mn"
                                        source="/api/v1.0/manufacturer"
                                        value={this.state.manufacturer_id}
                                        errors={this.state.errors}
                                    />
                                </div>
                                <div className="col-md-1">
                                    <a id="manufac"
                                       className="btn btn-primary"
                                       onClick={this.onNewButtonClick}
                                    >New</a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-11">
                                    <LocationSelectField
                                        ref="loc"
                                        source="/api/v1.0/location"
                                        value={this.state.location_id}
                                        errors={this.state.errors}
                                        required/>
                                </div>
                                <div className="col-md-1">
                                    <a id="location"
                                       className="btn btn-primary"
                                       onClick={this.onNewButtonClick}
                                    >New</a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-11">
                                    <VisualInspBySelectField
                                        ref="vis"
                                        source="/api/v1.0/visual_inspection_by"
                                        value={this.state.visual_inspection_by_id}
                                        errors={this.state.errors}
                                        required/>
                                </div>
                                <div className="col-md-1">
                                    <a id="vis_insp_by"
                                       className="btn btn-primary"
                                       onClick={this.onNewButtonClick}
                                    >New</a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-11">
                                    <AssignedToSelectField
                                        ref="ast"
                                        source="/api/v1.0/assigned_to"
                                        value={this.state.assigned_to_id}
                                        errors={this.state.errors}
                                        required
                                    />
                                </div>
                                <div className="col-md-1">
                                    <a id="assign_to"
                                       className="btn btn-primary"
                                       onClick={this.onNewButtonClick}
                                    >New</a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-11">
                                    <NormSelectField
                                        ref="norms"
                                        source="/api/v1.0/norm"
                                        value={this.state.norm_id}
                                        errors={this.state.errors}
                                        required
                                    />
                                </div>
                                <div className="col-md-1">
                                    <a id="norm"
                                       className="btn btn-primary"
                                       onClick={this.onNewButtonClick}
                                    >New</a>
                                </div>
                            </div>
                            <FormGroup controlId="inputNameField"
                                       validationState={this.state.errors.name ? 'error' : null}>
                                <ControlLabel>Name</ControlLabel>
                                <span className="text-danger"> *</span>
                                <HelpBlock className="warning">{this.state.errors.name}</HelpBlock>
                                <FormControl type="text"
                                             placeholder="Name"
                                             name="name"
                                             required
                                             value={this.state.name}
                                />
                            </FormGroup>

                            <FormGroup validationState={this.state.errors.equipment_number ? 'error' : null}>
                                <ControlLabel>Equipment Number</ControlLabel>
                                <span className="text-danger"> *</span>
                                <HelpBlock className="warning">{this.state.errors.equipment_number}</HelpBlock>
                                <FormControl
                                    type="text"
                                    placeholder="Equipment number"
                                    name="equipment_number"
                                    value={this.state.equipment_number}
                                    required
                                />
                            </FormGroup>

                            <FormGroup controlId="inputSerialField"
                                       validationState={this.state.errors.serial ? 'error' : null}>
                                <ControlLabel>Serial</ControlLabel>
                                <HelpBlock className="warning">{this.state.errors.serial}</HelpBlock>
                                <FormControl type="text"
                                             name="serial"
                                             placeholder="serial"
                                             ref="serial"
                                             value={this.state.serial}
                                />
                            </FormGroup>
                            <div className="row">
                                <div className="col-lg-5">
                                    <FrequencySelectField name="frequency"
                                                          title="Frequency"
                                                          ref="frequency"
                                                          value={this.state.frequency}
                                                          errors={this.state.errors}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5">
                                    <ManufacturedSelectField title="Manufactured"
                                                             id="manufactured"
                                                             value={this.state.manufactured}
                                                             errors={this.state.errors}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="descriptionTextarea"
                                               validationState={this.state.errors.description ? 'error' : null}>
                                        <ControlLabel>Description</ControlLabel>
                                        <span className="text-danger"> *</span>
                                        <HelpBlock className="warning">{this.state.errors.description}</HelpBlock>
                                        <FormControl componentClass="textarea"
                                                     name="description"
                                                     placeholder="Description"
                                                     ref="description"
                                                     value={this.state.description}
                                                     required
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="commentsTextarea"
                                               validationState={this.state.errors.comments ? 'error' : null}>
                                        <ControlLabel>Comments</ControlLabel>
                                        <HelpBlock className="warning">{this.state.errors.comments}</HelpBlock>
                                        <FormControl componentClass="textarea"
                                                     name="comments"
                                                     placeholder="comments"
                                                     ref="comments"
                                                     value={this.state.comments}
                                        />
                                    </FormGroup>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-lg-5">
                                    <FormGroup controlId="DateTimePicker"
                                               validationState={this.state.errors.visual_date ? 'error' : null}>
                                        <ControlLabel>Visual Date</ControlLabel>
                                        <HelpBlock className="warning">{this.state.errors.visual_date}</HelpBlock>
                                        <DateTimePicker name="visual_date"
                                                        defaultText="Please select a date"
                                                        datetime={this.state.visual_date}
                                                        ref=" visual_date"
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="visualInspectionCommentsTextarea"
                                               validationState={this.state.errors.visual_inspection_comments ? 'error' : null}>
                                        <ControlLabel>Visual Inspection Comments</ControlLabel>
                                        <HelpBlock className="warning">{this.state.errors.visual_inspection_comments}</HelpBlock>
                                        <FormControl componentClass="textarea"
                                                     name="visual_inspection_comments"
                                                     placeholder="visComments"
                                                     ref="vis_comments"
                                                     value={this.state.visual_inspection_comments}
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="tapChangesTextarea" ref="nr_taps"
                                              validationState={this.state.errors.nbr_of_tap_change_ltc ? 'error' : null}>
                                        <ControlLabel>Nbr of Tap Changes LTC</ControlLabel>
                                        <HelpBlock className="warning">{this.state.errors.nbr_of_tap_change_ltc}</HelpBlock>
                                        <FormControl componentClass="textarea"
                                                     name="nbr_of_tap_change_ltc"
                                                     placeholder="tap changes"
                                                     ref="nr_taps"
                                                     value={this.state.nbr_of_tap_change_ltc}
                                                     data-type="int"
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="physPositionInput"
                                               validationState={this.state.errors.phys_position ? 'error' : null}>
                                        <ControlLabel>Physical Position</ControlLabel>
                                        <HelpBlock className="warning">{this.state.errors.phys_position}</HelpBlock>
                                        <FormControl type="text"
                                                     placeholder="Physical position"
                                                     ref="phys_position"
                                                     name="phys_position"
                                                     value={this.state.phys_position}
                                                     data-type="int"
                                        />
                                    </FormGroup>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="tensionInput"
                                               validationState={this.state.errors.tension4 ? 'error' : null}>
                                        <ControlLabel>Tension4</ControlLabel>
                                        <HelpBlock className="warning">{this.state.errors.tension4}</HelpBlock>
                                        <FormControl type="text"
                                                     name="tension4"
                                                     placeholder="tension4"
                                                     ref="tension4"
                                                     value={this.state.tension4}
                                                     data-type="float"
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <Checkbox ref="validated"
                                              name="validated"
                                              checked={this.state.validated}>Validated</Checkbox>
                                    <Checkbox ref="invalidation"
                                              name="invalidation"
                                              checked={this.state.invalidation}>Invalidation</Checkbox>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="prevSerialNumInput"
                                               validationState={this.state.errors.prev_serial_number ? 'error' : null}>
                                        <ControlLabel>Prev Serial Number</ControlLabel>
                                        <HelpBlock className="warning">{this.state.errors.prev_serial_number}</HelpBlock>
                                        <FormControl type="text"
                                                     name="prev_serial_number"
                                                     placeholder="Previous serial number"
                                                     ref="prev_serial"
                                                     value={this.state.prev_serial_number}
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="prevEquipNumInput"
                                               validationState={this.state.errors.prev_equipment_number ? 'error' : null}>
                                        <ControlLabel>Prev Equipment Number</ControlLabel>
                                        <HelpBlock className="warning">{this.state.errors.prev_equipment_number}</HelpBlock>
                                        <FormControl type="text"
                                                     name="prev_equipment_number"
                                                     placeholder="Previous equipment number"
                                                     ref="prev_eqnumb"
                                                     value={this.state.prev_equipment_number}
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <Button bsStyle="success" type="submit" className="pull-right">Save</Button>
                                    <Button bsStyle="danger"
                                            onClick={this.handleClose}
                                            className="pull-right margin-right-xs">Cancel</Button>
                                </div>
                            </div>
                        </Panel>
                    </div>
                </form>

                <Modal show={this.state.showNewEquipmentTypeForm}>
                    <Modal.Header>
                        <Modal.Title>New Equipment Type</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewEquipmentTypeForm data={this.props.data} handleClose={this.closeNewEquipmentTypeForm}/>
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.showNewManufacturerForm}>
                    <Modal.Header>
                        <Modal.Title>New Manufacturer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewManufacturerForm data={this.props.data} handleClose={this.closeNewManufacturerForm}/>
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.showNewLocationForm}>
                    <Modal.Header>
                        <Modal.Title>New Location</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewLocationForm data={this.props.data} handleClose={this.closeNewLocationForm}/>
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.showCreatedByForm}>
                    <Modal.Header>
                        <Modal.Title>New User Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CreatedByForm data={this.props.data} handleClose={this.closeCreatedByForm}/>
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.showNewNormForm}>
                    <Modal.Header>
                        <Modal.Title>New Norm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewNormForm data={this.props.data} handleClose={this.closeNewNormForm}/>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
});

export default EquipmentForm;
