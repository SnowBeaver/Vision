import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField'
import Panel from 'react-bootstrap/lib/Panel';
import Radio from 'react-bootstrap/lib/Radio';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Modal from 'react-bootstrap/lib/Modal';
import {findDOMNode} from 'react-dom';
import NewUserForm from './CampaignForm_modules/NewUserForm';
import ElectricalProfileForm from './ElectricalProfileForm';
import FluidProfileForm from './FluidProfileForm';
import NewMaterialForm from './NewTestForm_modules/NewMaterialForm';
import NewContractForm from './CampaignForm_modules/NewContractForm';
import NewLabForm from './CampaignForm_modules/NewLabForm';
import NewFluidForm from './NewTestForm_modules/NewFluidForm';
import NewSyringeForm from './NewTestForm_modules/NewSyringeForm';


var items = [];

var TestProfileSelectField = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true
        };
    },

    handleChange: function (event) {
        // console.log(event.target.name);
        // console.log(event.target.value);
        this.setState({
            value: event.target.value
        });
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {
            this.setState({
                items: result['result']
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
        var options = [];
        for (var key in this.state.items) {
            var index = Math.random() + '_' + this.state.items[key].id;
            options.push(<option key={index}
                                 value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <FormGroup>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    value={this.props.value}
                    onChange={this.handleChange}
                    name="test_type_id">
                    <option value="select_prof">Choose profile from saved</option>
                    {options}
                </FormControl>
            </FormGroup>
        )
    }
});


var PerformedBySelectField = React.createClass({

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

            var items = (result['result']);
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
    
    setSelected: function (data) {
        this.componentDidMount();
        this.setState({
            selected: data.result
        });
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
                        placeholder="select"
                        onChange={this.handleChange}
                        value={this.props.value}
                        name="performed_by_id">
                        <option key="0" value="select">Performed by</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var MaterialSelectField = React.createClass({

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

            var items = (result['result']);
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

    setSelected: function (data) {
        this.componentDidMount();
        this.setState({
            selected: data.result
        });
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
                        placeholder="select material"
                        onChange={this.handleChange}
                        value={this.props.value}
                        name="material_id">
                        <option key="0" value="select">Material</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var FluidTypeSelectField = React.createClass({

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

            var items = (result['result']);
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

    setSelected: function (data) {
        this.componentDidMount();
        this.setState({
            selected: data.result
        });
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
                        placeholder="select"
                        onChange={this.handleChange}
                        value={this.props.value}
                        name="fluid_type_id"
                    >
                        <option key="0" value="select">Fluid Type</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var LabAnalyserSelectField = React.createClass({

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

            var items = (result['result']);
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

    setSelected: function (data) {
        this.componentDidMount();
        this.setState({
            selected: data.result
        });
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
                        placeholder="select"
                        onChange={this.handleChange}
                        value={this.props.value}
                        name="lab_id">
                        <option key="0" value="select">Lab/On-Line Analyser</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var LabContractSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value,
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

            var items = (result['result']);
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

    setSelected: function (data) {
        this.componentDidMount();
        this.setState({
            selected: data.result
        });
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
                        placeholder="select"
                        onChange={this.handleChange}
                        value={this.props.value}
                        name="lab_contract_id">
                        <option key="0" value="select">Lab Contract</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var SyringeNumberSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value,
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

            var items = (result['result']);
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

    setSelected: function (data) {
        this.componentDidMount();
        this.setState({
            selected: data.result
        });
    },
    
    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].serial}`}</option>);
        }

        return (
            <div>
                <FormGroup>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChange}
                        value={this.props.value}
                        name="seringe_num">
                        <option key="0" value="select">Syringe Number</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var TestReasonSelectField = React.createClass({

    handleChange: function (event) {
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

            var items = (result['result']);
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

    setSelected: function (selected) {
        this.setState({
            selected: selected
        })
    },
    
    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <FormGroup>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    value={this.props.value}
                    name="reason_id"
                    onChange={this.handleChange}
                >
                    <option key="0" value="select">Reason for Testing</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});


var NewTestForm = React.createClass({

    //test_sampling_card
    //test_status_id - should be set separate
    //test_recommendation
    //'campaign_id' - should be passed

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            showRadio: true,
            showFluidProfileForm: false,
            showElectroProfileForm: false,
            showNewUserForm: false,
            showNewMaterialForm: false,
            showNewFluidForm: false,
            showNewContractForm: false,
            showNewLabForm: false,
            showNewSyringeForm: false,
            date_analyse: new Date().toISOString(),
            repair_date: new Date().toISOString(), 
            fields: [
                'reason_id', 'status_id', 'equipment_id', 'date_analyse', 'test_type_id',
                'test_status_id', 'fluid_profile_id', 'electrical_profile_id', 'material_id', 'fluid_type_id',
                'performed_by_id', 'lab_id', 'lab_contract_id', 'comments', 'analysis_number', 'comments', 'mws',
                'temperature', 'seringe_num', 'transmission', 'charge', 'remark', 'repair_date', 'repair_description',
                'recommendation_notes', 'ambient_air_temperature'
            ],

            // profile_fields: [
            //     'bushing', 'winding', 'insulation_pf', 'insulation', 'visual_inspection', 'resistance', 'degree',
            //     'turns', 'gas', 'water', 'furans', 'inhibitor', 'pcb', 'qty', 'sampling', 'dielec', 'acidity',
            //     'density', 'pcb_jar', 'inhibitor_jar', 'point', 'dielec_2', 'color', 'pf', 'particles', 'metals',
            //     'viscosity', 'dielec_d', 'ift', 'pf_100', 'furans_f', 'water_w', 'corr', 'dielec_i', 'qty_jar',
            //     'sampling_jar', 'pcb_vial', 'antioxidant', 'qty_vial', 'sampling_vial', 'percent_ratio',
            //     'sampling_point_id'
            // ]
        }
    },

    componentDidMount: function () {
    },
    
    _edit: function(id) { 
        // fill up form with data

        var url = '/api/v1.0/test_result/' + id; // edit
        console.log(url);
        this.serverRequest = $.get(url, function (result){ 
            var data = (result['result']);
        
            var fields = this.state.fields;
            var form = {};
            for (var i = 0; i < fields.length; i++) {
                var key = fields[i];
                form[key] = data[key];
            }
            this.setState(form);
            console.log(this.state);
           
        }.bind(this), 'json');
    },

    _save: function () {
        var fields = this.state.fields;
        var data = {};
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }
        data['campaign_id'] = this.props.data['campaign_id'];
        data['equipment_id'] = this.props.data['equipment_id'];
        var url = '/api/v1.0/test_result/' + this.state.test_result_id; // edit when test_result_id is set
        
        return $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
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
        //this.setState(this.getInitialState());
        this.setState({
            analysis_number: data['result']['analysis_number']
            // show success message
        });
        this.props.reloadList();
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

        if(e.target.value != 'select_prof' && e.target.name == 'test_type_id'){
            this.setState({
                showRadio:false
            })
        }
        else{
            this.setState({
                showRadio:true
            })
        }

        if (e.target.type == 'checkbox') {
            state[e.target.name] = e.target.checked;
        }
        else if (e.target.type == 'select-one') {
            state[e.target.name] = e.target.value;
        }
        else if (e.target.type == 'radio') {
            state[e.target.name] = e.target.value;
            if ('fluid' === e.target.value) {
                this.setState({
                    showFluidProfileForm: true,
                    showElectroProfileForm: false
                });
            } else if ('electro' === e.target.value) {
                this.setState({
                    showElectroProfileForm: true,
                    showFluidProfileForm: false
                });
            }
        }
        else {
            state[e.target.name] = $.trim(e.target.value);
        }
        this.setState(state);
    },

    _validate: function () {
        var errors = {};
        if (this.state.lab_id == "") {
            errors.lab_id = "Please choose laboratory";
        }
        return errors;
    },

    _formGroupClass: function (field) {
        var className = "form-group ";
        if (field) {
            className += " has-error"
        }
        return className;
    },

    closeElectricalProfileForm: function () {
        this.setState({
            showElectroProfileForm: false

        })
    },

    closeFluidProfileForm: function () {
        this.setState({
            showFluidProfileForm: false
        })
    },

    closeNewFluidForm: function () {
        this.setState({
            showNewFluidForm: false
        })
    },

    closeNewMaterialForm: function () {
        this.setState({
            showNewMaterialForm: false
        })
    },

    closeNewUserForm: function () {
        this.setState({
            showNewUserForm: false

        })
    },

    closeNewContractForm: function () {
        this.setState({
            showNewContractForm: false
        })
    },

    closeNewLabForm: function () {
        this.setState({
            showNewLabForm: false
        })
    },

    closeNewSyringeForm: function () {
        this.setState({
            showNewSyringeForm: false
        })
    },

    onContractCreate: function (response) {
        this.refs.contract.setSelected(response);
        this.closeNewContractForm();
        alert('Contract added');
    },

    onPerformerCreate: function (response) {
        this.refs.performed_by.setSelected(response);
        this.closeNewUserForm();
        alert('User added');
    },
    
    onLabCreate: function (response) {
        this.refs.lab.setSelected(response);
        this.closeNewLabForm();
        alert('Laboratory added'); 
    },

    onMaterialCreate: function(response) { 
        this.refs.material.setSelected(response);
        this.closeNewMaterialForm();
        alert('Material added');
    },
    
    onFluidTypeCreate: function(response) {
        this.refs.fluid_type.setSelected(response);
        this.closeNewFluidForm();
        alert('Fluid type added');
    },

    onSyringeCreate: function(response) {
        this.refs.syringe.setSelected(response);
        this.closeNewSyringeForm();
        alert('Syringe added');
    },

    onNewButtonClick: function (e) {
        if (e.target.id === 'material') {
            this.setState({
                showNewMaterialForm: true,
                showNewFluidForm: false,
                showNewUserForm: false,
                showNewContractForm: false,
                showNewLabForm: false,
                showNewSyringeForm: false
            })
        }
        else if (e.target.id === 'fluid_type') {
            this.setState({
                showNewMaterialForm: false,
                showNewFluidForm: true,
                showNewUserForm: false,
                showNewContractForm: false,
                showNewLabForm: false,
                showNewSyringeForm: false
            })
        }
        else if (e.target.id === 'performed_by') {
            this.setState({
                showNewMaterialForm: false,
                showNewFluidForm: false,
                showNewUserForm: true,
                showNewContractForm: false,
                showNewLabForm: false,
                showNewSyringeForm: false
            })
        }
        else if (e.target.id === 'lab_analyser') {
            this.setState({
                showNewMaterialForm: false,
                showNewFluidForm: false,
                showNewUserForm: false,
                showNewContractForm: false,
                showNewLabForm: true,
                showNewSyringeForm: false
            })
        }
        else if (e.target.id === 'lab_contract') {
            this.setState({
                showNewMaterialForm: false,
                showNewFluidForm: false,
                showNewUserForm: false,
                showNewContractForm: true,
                showNewLabForm: false,
                showNewSyringeForm: false
            })
        }
        else if (e.target.id === 'syringe') {
            this.setState({
                showNewMaterialForm: false,
                showNewFluidForm: false,
                showNewUserForm: false,
                showNewContractForm: false,
                showNewLabForm: false,
                showNewSyringeForm: true
            })
        }
    },

    render: function () {

        return (
            this.props.show ?
                <div className="form-container">
                    <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                        <Panel header="New Test">
                            <div className="maxwidth">
                                <div className="col-md-12">
                                    <div className="maxwidth">
                                        <FormGroup>
                                            <FormControl type="text"
                                                         placeholder="Analysis Number"
                                                         name="analysis_number"
                                                         readOnly="readOnly"
                                                         value={this.state.analysis_number}
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <TestReasonSelectField
                                                ref="test_reason"
                                                source="/api/v1.0/test_reason"
                                                handleChange={this.handleChange}
                                                value={this.state.reason_id}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-11">
                                            <MaterialSelectField
                                                ref="material"
                                                source="/api/v1.0/material/"
                                                handleChange={this.handleChange}
                                                value={this.state.material_id}
                                            />
                                        </div>
                                        <div className="col-md-1">
                                            <a id="material"
                                               className="btn btn-primary"
                                               onClick={this.onNewButtonClick}
                                            >New</a>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-11">
                                            <FluidTypeSelectField
                                                ref="fluid_type"
                                                source="/api/v1.0/fluid_type/"
                                                value={this.state.fluid_type_id}
                                            />
                                        </div>
                                        <div className="col-md-1">
                                            <a id="fluid_type"
                                               className="btn btn-primary"
                                               onClick={this.onNewButtonClick}
                                            >New</a>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-11">
                                            <PerformedBySelectField
                                                ref="performed_by"
                                                source="/api/v1.0/user"
                                                handleChange={this.handleChange}
                                                value={this.state.performed_by_id}
                                            />
                                        </div>
                                        <div className="col-md-1">
                                            <a id="performed_by"
                                               className="btn btn-primary"
                                               onClick={this.onNewButtonClick}
                                            >New</a>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-11">
                                            <LabAnalyserSelectField
                                                ref="lab"
                                                source="/api/v1.0/lab/"
                                                value={this.state.lab_id}
                                            />
                                        </div>
                                        <div className="col-md-1">
                                            <a id="lab_analyser"
                                               className="btn btn-primary"
                                               onClick={this.onNewButtonClick}
                                            >New</a>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-11">
                                            <LabContractSelectField
                                                ref="contract"
                                                source="/api/v1.0/contract/"
                                                handleChange={this.handleChange}
                                                value={this.state.lab_contract_id}
                                            />
                                        </div>
                                        <div className="col-md-1">
                                            <a id="lab_contract"
                                               className="btn btn-primary"
                                               onClick={this.onNewButtonClick}
                                            >New</a>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <FormGroup>
                                                <FormControl type="text"
                                                             placeholder="Charge"
                                                             name="charge"
                                                             value={this.state.charge}
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <FormGroup>
                                                <ControlLabel>Remark</ControlLabel>
                                                <FormControl componentClass="textarea"
                                                             placeholder="remark"
                                                             name="remark"
                                                             value={this.state.remark}
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="maxwidth">
                                        <div className="col-md-4 nopadding padding-right-xs">
                                            <Checkbox name="transmission" 
                                                      checked={this.state.transmission ? "checked" :null}>
                                                Sent to Laboratory
                                            </Checkbox>
                                        </div>
                                    </div>


                                    <div className="maxwidth">
                                        <div className="datetimepicker input-group date col-md-3">
                                            <FormGroup>
                                                <ControlLabel>Repair Date</ControlLabel>
                                                <DateTimeField name="repair_date" datetime={this.state.repair_date}/>
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <FormGroup>
                                                <ControlLabel>Repair Description</ControlLabel>
                                                <FormControl componentClass="textarea"
                                                             placeholder="repair description"
                                                             name="repair_description"
                                                             value={this.state.repair_description}
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <FormGroup>
                                                <ControlLabel>Recommendation Notes</ControlLabel>
                                                <FormControl componentClass="textarea"
                                                             placeholder="recommendations"
                                                             name="recommendation_notes"
                                                             value={this.state.recommendation_notes}
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="maxwidth">
                                        <div className="datetimepicker input-group date col-md-3">
                                            <FormGroup>
                                                <ControlLabel>Date Applied</ControlLabel>
                                                <DateTimeField name="date_analyse" datetime={this.state.date_analyse}/>
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <FormGroup>
                                                <ControlLabel>Comments</ControlLabel>
                                                <FormControl componentClass="textarea"
                                                             placeholder="comments"
                                                             name="comments"
                                                             value={this.state.comments}
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <FormGroup>
                                                <FormControl type="text"
                                                             placeholder="Equipment Load mW"
                                                             name="mws"
                                                             value={this.state.mws}
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <FormGroup>
                                                <FormControl type="text"
                                                             placeholder="Temperature"
                                                             name="temperature"
                                                             value={this.state.temperature}
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-11">
                                            <SyringeNumberSelectField
                                                ref="syringe"
                                                source="/api/v1.0/syringe/"
                                                handleChange={this.handleChange}
                                                value={this.state.seringe_num}
                                            />
                                        </div>
                                        <div className="col-md-1">
                                            <a id="syringe"
                                               className="btn btn-primary"
                                               onClick={this.onNewButtonClick}
                                            >New</a>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <FormGroup>
                                                <FormControl type="text"
                                                             placeholder="Ambient Air Temperature"
                                                             name="ambient_air_temperature"
                                                             value={this.state.ambient_air_temperature}
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">Choose test type</legend>
                                        <div className="row">
                                            <div>
                                                <div className="col-md-2">
                                                    <FormGroup>
                                                        <TestProfileSelectField source="/api/v1.0/test_profile"/>
                                                    </FormGroup>
                                                </div>
                                            </div>
                                        </div>
                                        {this.state.showRadio ?
                                            <div className="maxwidth">
                                                <Radio name="profile" value="fluid">
                                                    Fluid Profile
                                                </Radio>
                                                <Radio name="profile" value="electro">
                                                    Electrical Profile
                                                </Radio>
                                            </div>
                                            : null}
                                    </fieldset>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Button bsStyle="success"
                                                    type="submit"
                                                    className="pull-right"
                                            >Save</Button>
                                            <Button bsStyle="danger"
                                                    className="pull-right margin-right-xs"
                                            >Cancel</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Panel>
                    </form>

                    <Modal show={this.state.showElectroProfileForm}>
                        <ElectricalProfileForm data={this.props.data} handleClose={this.closeElectricalProfileForm}/>
                    </Modal>

                    <Modal show={this.state.showFluidProfileForm}>
                        <FluidProfileForm data={this.props.data} handleClose={this.closeFluidProfileForm}/>
                    </Modal>

                    <Modal show={this.state.showNewLabForm}>
                        <Modal.Header>
                            <Modal.Title>New Laboratory Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <NewLabForm handleClose={this.closeNewLabForm}
                                        onLabCreate={this.onLabCreate}
                            />
                        </Modal.Body>
                    </Modal>

                    <Modal show={this.state.showNewContractForm}>
                        <Modal.Header>
                            <Modal.Title>New Contract</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <NewContractForm onCreate={this.onContractCreate} 
                                handleClose={this.closeNewContractForm}/>
                        </Modal.Body>
                    </Modal>

                    <Modal show={this.state.showNewMaterialForm}>
                        <Modal.Header>
                            <Modal.Title>New Material Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <NewMaterialForm handleClose={this.closeNewMaterialForm}
                            onCreate={this.onMaterialCreate}/>
                        </Modal.Body>
                    </Modal>

                    <Modal show={this.state.showNewFluidForm}>
                        <Modal.Header>
                            <Modal.Title>New Fluid Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <NewFluidForm handleClose={this.closeNewFluidForm}
                            onCreate={this.onFluidTypeCreate}/>
                        </Modal.Body>
                    </Modal>

                    <Modal show={this.state.showNewUserForm}>
                        <Modal.Header>
                            <Modal.Title>New User Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <NewUserForm data={this.props.data} 
                                         handleClose={this.closeNewUserForm} 
                                         onCreate={this.onPerformerCreate}
                            />
                        </Modal.Body>
                    </Modal>

                    <Modal show={this.state.showNewSyringeForm}>
                        <Modal.Header>
                            <Modal.Title>New Syringe</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <NewSyringeForm handleClose={this.closeNewSyringeForm}
                                            onCreate={this.onSyringeCreate}
                            />
                        </Modal.Body>
                    </Modal>

                </div> : null
        );
    }
});


export default NewTestForm;


