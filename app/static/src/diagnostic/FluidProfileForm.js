import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Radio from 'react-bootstrap/lib/Radio';

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
            menuItems.push(<option key={this.state.items[key].id} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
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

var SamplPointSelectField2 = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
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
            menuItems.push(<option key={this.state.items[key].id} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
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

var SamplPointSelectField3 = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
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
            menuItems.push(<option key={this.state.items[key].id} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
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
                'data': null
            });
            
            this.props.fillUpForm();
            
        } else {

            this.serverRequest = $.get('/api/v1.0/fluid_profile/' + event.target.value, function (result) {
                this.setState({
                    data: result['result']
                });
                this.props.fillUpForm(this.state.data);
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
            var index = Math.random() + '_'+ this.state.items[key].id;
            options.push(<option key={index} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
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
                'qty', 'qty_jar', 'qty_vial', 'sampling', 'selection'
            ]
        }
    },
    componentDidMount: function(){
        // console.log('fluid profile form created, props:');
        // console.log(this.props.data);
        //test_result_id
        // console.log(this.props.data.id);
    },
    fillUpForm: function(data){

        if (null == data) {
            this.refs.fluid_profile.reset();
        } else {
            this.setState({
                data: data
            });
        }
        // Object.keys(data).map(function(value, index) {
        //     console.log(index,value);
        // }); 
    },
    
    _save: function () {
        var fields = this.state.fields;
        var data = {};
        for (var i=0;i<fields.length;i++){
            var key= fields[i];
            data[key] = this.state[key];
        }

        // if update a profile
        if (this.state.name != '') {
            var url = '/api/v1.0/fluid_profile/';
            if (this.state.data.id != '' && this.state.name != '') {
                url = url + this.state.data.id;
            }

            // if profile name is not empty and radio is checked then use this url to save profile
            // and save to test_result
            // otherwise just use these values for saving test_result
            return $.ajax({
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
            })
        }

        // save part of test_result
        return $.ajax({
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
        })

    },
    _onSubmit: function (e) {
        e.preventDefault();
        var errors = this._validate();
        if(Object.keys(errors).length != 0) {
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
        alert('Profile saved successfully');
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
        if(e.target.type == 'checkbox'){
            state[e.target.name] = e.target.checked;
        }
        else if(e.target.type == 'select-one'){
            state[e.target.name] = e.target.value;
        }
        else{
            state[e.target.name] = $.trim(e.target.value);
        }
        this.setState(state);
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
        if(field) {
            className += " has-error"
        }
        return className;
    },



    render: function() {

        return (
            <div className="form-container">
                <form ref="fluid_profile" method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div className="maxwidth">
                        <Panel header="Fluid profile">
                            <div className="row">
                                <div className="col-md-10">
                                </div>
                                <div className="col-md-2">
                                    <FormGroup>
                                        <TestProfileSelectField fillUpForm={this.fillUpForm} source="/api/v1.0/fluid_profile"/>
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
                                                        checked={this.state.data.gas ? 'checked': false} 
                                                        value="1"
                                                    >
                                                        Dissolved Gas
                                                    </Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox 
                                                        name="furans"
                                                        checked={this.state.data.furans ? 'checked': false}
                                                        value="1"
                                                    >Furans</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox name="pcb">PCB</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox name="water">Water</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox name="inhibitor">Inhibitor</Checkbox>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 nopadding">
                                            <div className="col-md-2 nopadding padding-right-xs">
                                                <ControlLabel>Quantity</ControlLabel>
                                                <FormControl type="text" ref="qty" name="qty" value={this.state.data.qty} />
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
                                                    <Checkbox name="dielec">Dielec .D1816(1mm)(kV)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox name="dielec_2">Dielec.D1816(2mm)(kV)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox name="dielec_d">Dielec. D877(kV)</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox name="acid">Acidity(D974)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox name="color">Color(D1500)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox name="ift">IFT(D971)</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox name="density">Density(D1298)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox name="pf_25">PF25C(D924)</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox name="pf_100">PF100C(D924)</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox name="pcb_jar">PCB</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox name="particles">Particles</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox name="furans_f">Furans</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox name="inhibitor_jar">Inhibitor</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox name="metals">Metals in oil</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox name="water_w">Water</Checkbox>
                                                </div>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox name="point">PouPoint</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding padding-right-xs">
                                                    <Checkbox name="viscosity">Viscosity</Checkbox>
                                                </div>
                                                <div className="col-md-4 nopadding">
                                                    <Checkbox name="corr">Corr.Sulfur</Checkbox>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 nopadding">
                                            <div className="maxwidth">
                                                <Checkbox name="dielec_i">Dielec.IEC-156(kV)</Checkbox>
                                            </div>
                                            <div className="maxwidth">
                                                <Checkbox name="visual">Visual(D1524)</Checkbox>
                                            </div>
                                            <div className="maxwidth">
                                                <div className="col-md-2 nopadding padding-right-xs">
                                                    <ControlLabel>Quantity</ControlLabel>
                                                    <FormControl type="text" name="qty_jar" value={this.state.data.qty_jar} />
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
                                                <Checkbox name="pcb_vial">PCB</Checkbox>
                                            </div>
                                            <div className="maxwidth">
                                                <Checkbox name="antioxidant">Antioxydant</Checkbox>
                                            </div>
                                        </div>
                                        <div className="col-md-4 nopadding">
                                            <div className="col-md-2 nopadding padding-right-xs">
                                                <ControlLabel>Quantity</ControlLabel>
                                                <FormControl type="text" name="qty_vial" value={this.state.data.qty_vial} />
                                            </div>
                                            <div className="col-md-10 nopadding">
                                                <SamplPointSelectField3
                                                    source="/api/v1.0/sampling_point"
                                                    value={ this.state.data.sampling_vial} />
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
                                                             placeholder="electrical profile name"
                                                             name="name" value="" />
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
                                    <div className="col-md-9">
                                        <FormGroup controlId="commentsTextarea">
                                            <FormControl componentClass="textarea" placeholder="comments" ref="comments"/>
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row"> 
                                    <div className="col-md-12">
                                        <Button bsStyle="success" type="submit" className="pull-right">Save</Button>
                                        <Button bsStyle="danger" 
                                                onClick={this.props.handleClose} 
                                                className="pull-right margin-right-xs">Cancel</Button>
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