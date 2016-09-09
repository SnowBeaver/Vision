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


var PolymerisationDegreeTestForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'phase_a1', 'phase_a2', 'phase_a3', 'phase_b1', 'phase_b2',
                'phase_b3', 'phase_c1', 'phase_c2', 'phase_c3',
                'lead_a', 'lead_b', 'lead_c', 'lead_n',
                'winding'
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
            url: '/api/v1.0/polymerisation_degree_test/',
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
                        <div className="col-md-3 col-md-offset-3">
                            <Panel header="Primary">
                            </Panel>
                        </div>
                        <div className="col-md-3">
                            <Panel header="Secondary">
                            </Panel>
                        </div>
                        <div className="col-md-3">
                            <Panel header="Connection">
                            </Panel>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-md-offset-1">
                            <b>Phase A</b>
                        </div>
                        <div className="col-md-3">
                            <TextField label="" name="phase_a1" value={this.state.phase_a1}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="" name="phase_a2" value={this.state.phase_a2}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="" name="phase_a3" value={this.state.phase_a3}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2 col-md-offset-1">
                            <b>Phase B</b>
                        </div>
                        <div className="col-md-3">
                            <TextField label="" name="phase_b1" value={this.state.phase_b1}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="" name="phase_b2" value={this.state.phase_b2}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="" name="phase_b3" value={this.state.phase_b3}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2 col-md-offset-1">
                            <b>Phase C</b>
                        </div>
                        <div className="col-md-3">
                            <TextField label="" name="phase_c1" value={this.state.phase_c1}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="" name="phase_c2" value={this.state.phase_c2}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="" name="phase_c3" value={this.state.phase_c3}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 ">
                            <Panel header="Lead & Winding">
                            </Panel>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <TextField label="" name="lead_a" value={this.state.lead_a}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="" name="lead_b" value={this.state.lead_b}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="" name="lead_c" value={this.state.lead_c}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="" name="lead_n" value={this.state.lead_n}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 pull-right">
                            <TextField label="" name="winding" value={this.state.winding}/>
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


export default PolymerisationDegreeTestForm;

