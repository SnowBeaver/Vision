import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
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

var AirBreakerParams = React.createClass({

    getInitialState: function () {
        return {
            params: [],
            phase_number: '',
            sealed: '',
            welded_cover: '',
            current_rating: '',
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
        error = this._validateFieldLength(e.target.value, e.target.getAttribute("data-len"));
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

    _validateFieldLength: function (value, length){
        var error = "";
        if (value && length){
            if (value.length > length){
                error = "Value should be maximum " + length + " characters long"
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

        // TODO: Resolve extra fields problem: phase_number, sealed, welded_cover
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="Phase Number"
                            name="phase_number"
                            value={this.state.phase_number}
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="Current Rating"
                            name="current_rating"
                            value={this.state.current_rating}
                            data-type="int"
                            data-len="6"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-1 ">
                        <Checkbox name="sealed" value="1"><b>Sealed</b></Checkbox>
                    </div>
                    <div className="col-md-2">
                        <Checkbox name="welded_cover" value="1"><b>Welded Cover</b></Checkbox>
                    </div>
                </div>
            </div>
        )
    }
});

export default AirBreakerParams;
