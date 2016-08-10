import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField'
import Panel from 'react-bootstrap/lib/Panel';
import {findDOMNode} from 'react-dom';


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
            <div>
                <FormGroup>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChange}
                        name="performed_by_id">
                        <option key="0" value="select">Assigned to</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var CreatedBySelectField = React.createClass ({

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
            <div>
                <FormGroup>
                    <FormControl
                        componentClass="select"
                        placeholder="select user"
                        onChange={this.handleChange}
                        name="created_by_id">
                        <option key="0" value="select">Created by</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
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
            <div>
                <FormGroup>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChange}
                        name="lab_id">
                        <option key="0" value="select">Lab/On-Line Analyser</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var LabContractSelectField = React.createClass ({

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
            <div>
                <FormGroup>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChange}
                        name="contract">
                        <option key="0" value="select">Lab Contract</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
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
            <div>
                <FormGroup>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChange}
                        name="contract"
                    >
                        <option key="0" value="select">Contract No.</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
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
            <FormGroup>
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
            <FormGroup>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    value={this.state.value}
                    onChange={this.handleChange}
                    name="test_prof"
                >
                    <option key="0" value="select">Choose profile from saved</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});


var CampaignForm = React.createClass ({


    _create: function () {
        var fields = [
            'equipment_number', 'fluid_type_id',
            'lab_id', 'contract', 'test_reason', 'comments',
            'date_application', 'date'
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
                    <Panel header="New Campaign">
                        <div className="row">
                            <div className="col-md-11">
                                <CreatedBySelectField
                                    source="http://dev.vision.local/api/v1.0/user"
                                    handleChange={this.handleChange} />
                            </div>
                            <div className="col-md-1">
                                <Button bsStyle="primary">New</Button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="datetimepicker input-group date">
                                    <FormGroup>
                                        <ControlLabel>Date Created</ControlLabel>
                                        <DateTimeField datetime={this.state.date} />
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-11">
                                <ContractNoSelectField
                                    source="http://dev.vision.local/api/v1.0/contract/" />
                            </div>
                            <div className="col-md-1">
                                <Button bsStyle="primary">New</Button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-10">
                                <TestReasonSelectField
                                    source="http://dev.vision.local/api/v1.0/test_reason"
                                    handleChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-11">
                                <LabAnalyserSelectField
                                    source="http://dev.vision.local/api/v1.0/lab/"
                                    value={this.state.value} />
                            </div>
                            <div className="col-md-1">
                                <Button bsStyle="primary">New</Button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-11">
                                <LabContractSelectField
                                    source="http://dev.vision.local/api/v1.0/contract/"
                                    handleChange={this.handleChange} />
                            </div>
                            <div className="col-md-1">
                                <Button bsStyle="primary">New</Button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-10">
                                <FormGroup>
                                    <FormControl componentClass="textarea" placeholder="comments" name="comments"/>
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                <FormGroup>
                                    <FormControl type="text"
                                                 placeholder="Number of containers"
                                                 name="containers"
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="datetimepicker input-group date col-md-3">
                                    <ControlLabel>Date Applied</ControlLabel>
                                    <DateTimeField datetime={this.state.date_application} />
                                </div>
                                <div className="datetimepicker input-group date col-md-3">
                                    <ControlLabel>Acquisition Date</ControlLabel>
                                    <DateTimeField datetime={this.state.ac_date} />
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-10">
                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border">Campaign tests</legend>
                                        <div id="test_prof">
                                            <div className="col-md-4">
                                                <a href="#/elecprofform">Electrical test 39489</a>
                                                &nbsp;
                                                &nbsp;
                                                <a href="javascript:void(0)"
                                                   className="glyphicon glyphicon-remove text-danger"
                                                   onClick={this.handleClick}
                                                   aria-hidden="true">
                                                </a>
                                            </div>
                                        </div>
                                </fieldset>
                            </div>
                        </div> 
                        <div className="row">
                            <div className="col-md-3">
                                <FormGroup>
                                    <TestProfileSelectField
                                        source="http://dev.vision.local/api/v1.0/test_profile"/>
                                </FormGroup>
                            </div>
                            <div className="col-md-1 text-center">OR</div>
                            <div className="col-md-2">
                                <FormGroup>
                                    <a href="#/test" className="btn btn-success">Create new one</a>
                                </FormGroup>
                            </div>
                        </div>
            
                        <div className="row">
                            <div className="col-md-12 ">
                                <Button bsStyle="success" className="pull-right" type="submit">Save</Button>
                                &nbsp;
                                <Button bsStyle="danger" className="pull-right margin-right-xs">Cancel</Button>
                            </div>
                        </div>
        
                    </Panel>
                </form>
            </div>
        );
    }
});


export default CampaignForm;
