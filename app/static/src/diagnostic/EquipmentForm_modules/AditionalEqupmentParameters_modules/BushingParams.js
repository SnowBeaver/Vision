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
            'bil':''

    }
    },

    handleChange: function(e){
        var state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    },


    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Phase Number"
                                   name="phase_number"
                                   value={this.state.phase_number}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Frequency" name
                                       ="frequency" value
                                       ={this.state.frequency}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Fluid Volume"
                                   name="fluid_volume"
                                   value={this.state.fluid_volume}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="fluid_type"
                            label="Fluid Type"
                            name="fluid_type_id"
                            value={this.state.fluid_type_id}/>
                    </div>
                    <div className="col-md-4">
                        <TextField onChange={this.props.onChange}
                                   label="Model" name
                                       ="model" value
                                       ={this.state.model}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Winding"
                                   name="winding"
                                   value={this.state.winding}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Voltage"
                                   name="kv"
                                   value={this.state.kv}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="C1"
                                   name="c1"
                                   value={this.state.c1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="C1PF"
                                   name="c1pf"
                                   value={this.state.c1pf}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="C2"
                                   name="c2"
                                   value={this.state.c2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="C2PF"
                                   name="c2pf"
                                   value={this.state.c2pf}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Current"
                                   name="current"
                                   value={this.state.current}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="BIL"
                                   name="bil"
                                   value={this.state.bil}/>
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
                                   value={this.state.bushing_manufacturer_h1}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. H2"
                                   name="bushing_manufacturer_h2"
                                   value={this.state.bushing_manufacturer_h2}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. H3"
                                   name="bushing_manufacturer_h3"
                                   value={this.state.bushing_manufacturer_h3}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. Hn"
                                   name="bushing_manufacturer_hn"
                                   value={this.state.bushing_manufacturer_hn}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. X1"
                                   name="bushing_manufacturer_x1"
                                   value={this.state.bushing_manufacturer_x1}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. X2"
                                   name="bushing_manufacturer_x2"
                                   value={this.state.bushing_manufacturer_x2}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. X3"
                                   name="bushing_manufacturer_x3"
                                   value={this.state.bushing_manufacturer_x3}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. Xn"
                                   name="bushing_manufacturer_xn"
                                   value={this.state.bushing_manufacturer_xn}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. T1"
                                   name="bushing_manufacturer_t1"

                                   value={this.state.bushing_manufacturer_t1}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. T2"
                                   name="bushing_manufacturer_t2"
                                   value={this.state.bushing_manufacturer_t2}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. T3"
                                   name="bushing_manufacturer_t3"
                                   value={this.state.bushing_manufacturer_t3}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. Tn"
                                   name="bushing_manufacturer_tn"
                                   value={this.state.bushing_manufacturer_tn}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. Q1"
                                   name="bushing_manufacturer_q1"
                                   value={this.state.bushing_manufacturer_q1}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. Q2"
                                   name="bushing_manufacturer_q2"
                                   value={this.state.bushing_manufacturer_q2}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. Q3"
                                   name="bushing_manufacturer_q3"
                                   value={this.state.bushing_manufacturer_q3}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Manufac. Qn"
                                   name="bushing_manufacturer_qn"
                                   value={this.state.bushing_manufacturer_qn}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type H"
                                   name="bushing_type_h"
                                   value={this.state.bushing_type_h}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type Hn"
                                   name="bushing_type_hn"
                                   value={this.state.bushing_type_hn}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type X"
                                   name="bushing_type_x"
                                   value={this.state.bushing_type_x}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type Xn"
                                   name="bushing_type_xn"
                                   value={this.state.bushing_type_xn}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type T"
                                   name="bushing_type_t"
                                   value={this.state.bushing_type_t}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type Tn"
                                   name="bushing_type_tn"
                                   value={this.state.bushing_type_tn}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type Q"
                                   name="bushing_type_q"
                                   value={this.state.bushing_type_q}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.handleChange}
                                   label="Type Qn"
                                   name="bushing_type_qn"
                                   value={this.state.bushing_type_qn}/>
                    </div>
                </div>
            </div>
        )
    }
});

export default BushingParams;
