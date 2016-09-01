import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
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


var NewParticleTestForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                '2um', '5um', '10um', '15um',
                '25um', '50um', '100um', 'nas1638',
                'iso4406_1', 'iso4406_2', 'iso4406_3'
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
            url: '/api/v1.0/particle_test/',
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
                        <div className="col-md-3">
                            <TextField label=">2um" name="2um" value={this.state._2um}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label=">5um" name="5um" value={this.state._5um}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label=">10um" name="10um" value={this.state._10um}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label=">15um" name="15um" value={this.state._15um}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <TextField label=">25um" name="25um" value={this.state._25um}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label=">50um" name="50um" value={this.state._50um}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label=">100um" name="100um" value={this.state._100um}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="NAS1638" name="nas1638" value={this.state._nas1638}/>
                        </div>
                    </div>


                            <div className="row">
                                <div className="col-md-6 pull-right" >
                                    <Panel header="ISO 4406">
                                    </Panel>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 pull-right">
                                    <TextField label="" name="iso4406_2" value={this.state.iso4406_2}/>
                                </div>

                                <div className="col-md-2 pull-right">
                                    <TextField label="" name="iso4406_2" value={this.state.iso4406_2}/>
                                </div>

                                <div className="col-md-2 pull-right">
                                    <TextField label="" name="iso4406_3" value={this.state.iso4406_3}/>
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


export default NewParticleTestForm;