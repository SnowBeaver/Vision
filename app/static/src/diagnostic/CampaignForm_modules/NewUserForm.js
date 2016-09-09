import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var items=[];


var RoleSelectField = React.createClass ({

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
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>
                {`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup validationState={this.props.errors.roles ? 'error' : null}>
                    <ControlLabel>Roles</ControlLabel>
                    <HelpBlock className="warning">{this.props.errors.roles}</HelpBlock>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChange}
                        name="roles">
                        <option key="0" value="select">Roles</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var CountrySelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
        });
    },

    getInitialState: function(){
        return {
            items: []
        };
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

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup validationState={this.props.errors.country ? 'error' : null}>
                    <ControlLabel>Country</ControlLabel>
                    <HelpBlock className="warning">{this.props.errors.country}</HelpBlock>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChange}
                        name="country">
                        <option key="0" value="select">Country</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var NewUserForm = React.createClass ({


    _create: function () {
        var fields = [
            'role', 'name', 'email', 'alias',
            'website', 'photo', 'address', 'description',
            'country', 'mobile', 'active', 'password'
        ];
        var data = {};
        for (var i=0;i<fields.length;i++){
            var key= fields[i];
            data[key] = this.state[key];
        }

        return $.ajax({
            url: '/api/v1.0/user/',
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
        if (!this._validate()){
            NotificationManager.error('Please correct the errors');
            return;
        }
        var xhr = this._create();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },
    
    hideLoading: function () {
        this.setState({loading: false});
    },
    
    _onSuccess: function (data) {
        this.setState(this.getInitialState());
        this.props.handleClose();
        this.props.onCreate(data);
    }, 
    
    _onError: function (data) {
        var message = "Failed to create";
        var res = data.responseJSON;
        if(res.message) {
            message = data.responseJSON.message;
        }
        if (res.error) {
            // Join multiple error messages
            for (var field in res.error){
                var errorMessage = res.error[field];
                if (Array.isArray(errorMessage)){
                     errorMessage = errorMessage.join(". ");
                }
                res.error[field] = errorMessage;
            }
            this.setState({
                errors: res.error
            });
        }
        NotificationManager.error(message);
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

        var errors = this._validateFieldType(e.target.value, e.target.getAttribute("data-type"));
        state = this._updateFieldErrors(e.target.name, state, errors);
        this.setState(state);
    },

    _validateFieldType: function (value, type){
        var errors = {};
        if (type != undefined && value){
            var typePatterns = {
                "email": /\S+@\S+\.\S+/,
                "url": /^\S+\.\S+$/
            };
            if (!typePatterns[type].test(value)){
                errors = "Invalid " + type;
            }
        }
        return errors;
    },

    _updateFieldErrors: function (fieldName, state, errors){
        // Clear existing errors related to the current field as it has been edited
        state.errors = this.state.errors;
        delete state.errors[fieldName];

        // Update errors with new ones, if present
        if (Object.keys(errors).length){
            state.errors[fieldName] = errors
        }
        return state;
    },
    
    _validate: function () {
        var response = true;
        if (Object.keys(this.state.errors).length > 0){
            response = false;
        }
        return response;
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
                    <div className="row">
                        <div className="col-md-12">
                            <RoleSelectField
                                source="/api/v1.0/role"
                                handleChange={this.handleChange}
                                errors={this.state.errors}/>
                        </div>
                    </div>

                    <div className="maxwidth">
                        <FormGroup validationState={this.state.errors.name ? 'error' : null}>
                            <ControlLabel>Name</ControlLabel>
                            <HelpBlock className="warning">{this.state.errors.name}</HelpBlock>
                            <FormControl type="text"
                                         placeholder="Full Name"
                                         name="name"
                            />
                        </FormGroup>
                    </div>

                    <div className="maxwidth">
                        <FormGroup validationState={this.state.errors.alias ? 'error' : null}>
                            <ControlLabel>Username</ControlLabel><span className="text-danger"> *</span>
                            <HelpBlock className="warning">{this.state.errors.alias}</HelpBlock>
                            <FormControl type="text"
                                         placeholder="Username"
                                         name="alias"
                                         required
                            />
                        </FormGroup>
                    </div>

                    <div className="maxwidth">
                        <FormGroup validationState={this.state.errors.password ? 'error' : null}>
                            <ControlLabel>Password</ControlLabel><span className="text-danger"> *</span>
                            <HelpBlock className="warning">{this.state.errors.password}</HelpBlock>
                            <FormControl type="password"
                                         placeholder="Password"
                                         name="password"
                                         required
                            />
                        </FormGroup>
                    </div>

                    <div className="maxwidth">
                        <FormGroup validationState={this.state.errors.email ? 'error' : null}>
                            <ControlLabel>E-mail</ControlLabel><span className="text-danger"> *</span>
                            <HelpBlock className="warning">{this.state.errors.email}</HelpBlock>
                            <FormControl type="text"
                                         placeholder="E-mail"
                                         name="email"
                                         data-type="email"
                                         required/>
                        </FormGroup>
                    </div>

                    <div className="maxwidth">
                        <FormGroup validationState={this.state.errors.address ? 'error' : null}>
                            <ControlLabel>Address</ControlLabel>
                            <HelpBlock className="warning">{this.state.errors.address}</HelpBlock>
                            <FormControl type="text"
                                         placeholder="Address"
                                         name="address"
                            />
                        </FormGroup>
                    </div>

                    <div className="maxwidth">
                        <FormGroup validationState={this.state.errors.mobile ? 'error' : null}>
                            <ControlLabel>Mobile</ControlLabel>
                            <HelpBlock className="warning">{this.state.errors.mobile}</HelpBlock>
                            <FormControl type="text"
                                         placeholder="Mobile"
                                         name="mobile"
                            />
                        </FormGroup>
                    </div>

                    <div className="maxwidth">
                        <FormGroup validationState={this.state.errors.website ? 'error' : null}>
                            <ControlLabel>Website</ControlLabel>
                            <HelpBlock className="warning">{this.state.errors.website}</HelpBlock>
                            <FormControl type="text"
                                         placeholder="Website"
                                         name="website"
                                         data-type="url"
                            />
                        </FormGroup>
                    </div>

                    <div className="maxwidth">
                        <FormGroup>
                            <CountrySelectField
                                source="/api/v1.0/country/"
                                handleChange={this.handleChange}
                                errors={this.state.errors}
                            />
                        </FormGroup>
                    </div>

                    <div className="maxwidth">
                        <FormGroup validationState={this.state.errors.photo ? 'error' : null}>
                            <ControlLabel>Photo</ControlLabel>
                            <HelpBlock className="warning">{this.state.errors.photo}</HelpBlock>
                            <FormControl type="text"
                                         placeholder="Photo"
                                         name="photo"
                            />
                        </FormGroup>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <FormGroup validationState={this.state.errors.description ? 'error' : null}>
                                <ControlLabel>Description</ControlLabel>
                                <HelpBlock className="warning">{this.state.errors.description}</HelpBlock>
                                <FormControl
                                    componentClass="textarea"
                                    placeholder="Description"
                                    name="description"/>
                            </FormGroup>
                        </div>
                    </div>

                    <div className="maxwidth">
                        <div className="col-md-4 nopadding padding-right-xs">
                            <FormGroup validationState={this.state.errors.active ? 'error' : null}>
                                <HelpBlock className="warning">{this.state.errors.active}</HelpBlock>
                                <Checkbox name="active">Active</Checkbox>
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 ">
                            <Button bsStyle="success"
                                    className="btn btn-success pull-right"
                                    type="submit"
                            >Save</Button>
                            &nbsp;
                            <Button bsStyle="danger"
                                    className="pull-right"
                                    onClick={this.props.handleClose}
                                    className="pull-right margin-right-xs"
                            >Cancel</Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});


export default NewUserForm;