import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import Panel from 'react-bootstrap/lib/Panel';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';

var items =[];

var SamplPointSelectField1 = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
            sam1: event.target.value
        })
    },

    getInitialState: function(){
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function(){
        return this.state.isVisible;
    },

    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    setVisible: function(){
        this.state.isVisible = true;
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <FormGroup controlId="samplingPointSelect1">
                <ControlLabel>Sampling Point</ControlLabel>
                <FormControl componentClass="select"
                             placeholder="sampling point"
                             onChange={this.handleChange}
                >
                    <option value="select">select sampling point</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});

var SamplPointSelectField2 = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
            sam2: event.target.value
        })
    },

    getInitialState: function(){
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function(){
        return this.state.isVisible;
    },

    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    setVisible: function(){
        this.state.isVisible = true;
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            // menuItems.push(<MenuItem eventKey="{this.state.items[key].id}">{`${this.state.items[key].name}`}</MenuItem>);
            menuItems.push(<option value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <FormGroup controlId="samplingPointSelect2">
                <ControlLabel>Sampling Point</ControlLabel>
                <FormControl componentClass="select"
                             placeholder="sampling point"
                             onChange={this.handleChange}
                >
                    <option value="select">select sampling point</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});

var SamplPointSelectField3 = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
            sam3: event.target.value
        })
    },

    getInitialState: function(){
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function(){
        return this.state.isVisible;
    },

    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    setVisible: function(){
        this.state.isVisible = true;
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <FormGroup controlId="samplingPointSelect3">
                <ControlLabel>Sampling Point</ControlLabel>
                <FormControl componentClass="select"
                             placeholder="sampling point"
                             onChange={this.handleChange}
                >
                    <option value="select">select sampling point</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});


const FluidProfileForm = React.createClass({

    getInitialState: function () {
        return {
            qty1: {
                label: 'Qty',
                value: null
            },
            qty2: {
                label: 'Qty',
                value: null
            },
            qty3: {
                label: 'Qty',
                value: null
            },
            loading: false,
            errors: {}
        }
    },

    _create: function () {

        return $.ajax({
            url: '/api/v1.0/equipment/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({






            }),
            success: function (data, textStatus) { },
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })
    },
    _onSubmit: function (e) {
        e.preventDefault();
        // var errors = this._validate();
        // if(Object.keys(errors).length != 0) {
        //   this.setState({
        //     errors: errors
        //   });
        //    return;
        // }
        var xhr = this._create();
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
        if(res.message) {
            message = data.responseJSON.message;
        }
        if(res.errors) {
            this.setState({
                errors: res.errors
            });
        }
    },
    _onChange: function (e) {
        var state = {};
        state[e.target.name] =  $.trim(e.target.value);
        this.setState(state);
    },
    _validate: function () {
        var errors = {};
        // if(this.state.username == "") {
        //   errors.username = "Username is required";
        // }
        // if(this.state.email == "") {
        //   errors.email = "Email is required";
        // }
        // if(this.state.password == "") {
        //   errors.password = "Password is required";
        // }
        // return errors;
    },
    _formGroupClass: function (field) {
        var className = "form-group ";
        if(field) {
            className += " has-error"
        }
        return className;
    },



    render: function() {

        return (
            <div className="form-container">
                <form className="" method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div className="maxwidth">
                        <Panel header="Electrical profile test parametres">
                            <div className="scheduler-border">
                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border">Syringe - Test requested</legend>
                                    <div className="control-group">
                                        <div className="col-md-8 nopadding padding-right-xs">
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox ref="dis_gas">Dissolved Gas</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox ref="furan_syr">Furans</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox ref="pcb_jar">PCB</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox ref="water">Water</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox ref="inhibit_syr">Inhibitor</Checkbox>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 nopadding">
                                            <div className="col-md-2 nopadding padding-right-xs">
                                                <ControlLabel>{this.state.qty1.label}</ControlLabel>
                                                <FormControl type="text" value={this.state.qty1.value} />
                                            </div>
                                            <div className="col-md-10 nopadding">
                                                <SamplPointSelectField1
                                                    ref="sampl1"
                                                    source="http://dev.vision.local/api/v1.0/sampling_point"
                                                    value={ this.state.value}/>
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
                                                    <Checkbox ref="dielec_1mm">Dielec .D1816(1mm)(kV)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                     <Checkbox ref="dielec_2mm">Dielec.D1816(2mm)(kV)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox ref="dielec_db87">Dielec. D877(kV)</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox ref="acid">Acidity(D974)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox ref="color">Color(D1500)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox ref="ift">IFT(D971)</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox ref="density">Density(D1298)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox ref="pf_25">PF25C(D924)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox ref="pf_100">PF100C(D924)</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox ref="pcb_jar">PCB</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox ref="particles">Particles</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox ref="furan_jar">Furans</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox ref="inhibit_jar">Inhibitor</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox ref="metal_oil">Metals in oil</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox ref="water_2">Water</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox ref="p_point">PouPoint</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox ref="viscosity">Viscosity</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox ref="cor_sul">Corr.Sulfur</Checkbox>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 nopadding">
                                            <div className="maxwidth">
                                                <Checkbox ref="dielec_iec">Dielec.IEC-156(kV)</Checkbox>
                                            </div>
                                            <div className="maxwidth">
                                                <Checkbox ref="visual">Visual(D1524)</Checkbox>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-2 nopadding padding-right-xs">
                                                    <ControlLabel>{ this.state.qty2.label }</ControlLabel>
                                                    <FormControl type="text" value={this.state.qty2.value} />
                                                </div>
                                                <div className="col-md-10 nopadding">
                                                    <SamplPointSelectField2
                                                        ref="sampl2"
                                                        source="http://dev.vision.local/api/v1.0/sampling_point"
                                                        value={ this.state.value}/>
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
                                                <Checkbox ref="pcb_vial">PCB</Checkbox>
                                            </div>
                                            <div className="maxwidth">
                                                <Checkbox ref="antioxydant">Antioxydant</Checkbox>
                                            </div>
                                        </div>
                                        <div className="col-md-4 nopadding">
                                            <div className="col-md-2 nopadding padding-right-xs">
                                                <ControlLabel>{ this.state.qty3.label }</ControlLabel>
                                                <FormControl type="text" value={this.state.qty3.value} />
                                            </div>
                                            <div className="col-md-10 nopadding">
                                                <SamplPointSelectField3
                                                    ref="sampl3"
                                                    source="http://dev.vision.local/api/v1.0/sampling_point"
                                                    value={ this.state.value} />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="row">
                                    <div className="col-md-5 ">
                                        <FormGroup>
                                            Save as
                                            <FormControl type="text" placeholder="fluid profile name" ref="elec_prof"/>
                                        </FormGroup>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-5">
                                    </div>
                                    <div className="col-md-1 ">
                                        <Button bsStyle="success" type="submit">save</Button>
                                    </div>
                                    <div className="col-md-1 ">
                                        <Button bsStyle="danger">cancel</Button>
                                    </div>
                                </div>

                            </div>
                        </Panel>
                    </div>
                </form>
            </div>
        );}
});

export default FluidProfileForm;