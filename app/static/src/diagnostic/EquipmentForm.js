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

import AirBreakerParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/AirBreakerParams';
import BushingParams from './EquipmentForm_modules/AditionalEqupmentParameters_modules/BushingParams';
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
            isVisible: false,
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
                <FormGroup>
                    <FormControl
                        componentClass="select"
                        name="equipment_type_id"
                        placeholder="Equipment type"
                        onChange={this.handleChange}
                    >
                        <option value="select">Choose equipment type</option>
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
                <FormGroup>
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
                <FormGroup controlId="formControlsSelect2">
                    <FormControl
                        name="manufacturer_id"
                        componentClass="select"
                        placeholder="Manufacturer"
                        onChange={this.handleChange}>
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
                <FormGroup controlId="formControlsSelect3">
                    <FormControl
                        name="location_id"
                        componentClass="select"
                        placeholder="Select location"
                        onChange={this.handleChange}>
                        <option value="select">Select equipment location</option>
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
                <FormGroup controlId="formControlsSelect4">
                    <FormControl
                        name="visual_inspection_by_id"
                        componentClass="select"
                        placeholder="Visual inspection by"
                        onChange={this.handleChange}
                    >
                        <option value="select">Visual inspection by</option>
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
                <FormGroup controlId="formControlsSelect5">
                    <FormControl
                        componentClass="select"
                        name="assigned_to_id"
                        placeholder="Assigned to"
                        onChange={this.handleChange}>
                        <option value="select">Assign performer</option>
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
                <FormGroup controlId="formControlsSelect6">
                    <FormControl
                        name="norm_id"
                        componentClass="select"
                        placeholder="Select norm"
                        onChange={this.handleChange}>
                        <option value="select">Select norm</option>
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
                <FormGroup controlId="formControlsSelect7">
                    <FormControl componentClass="select"
                                 name="frequency"
                                 placeholder="Select frequency"
                                 onChange={this.handleChange}
                    >
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

                <FormGroup controlId="formControlsSelect8">
                    <FormControl componentClass="select"
                                 name="manufactured"
                                 placeholder="Select manufactured date"
                                 onChange={this.handleChange}
                    >

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

        if (typeof this.props.data == 'undefined') {
            return (<div></div>);
        }

        switch (this.props.data.text) {
            case 'Air circuit breaker':
                return (<AirBreakerParams handleChange={this.props.handleChange}/>);
                break;
            case 'Bushing':
                return (<BushingParams  onChange={this.props.onChange}/>);
                break;
            case 'Capacitor':
                return (<CapacitorParams onChange={this.props.onChange}/>);
                break;
            case 'Breaker':
                return (<BreakerParams onChange={this.props.onChange}/>);
                break;
            case 'Power Source':
                return (<PowerSourceParams onChange={this.props.onChange}/>);
                break;
            case 'Cable':
                return (<CableParams onChange={this.props.onChange}/>);
                break;
            case 'Switchgear':
                return (<SwitchGearParams onChange={this.props.onChange}/>);
                break;
            case 'Induction machine':
                return (<InductionMachineParams onChange={this.props.onChange}/>);
                break;
            case 'Synchronous machine':
                return (<SyncroMachineParams onChange={this.props.onChange}/>);
                break;
            case 'Tap changer':
                return (<TapChangerParams onChange={this.props.onChange}/>);
                break;
            case 'Rectifier':
                return (<RectifierParams onChange={this.props.onChange}/>);
                break;
            case 'Transformer':
                return (<TransformerParams onChange={this.props.onChange}/>);
                break;
            case 'Tank':
                return (<TankParams onChange={this.props.onChange}/>);
                break;
            case 'Switch':
                return (<SwitchParams onChange={this.props.onChange}/>);
                break;
            case 'Inductance':
                return (<InductanceParams onChange={this.props.onChange}/>);
                break;
            case 'Gas sensor':
                return (<GasSensorParams onChange={this.props.onChange}/>);
                break;

            default:
                return null;
        }
    }
});


const EquipmentForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            visual_date: new Date().toISOString(),
            eqAdPar: 'undefined',
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
                'upstream1',
                'phys_position',
                'tension4',
                'validated',
                'invalidation',
                'prev_serial_number',
                'prev_equipment_number'
            ]
        }
    },


    _save: function () {

        // console.log(this.state);
        var fields = this.state.fields;
        var data = {};

        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }

        // console.log(data);
        this.setState({
            form: data
        });

        return $.ajax({
            url: '/api/v1.0/equipment/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data, textStatus) {
            },
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })
    },

    _onSubmit: function (e) {
        e.preventDefault();
        var errors = this._validate();
        if (Object.keys(errors).length != 0) {
            this.setState({
                errors: errors
            });
            return;
        }
        var xhr = this._save();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },

    hideLoading: function () {
        this.setState({loading: false});
    },

    _onSuccess: function (data) {
        this.refs.eqtype_form.getDOMNode().reset();
        this.setState(this.getInitialState());
        // show success message
    },

    _onError: function (data) {
        var message = "Failed to create";
        var res = data.responseJSON;
        if (res.message) {
            message = data.responseJSON.message;
        }
        if (res.errors) {
            this.setState({
                errors: res.errors
            });
        }
    },

    _onChange: function (e) {

        var state = {};
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

        this.setState(state);
        console.log(this.state);
    },

    _validate: function () {
        var errors = {};
        // if(this.state.password == "") {
        //   errors.password = "Password is required";
        // }
        return errors;
    },

    _formGroupClass: function (field) {
        var className = "form-group ";
        if (field) {
            className += " has-error"
        }
        return className;
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
                <form id="eqtype_form" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div>
                        <Panel header="Add Equipment">

                            <div className="row">
                                <div className="col-lg-11">
                                    <EquipmentTypeSelectField
                                        source="/api/v1.0/equipment_type"
                                        value={this.state.equipment_type_id}
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
                                    <EqAdditionalParams data={this.state.option_text}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-11">
                                    <ManufacturerSelectField
                                        ref="mn"
                                        source="/api/v1.0/manufacturer"
                                        value={this.state.manufacturer_id}
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
                                        value={this.state.location_id}/>
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
                                        value={this.state.visual_inspection_by_id}/>
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
                                    />
                                </div>
                                <div className="col-md-1">
                                    <a id="norm"
                                       className="btn btn-primary"
                                       onClick={this.onNewButtonClick}
                                    >New</a>
                                </div>
                            </div>
                            <FormGroup controlId="inputNameField">
                                <ControlLabel>Name</ControlLabel>
                                <FormControl type="text"
                                             placeholder="Name"
                                             name="name"
                                />
                            </FormGroup>

                            <FormGroup>
                                <ControlLabel>Equipment Number</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Equipment number"
                                    name="equipment_number"
                                    value={this.state.equipment_number}
                                />
                            </FormGroup>

                            <FormGroup controlId="inputSerialField">
                                <ControlLabel>Serial</ControlLabel>
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
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5">
                                    <ManufacturedSelectField title="Manufactured"
                                                             id="manufactured"
                                                             value={this.state.manufactured}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="descriptionTextarea">
                                        <ControlLabel>Description</ControlLabel>
                                        <FormControl componentClass="textarea"
                                                     name="description"
                                                     placeholder="Description"
                                                     ref="description"
                                                     value={this.state.description}
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="commentsTextarea">
                                        <ControlLabel>Comments</ControlLabel>
                                        <FormControl componentClass="textarea"
                                                     name="comments"
                                                     placeholder="comments"
                                                     ref="comments"
                                        />
                                    </FormGroup>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-lg-5">
                                    <FormGroup controlId="DateTimePicker">
                                        <ControlLabel>Visual Date</ControlLabel>
                                        <DateTimePicker name="visual_date"
                                                        defaultText="Please select a date"
                                                        datetime={this.state.visual_date}
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="visualInspectionCommentsTextarea">
                                        <ControlLabel>Visual Inspection Comments</ControlLabel>
                                        <FormControl componentClass="textarea"
                                                     name="visual_inspection_comments"
                                                     placeholder="visComments"
                                                     ref="vis_comments"
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="tapChangesTextarea" ref="nr_taps">
                                        <ControlLabel>Nbr of Tap Changes LTC</ControlLabel>
                                        <FormControl componentClass="textarea"
                                                     name="nbr_of_tap_change_ltc"
                                                     placeholder="tap changes"
                                                     ref="nr_taps"
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="upstream1Input">
                                        <ControlLabel>Select equipment in Upstream 1</ControlLabel>
                                        <EquipmentSelectField
                                            source="/api/v1.0/equipment"
                                            value={this.state.upstream1}
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="physPositionInput">
                                        <ControlLabel>Physical Position</ControlLabel>
                                        <FormControl type="text"
                                                     placeholder="Physical position"
                                                     ref="phys_position"
                                                     name="phys_position"
                                                     value={this.state.phys_position}
                                        />
                                    </FormGroup>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="tensionInput">
                                        <ControlLabel>Tension4</ControlLabel>
                                        <FormControl type="text"
                                                     name="tension4"
                                                     placeholder="tension4"
                                                     ref="tension4"
                                                     value={this.state.tension4}
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <Checkbox ref="validated" name="validated">Validated</Checkbox>
                                    <Checkbox ref="invalidation" name="invalidation">Invalidation</Checkbox>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="prevSerialNumInput">
                                        <ControlLabel>Prev Serial Number</ControlLabel>
                                        <FormControl type="text"
                                                     name="prev_serial_number"
                                                     placeholder="Previous serial number"
                                                     ref="prev_serial"
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="prevEquipNumInput">
                                        <ControlLabel>Prev Equipment Number</ControlLabel>
                                        <FormControl type="text"
                                                     name="prev_equipment_number"
                                                     placeholder="Previous equipment number"
                                                     ref="prev_eqnumb"
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
