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

var items = [];
var options =[];

var ActualTapSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
        })

    },

    getInitialState: function(){
        return {
            items: [ '1', '2', '3', '4','5','6','7','8','9','10']
        };
    },

    isVisible: function(){
        return this.state.isVisible;
    },

    setVisible: function(){
        this.state.isVisible = true;
    },

    render: function() {
        options = [];
        for (var key in this.state.items) {
            options.push(<option key={this.state.items[key].id} value={this.state.items[key]}>{`${this.state.items[key]}`}</option>);


        }

        return (
            <div>
                <FormGroup>
                    <ControlLabel>Actual Tap Position</ControlLabel>
                    <FormControl componentClass="select"
                                 placeholder="select tap"
                                 onChange={this.handleChange}
                    >
                        <option key="0" value="select">{this.state.items[0]}</option>
                        {options}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var NewTransformerTestForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'test_kv1', 'test_kv2', 'test_kv3', 'test_kv4', 'test_kv5',
                'resistance1', 'resistance2', 'resistance3', 'resistance4', 'resistance5',
                'multiplier1', 'multiplier2', 'multiplier3', 'multiplier4', 'multiplier5'
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
            url: '/api/v1.0/insulation_resistance_test/',
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
        state[e.target.name] = $.trim(e.target.value);
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
                        <div className="col-md-2">
                            <FormGroup>
                                <ControlLabel>H1-H2/X0-X2</ControlLabel>
                                <FormControl type="text"
                                             placeholder="Phase1"
                                             name="measured_current1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <ControlLabel>Exc.Curr.</ControlLabel>
                                <FormControl type="text"
                                             placeholder="Phase1"
                                             name="calculated_current1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <ControlLabel>Err.(%)</ControlLabel>
                                <FormControl type="text"
                                             placeholder="Phase1"
                                             name="error1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <ControlLabel>H1-H2/X0-X2</ControlLabel>
                                <FormControl type="text"
                                             placeholder="Phase2"
                                             name="measured_current2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <ControlLabel>Exc.Curr.</ControlLabel>
                                <FormControl type="text"
                                             placeholder="Phase2"
                                             name="calculated_current2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <ControlLabel>Err.(%)</ControlLabel>
                                <FormControl type="text"
                                             placeholder="Phase2"
                                             name="error2"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <FormGroup>
                                <ControlLabel>H2-H3/X0-X3</ControlLabel>
                                <FormControl type="text"
                                             placeholder="Phase3"
                                             name="measured_current3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <ControlLabel>Exc.Curr.</ControlLabel>
                                <FormControl type="text"
                                             placeholder="Phase3"
                                             name="calculated_current3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <ControlLabel>Err.(%)</ControlLabel>
                                <FormControl type="text"
                                             placeholder="Phase3"
                                             name="error3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <ControlLabel>Winding</ControlLabel>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="winding"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <ControlLabel>Ratio</ControlLabel>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="ratio"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <ControlLabel>Tap Position</ControlLabel>
                                <FormControl type="text"
                                             placeholder="tap pos"
                                             name="tap_position"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2 ">
                                    <ActualTapSelectField />
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


export default NewTransformerTestForm;
