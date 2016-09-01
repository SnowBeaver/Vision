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


const TextField = React.createClass({
    render: function() {
        var label = (this.props.label != null) ? this.props.label: "";
        var name = (this.props.name != null) ? this.props.name: "";
        var value = (this.props.value != null) ? this.props.value: "";
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
        var name = (this.props.name != null) ? this.props.name: "";
        return (
            <Checkbox name={name}>
                <span className="glyphicon glyphicon-menu-left" >
                </span>
            </Checkbox>
        );
    }

});


var MetalsInOilTestForm = React.createClass({

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
                            <CheckBox name="iron_flag"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Iron" name="iron" value={this.state.iron}/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="nickel_flag"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Nickel" name="nickel" value={this.state.nickel}/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="aluminium_flag"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Aluminium" name="aluminium" value={this.state.aluminium}/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="copper_flag"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Copper" name="copper" value={this.state.copper}/>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <CheckBox name="tin_flag"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Tin" name="tin" value={this.state.tin}/>
                        </div>
                        <div className="col-md-1 ">
                            <CheckBox name="silver_flag"/>
                        </div>

                        <div className="col-md-2">
                            <TextField label="Silver" name="silver" value={this.state.silver}/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="lead_flag"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Lead" name="lead" value={this.state.lead}/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="zinc_flag"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Zinc" name="zinc" value={this.state.zinc}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <CheckBox name="arsenic_flag"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Arsenic" name="arsenic" value={this.state.arsenic}/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="cadmium_flag"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Cadmium" name="cadmium" value={this.state.cadmium}/>
                        </div>
                        <div className="col-md-1">
                            <CheckBox name="chrome_flag"/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Chrome" name="chrome" value={this.state.chrome}/>
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


export default MetalsInOilTestForm;
