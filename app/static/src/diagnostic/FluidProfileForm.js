import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Radio from 'react-bootstrap/lib/Radio';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var items = [];

var SamplPointSelectField1 = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value,
            sam1: event.target.value
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
            <FormGroup controlId="samplingPointSelect1">
                <ControlLabel>Sampling Point</ControlLabel>
                <FormControl componentClass="select"
                             placeholder="sampling point"
                             onChange={this.handleChange}
                             name="sampling"
                >
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});

var SamplPointSelectField2 = React.createClass({

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
            <FormGroup controlId="samplingPointSelect2">
                <ControlLabel>Sampling Point</ControlLabel>
                <FormControl componentClass="select"
                             placeholder="sampling point"
                             onChange={this.handleChange}
                             name="sampling_jar"
                >
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});

var SamplPointSelectField3 = React.createClass({

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
            <FormGroup controlId="samplingPointSelect3">
                <ControlLabel>Sampling Point</ControlLabel>
                <FormControl componentClass="select"
                             placeholder="sampling point"
                             name="sampling_vial"
                             onChange={this.handleChange}
                >
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});

var TestProfileSelectField = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true
        };
    },

    handleChange: function (event) {
        this.setState({
            value: event.target.value
        });
        this.loadProfileData(event);
    },

    loadProfileData: function (event) {

        if ('select' == event.target.value) {

            this.setState({
                saved_profile: null
            });

            this.props.fillUpForm();

        } else {

            this.serverRequest = $.get('/api/v1.0/fluid_profile/' + event.target.value, function (result) {
                this.setState({
                    saved_profile: result['result']
                });
                this.props.fillUpForm(this.state.saved_profile);
            }.bind(this), 'json');
        }
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
                    value={this.state.value}
                    onChange={this.handleChange}
                    name="test_prof">
                    <option value="select">Choose profile from saved</option>
                    {options}
                </FormControl>
            </FormGroup>
        )
    }
});


const FluidProfileForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            data: {},
            errors: {},
            fields: [
                'gas', 'furans', 'pcb', 'water',
                'inhibitor', 'dielec', 'dielec_2',
                'dielec_d', 'acidity', 'color',
                'ift', 'density', 'pf_25', 'pf_100',
                'pcb_jar', 'particles', 'furans_f',
                'inhibitor_jar', 'metals', 'water_w',
                'point', 'viscosity', 'corr', 'dielec_i',
                'visual', 'pcb_vial', 'antioxidant',
                'sampling', 'sampling_jar', 'sampling_vial',
                'qty', 'qty_jar', 'qty_vial', 'sampling',
                'shared', 'name', 'description'
            ]
        }
    },
    componentDidMount: function () {
    },

    fillUpForm: function (saved_data) {

        if (null == saved_data) {
            this.refs.fluid_profile.reset();
        } else {
            this.setState({
                data: saved_data
            });
        }
    },

    _save: function () {
        var fields = this.state.fields;
        var data = {};
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }
        data['campaign_id'] = this.props.data.campaign_id;
        data['equipment_id'] = this.props.data.equipment_id;

        // show success message
        // if update a profile
        if (this.state.name != '' && (typeof this.state.name != 'undefined')) {
            var url = '/api/v1.0/fluid_profile/';
            if (this.props.data.fluid_profile_id) {
                url = url + this.props.data.fluid_profile_id;
            }
            // if profile name is not empty and radio is checked then use this url to save profile
            // and save to test_result
            // otherwise just use these values for saving test_result
            $.ajax({
                url: url,
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(this.state.data),
                success: function (data, textStatus) {
                    NotificationManager.success('Profile saved successfully');
                },
                beforeSend: function () {
                    this.setState({loading: true});
                }.bind(this)
            });
        }

        return $.ajax({
            url: '/api/v1.0/test_result/' + this.props.data.id,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        });
    },

    _onSubmit: function (e) {
        e.preventDefault();
        if (!this._validate()){
            NotificationManager.error('Please correct the errors');
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
        NotificationManager.success('Test updated successfully');
        this.props.handleClose();
        this.hideLoading();
    },

    _onError: function (data) {
        var message = "Failed to create";
        var res = data.responseJSON;
        if (res.message) {
            message = data.responseJSON.message;
        }
        if (res.errors) {
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
        this.setState(state);
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

    render: function () {

        return (
            <div className="form-container">
                <form ref="fluid_profile" method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div className="maxwidth">
                        <Panel header="Fluid profile">
                            <div className="row">
                                <div className="col-md-9">
                                </div>
                                <div className="col-md-3">
                                    <FormGroup>
                                        <TestProfileSelectField fillUpForm={this.fillUpForm}
                                                                source="/api/v1.0/fluid_profile"/>
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="scheduler-border">
                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border">Syringe - Test requested</legend>
                                    <div className="control-group">
                                        <div className="col-md-8 nopadding padding-right-xs">
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="gas"
                                                        checked={this.state.data.gas ? 'checked': null}
                                                        value="1"
                                                    >
                                                        Dissolved Gas
                                                    </Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="furans"
                                                        checked={this.state.data.furans ? 'checked': null}
                                                        value="1"
                                                    >Furans</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox
                                                        name="pcb"
                                                        checked={this.state.data.pcb ? 'checked': null}
                                                        value="1"
                                                    >PCB</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="water"
                                                        checked={this.state.data.water ? 'checked': null}
                                                        value="1"
                                                    >Water</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="inhibitor"
                                                        checked={this.state.data.inhibitor ? 'checked': null}
                                                        value="1"
                                                    >Inhibitor</Checkbox>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 nopadding">
                                            <div className="col-md-2 nopadding padding-right-xs">
                                                <ControlLabel>Quantity</ControlLabel>
                                                <FormControl type="text" ref="qty" name="qty"
                                                             value={this.state.data.qty}/>
                                            </div>
                                            <div className="col-md-10 nopadding">
                                                <SamplPointSelectField1
                                                    source="/api/v1.0/sampling_point"
                                                    value={this.state.data.sampling}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="scheduler-border">
                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border">Jar - Test requested</legend>
                                    <div className="control-group">
                                        <div className="col-md-8 nopadding padding-right-xs">
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="dielec"
                                                        checked={this.state.data.dielec ? 'checked': null}
                                                        value="1"
                                                    >Dielec .D1816(1mm)(kV)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="dielec_2"
                                                        checked={this.state.data.dielec_2 ? 'checked': null}
                                                        value="1"
                                                    >Dielec.D1816(2mm)(kV)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox
                                                        name="dielec_d"
                                                        checked={this.state.data.dielec_d ? 'checked': null}
                                                        value="1"
                                                    >Dielec. D877(kV)</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox name="acidity"
                                                              checked={this.state.data.acidity ? 'checked': null}
                                                              value="1"
                                                    >Acidity(D974)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="color"
                                                        checked={this.state.data.color ? 'checked': null}
                                                        value="1"
                                                    >Color(D1500)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox
                                                        name="ift"
                                                        checked={this.state.data.ift ? 'checked': null}
                                                        value="1"
                                                    >IFT(D971)</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="density"
                                                        checked={this.state.data.density ? 'checked': null}
                                                        value="1"
                                                    >Density(D1298)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="pf_25"
                                                        checked={this.state.data.pf_25 ? 'checked': null}
                                                        value="1"
                                                    >PF25C(D924)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox
                                                        name="pf_100"
                                                        checked={this.state.data.pf_100 ? 'checked': null}
                                                        value="1"
                                                    >PF100C(D924)</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="pcb_jar"
                                                        checked={this.state.data.pcb_jar ? 'checked': null}
                                                        value="1"
                                                    >PCB</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="particles"
                                                        checked={this.state.data.particles ? 'checked': null}
                                                        value="1"
                                                    >Particles</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox
                                                        name="furans_f"
                                                        checked={this.state.data.furans_f ? 'checked': null}
                                                        value="1"
                                                    >Furans</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="inhibitor_jar"
                                                        checked={this.state.data.inhibitor_jar ? 'checked': null}
                                                        value="1"
                                                    >Inhibitor</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="metals"
                                                        checked={this.state.data.metals ? 'checked': null}
                                                        value="1"
                                                    >Metals in oil</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox
                                                        name="water_w"
                                                        checked={this.state.data.water_w ? 'checked': null}
                                                        value="1"
                                                    >Water</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="point"
                                                        checked={this.state.data.point ? 'checked': null}
                                                        value="1"
                                                    >PouPoint</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox
                                                        name="viscosity"
                                                        checked={this.state.data.viscosity ? 'checked': null}
                                                        value="1"
                                                    >Viscosity</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox
                                                        name="corr"
                                                        checked={this.state.data.corr ? 'checked': null}
                                                        value="1"
                                                    >Corr.Sulfur</Checkbox>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 nopadding">
                                            <div className="maxwidth">
                                                <Checkbox
                                                    name="dielec_i"
                                                    checked={this.state.data.dielec_i ? 'checked': null}
                                                    value="1"
                                                >Dielec.IEC-156(kV)</Checkbox>
                                            </div>
                                            <div className="maxwidth">
                                                <Checkbox
                                                    name="visual"
                                                    checked={this.state.data.visual ? 'checked': null}
                                                    value="1"
                                                >Visual(D1524)</Checkbox>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-2 nopadding padding-right-xs">
                                                    <ControlLabel>Quantity</ControlLabel>
                                                    <FormControl type="text" name="qty_jar"
                                                                 value={this.state.data.qty_jar}/>
                                                </div>
                                                <div className="col-md-10 nopadding">
                                                    <SamplPointSelectField2
                                                        source="/api/v1.0/sampling_point"
                                                        value={ this.state.data.sampling_jar}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="scheduler-border">
                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border">4-ml - Tests requested</legend>
                                    <div className="control-group">
                                        <div className="col-md-8 nopadding padding-right-xs">
                                            <div className="maxwidth">
                                                <Checkbox
                                                    name="pcb_vial"
                                                    checked={this.state.data.pcb_vial ? 'checked': null}
                                                    value="1"
                                                >PCB</Checkbox>
                                            </div>
                                            <div className="maxwidth">
                                                <Checkbox
                                                    name="antioxidant"
                                                    checked={this.state.data.antioxidant ? 'checked': null}
                                                    value="1"
                                                >Antioxydant</Checkbox>
                                            </div>
                                        </div>
                                        <div className="col-md-4 nopadding">
                                            <div className="col-md-2 nopadding padding-right-xs">
                                                <ControlLabel>Quantity</ControlLabel>
                                                <FormControl type="text" name="qty_vial"
                                                             value={this.state.data.qty_vial}/>
                                            </div>
                                            <div className="col-md-10 nopadding">
                                                <SamplPointSelectField3
                                                    source="/api/v1.0/sampling_point"
                                                    value={ this.state.data.sampling_vial}/>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="row">
                                    <div className="col-md-1">
                                        <div>Save As</div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="row">
                                            <FormGroup>
                                                <FormControl type="text"
                                                             placeholder="Fluid profile name"
                                                             name="name"/>
                                            </FormGroup>
                                        </div>
                                        <div className="row">
                                            <Radio name="shared" value="1" inline={true}>
                                                Global
                                            </Radio>
                                            <Radio name="shared" value="0" inline={true}>
                                                Private
                                            </Radio>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <FormGroup controlId="descTextarea">
                                            <FormControl
                                                componentClass="textarea"
                                                placeholder="Description"
                                                ref="description"
                                                name="description"
                                            />
                                        </FormGroup>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Button bsStyle="success" type="submit" className="pull-right">Save</Button>
                                        <Button bsStyle="danger"
                                                onClick={this.props.handleClose}
                                                className="pull-right margin-right-xs">Close</Button>
                                    </div>
                                </div>
                            </div>
                        </Panel>
                    </div>
                </form>
            </div>
        );
    }
});

export default FluidProfileForm;
