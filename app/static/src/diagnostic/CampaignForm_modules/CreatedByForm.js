import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';

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
            menuItems.push(<option key={this.state.items[key].id} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChange}
                        name="role">
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
            items: [],
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
                <FormGroup>
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


var CreatedByForm = React.createClass ({


    _create: function () {
        var fields = [
            'role', 'name', 'email', 'alias',
            'website', 'photo', 'address', 'description',
            'country', 'mobile', 'active'
        ];
        var data = {};
        for (var i=0;i<fields.length;i++){
            var key= fields[i];
            data[key] = this.state[key];
        }
        console.log(data);

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
        var errors = this._validate();
        if(Object.keys(errors).length != 0) {
          this.setState({
            errors: errors
          });
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
        // show success message
        this.props.onUserCreate(data);
        this.props.handleClose();
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
        return errors;
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

    handleClose: function () {
      this.setState({
          showCreatedByForm: false
      })
    },

    render : function() {

        return(
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                        <div className="row">
                            <div className="col-md-12">
                                <RoleSelectField
                                    source="/api/v1.0/role"
                                    handleChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="maxwidth">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Full Name"
                                             name="name"
                                />
                            </FormGroup>
                        </div>

                        <div className="maxwidth">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Username"
                                             name="alias"
                                />
                            </FormGroup>
                        </div>

                        <div className="maxwidth">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="E-mail"
                                             name="email"
                                />
                            </FormGroup>
                        </div>

                        <div className="maxwidth">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Adress"
                                             name="address"
                                />
                            </FormGroup>
                        </div>

                         <div className="maxwidth">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Mobile"
                                             name="mobile"
                                />
                            </FormGroup>
                        </div>

                        <div className="maxwidth">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Website"
                                             name="website"
                                />
                            </FormGroup>
                        </div>

                        <div className="maxwidth">
                            <FormGroup>
                                <CountrySelectField
                                    source="/api/v1.0/country/"
                                    handleChange={this.handleChange}
                                />
                            </FormGroup>
                        </div>

                        <div className="maxwidth">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Photo"
                                             name="photo"
                                />
                            </FormGroup>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <FormGroup>
                                    <FormControl
                                        componentClass="textarea"
                                        placeholder="description"
                                        name="description"/>
                                </FormGroup>
                            </div>
                        </div>

                        <div className="maxwidth">
                            <div className="col-md-4 nopadding padding-right-xs">
                                <Checkbox name="active">Active</Checkbox>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 ">
                                <Button bsStyle="success" 
                                        className="btn btn-success pull-right"
                                        type="submit"
                                        onClick={this.props.handleClose}
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


export default CreatedByForm;