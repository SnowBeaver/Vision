import React from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';


var items = [];



var CampaignSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
            camp: event.target.value
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
            <div>
                <FormGroup controlId="formControlsSelect1">
                    <ControlLabel>Campaign</ControlLabel>
                    <FormControl componentClass="select" placeholder="equipment type" onChange={this.handleChange}>
                        <option value="select">select campaign</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var SyringeSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
            syrin: event.target.value
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
            <div>
                <FormGroup controlId="formControlsSelect1">
                    <ControlLabel>Syringe</ControlLabel>
                    <FormControl componentClass="select" placeholder="equipment type" onChange={this.handleChange}>
                        <option value="select">select syringe</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});



const LabCreateForm = React.createClass ({

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
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
                'code': findDOMNode(this.refs.code).value,
                'serial': findDOMNode(this.refs.analyser).value,
                'name': findDOMNode(this.refs.name).value,
                'analyser': this.refs.analyser.state.camp,
                'location_id': this.refs.syringe.state.syrin
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
    

    render : function () {
        return(
            <div className="form-container">
                <form id="eqtype_form" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div>
                        <Panel header="Add Laboratory">

                            <FormGroup controlId="codeInput" >
                                <ControlLabel>Code</ControlLabel>
                                <FormControl type="text"  ref="code"/>
                            </FormGroup>

                            <FormGroup controlId="analyserInput" >
                                <ControlLabel>Analyser</ControlLabel>
                                <FormControl type="text"  ref="analyser"/>
                            </FormGroup>

                            <FormGroup controlId="nameInput" >
                                <ControlLabel>Name</ControlLabel>
                                <FormControl type="text"  ref="name"/>
                            </FormGroup>

                            <CampaignSelectField ref="campaign"
                                                 source="/api/v1.0/campaign"
                                                 value={this.state.value}/>

                            <SyringeSelectField ref="syringe"
                                                source="/api/v1.0/syringe"
                                                value={this.state.value}/>

                        </Panel>
                    </div>
                </form>
            </div>

        );
    }

});



export default LabCreateForm;
