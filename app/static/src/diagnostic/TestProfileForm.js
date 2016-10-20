import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';


var items =[];

var ElectricalProfSelectField = React.createClass ({

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
        this.serverRequest = $.authorizedGet(this.props.source, function (result){

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
            <FormGroup controlId="elecProfSelect">
                <ControlLabel>Profile Selection</ControlLabel>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    onChange={this.handleChange}
                     >
                    <option value="select">select reason</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});


var FluidProfSelectField = React.createClass ({

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
        this.serverRequest = $.authorizedGet(this.props.source, function (result){

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
            <FormGroup controlId="fluidProfSelect1">
                <ControlLabel>Profile Selection</ControlLabel>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    onChange={this.handleChange}
                     >
                    <option value="select">select reason</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});


var TestProfileForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fluid_prof: {
                label: null,
                value: null
            },
            elec_prof: {
                label: null,
                value: null
            },
            descr1: {
                label: 'Description',
                value: null
            },
            descr2: {
                label: 'Description',
                value: null
            }
        }
    },

    render: function (){
        return (
            <div>
                <div className="col-md-6 nopadding padding-right-xs">
                    <div className="maxwidth">
                        <Checkbox ref="sel_enab">Enable the selection of tests according to profile</Checkbox>
                    </div>
                    <div className="maxwidth">
                        <div className="scheduler-border">
                            <div className="scheduler-border">Electrical</div>
                            <div className="control-group">
                                <div className="maxwidth">
                                    <ElectricalProfSelectField
                                        ref="electro_prof"
                                        source="/api/v1.0/electrical_profile"
                                        value={this.state.fluid_prof.value}
                                    />
                                </div>
                                <div className="maxwidth">
                                        <ControlLabel>{ this.state.descr1.label }</ControlLabel>
                                        <FormControl type="text" value={ this.state.descr1.value } />
                                </div>
                                <div className="maxwidth padding-top-xs" id="electrical" name="electrical">
                                    <div className="maxwidth text-center">
                                        <button className="btn btn-default margin-right-xs" id="electrical_modify"> Modify </button>
                                        <button className="btn btn-default margin-right-xs" id="electrical_create"> Create </button>
                                        <button className="btn btn-default " id="electrical_delete"> Delete </button>
                                    </div>
                                    <div className="maxwidth text-center padding-top-xs">
                                        <button className="btn btn-default margin-right-xs" id="electrical_cancel"> Cancel </button>
                                        <button className="btn btn-default margin-right-xs" id="electrical_save"> Save </button>
                                    </div>
                                    <input type="hidden" value="" name="electrical_select" id="electrical_select" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 nopadding">
                    <div className="maxwidth">
                        <Checkbox ref="sel_enab">Enable the selection of tests according to profile</Checkbox>
                    </div>
                    <div className="maxwidth">
                        <div className="scheduler-border">
                            <div className="scheduler-border">Fluid</div>
                            <div className="control-group">
                                <div className="maxwidth">
                                    <FluidProfSelectField
                                        ref="fluid_prof"
                                        source="/api/v1.0/fluid_profile"
                                        value={this.state.elec_prof.value}
                                    />
                                </div>
                                <div className="maxwidth">
                                    <FormGroup controlId="qtyInput3" >
                                        <ControlLabel>{ this.state.descr2.label }</ControlLabel>
                                        <FormControl type="text" value={ this.state.descr2.value } />
                                    </FormGroup>
                                </div>
                                <div className="maxwidth padding-top-xs" id="fluid" name="fluid">
                                    <div className="maxwidth text-center">
                                        <button className="btn btn-default margin-right-xs" id="fluid_modify"> Modify </button>
                                        <button className="btn btn-default margin-right-xs" id="fluid_create"> Create </button>
                                        <button className="btn btn-default" id="fluid_delete"> Delete </button>
                                    </div>
                                    <div className="maxwidth text-center padding-top-xs">
                                        <button className="btn btn-default margin-right-xs" id="fluid_cancel"> Cancel </button>
                                        <button className="btn btn-default margin-right-xs" id="fluid_save"> Save </button>
                                    </div>
                                    <input type="hidden" value="" name="fluid_select" id="fluid_select" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


export default TestProfileForm;
