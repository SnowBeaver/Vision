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
                        <div className="col-md-3 col-md-offset-3" >
                            <Panel header="Primary">
                            </Panel>
                        </div>
                        <div className="col-md-3" >
                            <Panel header="Secondary">
                            </Panel>
                        </div>
                        <div className="col-md-3" >
                            <Panel header="Connection">
                            </Panel>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-md-offset-1">
                            <b>Phase A</b>
                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="phase_a1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="phase_a2"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="phase_a3"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2 col-md-offset-1">
                            <b>Phase B</b>
                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="phase_b1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="phase_b2"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="phase_b3"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2 col-md-offset-1">
                            <b>Phase C</b>
                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="phase_c1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="phase_c2"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="phase_c3"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 " >
                            <Panel header="Lead & Winding">
                            </Panel>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="lead_a"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="lead_b"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="lead_c"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="lead_n"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 pull-right">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="0.0"
                                             name="winding"
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


export default PolymerisationDegreeTestForm;

