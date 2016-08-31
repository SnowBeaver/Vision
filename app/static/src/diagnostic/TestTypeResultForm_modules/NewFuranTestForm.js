import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import {findDOMNode} from 'react-dom';
import { hashHistory } from 'react-router';
import {Link} from 'react-router';


const TextField = React.createClass({
    render: function() {
        var value = (this.props.value != null) ? this.props.value: "";
        var label = (this.props.label != null) ? this.props.label: "";
        var name = (this.props.name != null) ? this.props.name: "";
        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type="text"
                             placeholder={label}
                             name={name}
                             defaultValue={value}
                             />
            </FormGroup>
        );
    }
});



var NewFuranTestForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'hmf', 'fol', 'fal', 'acf', 'mef',
                'hmf_flag', 'fol_flag', 'fal_flag', 'acf_flag', 'mef_flag'
            ]
        }
    },

    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.tableName + '/?test_result_id=' + this.props.testResultId;
        this.serverRequest = $.get(source, function (result) {
            var res = (result['result']);
            if (res.length > 0) { this.setState({data: res[0]}); }
        }.bind(this), 'json');
    },

    _create: function () {
        var fields = this.state.fields;
        var data = {};
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }

        return $.ajax({
            url: '/api/v1.0/furan_test/',
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
        if (this.state.data == null) { return (<div></div>);}
        return (
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div className="row">
                        <div className="col-md-1 ">
                            <Checkbox name="hmf_flag">
                                <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>
                        <div className="col-md-3">
                            <TextField label="5-HMF" name="hmf" value={this.state.data.hmf}/>
                        </div>
                        <div className="col-md-1">
                            <Checkbox name="fol_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>
                        <div className="col-md-3">
                            <TextField label="2-FOL" name="fol" value={this.state.data.fol}/>
                        </div>
                        <div className="col-md-1">
                            <Checkbox name="fol_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>
                        <div className="col-md-3">
                            <TextField label="2-FAL" name="fal" value={this.state.data.fal}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1 ">
                            <Checkbox name="acf_flag">
                                <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>

                        <div className="col-md-3">
                            <TextField label="2-ACF" name="acf" value={this.state.data.acf}/>
                        </div>
                        <div className="col-md-1">
                            <Checkbox name="mef_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>
                        <div className="col-md-3">
                            <TextField label="5-MEF" name="mef" value={this.state.data.mef}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 ">
                            <Button bsStyle="success"
                                    className="pull-right"
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


export default NewFuranTestForm;