import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';


var NewEquipmentTypeForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'name',
                'code',
                'table_name'
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
            url: '/api/v1.0/equipment_type/',
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
                        <div className="col-md-12">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Name"
                                             name="name"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Code"
                                             name="code"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Table Name"
                                             name="table_name"
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
                    <br/>
                </form>
            </div>
        );
    }
});


export default NewEquipmentTypeForm;