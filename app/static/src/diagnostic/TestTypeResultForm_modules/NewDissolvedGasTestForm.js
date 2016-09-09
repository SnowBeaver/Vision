import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Panel from 'react-bootstrap/lib/Panel';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';

const TextField = React.createClass({
    render: function () {
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        console.log("NewFluidTestForm TextField " + name + " value: " + value);
        console.log("NewFluidTestForm TextField " + name + " props.value: " + this.props.value);
        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type="text"
                             placeholder={label}
                             name={name}
                             value={value}
                />
                <FormControl.Feedback />
            </FormGroup>
        );
    }
});

const CheckBox = React.createClass({
    render: function () {
        var name = (this.props.name != null) ? this.props.name : "";
        return (
            <Checkbox name={name}>
                <span className="glyphicon glyphicon-menu-left">
                </span>
            </Checkbox>
        );
    }

});


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
                'cap_gaz'
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
        if (e.target.type == 'checkbox') {
            state[e.target.name] = e.target.checked;
        } else if (e.target.type == 'select-one') {
            state[e.target.name] = e.target.value;
        } else {
            state[e.target.name] = e.target.value;
        }
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
                                    <CheckBox name="h2_flag"/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="Hydrogen-H2" name="h2" value={this.state.h2}/>
                                </div>
                                <div className="col-md-1">
                                    <CheckBox name="o2_flag"/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="Oxygen-O2" name="o2" value={this.state.o2}/>
                                </div>
                                <div className="col-md-1">
                                    <CheckBox name="n2_flag"/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="Nitrogen-N2" name="n2" value={this.state.n2}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-1 ">
                                    <CheckBox name="co_flag"/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="CO" name="co" value={this.state.co}/>
                                </div>
                                <div className="col-md-1">
                                    <CheckBox name="ch4_flag"/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="Methane-CH4" name="ch4" value={this.state.ch4}/>
                                </div>
                                <div className="col-md-1">
                                    <CheckBox name="co2_flag"/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="CO2" name="co2" value={this.state.co2}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-1 ">
                                    <CheckBox name="c2h4_flag"/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="Ethylene-C2H4" name="c2h4" value={this.state.c2h4}/>
                                </div>
                                <div className="col-md-1">
                                    <CheckBox name="c2h6_flag"/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="Ethane-C2H6" name="c2h6" value={this.state.c2h6}/>
                                </div>
                                <div className="col-md-1">
                                    <CheckBox name="c2h2_flag"/>
                                </div>
                                <div className="col-md-2">
                                    <TextField label="Acetylene-C2H2" name="c2h2" value={this.state.c2h2}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3">
                                    <TextField label="TDCG" name="" value=""/>
                                </div>
                                <div className="col-md-3">
                                    <TextField label="Total Hydrocarbons" name="" value=""/>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <Panel header="Gas Content(%)">
                                <TextField label="" name="cap_gaz" value=""/>
                                <TextField label="" name="content_gaz" value=""/>
                            </Panel>
                        </div>
                    </div>

                    <fieldset className="scheduler-border">
                        <legend className="scheduler-border">Gas Analyzer: concentration(ppm)</legend>
                        <div className="row">

                            <div className="col-md-4 ">
                                <TextField label="Measured" name="" value=""/>
                            </div>
                            <div className="col-md-4">
                                <TextField label="Calculated" name="" value=""/>
                            </div>
                            <div className="col-md-4">
                                <TextField label="+Calculated" name="" value=""/>
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
