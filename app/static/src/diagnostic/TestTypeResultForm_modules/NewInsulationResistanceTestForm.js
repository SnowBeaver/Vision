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


var NewInsulationResistanceTestForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'test_kv1', 'test_kv2', 'test_kv3', 'test_kv4', 'test_kv5',
                'resistance1', 'resistance2', 'resistance3', 'resistance4', 'resistance5',
                'multiplier1', 'multiplier2', 'multiplier3', 'multiplier4', 'multiplier5',
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
                            <b>HI to LO+GND</b>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Test kV"
                                             name="test_kv1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Mego ohM"
                                             name="resistance1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Multiplier"
                                             name="multiplier1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Measured"
                                             name=""
                                             disabled
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Corr. 20C"
                                             name=""
                                             disabled
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <b>LO to HI+GND</b>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Test kV"
                                             name="test_kv2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Mego ohM"
                                             name="resistance2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Multiplier"
                                             name="multiplier2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Measured"
                                             name=""
                                             disabled
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Corr. 20C"
                                             name=""
                                             disabled
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <b>Hi+LO to GND</b>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Test kV"
                                             name="test_kv3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Mego ohM"
                                             name="resistance3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Multiplier"
                                             name="multiplier3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Measured"
                                             name=""
                                             disabled
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Corr. 20C"
                                             name=""
                                             disabled
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <b>Core to GND</b>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Test kV"
                                             name="test_kv4"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Mego ohM"
                                             name="resistance4"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Multiplier"
                                             name="multiplier4"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Measured"
                                             name=""
                                             disabled
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Corr. 20C"
                                             name=""
                                             disabled
                                />
                            </FormGroup>
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


export default NewInsulationResistanceTestForm;