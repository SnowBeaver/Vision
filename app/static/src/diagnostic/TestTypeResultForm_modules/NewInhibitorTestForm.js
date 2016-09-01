import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Panel from 'react-bootstrap/lib/Panel';
import {findDOMNode} from 'react-dom';
import { hashHistory } from 'react-router';
import {Link} from 'react-router';


var items=[];

const TextField = React.createClass({
    render: function() {
        var value = (this.props.value != null) ? this.props.value: "";
        var label = (this.props.label != null) ? this.props.label: "";
        var name = (this.props.name != null) ? this.props.name: "";
        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type="text"
                             placeholder={label}
                             name={name}
                             defaultValue={value}
                             />
            </FormGroup>
        );
    }
});

const CheckBox = React.createClass({
    render: function () {
        var name = (this.props.name != null) ? this.props.name: "";
        return (
            <Checkbox name={name}>
                <span className="glyphicon glyphicon-menu-left" >
                </span>
            </Checkbox>
        );
    }

});

var SelectField = React.createClass({
    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
        });
    },
    getInitialState: function () {
        return {
            items: [],
            isVisible: false,
            value: -1
        };
    },
    isVisible: function(){
        return this.state.isVisible;
    },
    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){
            this.setState({ items: (result['result']) });
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
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        console.log( "SelectField value" + (this.props.value || 'no data') );
        console.log( this.props.value );
        console.log( typeof(this.state.value) == "undefined" );
        console.log( this.state.value == null );
        return (
            <FormGroup>
                <FormControl componentClass="select"
                             onChange={this.handleChange}
                             defaultValue={this.props.value}
                             >
                    <option>{this.props.label}</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});

var InhibitorTypeSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
            location_id: event.target.value
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
            menuItems.push(<option key={this.state.items[key].id} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChange}
                        name="inhibitor_type_id"
                        value={this.state.selected}
                    >
                        <option value="select">Inhibitor Type</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});

var NewInhibitorTestForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'inhibitor',
                'inhibitor_flag',
                'inhibitor_type_id',
                'remark'


            ]
        }
    },

    _create: function () {
        var fields = this.state.fields;
        var data = {};
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }

        return $.ajax({
            url: '/api/v1.0/inhibitor_test/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })
    },

    _onSubmit: function (e) {
        e.preventDefault();
        var errors = this._validate();
        if (Object.keys(errors).length != 0) {
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
        // this.setState(this.getInitialState());

    },

    _onError: function (data) {

        var message = "Failed to create";
        var res = data.responseJSON;
        if (res.message) {
            message = data.responseJSON.message;
        }
        if (res.error) {
            this.setState({
                errors: res.error
            });
        }
    },

    _onChange: function (e) {
        var state = {};
        if (e.target.type == 'select-one') {
            state[e.target.name] = e.target.value;}
        else if (e.target.type == 'checkbox') {
            state[e.target.name] = e.target.checked;
        }
        else{state[e.target.name] = $.trim(e.target.value);}
        this.setState(state);
    },

        _validate: function () {
            var errors = {};
            // if(this.state.created_by_id == "") {
            //   errors.created_by_id = "Create by field is required";
            // }
            // if(this.state.performed_by_id == "") {
            //     errors.performed_by_id = "Performed by field is required";
            // }
            return errors;
        },

        _formGroupClass: function (field) {
            var className = "form-group ";
            if (field) {
                className += " has-error"
            }
            return className;
        },

        render: function () {

            return (
                <div className="form-container">
                    <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-xs-1 ">
                                        <CheckBox name="inhibitor_flag"/>
                                    </div>
                                    <div className="col-xs-6">
                                        <TextField label="Inhibitor" name="inhibitor" value={this.state.data.inhibitor}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <SelectField source="" label="Inhibitor Type" value=""/>
                                    </div>
                                </div>
                                <div className="row">
                                    <FormGroup>
                                        <FormControl componentClass="textarea"
                                                     placeholder="Remark"
                                                     name="remark"
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <Panel header="Calculation of inhibitor quantity to add to the transformer">
                                    <TextField label="Final inhibitor concentration(ppm)" name="" value=""/>
                                    <TextField label="Aditive mixture concetration(% v/v)" name="" value=""/>
                                    <TextField label="Required quantity of additive(liters)" disabled name="" value=""/>
                                    <TextField label="Required dry crystal weight(kg)" disabled name="" value=""/>
                                    <TextField label="Equipment oil volume(liters)" disabled name="" value=""/>
                                </Panel>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 ">
                                <Button bsStyle="success"
                                        className="pull-right"
                                        onClick={this.props.handleClose}
                                        type="submit">Save</Button>
                                &nbsp;
                                <Button bsStyle="danger"
                                        className="pull-right margin-right-xs"
                                        onClick={this.props.handleClose}
                                >Cancel</Button>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
    });


export default NewInhibitorTestForm;