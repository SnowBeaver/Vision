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


var NewDissolvedGasTestForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'h2', 'o2', 'n2',
                'co', 'co2', 'ch4', 'c2h2', 'c2h4', 'c2h6',
                'h2_flag', 'o2_flag', 'n2_flag', 'co_flag', 'ch4_flag',
                'co2_flag', 'c2h2_flag', 'c2h6_flag',
                'cap_gaz',
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
            url: '/api/v1.0/dissolved_gas_test/',
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
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-1 ">
                                    <Checkbox name="h2_flag">
                                <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                                    </Checkbox>
                                </div>

                                <div className="col-md-2">
                                    <FormGroup>
                                        <FormControl type="text"
                                                     placeholder="Hydrogen-H2"
                                                     name="h2"
                                        />
                                    </FormGroup>
                                </div>
                                <div className="col-md-1">
                                    <Checkbox name="o2_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                                    </Checkbox>
                                </div>
                                <div className="col-md-2">
                                    <FormGroup>
                                        <FormControl type="text"
                                                     placeholder="Oxygen-O2"
                                                     name="o2"
                                        />
                                    </FormGroup>
                                </div>
                                <div className="col-md-1">
                                    <Checkbox name="n2_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                                    </Checkbox>
                                </div>
                                <div className="col-md-2">
                                    <FormGroup>
                                        <FormControl type="text"
                                                     placeholder="Nitrogen-N2"
                                                     name="n2"
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-1 ">
                                    <Checkbox name="co_flag">
                                <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                                    </Checkbox>
                                </div>

                                <div className="col-md-2">
                                    <FormGroup>
                                        <FormControl type="text"
                                                     placeholder="CO"
                                                     name="co"
                                        />
                                    </FormGroup>
                                </div>
                                <div className="col-md-1">
                                    <Checkbox name="ch4_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                                    </Checkbox>
                                </div>
                                <div className="col-md-2">
                                    <FormGroup>
                                        <FormControl type="text"
                                                     placeholder="Methane-CH4"
                                                     name="ch4"
                                        />
                                    </FormGroup>
                                </div>
                                <div className="col-md-1">
                                    <Checkbox name="co2_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                                    </Checkbox>
                                </div>
                                <div className="col-md-2">
                                    <FormGroup>
                                        <FormControl type="text"
                                                     placeholder="CO2"
                                                     name="co2"
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-1 ">
                                    <Checkbox name="c2h4_flag">
                                <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                                    </Checkbox>
                                </div>

                                <div className="col-md-2">
                                    <FormGroup>
                                        <FormControl type="text"
                                                     placeholder="Ethylene-C2H4"
                                                     name="c2h4"
                                        />
                                    </FormGroup>
                                </div>
                                <div className="col-md-1">
                                    <Checkbox name="c2h6_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                                    </Checkbox>
                                </div>
                                <div className="col-md-2">
                                    <FormGroup>
                                        <FormControl type="text"
                                                     placeholder="Ethane-C2H6"
                                                     name="c2h6"
                                        />
                                    </FormGroup>
                                </div>
                                <div className="col-md-1">
                                    <Checkbox name="c2h2_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                                    </Checkbox>
                                </div>
                                <div className="col-md-2">
                                    <FormGroup>
                                        <FormControl type="text"
                                                     placeholder="Acetylene-C2H2"
                                                     name="c2h2"
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3">
                                    <FormGroup>
                                        <ControlLabel>TDCG</ControlLabel>
                                        <FormControl type="text"
                                                     placeholder="0.0"
                                                     name="c2h2"
                                                     disabled
                                        />
                                    </FormGroup>
                                </div>
                                <div className="col-md-3">
                                    <FormGroup>
                                        <ControlLabel>Total Hydrocarbons</ControlLabel>
                                        <FormControl type="text"
                                                     placeholder="0.0"
                                                     name="c2h2"
                                                     disabled
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <Panel header="Gas Content(%)">

                                <FormGroup>
                                    <FormControl type="text"
                                                 placeholder="0.00"
                                                 name="cap_gaz"
                                                 bsStyle="info"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl type="text"
                                                 placeholder="0"
                                                 name="content_gaz"
                                    />
                                </FormGroup>

                            </Panel>
                        </div>
                    </div>


                    <fieldset className="scheduler-border">
                        <legend className="scheduler-border">Gas Analyzer: concentration(ppm)</legend>
                        <div className="row">

                            <div className="col-md-4 ">
                                <FormGroup>
                                    <ControlLabel>Measured</ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="0"
                                                 name=""
                                                 disabled
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-md-4">
                                <FormGroup>
                                    <ControlLabel>-Calculated</ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="N.D."
                                                 name=""
                                                 disabled
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-md-4">
                                <FormGroup>
                                    <ControlLabel>+Calculated</ControlLabel>
                                    <FormControl type="text"
                                                 placeholder="N.D."
                                                 name=""
                                                 disabled
                                    />
                                </FormGroup>
                            </div>
                        </div>
                    </fieldset>



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


export default NewDissolvedGasTestForm;
