import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import  Modal from 'react-bootstrap/lib/Modal';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField'
import LabCreateForm from './LabCreateForm';
import LabsList from './LabsList';


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
                <Button bsStyle="primary" bsSize="small" onClick={this.open}>
                  New
                </Button>
        
                <Modal show={this.state.showModal} onHide={this.close}>
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


const DescriptionForm = React.createClass({

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

    render: function() {
        return (
            <div className="maxwidth">
                <div className="col-md-9 nopadding padding-right-xs">
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
                        <div className="col-md-4 nopadding padding-right-xs">
                            <LabAnalyserSelectField
                                ref="lab_analyser"
                                source="http://dev.vision.local/api/v1.0/lab/"
                                value={this.state.lab_analyser.value} />
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

export default DescriptionForm;