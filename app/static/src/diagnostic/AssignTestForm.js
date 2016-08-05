import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import  Modal from 'react-bootstrap/lib/Modal';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField'
import Panel from 'react-bootstrap/lib/Panel';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Radio from 'react-bootstrap/lib/Radio';
import {findDOMNode} from 'react-dom';
import ReactDOM from 'react-dom';
import LabsList from './LabList';
import ChooseTestForm from './ChooseTestForm';

var items=[];

var LabAnalyserSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
            lab_an: event.target.value
        });
        this.props.handleChange(event);
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
            <span>
                <ControlLabel>Lab/On-Line Analyser</ControlLabel>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    onChange={this.handleChange}
                    name="test_reason"
                >
                    <option value="select">select reason</option>
                    {menuItems}
                </FormControl>
            </span>
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
                <Button bsStyle="primary"  onClick={this.open}>
                  New
                </Button>
        
                <Modal show={this.state.showModal}  bsSize="small" onHide={this.close}>
                      <LabsList/>
                  <Modal.Footer>
                      <Button onClick={this.close}>Save</Button>
                    <Button onClick={this.close}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </span>
        );
    }
});


var TestReasonSelectField = React.createClass ({

    handleChange: function(event){
        console.log('here 2');
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            value: event.target.value
        });
        this.props.handleChange(event);
    },

    getInitialState: function(){
        return {
            items: [],
            isVisible: false,
            value: null
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
                <ControlLabel>Reason for Testing</ControlLabel>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <option value="select">select reason</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});



var TestProfileSelectField = React.createClass ({

    handleChange: function(event){
        console.log('here 2');
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            value: event.target.value
        });
        this.props.handleChange(event);
    },

    getInitialState: function(){
        return {
            items: [],
            isVisible: false,
            value: null
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
                <ControlLabel>Choose Test Profile</ControlLabel>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <option value="select">select from existing test profiles</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});



const ChooseTestModal = React.createClass({

    getInitialState: function () {
        return { showModal: false };
    },

    close: function () {
        this.setState({ showModal: false });
    },

    open: function () {
        this.setState({ showModal: true });
    },

    testChoice : function () {
        
    },

    render() {
        return (
            <span>
                <Button bsStyle="primary" bsSize="small" onClick={this.open}>
                  Create
                </Button>
                <Modal show={this.state.showModal}   >
                    <div className="form-container">
                <form className="" method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                        <Panel header="Choose Test Profile">
                            <div>
                                <Radio name="choice" ref="fluid" >
                                    Fluid Profile
                                </Radio>
                                <Radio name="choice" ref="electro">
                                    Electrical Profile
                                </Radio>
                            </div>
                        </Panel>
                </form>
            </div>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button bsStyle="success" onclick="testChoice" >save</Button>
                        <Button bsStyle="danger" onClick={this.close} >cancel</Button>
                    </ButtonToolbar>
                   </Modal.Footer>
                </Modal>
              </span>
        );
    }
});



var AssignTestForm = React.createClass ({

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
                label: null,
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

            ini: {
                label: 'Initials',
                value: null
            }
        }
    },

    handleChange: function(e){
        console.log('here 1');
        console.log(e.target.name);
        console.log(e.target.value);
        this.props.onChange(e);
    },


    handleClick: function() {
        document.getElementById('test_prof').remove();
    },

    render : function() {

        return(
            <div className="form-container">
                <form className="" method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <Panel header="Assign a test to equipment">
                        <div className="maxwidth">
                            <div className="col-md-12 nopadding padding-right-xs">
                                <div className="maxwidth">
                                    <div className="col-md-4 nopadding padding-right-xs">
                                        <ControlLabel>{ this.state.equip_no.label }</ControlLabel>
                                        <FormControl type="text"  value={ this.state.equip_no.value } ref="equip_no" />
                                    </div>

                                    <div className="col-md-4 nopadding padding-right-xs">
                                        <ControlLabel>{ this.state.pos_no.label }</ControlLabel>
                                        <FormControl type="text" value={ this.state.pos_no.value } />
                                    </div>

                                    <div className="col-md-4 nopadding">
                                        <ControlLabel>{ this.state.ins_flu.label }</ControlLabel>
                                        <FormControl type="text" value={ this.state.ins_flu.value } ref="ins_flu" />
                                    </div>
                                </div>
                                <div className="maxwidth">
                                    <div className="col-md-3 nopadding padding-right-xs">
                                        <LabAnalyserSelectField
                                            ref="lab_analyser"
                                            source="http://dev.vision.local/api/v1.0/lab/"
                                            value={this.state.lab_analyser.value} />
                                    </div>
                                    <div className="col-md-1 nopadding padding-right-xs">
                                        <NewLabModalWin/>
                                    </div>
                                    <div className="col-md-4 nopadding padding-right-xs">
                                        <ControlLabel>{ this.state.contract_no.label }</ControlLabel>
                                        <FormControl type="text" value={ this.state.contract_no.value } ref="contract"/>
                                    </div>

                                    <div className="col-md-4 nopadding">
                                        <ControlLabel>{ this.state.lab_no.label }</ControlLabel>
                                        <FormControl type="text" value={ this.state.lab_no.value } />
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
                                            ref="test_reason"
                                            source="http://dev.vision.local/api/v1.0/test_reason"
                                            handleChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="col-md-2 nopadding">
                                        <ControlLabel>{ this.state.ini.label }</ControlLabel>
                                        <FormControl type="text" value={ this.state.ini.value } />
                                    </div>
                                </div>
                                <div className="maxwidth">
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">Chosen profile</legend>
                                        <div id="test_prof">
                                            <div className="col-md-8"><a href="http://dev.vision.local/admin/#/elecprofform" >Current test profile</a></div>
                                            <div className="col-md-4"><a href="javascript:void(0)"  className="glyphicon glyphicon-remove-circle " onClick={this.handleClick}  aria-hidden="true">delete</a></div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="row">
                                    <div className="col-md-7 ">
                                        <TestProfileSelectField
                                            ref="test_prof"
                                            source="http://dev.vision.local/api/v1.0/"/>
                                    </div>
                                    <div className="col-md-4 ">
                                        <ChooseTestModal/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Panel>

                </form>
            </div>
        );
    }
});


export default AssignTestForm;