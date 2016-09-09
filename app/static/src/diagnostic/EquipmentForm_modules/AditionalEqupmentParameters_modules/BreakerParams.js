import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';

const TextField = React.createClass({

    render: function () {
        let tooltip = <Tooltip id={this.props.label}>{this.props.label}</Tooltip>;
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        return (
            <OverlayTrigger overlay={tooltip} placement="top">
                <FormGroup>
                    <FormControl type="text"
                                 placeholder={label}
                                 name={name}
                                 value={value}
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </OverlayTrigger>
        );
    }
});

const CheckBox = React.createClass({
    render: function () {
        var name = (this.props.name != null) ? this.props.name : "";
        var checked = (this.props.value != null) ? this.props.value : false;
        var is_checked = (checked) ? 'checked' : '';
        return (
            <Checkbox checked={is_checked} name={name}>
                <b>{this.props.label}</b>
            </Checkbox>
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
                >
                    <option>{this.props.label}</option>);
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});


var BreakerParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ['fluid_type_id', 'fluid_level_id', 'interrupting_medium_id', 'breaker_mechanism_id',
                'phase_number', 'kv', 'kvar', 'sealed', 'welded_cover'
            ]
        }
    },

    componentDidMount: function () {
    },


    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <SelectField
                            source="fluid_type"
                            label="Fluid Type"
                            value={this.state.fluid_type_id}/>
                    </div>
                    <div className="col-md-3">
                        <SelectField
                            source="fluid_level"
                            label="Fluid Level"
                            value={this.state.fluid_level_id}/>
                    </div>
                    <div className="col-md-3">
                        <SelectField
                            source="interrupting_medium"
                            label="Interrupting Medium"
                            value={this.state.interrupting_medium_id}/>
                    </div>
                    <div className="col-md-3">
                        <SelectField
                            source="breaker_mechanism"
                            label="Breaker Mechanism"
                            value={this.state.breaker_mechanism_id}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField onChange={this.props.onChange}
                                   label="Phase Number"
                                   name="phase_number"
                                   value={this.state.phase_number}/>
                    </div>
                    <div className="col-md-3">
                        <TextField  onChange={this.props.onChange}
                                    label="Open"
                                    name="open"
                                    value={this.state.kv}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.props.onChange}
                                   label="Current Rating"
                                   name="current_rating"
                                   value={this.state.kvar}/>
                    </div>
                    <div className="col-md-1 ">
                        <CheckBox onChange={this.props.onChange}
                                  label="Sealed"
                                  name="sealed"
                                  value={this.state.sealed}/>
                    </div>
                    <div className="col-md-2">
                        <CheckBox onChange={this.props.onChange}
                                  label="Welded Cover"
                                  name="welded_cover"
                                  value={this.state.welded_cover}/>
                    </div>
                </div>
            </div>

        )
    }
});


export default BreakerParams;