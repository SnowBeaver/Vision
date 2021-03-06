import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Radio from 'react-bootstrap/lib/Radio';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
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
        this.serverRequest = $.authorizedGet(this.props.source, function (result) {

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
        this.serverRequest = $.authorizedGet(this.props.source, function (result) {

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
        this.serverRequest = $.authorizedGet(this.props.source, function (result) {

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

            this.serverRequest = $.authorizedGet('/api/v1.0/fluid_profile/' + event.target.value, function (result) {
                this.setState({
                    saved_profile: result['result']
                });
                this.props.fillUpForm(this.state.saved_profile);
            }.bind(this), 'json');
        }
    },

    componentDidMount: function () {
        this.serverRequest = $.authorizedGet(this.props.source, function (result) {
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
                'ift', 'density', 'pf', 'pf_100',
                'pcb_jar', 'particles', 'furans_f',
                'inhibitor_jar', 'metals', 'water_w',
                'point', 'viscosity', 'corr', 'dielec_i',
                'visual', 'pcb_vial', 'antioxidant',
                'sampling', 'sampling_jar', 'sampling_vial',
                'qty_ser', 'qty_jar', 'qty_vial', 'sampling',
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
            data[key] = this.state.data[key];
        }

        // show success message
        // if update a profile
        var name = this.state.data['name'];
        if (name != '' && (typeof name != 'undefined')) {
            var url = '/api/v1.0/fluid_profile/';
            if (this.props.fluidProfileId) {
                url = url + this.props.fluidProfileId;
            }
            // if profile name is not empty and radio is checked then use this url to save profile
            // and save to test_result
            // otherwise just use these values for saving test_result
            return $.authorizedAjax({
                url: url,
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function (data, textStatus) {
                },
                beforeSend: function () {
                    this.setState({loading: true});
                }.bind(this)
            });

            delete data['name'];
            delete data['shared'];
        }
        
        data['campaign_id'] = this.props.campaignId;
        data['equipment_id'] = this.props.equipmentId;

        return $.authorizedAjax({
            url: '/api/v1.0/test_result/' + this.props.testResultId,
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
        e.stopPropagation();
        if (!this.is_valid()){
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
        NotificationManager.success('Profile saved successfully');
        this.props.handleClose();
        this.hideLoading();
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
			} else if (res.error instanceof Object){
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
    calculate_qty: function (data) {
        var quantity_ml_syringe = 0;

        // Syringe
        if ( data['gas'] ) { quantity_ml_syringe += 15 }
        if ( data['water'] ) { quantity_ml_syringe += 10 }
        if ( data['pcb'] ) { quantity_ml_syringe += 5 }
        if ( data['furans'] ) { quantity_ml_syringe += 20 }

        var quantity = Math.ceil(quantity_ml_syringe / 30.0);

        if ( !quantity_ml_syringe && data['inhibitor'] ) {
            quantity = 1;
        }
        // if quantity != value:
        //     self._error(field, "Wrong quantity, must be {}".format(quantity))
        return quantity;
    },
    calculate_qty_jar: function (data) {
        var quantity_ml_jar = 0;
        // POTS. Jar
        if ( data['dielec'] ) { quantity_ml_jar += 500 }
        if ( data['dielec_2'] ) { quantity_ml_jar += 500 }
        if ( data['dielec_d'] ) { quantity_ml_jar += 450 }
        if ( data['dielec_i'] ) { quantity_ml_jar += 500 }
        if ( data['ift'] ) { quantity_ml_jar += 25 }
        if ( data['pf'] ) { quantity_ml_jar += 100 }
        if ( data['pf_100'] ) { quantity_ml_jar += 100 }
        if ( data['point'] ) { quantity_ml_jar += 50 }
        if ( data['viscosity'] ) { quantity_ml_jar += 50 }
        if ( data['corr'] ) { quantity_ml_jar += 200 }
        if ( data['pcb_jar'] ) { quantity_ml_jar += 5 }
        if ( data['particles'] ) { quantity_ml_jar += 500 }
        if ( data['metals'] ) { quantity_ml_jar += 50 }
        if ( data['water_w'] ) { quantity_ml_jar += 10 }
        if ( data['furans_f'] ) { quantity_ml_jar += 20 }

        var quantity = Math.ceil(quantity_ml_jar / 750.0)

        if (( !quantity_ml_jar ) &&
           ( data['acidity'] ||
             data['color'] ||
             data['density'] ||
             data['visual'] ||
             data['inhibitor_jar']))
        {
            quantity = 1;
        }

        // if quantity != value:
        //     self._error(field, "Wrong quantity, must be {}".format(quantity))

        return quantity;
    },
    calculate_qty_vial: function (data) {
        var quantity_ml_vial = 0;
        if ( data['pcb_vial'] ) {
            quantity_ml_vial += 5;
        }
        var quantity = Math.ceil(quantity_ml_vial / 5.0)
        if ( ! quantity_ml_vial && data['antioxidant'] ) {
            quantity = 1;
        }
        // if quantity != value:
        //     self._error(field, "Wrong quantity, must be {}".format(quantity))
        return quantity;
    },
    _onChange: function (e) {
        var state = {};
        state['data'] = this.state.data;
        if (e.target.type == 'checkbox') {
            state['data'][e.target.name] = e.target.checked;
        } else if (e.target.type == 'radio') {
            state['data'][e.target.name] = (e.target.value == "1");
        } else if (e.target.type == 'select-one') {
            state['data'][e.target.name] = e.target.value;
        } else {
            state['data'][e.target.name] = e.target.value;
        }
        var errors = this._validate(e);
        state = this._updateFieldErrors(e.target.name, state, errors);
        state['data']['qty_ser'] = this.calculate_qty(state['data']);
        state['data']['qty_jar'] = this.calculate_qty_jar(state['data']);
        state['data']['qty_vial'] = this.calculate_qty_vial(state['data']);
        this.setState(state);
    },

    _validate: function (e) {
        var errors = [];
        var error;
        error = this._validateFieldLength(e.target.value, e.target.getAttribute("data-len"));
        if (error){
            errors.push(error);
        }
        error = this._validateFieldType(e.target.value, e.target.getAttribute("data-type"));
        if (error){
            errors.push(error);
        }
        return errors;
    },

    _validateFieldLength: function (value, length){
        var error = "";
        if (value && length){
            if (value.length > length){
                error = "Value should be maximum " + length + " characters long"
            }
        }
        return error;
    },

    _validateFieldType: function (value, type){
        var error = "";
        if (type != undefined && value){
            var typePatterns = {
                "float": /^(-|\+?)[0-9]+(\.)?[0-9]*$/,
                "int": /^(-|\+)?(0|[1-9]\d*)$/
            };
            if (!typePatterns[type].test(value)){
                error = "Invalid " + type + " value";
            }
        }
        return error;
    },

    _updateFieldErrors: function (fieldName, state, errors){
        // Clear existing errors related to the current field as it has been edited
        state.errors = this.state.errors;
        delete state.errors[fieldName];

        // Update errors with new ones, if present
        if (Object.keys(errors).length){
            state.errors[fieldName] = errors.join(". ");
        }
        return state;
    },

    is_valid: function () {
        return (Object.keys(this.state.errors).length <= 0);
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
                                <div className="col-md-9"></div>
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
                                                <FormGroup validationState={this.state.errors.qty_ser ? 'error' : null}>
                                                    <ControlLabel>Quantity</ControlLabel>
                                                    <FormControl type="text" ref="qty_ser" name="qty_ser"
                                                                 value={this.state.data.qty_ser}
                                                                 data-type="float"/>
                                                    <HelpBlock className="warning">{this.state.errors.qty_ser}</HelpBlock>
								                    <FormControl.Feedback />
                                                </FormGroup>
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
                                                        name="pf"
                                                        checked={this.state.data.pf ? 'checked': null}
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
                                                    <FormGroup validationState={this.state.errors.qty_jar ? 'error' : null}>
                                                        <ControlLabel>Quantity</ControlLabel>
                                                        <FormControl type="text" name="qty_jar"
                                                                     value={this.state.data.qty_jar}
                                                                     data-type="float"/>
                                                        <HelpBlock className="warning">{this.state.errors.qty_jar}</HelpBlock>
								                        <FormControl.Feedback />
                                                    </FormGroup>
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
                                                <FormGroup validationState={this.state.errors.qty_vial ? 'error' : null}>
                                                    <ControlLabel>Quantity</ControlLabel>
                                                    <FormControl type="text" name="qty_vial"
                                                                 value={this.state.data.qty_vial}
                                                                 data-type="float"/>
                                                    <HelpBlock className="warning">{this.state.errors.qty_vial}</HelpBlock>
								                    <FormControl.Feedback />
                                                </FormGroup>
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
                                            <FormGroup validationState={this.state.errors.name ? 'error' : null}>
                                                <FormControl type="text"
                                                             placeholder="Fluid profile name"
                                                             name="name"
                                                             data-len="256"
                                                             value={this.state.name}/>
                                                <HelpBlock className="warning">{this.state.errors.name}</HelpBlock>
                                                <FormControl.Feedback />
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
                                        <FormGroup controlId="descTextarea"
                                                   validationState={this.state.errors.description ? 'error' : null}>
                                            <FormControl
                                                componentClass="textarea"
                                                placeholder="Description"
                                                ref="description"
                                                name="description"
                                                data-len="1024"
                                                value={this.state.description}
                                            />
                                            <HelpBlock className="warning">{this.state.errors.description}</HelpBlock>
                                            <FormControl.Feedback />
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
