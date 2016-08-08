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

var PerformedBySelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
        });
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
            <span>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    onChange={this.handleChange}
                    name="performed_by_id">
                    <option key="0" value="select">Performed by</option>
                    {menuItems}
                </FormControl>
            </span>
        );
    }
});

var LabAnalyserSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
        });
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
            <span>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    onChange={this.handleChange} 
                    name="lab_id">
                    <option key="0" value="select">Lab/On-Line Analyser</option>
                    {menuItems}
                </FormControl>
            </span>
        );
    }
});


var ContractNoSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
        });
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
            <span>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    onChange={this.handleChange}
                    name="contract"
                >
                    <option key="0" value="select">Contract No.</option>
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
        this.setState({
            value: event.target.value
        });
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
            menuItems.push(<option key={this.state.items[key].id} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <FormGroup controlId="formControlsSelect1">
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
            menuItems.push(<option key={this.state.items[key].id}  value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <FormGroup controlId="formControlsSelect1">
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <option key="0" value="select">Choose Test Profile</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});



// const ChooseTestModal = React.createClass({
//
//     getInitialState: function () {
//         return { showModal: false };
//     },
//
//     close: function () {
//         this.setState({ showModal: false });
//     },
//
//     open: function () {
//         this.setState({ showModal: true });
//     },
//
//     testChoice : function () {
//
//     },
//
//     render() {
//         return (
//             <div>
//                 <Button bsStyle="primary" bsSize="small" onClick={this.open}>Create</Button>
//                 <Modal show={this.state.showModal}>
//                 <div className="form-container">
//                     <form method="post" action="#" onSubmit={this.onSubmit} onChange={this.onChange}>
//                         <Panel header="Choose Test Profile">
//                             <div>
//                                 <Radio name="choice" value="fluid">
//                                     Fluid Profile
//                                 </Radio>
//                                 <Radio name="choice" value="electro">
//                                     Electrical Profile
//                                 </Radio>
//                             </div>
//                         </Panel>
//                     </form>
//                 </div>
//                 <Modal.Footer>
//                     <ButtonToolbar>
//                         <Button bsStyle="success" onclick="testChoice">Save</Button>
//                         <Button bsStyle="danger" onClick={this.close}>Cancel</Button>
//                     </ButtonToolbar>
//                 </Modal.Footer>
//                 </Modal>
//             </div>
//         );
//     }
// });


var FluidTypeSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
        });
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
            <span>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    onChange={this.handleChange}
                    name="fluid_type_id"
                >
                    <option key="0" value="select">Insulating Fluid</option>
                    {menuItems}
                </FormControl>
            </span>
        );
    }
});


var AssignTestForm = React.createClass ({


    _create: function () {
        var fields = [
            'equipment_number', 'fluid_type_id',
            'lab_id', 'contract', 'test_reason'
        ];
        var data = {};
        for (var i=0;i<fields.length;i++){
            var key= fields[i];
            data[key] = this.state[key];
        }
        console.log(data);

        return $.ajax({
            url: '/api/v1.0/test/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
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
        // console.log(e.target.type);
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

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            equipment_number: ''
        }
    },

    handleClick: function() {
        document.getElementById('test_prof').remove();
    },

    render : function() {

        return(
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <Panel header="Assign a test to equipment">
                        <div className="maxwidth">
                            <div className="col-md-12"> 
                                <div className="maxwidth">
                                    <div className="col-md-6">
                                        <FormControl type="text"
                                                     placeholder="Equipment No."
                                                     name="equipment_number" />
                                    </div>
                                    <div className="col-md-6">
                                        <FluidTypeSelectField
                                            source="http://dev.vision.local/api/v1.0/fluid_type/"
                                            value={this.state.value} />
                                    </div>
                                </div>
                                <div className="maxwidth">
                                    <div className="col-md-5">
                                        <LabAnalyserSelectField
                                            source="http://dev.vision.local/api/v1.0/lab/"
                                            value={this.state.value} />
                                    </div>
                                    <div className="col-md-1">
                                        <NewLabModalWin/>
                                    </div>
                                    <div className="col-md-6">
                                        <ContractNoSelectField
                                            source="http://dev.vision.local/api/v1.0/contract/"
                                        />
                                    </div>
                                </div>
                                <div className="maxwidth">
                                    <div className="col-md-6">
                                        <TestReasonSelectField
                                            source="http://dev.vision.local/api/v1.0/test_reason"
                                            handleChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <PerformedBySelectField
                                            source="http://dev.vision.local/api/v1.0/user"
                                            handleChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="maxwidth">
                                    <div className="col-md-6">
                                        <div className="datetimepicker input-group date">
                                            <ControlLabel>Acquisition Date</ControlLabel>
                                            <DateTimeField datetime={this.state.date} />
                                        </div>
                                    </div>
                                </div>
                                <div className="maxwidth">
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">Chosen profile</legend>
                                        <div id="test_prof">
                                            <div className="col-md-8">
                                                <a href="#/elecprofform">Current test profile</a></div>
                                            <div className="col-md-4">
                                                <a href="javascript:void(0)" 
                                                   className="glyphicon glyphicon-remove text-danger" 
                                                   onClick={this.handleClick}  
                                                   aria-hidden="true">
                                                </a>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="row">
                                    <div className="col-md-7">
                                        <TestProfileSelectField
                                            ref="test_prof"
                                            source="http://dev.vision.local/api/v1.0/"/>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="#/chooseform" className="btn-default">Create</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">
                                    </div>
                                    <div className="col-md-1">
                                        <Button bsStyle="success" type="submit">save</Button>
                                    </div>
                                    <div className="col-md-1">
                                        <Button bsStyle="danger">cancel</Button>
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