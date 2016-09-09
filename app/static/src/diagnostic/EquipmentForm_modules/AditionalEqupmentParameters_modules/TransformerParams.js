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

var BushSerialSelectField = React.createClass({
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

var TransformerParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            isVisible: false,
            fields: ['phase_number', 'threephase', 'fluid_volume', 'fluid_type_id',
                'fluid_level_id', 'gas_sensor', 'bushing_serial1', 'bushing_serial2',
                'bushing_serial3', 'bushing_serial4', 'bushing_serial5', 'bushing_serial6',
                'bushing_serial7', 'bushing_serial8', 'bushing_serial9', 'bushing_serial10',
                'bushing_serial11', 'bushing_serial12', 'mvaforced11', 'mvaforced12', 'mvaforced13',
                'mvaforced14', 'imp_base1', 'imp_base2', 'mvaforced21', 'mvaforced22',
                'mvaforced23', 'mvaforced24', 'mvaactual', 'mvaractual',
                'mwreserve', 'mvareserve', 'mwultime', 'mvarultime',
                'ratio_tag1', 'ratio_tag2', 'ratio_tag3', 'ratio_tag4',
                ',static_shield1', ',static_shield2', 'ratio_tag5', 'ratio_tag6',
                'ratio_tag7', 'ratiot_ag8', 'static_shield3', 'static_shield4',
                'bushing_neutral1', 'bushing_neutral2', 'bushing_neutral3', 'bushing_neutral4',
                'windings', 'winding_metal', 'primary_winding_connection', 'secondary_winding_connection',
                'tertiary_winding_connection', 'quaternary_winding_connection', 'based_transformerp_ower', 'autotransformer',
                'bil1', 'bil2', 'ltc1', 'ltc2',
                'first_cooling_stage_power', 'second_cooling_stage_power',
                'bil3', 'bil4', 'ltc3', 'mva4',
                'temperature_rise', 'cooling_rating', 'primary_tension', 'secondary_tension',
                'tertiary_tension', 'impedance1', 'impedance2', 'impedance3',
                'formula_ratio1', 'formula_ratio2', 'formula_ratio3',
                'sealed', 'welded_cover'

            ]
        }
    },

    componentDidMount: function () {
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
                                   label="Three Phase"
                                   name="threephase"
                                   value={this.state.threephase}/>
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
                            value={this.state.fluid_type_id}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="fluid_level"
                            label="Fluid Level"
                            value={this.state.fluid_level_id}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="gas_sensor"
                            label="Gas Sensor"
                            value={this.state.gas_sensor}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <BushSerialSelectField
                            source="bushing"
                            label="Bushing Serial 1"
                            value={this.state.bushing_serial1}/>
                    </div>
                    <div className="col-md-2">
                        <BushSerialSelectField
                            source="bushing"
                            label="Bushing Serial 2"
                            value={this.state.bushing_serial2}/>
                    </div>
                    <div className="col-md-2">
                        <BushSerialSelectField
                            source="bushing"
                            label="Bushing Serial 3"
                            value={this.state.bushing_serial3}/>
                    </div>
                    <div className="col-md-2">
                        <BushSerialSelectField
                            source="bushing"
                            label="Bushing Serial 4"
                            value={this.state.bushing_serial4}/>
                    </div>
                    <div className="col-md-2">
                        <BushSerialSelectField
                            source="bushing"
                            label="Bushing Serial 5"
                            value={this.state.bushing_serial5}/>
                    </div>
                    <div className="col-md-2">
                        <BushSerialSelectField
                            source="bushing"
                            label="Bushing Serial 1"
                            value={this.state.bushing_serial6}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <BushSerialSelectField
                            source="bushing"
                            label="Bushing Serial 7"
                            value={this.state.bushing_serial7}/>
                    </div>
                    <div className="col-md-2">
                        <BushSerialSelectField
                            source="bushing"
                            label="Bushing Serial 8"
                            value={this.state.bushing_serial8}/>
                    </div>
                    <div className="col-md-2">
                        <BushSerialSelectField
                            source="bushing"
                            label="Bushing Serial 9"
                            value={this.state.bushing_serial9}/>
                    </div>
                    <div className="col-md-2">
                        <BushSerialSelectField
                            source="bushing"
                            label="Bushing Serial 10"
                            value={this.state.bushing_serial10}/>
                    </div>
                    <div className="col-md-2">
                        <BushSerialSelectField
                            source="bushing"
                            label="Bushing Serial 11"
                            value={this.state.bushing_serial11}/>
                    </div>
                    <div className="col-md-2">
                        <BushSerialSelectField
                            source="bushing"
                            label="Bushing Serial 12"
                            value={this.state.bushing_serial12}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Mva Forced 11"
                                   name="mvaforced11"
                                   value={this.state.mvaforced11}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Mva Forced 12"
                                   name="mvaforced12"
                                   value={this.state.mvaforced12}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Mva Forced 13"
                                   name="mvaforced13"
                                   value={this.state.mvaforced13}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Mva Forced 14"
                                   name="mvaforced14"
                                   value={this.state.mvaforced14}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Base Impedance 1"
                                   name="imp_base1"
                                   value={this.state.imp_base1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Base Impedance 2"
                                   name="imp_base2"
                                   value={this.state.imp_base2}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Mva Forced 21"
                                   name="mvaforced21"
                                   value={this.state.mvaforced21}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Mva Forced 22"
                                   name="mvaforced22"
                                   value={this.state.mvaforced22}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Mva Forced 23"
                                   name="mvaforced23"
                                   value={this.state.mvaforced23}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Mva Forced 24"
                                   name="mvaforced24"
                                   value={this.state.mvaforced24}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Mva Actual"
                                   name="mvaactual"
                                   value={this.state.mvaactual}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Mvar Actual"
                                   name="mvaractual"
                                   value={this.state.mvaractual}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Reserve Mw"
                                   name="mwreserve"
                                   value={this.state.mwreserve}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Reserve Mva"
                                   name="mvareserve"
                                   value={this.state.mvareserve}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Ultime Mw"
                                   name="mwultime"
                                   value={this.state.mwultime}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Ultime Mvar"
                                   name="mvarultime"
                                   value={this.state.mvarultime}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Ratio Tag 1"
                                   name="ratio_tag1"
                                   value={this.state.ratio_tag1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Ratio Tag 2"
                                   name="ratio_tag2"
                                   value={this.state.ratio_tag2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Ratio Tag 3"
                                   name="ratio_tag3"
                                   value={this.state.ratio_tag3}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Ratio Tag 4"
                                   name="ratio_tag4"
                                   value={this.state.ratio_tag4}/>
                    </div>

                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Static Shield 1"
                                   name="static_shield1"
                                   value={this.state.static_shield1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Static Shield 2"
                                   name="static_shield2"
                                   value={this.state.static_shield2}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Ratio Tag 5"
                                   name="ratio_tag5"
                                   value={this.state.ratio_tag5}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Ratio Tag 6"
                                   name="ratio_tag6"
                                   value={this.state.ratio_tag6}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Ratio Tag 7"
                                   name="ratio_tag7"
                                   value={this.state.ratio_tag7}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Ratio Tag 8"
                                   name="ratiot_ag8"
                                   value={this.state.ratiot_ag8}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Static Shield 3"
                                   name="static_shield3"
                                   value={this.state.static_shield3}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Static Shield 4"
                                   name="static_shield4"
                                   value={this.state.static_shield4}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Bushing Neutral 1"
                                   name="bushing_neutral1"
                                   value={this.state.bushing_neutral1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Bushing Neutral 2"
                                   name="bushing_neutral2"
                                   value={this.state.bushing_neutral2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Bushing Neutral 3"
                                   name="bushing_neutral3"
                                   value={this.state.bushing_neutral3}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Bushing Neutral 4"
                                   name="bushing_neutral4"
                                   value={this.state.bushing_neutral4}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Windings"
                                   name="windings"
                                   value={this.state.windings}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Winding Metal"
                                   name="winding_metal"
                                   value={this.state.winding_metal}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Primary Winding Connection"
                                   name="primary_winding_connection"
                                   value={this.state.primary_winding_connection}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Secondary Winding Connection"
                                   name="secondary_winding_connection"
                                   value={this.state.secondary_winding_connection}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Tertiary Winding Connection"
                                   name="tertiary_winding_connection"
                                   value={this.state.tertiary_winding_connection}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Quaternary Winding Connection"
                                   name="quaternary_winding_connection"
                                   value={this.state.quaternary_winding_connection}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Based Power"
                                   name="based_transformerp_ower"
                                   value={this.state.based_transformerp_ower}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Autotransformer"
                                   name="autotransformer"
                                   value={this.state.autotransformer}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="BIL 1"
                                   name="bil1"
                                   value={this.state.bil1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="BIL 2"
                                   name="bil2"
                                   value={this.state.bil2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Ltc 1"
                                   name="ltc1"
                                   value={this.state.ltc1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Ltc 2"
                                   name="ltc2"
                                   value={this.state.ltc2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="First Cooling Stage Power"
                                   name="first_cooling_stage_power"
                                   value={this.state.first_cooling_stage_power}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Second Cooling Stage Power"
                                   name="second_cooling_stage_power"
                                   value={this.state.second_cooling_stage_power}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="BIL 3"
                                   name="bil3"
                                   value={this.state.bil3}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="BIL 4"
                                   name="bil4"
                                   value={this.state.bil4}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Ltc 3"
                                   name="ltc3"
                                   value={this.state.ltc3}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Mva 4"
                                   name="mva4"
                                   value={this.state.mva4}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Temperature Rise"
                                   name="temperature_rise"
                                   value={this.state.temperature_rise}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Cooling Rating"
                                   name="cooling_rating"
                                   value={this.state.cooling_rating}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Primary Tension"
                                   name="primary_tension"
                                   value={this.state.primary_tension}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Secondary Tension"
                                   name="secondary_tension"
                                   value={this.state.secondary_tension}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Tertiary Tension"
                                   name="tertiary_tension"
                                   value={this.state.tertiary_tension}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Impedance 1"
                                   name="impedance1"
                                   value={this.state.impedance1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Impedance 2"
                                   name="impedance2"
                                   value={this.state.impedance2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Impedance 3"
                                   name="impedance3"
                                   value={this.state.impedance3}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Formula Ratio 1"
                                   name="formula_ratio1"
                                   value={this.state.formula_ratio1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Formula Ratio 2"
                                   name="formula_ratio2"
                                   value={this.state.formula_ratio2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.props.onChange}
                                   label="Formula Ratio 3"
                                   name="formula_ratio3"
                                   value={this.state.formula_ratio3}/>
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


export default TransformerParams;