import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
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
        if (this.state.data == null) { return (<div></div>);}
        return (
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>

                    <div className="row">
                        <div className="col-md-1 ">
                            <CheckBox name="dielectric_1816_flag"/>
                        </div>
                        <div className="col-md-5">
                            <TextField label="Dielec. D1816(1mm)(Kv)" name="dielectric_1816" value={this.state.data.dielectric_1816}/>
                        </div>
                        <div className="col-md-1 ">
                            <CheckBox name="dielectric_1816_2_flag"/>
                        </div>

                        <div className="col-md-5">
                            <TextField label="Dielec. D1816(2mm)(Kv)" name="dielectric_1816_2" value={this.state.data.dielectric_1816_2}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1 ">
                            <CheckBox name="dielectric_877_flag"/>
                        </div>
                        <div className="col-md-5">
                            <TextField label="Dielec. D877(Kv)" name="dielectric_877" value={this.state.data.dielectric_877}/>
                        </div>
                        <div className="col-md-1 ">
                            <CheckBox name="dielectric_iec_156_flag"/>
                        </div>
                        <div className="col-md-5">
                            <TextField label="Dielec. IEC-156(Kv)" name="dielectric_iec_156" value={this.state.data.dielectric_iec_156}/>
                        </div>
                    </div>


                    <div className="row">

                        <div className="col-md-3">
                            <TextField label="Acidity(D974)" name="acidity" value={this.state.data.acidity}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="Color(D1500)" name="color" value={this.state.data.color}/>
                        </div>

                        <div className="col-md-3">
                            <TextField label="IFT(D971)" name="ift" value={this.state.data.ift}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="Visual(D1524)" name="visual" value={this.state.data.visual}/>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-3">
                            <TextField label="Density(D1298)" name="density" value={this.state.data.density}/>
                        </div>

                        <div className="col-md-3">
                            <TextField label="PF 25C(D924)" name="pf20c" value={this.state.data.pf20c}/>
                        </div>

                        <div className="col-md-3">
                            <TextField label="PF 100C(D924)" name="pf100c" value={this.state.data.pf100c}/>
                        </div>

                        <div className="col-md-3">
                            <TextField label="Sludge(D2112)" name="sludge" value={this.state.data.sludge}/>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-3">
                            <TextField label="Aniline Point(D611)" name="aniline_point" value={this.state.data.aniline_point}/>
                        </div>
                        <div className="col-md-3">
                            <TextField label="Viscosity(D88)" name="viscosity" value={this.state.data.viscosity}/>
                        </div>

                        <div className="col-md-3">
                            <TextField label="Flash Point(D92)" name="flash_point" value={this.state.data.flash_point}/>
                        </div>

                        <div className="col-md-3">
                            <TextField label="Pour Point(D97)" name="pour_point" value={this.state.data.pour_point}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <TextField label="Corrosive Sulfur(D1275)" name="corrosive_sulfur" value={this.state.data.corrosive_sulfur}/>
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