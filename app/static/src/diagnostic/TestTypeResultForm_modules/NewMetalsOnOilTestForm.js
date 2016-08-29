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

var NewMetalsOnOilTestForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'iron', 'nickel', 'aluminium', 'copper',
                'tin', 'silver', 'lead', 'zinc', 'arsenic',
                'cadmium', 'chrome',
                'iron_flag', 'nickel_flag', 'aluminium_flag', 'copper_flag',
                'tin_flag', 'silver_flag', 'lead_flag', 'zinc_flag',
                'arsenic_flag', 'cadmium_flag', 'chrome_flag'
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
            url: '/api/v1.0/norm/',
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
                        <div className="col-md-1 ">
                            <Checkbox name="iron_flag">
                                <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Iron"
                                             name="iron"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <Checkbox name="nickel_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Nickel"
                                             name="nickel"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <Checkbox name="aluminium_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Aluminium"
                                             name="aluminium"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <Checkbox name="copper_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Copper"
                                             name="copper"
                                />
                            </FormGroup>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <Checkbox name="tin_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Tin"
                                             name="tin"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1 ">
                            <Checkbox name="silver_flag">
                                <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>

                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Silver"
                                             name="silver"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <Checkbox name="lead_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Lead"
                                             name="lead"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <Checkbox name="zinc_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>
                        <div className="col-md-2">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Zinc"
                                             name="zinc"
                                />
                            </FormGroup>
                        </div>


                        <div className="row">
                            <div className="col-md-1">
                                <Checkbox name="arsenic_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                                </Checkbox>
                            </div>
                            <div className="col-md-2">
                                <FormGroup>
                                    <FormControl type="text"
                                                 placeholder="Arsenic"
                                                 name="arsenic"
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-md-1">
                                <Checkbox name="cadmium_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                                </Checkbox>
                            </div>
                            <div className="col-md-2">
                                <FormGroup>
                                    <FormControl type="text"
                                                 placeholder="Cadmium"
                                                 name="cadmium"
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-md-1">
                                <Checkbox name="chrome_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                                </Checkbox>
                            </div>
                            <div className="col-md-2">
                                <FormGroup>
                                    <FormControl type="text"
                                                 placeholder="Chrome"
                                                 name="chrome"
                                    />
                                </FormGroup>
                            </div>
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


export default NewMetalsOnOilTestForm;
