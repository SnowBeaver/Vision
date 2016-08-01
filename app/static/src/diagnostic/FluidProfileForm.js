import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';

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
            loading: false,
            errors: {},
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
            sampl_point1: {
                label: null,
                value: null
            },
            sampl_point2: {
                label: null,
                value: null
            },
            sampl_point3: {
                label: null,
                value: null
            }
        }
    },

    render: function() {

        return (
            <div>
                <div className="scheduler-border">
                    <fieldset className="scheduler-border">
                                    <legend className="scheduler-border">Jar - Tests requested</legend>
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
                                <FormGroup controlId="qtyInput1" >
                                    <ControlLabel>{this.state.qty1.label}</ControlLabel>
                                    <FormControl type="text" value={this.state.qty1.value} />
                                </FormGroup>
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
                                    <legend className="scheduler-border">4-ml vial - Tests requested</legend>
                    <div className="control-group">
                        <div className="col-md-8 nopadding padding-right-xs">
                            <div className="maxwidth">
                                <div className="col-md-4 nopadding padding-right-xs">
                                    <Checkbox ref="dielec_1mm">Dielec .D1816(1mm)(kV)</Checkbox>
                                </div>
                                <div className="col-md-4 nopadding padding-right-xs">
                                    <Checkbox ref="acid">AcidityD974</Checkbox>
                                </div>
                                <div className="col-md-4 nopadding">
                                    <Checkbox ref="density">Density(D1298)</Checkbox>
                                </div>
                            </div>
                            <div className="maxwidth">
                                <div className="col-md-4 nopadding padding-right-xs">
                                    <Checkbox ref="pcb_jar">PCB</Checkbox>
                                </div>
                                <div className="col-md-4 nopadding padding-right-xs">
                                    <Checkbox ref="inhibit_jar">Inhibitor</Checkbox>
                                </div>
                                <div className="col-md-4 nopadding">
                                    <Checkbox ref="p_point">PouPoint</Checkbox>
                                </div>
                            </div>
                            <div className="maxwidth">
                                <div className="col-md-4 nopadding padding-right-xs">
                                    <Checkbox ref="dielec_2mm">Dielec.D18162mmkV</Checkbox>
                                </div>
                                <div className="col-md-4 nopadding padding-right-xs">
                                    <Checkbox ref="color">ColorD1500</Checkbox>
                                </div>
                                <div className="col-md-4 nopadding">
                                    <Checkbox ref="pf_25">PF25C(D924)</Checkbox>
                                </div>
                            </div>
                            <div className="maxwidth">
                                <div className="col-md-4 nopadding padding-right-xs">
                                    <Checkbox ref="particles">Particles</Checkbox>
                                </div>
                                <div className="col-md-4 nopadding padding-right-xs">
                                    <Checkbox ref="metal_oil">Metals in oil</Checkbox>
                                </div>
                                <div className="col-md-4 nopadding">
                                    <Checkbox ref="viscosity">Viscosity</Checkbox>
                                </div>
                            </div>
                            <div className="maxwidth">
                                <div className="col-md-4 nopadding padding-right-xs">
                                    <Checkbox ref="dielec_db87">Dielec. D877(kV)</Checkbox>
                                </div>
                                <div className="col-md-4 nopadding padding-right-xs">
                                    <Checkbox ref="ift">IFT(D971)</Checkbox>
                                </div>
                                <div className="col-md-4 nopadding">
                                    <Checkbox ref="pf_100">PF100C(D924)</Checkbox>
                                </div>
                            </div>
                            <div className="maxwidth">
                                <div className="col-md-4 nopadding padding-right-xs">
                                    <Checkbox ref="furan_jar">Furans</Checkbox>
                                </div>
                                <div className="col-md-4 nopadding padding-right-xs">
                                    <Checkbox ref="water_2">Water</Checkbox>
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
                                    <FormGroup controlId="qtyInput2" >
                                        <ControlLabel>{ this.state.qty2.label }</ControlLabel>
                                        <FormControl type="text" value={this.state.qty2.value} />
                                    </FormGroup>
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
                                            <legend className="scheduler-border">Electrical</legend>
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
                                <FormGroup controlId="qtyInput3" >
                                    <ControlLabel>{ this.state.qty3.label }</ControlLabel>
                                    <FormControl type="text" value={this.state.qty3.value} />
                                </FormGroup>
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
                </div>
            </div>
        );}
});

export default FluidProfileForm;