import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';

var SelectField = React.createClass({
    handleChange: function(event, index, value){
        console.log("Handle change");
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
    isVisible: function(){
        return this.state.isVisible;
    },
    componentDidMount: function(){
        var source = '/api/v1.0/' + this.props.source + '/';
        this.serverRequest = $.get(source, function (result){
            this.setState({ items: (result['result']) });
        }.bind(this), 'json');
    },
    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    setVisible: function(){
        this.state.isVisible = true;
    },
    render: function() {
        var label = (this.props.label != null) ? this.props.label: "";
        var name = (this.props.name != null) ? this.props.name: "";
        var value = (this.props.value != null) ? this.props.value: "";
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <FormControl componentClass="select"
                             onChange={this.handleChange}
                             name={name}
                             value={value}
                             >
                    {menuItems}
                    <FormControl.Feedback />
                </FormControl>
            </FormGroup>
        );
    }
});

const TextField = React.createClass({
    render: function() {
        var label = (this.props.label != null) ? this.props.label: "";
        var name = (this.props.name != null) ? this.props.name: "";
        var value = (this.props.value != null) ? this.props.value: "";
        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type="text"
                             placeholder={label}
                             name={name}
                             value={value}
                />
                <FormControl.Feedback />
            </FormGroup>
        );
    }
});

var VisualTestForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["tank_cover_gasket_id", "tank_pressure_unit_id", "tank_pressure",
                "tank_manhole_gasket_id", "tank_overpressure_valve_id", "tank_gas_relay_id",
                "tank_sampling_valve_id", "tank_oil_level_id", "tank_oil_pump_id",
                "tank_winding_temp_max", "tank_winding_temp_actual", "tank_gas_analyser",
                "tank_oil_temp_max", "tank_oil_temp_actual", "tank_overall_condition_id",
                "misc_foundation_id", "misc_temp_ambiant", "misc_load", "grounding_value",
                "grounding_connection_id", "tap_changer_gasket_id",
                "tap_changer_overpressure_valve_id", "tap_changer_oil_level_id",
                "tap_changer_sampling_valve_id", "tap_changer_operation_counter",
                "tap_changer_temp_max", "tap_changer_temp_actual", "tap_changer_counter_id",
                "tap_changer_pressure_unit_id", "tap_changer_pressure_max",
                "tap_changer_pressure_actual", "tap_changer_filter_id",
                "tap_changer_tap_position", "tap_changer_overall_condition_id",
                "exp_tank_pipe_gasket_id", "exp_tank_oil_level_id", "exp_tank_paint_id",
                "exp_tank_overall_condition_id", "radiator_fan_id", "radiator_gasket_id",
                "radiator_overall_condition_id", "control_cab_connection_id",
                "control_cab_heating_id", "control_cab_overall_condition_id",
                "bushing_gasket_id", "bushing_oil_level_id",
                "bushing_overall_condition_id", "notes"
            ]
        }
    },

    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.tableName + '/?test_result_id=' + this.props.testResultId;
        this.serverRequest = $.get(source, function (result) {
            var res = (result['result']);
            if (res.length > 0) {
                var fields = this.state.fields;
                fields.push('id');
                var data = res[0];
                var state = {};
                for (var i = 0; i < fields.length; i++) {
                    var key = fields[i];
                    if (data.hasOwnProperty(key)) {
                        state[key] = data[key];
                    }
                }
                this.setState(state);
            }
        }.bind(this), 'json');
    },

        _create: function () {
        var fields = this.state.fields;
        var data = {test_result_id: this.props.testResultId};
        var url = '/api/v1.0/' + this.props.tableName + '/';
        var type = 'POST';
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }
        if ('id' in this.state) {
            url += this.state['id'];
            type = 'PUT';
        }
        return $.ajax({
            url: url,
            type: type,
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

    render: function() {
        return (
            <div className="form-container">
                <h3>Visual inspection</h3>
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div className="tab_row text-center">
                        <div className="row">
                            <div className="col-md-8 ">
                                <div className="row">
                                    <div >
                                        <Panel header="Tank">
                                        </Panel>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6  ">
                                        <SelectField name="tank_cover_gasket_id"
                                                     source="gasket_condition"
                                                     label="Cover gasket"
                                                     value={this.state.tank_cover_gasket_id}/>
                                    </div>
                                    <div className="col-md-2">
                                        <b>Pressure</b>
                                    </div>
                                    <div className="col-md-2">
                                        <SelectField name="tank_pressure_unit_id"
                                                     source="pressure_unit"
                                                     label=""
                                                     value={this.state.tank_pressure_unit_id}/>
                                    </div>
                                    <div className="col-md-2">
                                        <TextField name="tank_pressure"
                                                   label=""
                                                   value={this.state.tank_pressure}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 ">
                                        <SelectField name="tank_manhole_gasket_id"
                                                     source="gasket_condition"
                                                     label="Manhole gasket"
                                                     value={this.state.tank_manhole_gasket_id}/>
                                    </div>
                                    <div className="col-md-6 ">
                                        <SelectField name="tank_overpressure_valve_id"
                                                     source="valve_condition"
                                                     label="Sud.Pres.Valve"
                                                     value={this.state.tank_overpressure_valve_id}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 ">
                                        <SelectField name="tank_gas_relay_id"
                                                     source="gas_relay"
                                                     label="Gas relay"
                                                     value={this.state.tank_gas_relay_id}/>
                                    </div>
                                    <div className="col-md-6 ">
                                        <SelectField name="tank_sampling_valve_id"
                                                     source="valve_condition"
                                                     label="Sampling Valves"
                                                     value={this.state.tank_sampling_valve_id}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 ">
                                        <SelectField name="tank_oil_level_id"
                                                     source="fluid_level"
                                                     label="Oil level"
                                                     value={this.state.tank_oil_level_id}/>
                                    </div>
                                    <div className="col-md-6 ">
                                        <SelectField name="tank_oil_pump_id"
                                                     source="pump_condition"
                                                     label="Oil Pump"
                                                     value={this.state.tank_oil_pump_id}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2"><b>Winding Temp.</b></div>
                                    <div className="col-md-2">
                                        <TextField name="tank_winding_temp_max"
                                                   label="Max"
                                                   value={this.state.tank_winding_temp_max}/>
                                    </div>
                                    <div className="col-md-2">
                                        <TextField name="tank_winding_temp_actual"
                                                   label="Actual"
                                                   value={this.state.tank_winding_temp_actual}/>
                                    </div>
                                    <div className="col-md-2">
                                        <Checkbox ><b>Ctc</b></Checkbox>
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <TextField name="tank_gas_analyser"
                                                   label="Diss. Gas Analyzer"
                                                   value={this.state.tank_gas_analyser}/>
                                    </div>
                                    <div className="col-md-1 nopadding">
                                        <b>ppm</b>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2"><b>Oil Temp.</b></div>
                                    <div className="col-md-2">
                                        <TextField name="tank_oil_temp_max"
                                                   label="Max"
                                                   value={this.state.tank_oil_temp_max}/>
                                    </div>
                                    <div className="col-md-2">
                                        <TextField name="tank_oil_temp_actual"
                                                   label="Actual"
                                                   value={this.state.tank_oil_temp_actual}/>
                                    </div>
                                    <div className="col-md-2">
                                        <Checkbox ><b>Ctc</b></Checkbox>
                                    </div>
                                    <div className="col-md-4">
                                        <SelectField name="tank_overall_condition_id"
                                                     source="overall_condition"
                                                     label="Overall Condition"
                                                     value={this.state.tank_overall_condition_id}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 ">
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <Panel header="Miscelaneous">
                                        </Panel>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <SelectField name="misc_foundation_id"
                                                     source="foundation_condition"
                                                     label="Foundation"
                                                     value={this.state.misc_foundation_id}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <TextField name="misc_temp_ambiant"
                                                   label="Ambient temp.(C)"
                                                   value={this.state.misc_temp_ambiant}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <TextField name="misc_load"
                                                   label="Load(MVA)"
                                                   value={this.state.misc_load}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <Panel header="Grounding">
                                        </Panel>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <TextField name="grounding_value"
                                                   label="Value"
                                                   value={this.state.grounding_value}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <SelectField name="grounding_connection_id"
                                                     source="connection_condition"
                                                     label="Connection"
                                                     value={this.state.grounding_connection_id}/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-8 ">
                                <div className="row">
                                    <div >
                                        <Panel header="Tap Charger">
                                        </Panel>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <SelectField name="tap_changer_gasket_id"
                                                     source="gasket_condition"
                                                     label="Gasket"
                                                     value={this.state.tap_changer_gasket_id}/>
                                    </div>
                                    <div className="col-md-6 ">
                                        <SelectField name="tap_changer_overpressure_valve_id"
                                                     source="valve_condition"
                                                     label="Sud Pres. Valve"
                                                     value={this.state.tap_changer_overpressure_valve_id}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 ">
                                        <SelectField name="tap_changer_oil_level_id"
                                                     source="fluid_level"
                                                     label="Oil Level"
                                                     value={this.state.tap_changer_oil_level_id}/>
                                    </div>
                                    <div className="col-md-6 ">
                                        <SelectField name="tap_changer_sampling_valve_id"
                                                     source="valve_condition"
                                                     label="Sampling Valves"
                                                     value={this.state.tap_changer_sampling_valve_id}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 col-md-offset-6">
                                        <TextField name="tap_changer_operation_counter"
                                                   label="No. of Operations"
                                                   value={this.state.tap_changer_operation_counter}/>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-2"><b>Temperature(C)</b></div>
                                    <div className="col-md-2 col-md-offset-2">
                                        <TextField name="tap_changer_temp_max"
                                                   label="Max"
                                                   value={this.state.tap_changer_temp_max}/>
                                    </div>
                                    <div className="col-md-2">
                                        <TextField name="tap_changer_temp_actual"
                                                   label="Actual"
                                                   value={this.state.tap_changer_temp_actual}/>
                                    </div>
                                    <div className="col-md-4 ">
                                        <SelectField name="tap_changer_counter_id"
                                                     source="tap_counter_status"
                                                     label="Counter"
                                                     value={this.state.tap_changer_counter_id}/>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-2"><b>Pressure</b></div>
                                    <div className="col-md-2 ">
                                        <SelectField name="tap_changer_pressure_unit_id"
                                                     source="pressure_unit"
                                                     label="Counter"
                                                     value={this.state.tap_changer_pressure_unit_id}/>
                                    </div>
                                    <div className="col-md-2">
                                        <TextField name="tap_changer_pressure_max"
                                                   label="Max"
                                                   value={this.state.tap_changer_pressure_max}/>
                                    </div>
                                    <div className="col-md-2">
                                        <TextField name="tap_changer_pressure_actual"
                                                   label="Actual"
                                                   value={this.state.tap_changer_pressure_actual}/>
                                    </div>
                                    <div className="col-md-4">
                                        <SelectField name="tap_changer_filter_id"
                                                     source="tap_filter_condition"
                                                     label="Filter"
                                                     value={this.state.tap_changer_filter_id}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2"><b>Position of NLTC</b></div>
                                    <div className="col-md-2 col-md-offset-4">
                                        <TextField name="tap_changer_tap_position"
                                                   label="Actual"
                                                   value={this.state.tap_changer_tap_position}/>
                                    </div>
                                    <div className="col-md-4">
                                        <SelectField name="tap_changer_overall_condition_id"
                                                     source="overall_condition"
                                                     label="Overall Condition"
                                                     value={this.state.tap_changer_overall_condition_id}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 ">
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <Panel header="Expansion Conservation Tank">
                                        </Panel>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <SelectField name="exp_tank_pipe_gasket_id"
                                                     source="gasket_condition"
                                                     label="Pipe Tightness"
                                                     value={this.state.exp_tank_pipe_gasket_id}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <SelectField name="exp_tank_oil_level_id"
                                                     source="fluid_level"
                                                     label="Oil Level"
                                                     value={this.state.exp_tank_oil_level_id}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <SelectField name="exp_tank_paint_id"
                                                     source="paint_types"
                                                     label="Silica Gel Breather"
                                                     value={this.state.exp_tank_paint_id}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <SelectField name="exp_tank_overall_condition_id"
                                                     source="overall_condition"
                                                     label="Overall Condition"
                                                     value={this.state.exp_tank_overall_condition_id}/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <Panel header="Radiator">
                                            </Panel>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <SelectField name="radiator_fan_id"
                                                         source="fan_condition"
                                                         label="Fan"
                                                         value={this.state.radiator_fan_id}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <SelectField name="radiator_gasket_id"
                                                         source="gasket_condition"
                                                         label="Gasket"
                                                         value={this.state.radiator_gasket_id}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <SelectField name="radiator_overall_condition_id"
                                                         source="overall_condition"
                                                         label="Overall Condition"
                                                         value={this.state.radiator_overall_condition_id}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <Panel header="Control Cabinet">
                                            </Panel>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <SelectField name="control_cab_connection_id"
                                                         source="connection_condition"
                                                         label="Connection"
                                                         value={this.state.control_cab_connection_id}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <SelectField name="control_cab_heating_id"
                                                         source="heating_condition"
                                                         label="Heating"
                                                         value={this.state.control_cab_heating_id}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <SelectField name="control_cab_overall_condition_id"
                                                         source="overall_condition"
                                                         label="Overall Condition"
                                                         value={this.state.control_cab_overall_condition_id}/>
                                        </div>
                                    </div>
                                </div>


                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <Panel header="Bushing+arrester">
                                        </Panel>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <SelectField name="bushing_gasket_id"
                                                     source="gasket_condition"
                                                     label="Gasket"
                                                     value={this.state.bushing_gasket_id}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <SelectField name="bushing_oil_level_id"
                                                     source="fluid_level"
                                                     label="Oil Level"
                                                     value={this.state.bushing_oil_level_id}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <SelectField name="bushing_overall_condition_id"
                                                     source="overall_condition"
                                                     label="Overall Condition"
                                                     value={this.state.bushing_overall_condition_id}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                                <div className="col-md-12">
                                    <FormGroup>
                                        <FormControl componentClass="textarea" placeholder="Notes" multiple
                                                     name="notes"
                                                     value={this.state.notes}/>
                                    </FormGroup>
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ">
                            <Button bsStyle="success"
                                    className="pull-right"
                                    onClick={this.props.handleClose}
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

export default VisualTestForm;
