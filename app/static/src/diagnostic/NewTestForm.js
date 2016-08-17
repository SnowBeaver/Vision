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
import ElectricalProfileForm from './ElectricalProfileForm';
import FluidProfileForm from './FluidProfileForm';
import CreatedByForm from './CampaignForm_modules/CreatedByForm';
import NewMaterialForm from './NewTestForm_modules/NewMaterialForm';
import NewContractForm from './CampaignForm_modules/NewContractForm';
import NewLabForm from './CampaignForm_modules/NewLabForm';
import NewFluidForm from './NewTestForm_modules/NewFluidForm';
import NewRecommendationForm from './NewTestForm_modules/NewRecommendationForm';
import NewSyringeForm from './NewTestForm_modules/NewSyringeForm';


var items = [];


var CreatedBySelectField = React.createClass({

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
                        placeholder="select user"
                        onChange={this.handleChange}
                        name="created_by_id">
                        <option key="0" value="select">Created by</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
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
                        placeholder="select"
                        onChange={this.handleChange}
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
                        placeholder="select material"
                        onChange={this.handleChange}
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
                        placeholder="select"
                        onChange={this.handleChange}
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
                        placeholder="select"
                        onChange={this.handleChange}
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
                        placeholder="select"
                        onChange={this.handleChange}
                        name="contract">
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
                                   value={this.state.items[key].id}>{`${this.state.items[key].serial}`}</option>);
        }

        return (
            <div>
                <FormGroup>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChange}
                        name="seringe_num">
                        <option key="0" value="select">Syringe Number</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var RecommendSelectField = React.createClass({

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
                        placeholder="select"
                        onChange={this.handleChange}
                        name="recommandation_id">
                        <option key="0" value="select">Recommendation</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var RecommendBySelectField = React.createClass({

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
                        placeholder="select"
                        onChange={this.handleChange}
                        name="recommendations">
                        <option key="0" value="select">Recommendations</option>
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
            <FormGroup>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    value={this.state.value}
                    name="test_reason"
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
    //test_commendation
    //'campaign_id' - should be passed

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            equipment_number: '',
            showFluidProfileForm: false,
            showElectroProfileForm: false,
            showCreatedByForm: false,
            showNewMaterialForm: false,
            showNewFluidForm: false,
            showNewRecommendationForm: false,
            showNewContractForm: false,
            showNewLabForm: false,
            showNewSyringeForm: false
        }
    },


    _create: function () {
        var fields = [
            'test_reason_id', 'status_id', 'equipment_id', 'date_analyse', 'test_type_id',
            'test_status_id', 'fluid_profile_id', 'electrical_profile_id', 'material_id', 'fluid_type_id',
            'performed_by_id', 'lab_id', 'lab_contract_id', 'comments', 'analysis_number', 'comments', 'mws',
            'temperature', 'seringe_num', 'transmission', 'charge', 'remark', 'repair_date', 'repair_description',
            'ambient_air_temperature'
        ];
        var profile_fields = [
            'bushing', 'winding', 'insulation_pf', 'insulation', 'visual_inspection', 'resistance', 'degree',
            'turns', 'gas', 'water', 'furans', 'inhibitor', 'pcb', 'qty', 'sampling', 'dielec', 'acidity',
            'density', 'pcb_jar', 'inhibitor_jar', 'point', 'dielec_2', 'color', 'pf', 'particles', 'metals',
            'viscosity', 'dielec_d', 'ift', 'pf_100', 'furans_f', 'water_w', 'corr', 'dielec_i', 'qty_jar',
            'sampling_jar', 'pcb_vial', 'antioxidant', 'qty_vial', 'sampling_vial', 'percent_ratio',
            'sampling_point_id'
        ];
        var data = {};
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }

        return $.ajax({
            url: '/api/v1.0/test/',
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
        var xhr = this._create();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },
    hideLoading: function () {
        this.setState({loading: false});
    },

    _onSuccess: function (data) {
        this.setState(this.getInitialState());
        alert('Test added');
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

    handleClick: function () {
        document.getElementById('test_prof').remove();

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

    closeCreatedByForm: function () {
        this.setState({
            showCreatedByForm: false
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

    closeNewRecommendationForm: function () {
        this.setState({
            showNewRecommendationForm: false
        })
    },

    closeNewSyringeForm: function () {
        this.setState({
            showNewSyringeForm: false
        })
    },


    onNewButtonClick: function (e) {
        if (e.target.id === 'created_by') {
            this.setState({
                    showCreatedByForm: true,
                    showNewMaterialForm: false,
                    showNewFluidForm: false,
                    showNewRecommendationForm: false,
                    showNewContractForm: false,
                    showNewLabForm: false,
                    showNewSyringeForm: false
                }
            )
        }
        else if (e.target.id === 'material') {
            this.setState({
                showCreatedByForm: false,
                showNewMaterialForm: true,
                showNewFluidForm: false,
                showNewRecommendationForm: false,
                showNewContractForm: false,
                showNewLabForm: false,
                showNewSyringeForm: false
            })
        }
        else if (e.target.id === 'fluid_type') {
            this.setState({
                showCreatedByForm: false,
                showNewMaterialForm: false,
                showNewFluidForm: true,
                showNewRecommendationForm: false,
                showNewContractForm: false,
                showNewLabForm: false,
                showNewSyringeForm: false
            })
        }
        else if (e.target.id === 'performed_by') {
            this.setState({
                showCreatedByForm: true,
                showNewMaterialForm: false,
                showNewFluidForm: false,
                showNewRecommendationForm: false,
                showNewContractForm: false,
                showNewLabForm: false,
                showNewSyringeForm: false
            })
        }
        else if (e.target.id === 'lab_analyser') {
            this.setState({
                showCreatedByForm: false,
                showNewMaterialForm: false,
                showNewFluidForm: false,
                showNewRecommendationForm: false,
                showNewContractForm: false,
                showNewLabForm: true,
                showNewSyringeForm: false
            })
        }
        else if (e.target.id === 'lab_contract') {
            this.setState({
                showCreatedByForm: false,
                showNewMaterialForm: false,
                showNewFluidForm: false,
                showNewRecommendationForm: false,
                showNewContractForm: true,
                showNewLabForm: false,
                showNewSyringeForm: false
            })
        }
        else if (e.target.id === 'recommend_by') {
            this.setState({
                showCreatedByForm: true,
                showNewMaterialForm: false,
                showNewFluidForm: false,
                showNewRecommendationForm: false,
                showNewContractForm: false,
                showNewLabForm: false,
                showNewSyringeForm: false
            })
        }
        else if (e.target.id === 'recommend') {
            this.setState({
                showCreatedByForm: false,
                showNewMaterialForm: false,
                showNewFluidForm: false,
                showNewRecommendationForm: true,
                showNewContractForm: false,
                showNewLabForm: false,
                showNewSyringeForm: false
            })
        }
        else if (e.target.id === 'syringe') {
            this.setState({
                showCreatedByForm: false,
                showNewMaterialForm: false,
                showNewFluidForm: false,
                showNewRecommendationForm: false,
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
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <TestReasonSelectField
                                                source="/api/v1.0/test_reason"
                                                handleChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="maxwidth">
                                        <div className="datetimepicker input-group date col-md-3">
                                            <FormGroup>
                                                <ControlLabel>Date Created</ControlLabel>
                                                <DateTimeField datetime={this.state.cr_date}/>
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-11">
                                            <CreatedBySelectField
                                                source="/api/v1.0/user"
                                                handleChange={this.handleChange}/>
                                        </div>
                                        <div className="col-md-1">
                                            <a id="created_by"
                                               className="btn btn-primary new1"
                                               onClick={this.onNewButtonClick}
                                            >New</a>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-11">
                                            <MaterialSelectField
                                                source="/api/v1.0/material/"
                                                handleChange={this.handleChange}/>
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
                                                source="/api/v1.0/fluid_type/"
                                                value={this.state.value}/>
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
                                                source="/api/v1.0/user"
                                                handleChange={this.handleChange}/>
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
                                                source="/api/v1.0/lab/"
                                                value={this.state.value}/>
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
                                                source="/api/v1.0/contract/"
                                                handleChange={this.handleChange}/>
                                        </div>
                                        <div className="col-md-1">
                                            <a id="lab_contract"
                                               className="btn btn-primary"
                                               onClick={this.onNewButtonClick}
                                            >New</a>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-11">
                                            <RecommendSelectField
                                                source="/api/v1.0/recommendation/"
                                                value={this.state.value}/>
                                        </div>
                                        <div className="col-md-1">
                                            <a id="recommend"
                                               className="btn btn-primary"
                                               onClick={this.onNewButtonClick}
                                            >New</a>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-2">
                                            Recommendation list
                                        </div>
                                        <div className="col-md-1">
                                            <a id="recommend_by"
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
                                                             name="remark"/>
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="maxwidth">
                                        <div className="col-md-4 nopadding padding-right-xs">
                                            <Checkbox name="transmission">Sent to Laboratory</Checkbox>
                                        </div>
                                    </div>


                                    <div className="maxwidth">
                                        <div className="datetimepicker input-group date col-md-3">
                                            <FormGroup>
                                                <ControlLabel>Repair Date</ControlLabel>
                                                <DateTimeField datetime={this.state.repair_date}/>
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <FormGroup>
                                                <ControlLabel>Repair Description</ControlLabel>
                                                <FormControl componentClass="textarea"
                                                             placeholder="repair description"
                                                             name="repair_description"/>
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <FormGroup>
                                                <ControlLabel>Recommendation Notes</ControlLabel>
                                                <FormControl componentClass="textarea"
                                                             placeholder="recommendations"
                                                             name="recommendationNotes"
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="maxwidth">
                                        <div className="datetimepicker input-group date col-md-3">
                                            <FormGroup>
                                                <ControlLabel>Date Applied</ControlLabel>
                                                <DateTimeField datetime={this.state.date_analyse}/>
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
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <FormGroup>
                                                <FormControl type="text"
                                                             placeholder="Equipment Load mW"
                                                             name="mws"/>
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <FormGroup>
                                                <FormControl type="text"
                                                             placeholder="Temperature"
                                                             name="temperature"
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="maxwidth">
                                        <div className="col-md-4 nopadding padding-right-xs">
                                            <Checkbox name="print_sampling_card">Sampling Card Print</Checkbox>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-11">
                                            <SyringeNumberSelectField
                                                source="/api/v1.0/syringe/"
                                                handleChange={this.handleChange}/>
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
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>
                                    <div className="row">
                                        Please choose test type
                                    </div>
                                    <div className="maxwidth">
                                        <Radio name="profile" value="fluid">
                                            Fluid Profile
                                        </Radio>
                                        <Radio name="profile" value="electro">
                                            Electrical Profile
                                        </Radio>
                                    </div>
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
                        <ElectricalProfileForm handleClose={this.closeElectricalProfileForm}/>
                    </Modal>

                    <Modal show={this.state.showFluidProfileForm}>
                        <FluidProfileForm handleClose={this.closeFluidProfileForm}/>
                    </Modal>

                    <Modal show={this.state.showCreatedByForm}>
                        <CreatedByForm handleClose={this.closeCreatedByForm}/>
                    </Modal>

                    <Modal show={this.state.showNewLabForm}>
                        <NewLabForm handleClose={this.closeNewLabForm}/>
                    </Modal>

                    <Modal show={this.state.showNewContractForm}>
                        <NewContractForm handleClose={this.closeNewContractForm}/>
                    </Modal>

                    <Modal show={this.state.showNewMaterialForm}>
                        <NewMaterialForm handleClose={this.closeNewMaterialForm}/>
                    </Modal>

                    <Modal show={this.state.showNewFluidForm}>
                        <NewFluidForm handleClose={this.closeNewFluidForm}/>
                    </Modal>

                    <Modal show={this.state.showNewRecommendationForm}>
                        <NewRecommendationForm handleClose={this.closeNewRecommendationForm}/>
                    </Modal>

                    <Modal show={this.state.showNewSyringeForm}>
                        <NewSyringeForm handleClose={this.closeNewSyringeForm}/>
                    </Modal>

                </div> : null
        );
    }
});


export default NewTestForm;


