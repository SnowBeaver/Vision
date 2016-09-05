import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import {findDOMNode} from 'react-dom';
import { hashHistory } from 'react-router';
import {Link} from 'react-router';


const TextField = React.createClass({
    render: function() {
        var label = (this.props.label != null) ? this.props.label: "";
        var name = (this.props.name != null) ? this.props.name: "";
        var value = (this.props.value != null) ? this.props.value: "";
        var active = (this.props.active != null) ? "disabled" : "";

        return (
            <FormGroup>
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


var NewInsulationResistanceTestForm = React.createClass({
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

    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.tableName + '/?test_result_id=' + this.props.testResultId;
        this.serverRequest = $.get(source, function (result) {
            var res = (result['result']);
            if (res.length > 0) {
                var data = res[0];
                var state = {data: data};
                for (var k in data) {
                    if (data.hasOwnProperty(k)) {
                        state[k] = data[k];
                    }
                }
                this.setState(state);
            }
        }.bind(this), 'json');
    },

    _create: function () {
        var fields = this.state.fields;
        var data = {test_result_id: this.props.testResultId};
        var url = '/api/v1.0/' + this.props.tableName + '/';
        var type = 'POST';
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }
        if ('id' in this.state) {
            url += this.state['id'];
            type = 'PUT';
        }
        return $.ajax({
            url: url,
            type: type,
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
                            <b>HI to LO+TER+GND</b>
                        </div>

                        <div className="col-md-2">
                            <TextField label="Test kV" name="test_kv1" value={this.state.test_kv1}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Mego ohM" name="resistance1" value={this.state.resistance1}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Multiplier" name="multiplier1" value={this.state.multiplier1}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Measured" name="" value="" />
                        </div>
                        <div className="col-md-2">
                            <TextField label="Corr. 20C" name="" value="" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <b>LO to HI+TER+GND</b>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Test kV" name="test_kv2" value={this.state.test_kv2}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Mego ohM" name="resistance2" value={this.state.resistance2}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Multiplier" name="multiplier2" value={this.state.multiplier2}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Measured" name="" value="" disabled/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Corr. 20C" name="" value="" disabled/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <b>TER to HI+LO+GND</b>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Test kV" name="test_kv3" value={this.state.test_kv3}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Mego ohM" name="resistance3" value={this.state.resistance3}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Multiplier" name="multiplier3" value={this.state.multiplier3}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Measured" name="" value="" disabled/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Corr. 20C" name="" value="" disabled/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <b>Hi+LO+TER to GND</b>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Test kV" name="test_kv4" value={this.state.test_kv4}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Mego ohM" name="resistance4" value={this.state.resistance4}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Multiplier" name="multiplier4" value={this.state.multiplier4}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Measured" name="" value="" disabled/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Corr. 20C" name="" value="" disabled/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <b>Core to GND</b>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Test kV" name="test_kv5" value={this.state.test_kv5}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Mego ohM" name="resistance5" value={this.state.resistance5}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Multiplier" name="multiplier5" value={this.state.multiplier5}/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Measured" name="" value="" disabled/>
                        </div>
                        <div className="col-md-2">
                            <TextField label="Corr. 20C" name="" value="" disabled/>
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
