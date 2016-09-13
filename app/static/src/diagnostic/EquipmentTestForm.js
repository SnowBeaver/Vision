import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import NewBushingTestForm from './TestTypeResultForm_modules/NewBushingTestForm';
import WindingTestForm from './TestTypeResultForm_modules/WindingTestForm';
import NewInsulationResistanceTestForm from './TestTypeResultForm_modules/NewInsulationResistanceTestForm';
import VisualTestForm from './TestTypeResultForm_modules/VisualTestForm';
import NewWindingResistanceTestForm from './TestTypeResultForm_modules/NewWindingResistanceTestForm';
import PolymerisationDegreeTestForm from './TestTypeResultForm_modules/PolymerisationDegreeTestForm';
import NewTransformerTestForm from './TestTypeResultForm_modules/NewTransformerTestForm';
import NewDissolvedGasForm from './TestTypeResultForm_modules/NewDissolvedGasTestForm';
import WaterTestForm from './TestTypeResultForm_modules/WaterTestForm';
import NewFuranTestForm from './TestTypeResultForm_modules/NewFuranTestForm';
import NewInhibitorTestForm from './TestTypeResultForm_modules/NewInhibitorTestForm';
import NewPcbTestForm from './TestTypeResultForm_modules/NewPcbTestForm';
import NewFluidTestForm from './TestTypeResultForm_modules/NewFluidTestForm';
import NewParticleTestForm from './TestTypeResultForm_modules/NewParticleTestForm';
import MetalsInOilTestForm from './TestTypeResultForm_modules/MetalsInOilTestForm';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var SelectField = React.createClass({
    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
        });
    },
    updateMenuItems: function () {
        this.serverRequest = $.get(this.props.source, function (result){
            var res = (result['result']);
            var menuItems = [];
            for (var key in res) {
                menuItems.push(<option key={res[key].id}
                                       value={res[key].id}>{`${res[key].name}`}</option>);
            }
            this.setState({menuItems: menuItems});
        }.bind(this), 'json');
    },
    onClick: function(e) {
        e.preventDefault();
        this.updateMenuItems();
    },
    getInitialState: function () {
        return {
            items: [],
            isVisible: false,
            value: -1,
            menuItems: []
        };
    },
    isVisible: function(){
        return this.state.isVisible;
    },
    componentDidMount: function(){
        //this.serverRequest = $.get(this.props.source, function (result){
            //this.setState({ items: (result['result']) });
        //}.bind(this), 'json');
        this.updateMenuItems();
    },
    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    setVisible: function(){
        this.state.isVisible = true;
    },
    render: function() {
        var menuItems = this.state.menuItems;
        // var menuItems = [];
        // for (var key in this.state.items) {
        //     menuItems.push(<option key={this.state.items[key].id}
        //                            value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        // }
        return (
            <FormGroup>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl componentClass="select"
                             onChange={this.handleChange}
                             onClick={this.onClick}
                             defaultValue={this.props.value}>
                    {this.state.menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});

const DateTimeFieldWithLabel = React.createClass({
    render: function() {
        return (
            <div className="datetimepicker input-group date">
                <ControlLabel>{this.props.label}</ControlLabel>
                <DateTimeField datetime={this.props.value} />
            </div>
        );
    }
});

const TextField = React.createClass({
    render: function() {
        var value = "";
        var label = "";
        if (this.props.value != null) { value = this.props.value; }
        if (this.props.label != null) { label = this.props.label; }
        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type="text" value={value} />
            </FormGroup>
        );
    }
});

var EquipmentTestIdentificationForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            csrf_token: 'not set',
            errors: {}
        }
    },
    render: function() {
        return (
            <div className="form-container">
                <form method="post" action="#">
                    <input type="hidden" value={this.state.csrf_token}/>
                    <div className="tab_row text-center">
                        <div className="col-lg-12 nopadding">
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <SelectField source="/api/v1.0/test_type" label="Test type" value={this.props.data.test_type_id}/>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <SelectField source="/api/v1.0/user" label="Initials ?"/>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <DateTimeFieldWithLabel label="Date analyse" value={this.props.data.date_analyse}/>
                            </div>
                        </div>
                        <div className="col-lg-12 nopadding">
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <SelectField source="/api/v1.0/test_reason" label="Test reason" value={this.props.data.test_reason_id}/>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <SelectField source="/api/v1.0/test_status" label="Status" value={this.props.data.status_id}/>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <TextField label="Temperature" value={this.props.data.temperature}/>
                            </div>
                        </div>
                        <div className="col-lg-12 nopadding">
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <TextField label="Insulating ?" value=""/>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <SelectField source="/api/v1.0/contract" label="Lab contract" value={this.props.data.lab_contract_id}/>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <TextField label="Grouping ?" value=""/>
                            </div>
                        </div>
                        <div className="col-lg-12 nopadding">
                            <div className="col-lg-3 nopadding padding-right-xs">
                                <SelectField source="/api/v1.0/sampling_point" label="Sampling" value={this.props.data.sampling_point_id}/>
                            </div>
                            <div className="col-lg-3 nopadding padding-right-xs">
                                <SelectField source="/api/v1.0/syringe" label="Syringe ?"/>
                            </div>
                            <div className="col-lg-3 nopadding padding-right-xs">
                                <TextField label="Test number ?" value=""/>
                            </div>
                            <div className="col-lg-3 nopadding padding-right-xs">
                                <TextField label="Load mva ?" value=""/>
                            </div>
                        </div>
                        <div className="col-lg-12 nopadding">
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <SelectField source="/api/v1.0/equipment" label="Equipment" value={this.props.data.equipment_id}/>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <TextField label="Order status ?" value=""/>
                            </div>
                            <div className="col-lg-2 nopadding padding-right-xs">
                                <SelectField source="/api/v1.0/lab" label="Lab" value={this.props.data.lab_id}/>
                            </div>
                            <div className="col-lg-2 nopadding padding-right-xs">
                                <DateTimeFieldWithLabel label="Lab date ?"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});


var EquipmentTestRepairForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            csrf_token: null,
            errors: {},
            // comments: {
            //     label: 'Comments',
            //     value: ''
            // },
            // notes: {
            //     label: 'Notes',
            //     value: ''
            // },
            // sampled: {
            //     label: 'Sampled',
            //     value: ''
            // },
            // date: {
            //     label: 'Date',
            //     value: null
            // }
        }
    },
    render: function () {
        return (
            <form className="" method="post" action="#">
                <div className="tab_row">
                    <div className="col-lg-12 nopadding">
                        <div className="col-lg-6 nopadding padding-right-xs">Comments
                            <FormControl componentClass="textarea" placeholder="textarea" value=""/>
                        </div>
                        <div className="col-lg-6 nopadding ">Notes
                            <FormControl componentClass="textarea" placeholder="textarea" value=""/>
                        </div>
                    </div>
                    <div className="col-lg-12 nopadding">
                        <div className="col-lg-6 nopadding padding-right-xs">Sample
                            <FormControl type="text" value=""/>
                        </div>
                        <div className="col-lg-6 nopadding">Date
                            <div className="datepicker input-group date">
                                <DateTimeField datetime=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
});

var EquipmentTestDiagnosisForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false
        }
    },
    render: function () {
        return (
            <form className="" method="post" action="#">
                <div className="tab_row">
                    <div className="col-lg-12 nopadding">
                        <div className="col-lg-6 nopadding padding-right-xs">Diagnosis
                            <FormControl componentClass="textarea" placeholder="textarea" value=""/>
                        </div>
                        <div className="col-lg-6 nopadding ">Recommendations
                            <FormControl componentClass="textarea" placeholder="textarea" value=""/>
                        </div>
                    </div>
                    <div className="col-lg-12 nopadding">Predefined diag
                        <FormControl type="text" value=""/>
                    </div>
                    <div className="col-lg-12 nopadding">Predefined rec
                        <FormControl type="text" value=""/>
                    </div>
                    <div className="col-lg-12 nopadding">
                        <div className="col-lg-9 nopadding padding-right-xs">Date
                            <div className="datepicker input-group date">
                                <DateTimeField datetime=""/>
                            </div>
                        </div>
                        <div className="col-lg-3 nopadding">
                            <label> </label>
                            <button type="button" className="btn btn-default">Schedule as task</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
});


var EquipmentTestEqDiagnosisForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            // diagnosis: {
            //     label: null,
            //     value: null
            // },
            // indicator: {
            //     label: null,
            //     value: null
            // },
            // condition: {
            //     label: null,
            //     value: null
            // }
        }
    },
    render: function () {
        return (
            <form className="" method="post" action="#">
                <div className="tab_row">
                    <div className="col-lg-12 nopadding">Diagnosis
                        <FormControl componentClass="textarea" placeholder="textarea" value=""/>
                    </div>
                    <div className="col-lg-12 nopadding">Indicator
                        <FormControl type="text" value=""/>
                    </div>
                    <div className="col-lg-12 nopadding">Condition
                        <FormGroup>
                            <Checkbox inline>
                                {/*{this.state.condition.value}*/}
                            </Checkbox>
                        </FormGroup>
                    </div>
                </div>
            </form>
        );
    }
});

var TestValuesForm = React.createClass({
    render: function () {
        if (this.props.testType == null) {
            return (<div></div>);
        }
        var tableName = this.props.testType.test_table_name;
        switch(tableName) {
            case "bushing_test":
                return (<NewBushingTestForm testResultId={this.props.testResultId}
                                            tableName={tableName}/>);
            case "winding_test":
                return (<WindingTestForm testResultId={this.props.testResultId}
                                         tableName={tableName}/>);
            case "insulation_resistance_test":
                return (<NewInsulationResistanceTestForm testResultId={this.props.testResultId}
                                                         tableName={tableName}/>);
            case "visual_inspection_test":
                return (<VisualTestForm testResultId={this.props.testResultId}
                                        tableName={tableName}/>);
            case "winding_resistance_test":
                return (<NewWindingResistanceTestForm testResultId={this.props.testResultId}
                                                   tableName={tableName}/>);
            case "polymerisation_degree_test":
                return (<PolymerisationDegreeTestForm testResultId={this.props.testResultId}
                                                      tableName={tableName}/>);
            case "transformer_turn_ratio_test":
                return (<NewTransformerTestForm testResultId={this.props.testResultId}
                                                      tableName={tableName}/>);
            case "dissolved_gas_test":
                return (<NewDissolvedGasForm testResultId={this.props.testResultId}
                                             tableName={tableName}/>);
            case "water_test":
                return (<WaterTestForm testResultId={this.props.testResultId}
                                       tableName={tableName}/>);
            case "furan_test":
                return (<NewFuranTestForm testResultId={this.props.testResultId}
                                          tableName={tableName}/>);
            case "inhibitor_test":
                return (<NewInhibitorTestForm testResultId={this.props.testResultId}
                                              tableName={tableName}/>);
            case "pcb_test":
                return (<NewPcbTestForm testResultId={this.props.testResultId}
                                        tableName={tableName}/>);
            case "fluid_test":
                return (<NewFluidTestForm testResultId={this.props.testResultId}
                                          tableName={tableName}/>);
            case "particle_test":
                return (<NewParticleTestForm testResultId={this.props.testResultId}
                                             tableName={tableName}/>);
            case "metals_in_oil_test":
                return (<MetalsInOilTestForm testResultId={this.props.testResultId}
                                             tableName={tableName}/>);
            default:
                return (<div></div>);
        }
    }
});

var EquipmentTestForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            data: null
        }
    },

    _save: function () {
        var data = {};

        return $.ajax({
            url: '/api/v1.0/equipment/',
            type: 'POST',
            data: data,
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
        var xhr = this._save();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },

    hideLoading: function () {
        this.setState({loading: false});
    },

    _onSuccess: function (data) {
        // this.refs.eqtype_form.getDOMNode().reset();
        // this.setState(this.getInitialState());
        // show success message
        NotificationManager.success('Saved');
    },

    _onError: function (data) {
        var message = "Failed to create";
        var res = data.responseJSON;
        if (res.message) {
            message = data.responseJSON.message;
        }
        if (res.errors) {
            this.setState({
                errors: res.errors
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
        // if(this.state.username == "") {
        //   errors.username = "Username is required";
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

    componentDidMount: function () {
        this.serverRequest = $.get('/api/v1.0/test_result/' + this.props.selectedRowId, function (result) {
            this.setState({ data : (result['result']) });
        }.bind(this), 'json');
    },
    render: function() {
        if ((typeof(this.state.data) == "undefined") || (this.state.data == null)) { return null}
        return (
            <div>
                <div className="maxwidth padding-top-lg margin-bottom-xs">
                    <ul id="tabs" className="nav nav-tabs " data-tabs="tabs">
                        <li className="active"> <a href="#tabs-1" data-toggle="tab"> Identification </a> </li>
                        <li> <a href="#tabs-2" data-toggle="tab"> Test repair notes </a> </li>
                        <li> <a href="#tabs-3" data-toggle="tab"> Records diagnostic </a> </li>
                        <li> <a href="#tabs-4" data-toggle="tab"> Diagnosis and recommendations </a> </li>
                        <li> <a href="#tabs-5" data-toggle="tab"> Test values </a> </li>
                    </ul>
                    <div id="my-tab-content" className="tab-content col-lg-12 nopadding">
                        <div id="tabs-1" role="tabpanel" className="tab-pane active ">
                            <EquipmentTestIdentificationForm data={this.state.data}/>
                        </div>
                        <div id="tabs-2" role="tabpanel" className="tab-pane">
                            <EquipmentTestRepairForm data={this.state.data} />
                        </div>
                        <div id="tabs-3" role="tabpanel" className="tab-pane">
                            <EquipmentTestDiagnosisForm data={this.state.data}/>
                        </div>
                        <div id="tabs-4" role="tabpanel" className="tab-pane">
                            <EquipmentTestEqDiagnosisForm data={this.state.data} />
                        </div>
                        <div id="tabs-5" role="tabpanel" className="tab-pane">
                            <TestValuesForm testResultId={this.props.selectedRowId}
                                            testType={this.state.data.test_type}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default EquipmentTestForm;
