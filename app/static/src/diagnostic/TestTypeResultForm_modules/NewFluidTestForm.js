import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import { hashHistory } from 'react-router';
import {Link} from 'react-router';


var NewFluidTestForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'dielectric_1816', 'dielectric_1816_2','dielectric_877', 'dielectric_iec_156',
                'dielectric_1816_flag', 'dielectric_1816_2_flag','dielectric_877_flag', 'dielectric_iec_156_flag',
                'acidity', 'color', 'ift', 'visual', 'density', 'pf20c', 'pf100c', 'sludge', 'aniline_point',
                'corrosive_sulfur', 'viscosity', 'flash_point','pour_point'
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
            url: '/api/v1.0/fluid_test/',
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
                            <Checkbox name="dielectric_1816_flag">
                                    <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>
                        <div className="col-md-5">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Dielec. D1816(1mm)(Kv)"
                                             name="dielectric_1816"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1 ">
                            <Checkbox name="dielectric_1816_2_flag">
                                <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>

                        <div className="col-md-5">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Dielec. D1816(2mm)(Kv)"
                                             name="dielectric_1816_2"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1 ">
                            <Checkbox name="dielectric_877_flag">
                                <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>

                        <div className="col-md-5">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Dielec. D877(Kv)"
                                             name="dielectric_877"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1 ">
                            <Checkbox name="dielectric_iec_156_flag">
                                <span className="glyphicon glyphicon-menu-left" >
                                    </span>
                            </Checkbox>
                        </div>

                        <div className="col-md-5">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Dielec. IEC-156(Kv)"
                                             name="dielectric_iec_156"
                                />
                            </FormGroup>
                        </div>
                    </div>


                    <div className="row">

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Acidity(D974)"
                                             name="acidity"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Color(D1500)"
                                             name="color"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="IFT(D971)"
                                             name="ift"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Visual(D1524)"
                                             name="visual"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Density(D1298)"
                                             name="density"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="PF 25C(D924)"
                                             name="pf20c"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="PF 25C(D924)"
                                             name="pf100c"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Sludge(D2112)"
                                             name="sludge"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Aniline Point(D611)"
                                             name="aniline_point"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Viscosity(D88)"
                                             name="pf20c"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Flash Point(D92)"
                                             name="pf100c"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-3">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Pour Point(D97)"
                                             name="pour_point"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                        </div>

                        <div className="col-md-6">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Corrosive Sulfur(D1275)"
                                             name="corrosive_sulfur"
                                />
                            </FormGroup>
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


export default NewFluidTestForm;