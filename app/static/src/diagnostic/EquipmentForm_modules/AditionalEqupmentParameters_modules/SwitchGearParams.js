import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
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
        console.log(this.props.label);
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


var SwitchGearParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ['phase_number', 'sealed', 'model',
                    'welded_cover', 'current_rating', 'threephase'

            ]
        }
    },

    componentDidMount: function () {
    },

    render: function () {
        return (
            <div className="row">
                <div className="col-md-3">
                    <SelectField onChange={this.props.onChange}
                        source="insulation"
                        label="Insulation Type"
                        value={this.state.insulation_id}/>
                </div>
                <div className="col-md-3">
                    <TextField onChange={this.props.onChange}
                               label="Current Rating"
                               name="current_rating"
                               value={this.state.current_rating}/>
                </div>
                <div className="col-md-3">
                    <TextField onChange={this.props.onChange}
                               label="Three Phase"
                               name="threephase"
                               value={this.state.threephase}/>
                </div>
                <div className="col-md-1 ">
                    <CheckBox onChange={this.props.onChange}
                              name="sealed"
                              label="Sealed"
                              value={this.state.sealed}/>
                </div>
                <div className="col-md-2">
                    <CheckBox onChange={this.props.onChange}
                              label="Welded Cover"
                              name="welded_cover"
                              value={this.state.welded_cover}/>
                </div>
            </div>
        )
    }
});


export default SwitchGearParams;