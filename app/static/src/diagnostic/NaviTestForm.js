import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import  Modal from 'react-bootstrap/lib/Modal';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField'




var LabAnalyserSelectField = React.createClass ({

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
            menuItems.push(<option value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <FormGroup controlId="formControlsSelect1">
                <ControlLabel>{ this.state.lab_analyser.label }</ControlLabel>
                <FormControl
                    componentclassName="select"
                    placeholder="select"
                    onChange={this.handleChange}
                    value={this.state.value} >
                    <option value="select">select reason</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});


const NewLabModalWin = React.createClass({
    getInitialState() {
        return {showModal: false};
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true});
    },

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
            <span>
                <Button bsStyle="primary" bsSize="small" onClick={this.open}>
                  New
                </Button>
        
                <Modal show={this.state.showModal} onHide={this.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>Existing equipment</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      table
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </span>
        );
    }
});


var TestReasonSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
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
            <FormGroup controlId="formControlsSelect1">
                <ControlLabel>{ this.state.lab_analyser.label }</ControlLabel>
                <FormControl
                    componentclassName="select"
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


const DescrFormHTML = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},

            equip_no: {
                label: 'Equipment No.',
                value: null
            },
            pos_no: {
                label: 'Position No.',
                value: null
            },
            ins_flu: {
                label: 'Insulating Fluid',
                value: null
            },
            date: {
                label: 'Date',
                value: null
            },
            lab_analyser: {
                label: 'Lab/On-Line Analyser',
                value: null
            },
            contract_no: {
                label: 'Contract No.',
                value: null
            },
            lab_no: {
                label: 'Lab P.O. No.',
                value: null
            },

            acq_date: {
                label: 'Acquisition Date',
                value: null
            },

            test_reason: {
                label: 'Test reason',
                value: null
            },
            ini: {
                label: 'Initials',
                value: null
            }
        }
    },

    render: function() {

        return (
            <div className="maxwidth">
                <div className="col-md-9 nopadding padding-right-xs">
                    <div className="maxwidth">
                        <div className="col-md-4 nopadding padding-right-xs">
                            <FormGroup controlId="eqNoInput">
                                <ControlLabel>{ this.state.equip_no.label }</ControlLabel>
                                <FormControl type="text"  value={ this.state.equip_no.value } />
                            </FormGroup>
                        </div>

                        <div className="col-md-4 nopadding padding-right-xs">
                            <FormGroup controlId="positionInput" >
                                <ControlLabel>{ this.state.pos_no.label }</ControlLabel>
                                <FormControl type="text" value={ this.state.pos_no.value } />
                            </FormGroup>
                        </div>

                        <div className="col-md-4 nopadding">
                            <FormGroup controlId="insulFluidInput" >
                                <ControlLabel>{ this.state.ins_flu.label }</ControlLabel>
                                <FormControl type="text" value={ this.state.ins_flu.value } />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="maxwidth">
                        <div className="col-md-4 nopadding padding-right-xs">
                            <LabAnalyserSelectField
                                ref="lab_analyser"
                                source="http://dev.vision.local/api/v1.0/lab_analyser"
                                value={this.state.value} />
                            <NewLabModalWin/>
                        </div>
                        <div className="col-md-4 nopadding padding-right-xs">
                            <FormGroup controlId="insulFluidInput" >
                                <ControlLabel>{ this.state.contract_no.label }</ControlLabel>
                                <FormControl type="text" value={ this.state.contract_no.value } />
                            </FormGroup>
                        </div>

                        <div className="col-md-4 nopadding">
                            <FormGroup controlId="labNoInput">
                                <ControlLabel>{ this.state.lab_no.label }</ControlLabel>
                                <FormControl type="text" value={ this.state.lab_no.value } />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="maxwidth">
                        <div className="col-md-5 nopadding padding-right-xs">
                            <div className="datetimepicker input-group date">
                                <ControlLabel>{this.state.acq_date.label }</ControlLabel>
                                <DateTimeField datetime={this.state.acq_date} />
                            </div>
                        </div>

                        <div className="col-md-5 nopadding padding-right-xs">
                            <TestReasonSelectField
                                ref="testreasn"
                                source="http://dev.vision.local/api/v1.0/test_reason"
                                value={this.state.value} />
                        </div>
                        <div className="col-md-2 nopadding">
                            <FormGroup controlId="labNoInput" >
                                <ControlLabel>{ this.state.ini.label }</ControlLabel>
                                <FormControl type="text" value={ this.state.ini.value } />
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 nopadding">
                    <div>
                        Current test profiles <br/>
                        Fluid : None <br/>
                        Electrical : None <br/>
                    </div>
                </div>
            </div>
        );
    }
});

const ElectrProfFormHTML = React.createClass({

    render:function (){
        return(
            <div className="maxwidth">
                <div className="scheduler-border">
                    <div className="scheduler-border">Tests requested</div>
                    <div className="control-group">
                        <div className="maxwidth">
                            <div className="col-md-4 nopadding padding-right-xs">
                                <Checkbox ref="bush_cap">Bushing Cap and PF</Checkbox>
                            </div>
                            <div className="col-md-4 nopadding padding-right-xs">
                                <Checkbox ref="ins_res">Insulation Resistance</Checkbox>
                            </div>
                            <div className="col-md-4 nopadding">
                                <Checkbox ref="polymer">Degree of Polymerization(DP)</Checkbox>
                            </div>
                        </div>
                        <div className="maxwidth">
                            <div className="col-md-4 nopadding padding-right-xs">
                                <Checkbox ref="wind_cap">Winding Cap an PF</Checkbox>
                            </div>
                            <div className="col-md-4 nopadding padding-right-xs">
                                <Checkbox ref="vis_insp">Visual Inspection</Checkbox>
                            </div>
                            <div className="col-md-4 nopadding">
                                <Checkbox ref="ratio">Turns Ration Test (TTR)</Checkbox>
                            </div>
                        </div>
                        <div className="maxwidth">
                            <div className="col-md-4 nopadding padding-right-xs">
                                <Checkbox ref="wind_cap">Winding Cap and PF Doble</Checkbox>
                            </div>
                            <div className="col-md-4 nopadding padding-right-xs">
                                <Checkbox ref="res_win_con">Resistance; winding/contact</Checkbox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});



var SamplPointSelectField1 = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
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
                <ControlLabel>{ this.state.test_reason.label }</ControlLabel>
                <FormControl componentclassName="select"
                             placeholder="sampling point"
                             onChange={this.handleChange}
                             value={ this.state.sampl_point1.value}>
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
                <ControlLabel>{ this.state.sampl_point2.label }</ControlLabel>
                <FormControl componentclassName="select"
                             placeholder="sampling point"
                             onChange={this.handleChange}
                             value={this.state.sampl_point2.value}>
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
            value: event.target.value
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
                <ControlLabel>{ this.state.sampl_point3.label }</ControlLabel>
                <FormControl componentclassName="select"
                             placeholder="sampling point"
                             onChange={this.handleChange}
                             value={this.state.sampl_point3.value} >
                    <option value="select">select sampling point</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});


const FluidProfHTML = React.createClass({

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
                label: 'Sampling Point',
                value: null
            },
            sampl_point2: {
                label: 'Sampling Point',
                value: null
            },
            sampl_point3: {
                label: 'Sampling Point',
                value: null
            }
        }
    },

    render: function() {

        return (
            <div>
                <div className="scheduler-border">
                    <div className="scheduler-border">Syringe - Test requested</div>
                    <div className="control-group">
                        <div className="col-md-8 nopadding padding-right-xs">
                            <div className="maxwidth">
                                <div className="col-md-4 nopadding padding-right-xs">
                                    <Checkbox ref="gas">Dissolved Gas</Checkbox>
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
                                <SamplPointSelectField1 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scheduler-border">
                    <div className="scheduler-border">Jar - Tests requested</div>
                    <div className="control-group">
                        <div className="col-md-8 nopadding padding-right-xs">
                            <div className="maxwidth">
                                <div className="col-md-4 nopadding padding-right-xs">
                                    <Checkbox ref="dielec_1mm">Dielec .D18161 mmkV</Checkbox>
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
                                    <SamplPointSelectField2/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scheduler-border">
                    <div className="scheduler-border">4-ml vial - Tests requested</div>
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
                                <SamplPointSelectField3/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );}
});


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
            <FormGroup controlId="elecProfSelect">
                <ControlLabel>{ this.state.elec_prof.label }</ControlLabel>
                <FormControl
                    componentclassName="select"
                    placeholder="select"
                    onChange={this.handleChange}
                    value={this.state.elec_prof.value} >
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
            <FormGroup controlId="fluidProfSelect1">
                <ControlLabel>{ this.state.fluid_prof.label }</ControlLabel>
                <FormControl
                    componentclassName="select"
                    placeholder="select"
                    onChange={this.handleChange}
                    value={this.state.fluid_prof.value} >
                    <option value="select">select reason</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});


const TestFormHTML = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},

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
                <div class="col-md-6 nopadding padding-right-xs">
                    <div class="maxwidth">
                        <Checkbox ref="sel_enab">Enable the selection of tests according to profile</Checkbox>
                    </div>
                    <div class="maxwidth">
                        <div class="scheduler-border">
                            <div class="scheduler-border">Electrical</div>
                            <div class="control-group">
                                <div class="maxwidth">
                                    <ElectricalProfSelectField/>
                                </div>
                                <div class="maxwidth">
                                    <FormGroup controlId="qtyInput3" >
                                        <ControlLabel>{ this.state.descr1.label }</ControlLabel>
                                        <FormControl type="text" value={ this.state.descr1.value } />
                                    </FormGroup>
                                </div>
                                <div class="maxwidth padding-top-xs" id="electrical" name="electrical">
                                    <div class="maxwidth text-center">
                                        <button class="btn btn-default margin-right-xs" id="electrical_modify"> Modify </button>
                                        <button class="btn btn-default margin-right-xs" id="electrical_create"> Create </button>
                                        <button class="btn btn-default " id="electrical_delete"> Delete </button>
                                    </div>
                                    <div class="maxwidth text-center padding-top-xs">
                                        <button class="btn btn-default margin-right-xs" id="electrical_cancel"> Cancel </button>
                                        <button class="btn btn-default margin-right-xs" id="electrical_save"> Save </button>
                                    </div>
                                    <input type="hidden" value="" name="electrical_select" id="electrical_select" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 nopadding">
                    <div class="maxwidth">
                        <Checkbox ref="sel_enab">Enable the selection of tests according to profile</Checkbox>
                    </div>
                    <div class="maxwidth">
                        <div class="scheduler-border">
                            <div class="scheduler-border">Fluid</div>
                            <div class="control-group">
                                <div class="maxwidth">
                                    <FluidProfSelectField/>
                                </div>
                                <div class="maxwidth">
                                    <FormGroup controlId="qtyInput3" >
                                        <ControlLabel>{ this.state.descr2.label }</ControlLabel>
                                        <FormControl type="text" value={ this.state.descr2.value } />
                                    </FormGroup>
                                </div>
                                <div class="maxwidth padding-top-xs" id="fluid" name="fluid">
                                    <div class="maxwidth text-center">
                                        <button class="btn btn-default margin-right-xs" id="fluid_modify"> Modify </button>
                                        <button class="btn btn-default margin-right-xs" id="fluid_create"> Create </button>
                                        <button class="btn btn-default" id="fluid_delete"> Delete </button>
                                    </div>
                                    <div class="maxwidth text-center padding-top-xs">
                                        <button class="btn btn-default margin-right-xs" id="fluid_cancel"> Cancel </button>
                                        <button class="btn btn-default margin-right-xs" id="fluid_save"> Save </button>
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




const NaviTestForm = React.createClass ({

    getInitialState: function () {
        return {
            loading: false,
            errors: {}
        }
    },

    _create: function () {
        return $.ajax({
            url: '/api/v1.0/equipment/',
            type: 'POST',
            data: {
                'equipment_type_id': this.refs.eqt.state.eqtype_id,
                'manufacturer_id': this.refs.mn.state.manufac_id,
            },
            beforeSend: function () {
                this.setState({loading: true});
            }
        }).bind(this);
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
        console.log(e.target.name);
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
    _formGroupclassName: function (field) {
        var className = "form-group ";
        if(field) {
            className += " has-error"
        }
        return className;
    },


    render: function() {
        return (
            <div className="row-fluid" id="addForm" tabindex="-1" role="dialog" aria-labelledby="addLabel" aria-hidden="false">
                <div>
                    <div className="modal-content">
                        <form className="" method="post" action="#" >
                            { this.state.csrf_token }
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title"> Insertion of a new sampling compaign </h4>
                            </div>

                            <div className="modal-body">
                                <div className="maxwidth">
                                    <div>
                                        <button className="btn btn-default pull-right margin-right-xs" className="submit">
                                            Create
                                        </button>
                                        <button className="btn btn-default pull-right margin-right-xs" className="close" data-dismiss="modal">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                                <p>
                                    <ul id="tabs" className="nav nav-tabs " data-tabs="tabs">
                                        <li className="active"> <a href="#new-tabs-1" data-toggle="tab"> Description </a> </li>
                                        <li> <a href="#new-tabs-2" data-toggle="tab"> Electrical: as per user </a> </li>
                                        <li> <a href="#new-tabs-3" data-toggle="tab"> Fluid: as per user </a> </li>
                                        <li> <a href="#new-tabs-4" data-toggle="tab"> Test profile </a> </li>
                                    </ul>

                                    <div className="form-container">
                                        <form method="post" action="#" >
                                            <div id="my-tab-content" className="tab-content maxwidth">

                                                <div id="new-tabs-1" role="tabpanel" className="tab-pane active ">
                                                    <DescrFormHTML/>
                                                </div>

                                                <div id="new-tabs-2" role="tabpanel" className="tab-pane">
                                                    <ElectrProfFormHTML/>
                                                </div>

                                                <div id="new-tabs-3" role="tabpanel" className="tab-pane">
                                                    <FluidProfHTML/>
                                                </div>

                                                <div id="new-tabs-4" role="tabpanel" className="tab-pane">
                                                    <TestFormHTML/>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </p>
                                <div className="clearfix"></div>
                            </div>
                            <div className="modal-footer"> </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

});

export default NaviTestForm;


