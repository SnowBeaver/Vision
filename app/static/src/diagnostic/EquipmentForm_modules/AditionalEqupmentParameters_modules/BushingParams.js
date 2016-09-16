import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';


const TextField = React.createClass({
    _onChange: function (e) {
        this.props.onChange(e);
    },

    render: function () {
        let tooltip = <Tooltip id={this.props.label}>{this.props.label}</Tooltip>;
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var type = (this.props["data-type"] != null) ? this.props["data-type"]: undefined;
        var len = (this.props["data-len"] != null) ? this.props["data-len"]: undefined;
        var validationState = (this.props.errors[name]) ? 'error' : null;
        var error = this.props.errors[name];
        return (
            <OverlayTrigger overlay={tooltip} placement="top">
                <FormGroup validationState={validationState}>
                    <FormControl type="text"
                                 placeholder={label}
                                 name={name}
                                 data-type={type}
                                 data-len={len}
                                 onChange={this._onChange}
                    />
                    <HelpBlock className="warning">{error}</HelpBlock>
                    <FormControl.Feedback />
                </FormGroup>
            </OverlayTrigger>
        );
    }
});

var SelectField = React.createClass({
    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        });
    },
    getInitialState: function () {
        return {
            items: [],
            isVisible: false,
            value: -1
        };
    },
    isVisible: function () {
        return this.state.isVisible;
    },
    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.source + '/';
        this.serverRequest = $.get(source, function (result) {
            this.setState({items: (result['result'])});
        }.bind(this), 'json');
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    setVisible: function () {
        this.state.isVisible = true;
    },
    render: function () {
        var label = (this.props.label != null) ? this.props.label : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        return (
            <FormGroup>
                <FormControl componentClass="select"
                             onChange={this.handleChange}
                             defaultValue={value}
                             name={this.props.name}
                >
                    <option>{this.props.label}</option>);
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});


var BushingParams = React.createClass({
    getInitialState: function () {
        return {
            'phase_number':'',
            'sealed':'',
            'winding':'',
            'model':'',
            'kw':'',
            'current':'',
            'fluid_volume':'',
            'bushing_manufacturer_h1':'',
            'bushing_manufacturer_h2':'',
            'bushing_manufacturer_h3':'',
            'bushing_manufacturer_hn':'',
            'bushing_manufacturer_x1':'',
            'bushing_manufacturer_x2':'',
            'bushing_manufacturer_x3':'',
            'bushing_manufacturer_xn':'',
            'bushing_manufacturer_t1':'',
            'bushing_manufacturer_t2':'',
            'bushing_manufacturer_t3':'',
            'bushing_manufacturer_tn':'',
            'bushing_manufacturer_q1':'',
            'bushing_manufacturer_q2':'',
            'bushing_manufacturer_q3':'',
            'bushing_manufacturer_qn':'',
            'bushing_type_h':'',
            'bushing_type_hn':'',
            'bushing_type_x':'',
            'bushing_type_xn':'',
            'bushing_type_t':'',
            'bushing_type_tn':'',
            'bushing_type_q':'',
            'bushing_type_qn':'',
            'c1':'',
            'c1pf':'',
            'c2':'',
            'c2pf':'',
            'bil':'',
            errors: {}

    }
    },

    handleChange: function(e){
        var state = this.state;
        state[e.target.name] = e.target.value;

        var errors = this._validate(e);
        state = this._updateFieldErrors(e.target.name, state, errors);
        this.setState(state);
    },

    _validate: function (e) {
        var errors = [];
        var error;
        error = this._validateFieldType(e.target.value, e.target.getAttribute("data-type"));
        if (error){
            errors.push(error);
        }
        return errors;
    },

    _validateFieldType: function (value, type){
        var error = "";
        if (type != undefined && value){
            var typePatterns = {
                "float": /^(-|\+?)[0-9]+(\.)?[0-9]*$/,
                "int": /^(-|\+)?(0|[1-9]\d*)$/
            };
            if (!typePatterns[type].test(value)){
                error = "Invalid " + type + " value";
            }
        }
        return error;
    },

    _updateFieldErrors: function (fieldName, state, errors){
        // Clear existing errors related to the current field as it has been edited
        state.errors = this.state.errors;
        delete state.errors[fieldName];

        // Update errors with new ones, if present
        if (Object.keys(errors).length){
            state.errors[fieldName] = errors.join(". ");
        }
        return state;
    },

    is_valid: function () {
        return (Object.keys(this.state.errors).length <= 0);
    },


    render: function () {
        var errors = (Object.keys(this.state.errors).length) ? this.state.errors : this.props.errors;

        // TODO: Resolve extra fields problem (for instance, bushing_manufacturer_h3)
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Phase Number"
                                   name="phase_number"
                                   value={this.state.phase_number}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Frequency" name
                                       ="frequency" value
                                       ={this.state.frequency}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Fluid Volume"
                                   name="fluid_volume"
                                   value={this.state.fluid_volume}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="fluid_type"
                            label="Fluid Type"
                            name="fluid_type_id"
                            value={this.state.fluid_type_id}/>
                    </div>
                    <div className="col-md-4">
                        <TextField onChange={this.handleChange}
                                   label="Model" name
                                       ="model" value
                                       ={this.state.model}
                                   errors={errors}
                                   data-len="50"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Winding"
                                   name="winding"
                                   value={this.state.winding}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Voltage"
                                   name="kv"
                                   value={this.state.kv}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="C1"
                                   name="c1"
                                   value={this.state.c1}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="C1PF"
                                   name="c1pf"
                                   value={this.state.c1pf}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="C2"
                                   name="c2"
                                   value={this.state.c2}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="C2PF"
                                   name="c2pf"
                                   value={this.state.c2pf}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Current"
                                   name="current"
                                   value={this.state.current}
                                   errors={errors}
                                   data-type="int"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="BIL"
                                   name="bil"
                                   value={this.state.bil}
                                   errors={errors}
                                   data-type="int"
                                   data-len="8"/>
                    </div>
                    <div className="col-md-1 ">
                        <Checkbox name="sealed" value="1"><b>Sealed</b></Checkbox>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. H1"
                                   name="bushing_manufacturer_h1"
                                   value={this.state.bushing_manufacturer_h1}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. H2"
                                   name="bushing_manufacturer_h2"
                                   value={this.state.bushing_manufacturer_h2}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. H3"
                                   name="bushing_manufacturer_h3"
                                   value={this.state.bushing_manufacturer_h3}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. Hn"
                                   name="bushing_manufacturer_hn"
                                   value={this.state.bushing_manufacturer_hn}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. X1"
                                   name="bushing_manufacturer_x1"
                                   value={this.state.bushing_manufacturer_x1}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. X2"
                                   name="bushing_manufacturer_x2"
                                   value={this.state.bushing_manufacturer_x2}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. X3"
                                   name="bushing_manufacturer_x3"
                                   value={this.state.bushing_manufacturer_x3}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. Xn"
                                   name="bushing_manufacturer_xn"
                                   value={this.state.bushing_manufacturer_xn}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. T1"
                                   name="bushing_manufacturer_t1"

                                   value={this.state.bushing_manufacturer_t1}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. T2"
                                   name="bushing_manufacturer_t2"
                                   value={this.state.bushing_manufacturer_t2}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. T3"
                                   name="bushing_manufacturer_t3"
                                   value={this.state.bushing_manufacturer_t3}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. Tn"
                                   name="bushing_manufacturer_tn"
                                   value={this.state.bushing_manufacturer_tn}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. Q1"
                                   name="bushing_manufacturer_q1"
                                   value={this.state.bushing_manufacturer_q1}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. Q2"
                                   name="bushing_manufacturer_q2"
                                   value={this.state.bushing_manufacturer_q2}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. Q3"
                                   name="bushing_manufacturer_q3"
                                   value={this.state.bushing_manufacturer_q3}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. Qn"
                                   name="bushing_manufacturer_qn"
                                   value={this.state.bushing_manufacturer_qn}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type H"
                                   name="bushing_type_h"
                                   value={this.state.bushing_type_h}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type Hn"
                                   name="bushing_type_hn"
                                   value={this.state.bushing_type_hn}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type X"
                                   name="bushing_type_x"
                                   value={this.state.bushing_type_x}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type Xn"
                                   name="bushing_type_xn"
                                   value={this.state.bushing_type_xn}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type T"
                                   name="bushing_type_t"
                                   value={this.state.bushing_type_t}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type Tn"
                                   name="bushing_type_tn"
                                   value={this.state.bushing_type_tn}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type Q"
                                   name="bushing_type_q"
                                   value={this.state.bushing_type_q}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type Qn"
                                   name="bushing_type_qn"
                                   value={this.state.bushing_type_qn}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                </div>
            </div>
        )
    }
});

export default BushingParams;
