import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';


const TextField = React.createClass({

    render: function () {
        let tooltip = <Tooltip id={this.props.label}>{this.props.label}</Tooltip>;
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        return (
            <OverlayTrigger overlay={tooltip} placement="top">
                <FormGroup>
                    <FormControl type="text"
                                 placeholder={label}
                                 name={name}
                    />
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


var InductanceParams = React.createClass({

    getInitialState: function () {
        return {
            'sealed':'',
            'welded_cover':'',
            'winding':'',
            'fluid_volume':'',
            'fluid_type':'',
            'cooling_rating':'',
            'gas_sensor':'',
            'fluid_level':''
    }
    },

    componentDidMount: function () {
    },


    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <SelectField
                            source="fluid_type"
                            label="Fluid Type"
                            name="fluid_type_id"
                            value={this.state.fluid_type_id}/>
                    </div>
                    <div className="col-md-4">
                        <SelectField
                            source="fluid_level"
                            label="Fluid Level"
                            name="fluid_level_id"
                            value={this.state.fluid_level_id}/>
                    </div>
                    <div className="col-md-4">
                        <SelectField
                            source="gas_sensor"
                            label="Gas Sensor"
                            name="gas_sensor_id"
                            value={this.state.gas_sensor_id}/>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Winding"
                                   name="winding"
                                   value={this.state.winding}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Fluid Volume"
                                   name="fluid_volume"
                                   value={this.state.fluid_volume}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Cooling Rating"
                                   name="cooling_rating"
                                   value={this.state.cooling_rating}/>
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


export default InductanceParams;