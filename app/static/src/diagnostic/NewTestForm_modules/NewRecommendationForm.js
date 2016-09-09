import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import {findDOMNode} from 'react-dom';
import Modal from 'react-bootstrap/lib/Modal';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var items=[];


var TestTypeSelectField = React.createClass ({

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
                        name="test_type_id"
                        required={this.props.required}>
                        <option key="0" value="">Test Type{this.props.required ? " *" : ""}</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var NameSelectField = React.createClass ({

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
                        name="name"
                        required={this.props.required}>
                        <option key="0" value="">Name{this.props.required ? " *" : ""}</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});



var NewRecommendationForm = React.createClass ({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            equipment_number: '',
            fields: [
                'name',
                'test_type_id',
                'code',
                'description'
            ],
            changedFields: []
        }
    },

    _create: function () {
        var fields = this.state.changedFields;
        var data = {};
        for (var i = 0; i < fields.length; i++){
            var key= fields[i];
            data[key] = this.state[key];
        }

        return $.ajax({
            url: '/api/v1.0/recommendation/',
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
            return false;
        }
        var xhr = this._create();
        if (xhr){
            xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading);
        }
    },
    hideLoading: function () {
        this.setState({loading: false});
    },
    _onSuccess: function (data) {
        //this.refs.eqtype_form.getDOMNode().reset();
        //this.setState(this.getInitialState());
        NotificationManager.success("Recommendation added.");
    },
    _onError: function (data) {
        var message = "Failed to create";
        var res = data.responseJSON;
        if(res.message) {
            message = data.responseJSON.message;
        }
        if (res.error) {
            // Join multiple error messages
            if (res.error instanceof Object){
                for (var field in res.error) {
                    var errorMessage = res.error[field];
                    if (Array.isArray(errorMessage)) {
                        errorMessage = errorMessage.join(". ");
                    }
                    res.error[field] = errorMessage;
                }
                this.setState({
                    errors: res.error
                });
            } else {
                message = res.error;
            }
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

        this.state.changedFields.push(e.target.name);
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

    handleClick: function() {
        document.getElementById('test_prof').remove();
    },

    render : function() {

        return(
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <Panel header="New Recommendation">

                        <div className="row">
                            <div className="col-md-12">
                                <FormGroup controlId="contract_status"
                                           validationState={this.state.errors.test_type_id ? 'error' : null}>
                                    <HelpBlock className="warning">{this.state.errors.test_type_id}</HelpBlock>
                                    <TestTypeSelectField
                                        source="/api/v1.0/test_type"
                                        handleChange={this.handleChange}
                                        required/>
                                </FormGroup>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-12">
                                <FormGroup controlId="contract_status"
                                           validationState={this.state.errors.name ? 'error' : null}>
                                    <HelpBlock className="warning">{this.state.errors.name}</HelpBlock>
                                    <NameSelectField
                                        source="/api/v1.0/user"
                                        handleChange={this.handleChange}
                                        required/>
                                </FormGroup>
                            </div>
                        </div>

                        <div className="maxwidth">
                            <FormGroup validationState={this.state.errors.code ? 'error' : null}>
                                <HelpBlock className="warning">{this.state.errors.code}</HelpBlock>
                                <FormControl type="text"
                                             placeholder="Code"
                                             name="code"
                                />
                            </FormGroup>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <FormGroup validationState={this.state.errors.description ? 'error' : null}>
                                    <ControlLabel>Recommendations</ControlLabel>
                                    <HelpBlock className="warning">{this.state.errors.description}</HelpBlock>
                                    <FormControl componentClass="textarea"
                                                 placeholder="Repair description"
                                                 name="description"/>
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
                    </Panel>
                </form>
            </div>
        );
    }
});


export default NewRecommendationForm;