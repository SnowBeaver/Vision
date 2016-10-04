import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
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
import NewRecommendationForm from './NewTestForm_modules/NewRecommendationForm';
import TestRecommendationList from './TestRecommendationList';
import RepairNotesList from './RepairNotesList';
import TestDiagnosisForm from './TestDiagnosisForm';
import NewDiagnosisForm from './NewDiagnosisForm';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {DATETIMEPICKER_FORMAT} from './appConstants.js';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

var SelectField = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            isVisible: false,
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
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        return (
            <FormGroup>
                <FormControl componentClass="select"
                             onChange={this.props.onChange}
                             name={name}
                             value={value}
                             disabled={this.props.disabled}
                >
                    <option>{label}</option>
                    {menuItems}
                    <FormControl.Feedback />
                </FormControl>
            </FormGroup>
        );
    }
});

var StatusSelectField = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            isVisible: false
        };
    },
    isVisible: function () {
        return this.state.isVisible;
    },
    componentDidMount: function () {

    },
    componentWillUnmount: function () {
    },
    setVisible: function () {
        this.state.isVisible = true;
    },
    render: function () {
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";

        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <FormControl componentClass="select"
                             onChange={this.props.onChange}
                             name={name}
                             value={this.state.value}>
                    <option value="normal"> Normal</option>
                    <option value="warning"> Warning</option>
                    <option value="danger"> Danger</option>
                    <FormControl.Feedback />
                </FormControl>
            </FormGroup>
        );
    }
});

var SyringeNumberSelectField = React.createClass({

    getInitialState: function () {
        return {
            items: [],
            isVisible: false,
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
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].serial}`}</option>);
        }


        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <FormControl componentClass="select"
                             onChange={this.props.onChange}
                             name={name}
                             value={value}
                             disabled={this.props.disabled}
                >
                    <option key={null} value={null}></option>
                    {menuItems}
                    <FormControl.Feedback />
                </FormControl>
            </FormGroup>
        );
    }
});

const DateTimeFieldWithLabel = React.createClass({
    _onChange: function (timestamp) {
        this.props.onDateTimeFieldChange(timestamp, this.props.name);
    },
    render: function () {
        var label = (this.props.label != null) ? this.props.label : "Please select a date";
        var name = (this.props.name != null) ? this.props.name : "";
        // Do not set dateTime property if date is null/undefined/empty string, calendar will be broken
        var dateValue = this.props.value;
        dateValue = (dateValue) ? {
            dateTime: dateValue,
            format: DATETIMEPICKER_FORMAT
        } : {defaultText: label};

        return (
            <div className="datetimepicker input-group date">
                <DateTimeField name={name}
                               onChange={this._onChange}
                    {...dateValue}
                               inputProps={{disabled: this.props.readOnly}}
                />
            </div>
        );
    }
});

const TextField = React.createClass({
    render: function () {
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type="text"
                             placeholder={label}
                             name={name}
                             value={value}
                             onChange={this.props.onChange}
                             disabled={this.props.disabled}
                />
                <FormControl.Feedback />
            </FormGroup>
        );
    }
});

const TextArea = React.createClass({
    render: function () {
        let tooltip = <Tooltip id={this.props.label}>{this.props.label}</Tooltip>;
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var error = this.props.errors[name];
        return (
            <OverlayTrigger overlay={tooltip} placement="top">
                <FormGroup>
                    <FormControl componentClass="textarea"
                                 placeholder={label}
                                 name={name}
                                 value={value}
                                 onChange={this.props.onChange}
                                 required={this.props.required}
                    />
                    <HelpBlock className="warning">{error}</HelpBlock>
                    <FormControl.Feedback />
                </FormGroup>
            </OverlayTrigger>
        );
    }
});

var EquipmentTestIdentificationForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {}
        }
    },
    render: function () {
        var data = (this.props.data != null) ? this.props.data : {};
        return (
            <div className="form-container">
                <div className="row">
                    <div className="col-md-4">
                        <SelectField source="test_type"
                                     label="Test type"
                                     name='test_type_id'
                                     value={data.test_type_id}
                                     disabled/>
                    </div>

                    <div className="col-md-3 col-md-offset-2">
                        <SelectField source="user"
                                     label="Performed By"
                                     name='performed_by_id'
                                     value={data.performed_by_id}
                                     disabled/>
                    </div>
                    <div className="col-md-2 nopadding padding-right-xs">
                        <TextField label="Fluid Temperature (&#8451;)"
                                   name='temperature'
                                   value={data.temperature}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <SelectField source="insulation"
                                     label="Insulating Fluid"
                                     name='fluid_type_id'
                                     value={data.fluid_type_id}
                        />
                    </div>
                    <div className="col-md-2">
                        <SelectField source="contract"
                                     label="Lab contract &#8470;"
                                     name='lab_contract_id'
                                     value={data.lab_contract_id}
                                     disabled/>
                    </div>
                    <div className="col-md-3 col-md-offset-2">
                        <SelectField source="test_status"
                                     label="Status"
                                     name='test_status_id'
                                     value={data.test_status_id}
                        />
                    </div>
                    <div className="col-md-2 nopadding padding-right-xs">
                        <TextField label="Load (MVA)"
                                   value={data.charge}
                                   name="charge"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 ">
                        <SelectField source="sampling_point"
                                     label="Sampling point"
                                     name='sampling_point_id'
                                     value={data.sampling_point_id}
                                     disabled
                        />
                    </div>
                    <div className="col-md-3">
                        <SyringeNumberSelectField source="syringe"
                                                  label="Syringe &#8470; / Jar &#8470;"
                                                  name='seringe_num'
                                                  value={data.seringe_num}/>
                    </div>
                    <div className="col-md-3" key={data.date_analyse}>
                        <DateTimeFieldWithLabel label="Lab Analysis Date"
                                                name='date_analyse'
                                                value={data.date_analyse}
                                                onChange={this.props.onChange}
                                                onDateTimeFieldChange={this.props.onDateTimeFieldChange}
                        />
                    </div>
                    <div className="col-md-3 nopadding padding-right-xs">
                        <SelectField source="lab"
                                     label="Lab./On-line analyser"
                                     name='lab_id'
                                     value={data.lab_id}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <SelectField source="equipment"
                                     label="Equipment"
                                     name='equipment_id'
                                     value={data.equipment_id}
                                     disabled/>
                    </div>
                    <div className="col-md-3">
                        <SelectField source="test_reason"
                                     label="Test reason"
                                     name='test_reason_id'
                                     value={data.test_reason_id}
                                     disabled/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Analysis Number"
                                   value={data.analysis_number}
                                   name="test_number"
                                   disabled/>
                    </div>
                </div>
            </div>
        );
    }
});

var EquipmentTestRepairForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {}
        }
    },


    render: function () {
        var data = (this.props.data != null) ? this.props.data : {}
        return (
            <div>
                <div className="tab_row">
                    <div className="col-md-12 ">
                        <RepairNotesList testResultId={this.props.data.id}
                                         testTypeId={this.props.data.test_type_id}/>
                    </div>
                </div>
                <div className="tab_row nopadding">
                    <div className="col-lg-12">
                        <TextArea label="Repair description"
                                  name='description'
                                  value={data.description}
                                  onChange={this.props.onChange}
                                  errors={this.state.errors}/>
                    </div>
                </div>
                <div className="tab_row nopadding">
                    <div className="col-lg-12">
                        <TextArea label="Remark"
                                  name='remark'
                                  value={data.remark}
                                  onChange={this.props.onChange}
                                  errors={this.state.errors}/>
                    </div>
                </div>
                <div className="tab_row nopadding">
                    <div className="col-md-12">
                        <TextArea label="Sample"
                                  name='sample'
                                  value={data.sample}
                                  onChange={this.props.onChange}
                                  errors={this.state.errors}/>
                    </div>
                </div>
                <div className="tab_row nopadding">
                    <div className="col-md-6" key={data.date_created}>
                        <DateTimeFieldWithLabel label="Please select repair date"
                                                name='date_created'
                                                value={data.date_created}
                                                onChange={this.props.onChange}
                                                onDateTimeFieldChange={this.props.onDateTimeFieldChange}
                                                readOnly
                        />
                    </div>
                </div>
            </div>
        );
    }
});

var EquipmentTestDiagnosisForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            showNewRecommendationForm: false,
            recommendation_id: null
        }
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {
            var items = (result['result']);
            this.setState({
                items: items
            });

        }.bind(this), 'json');
    },

    openNewRecommendationForm: function () {
        this.setState({showNewRecommendationForm: true});
        this.props.data.recommendation_id = null;
    },

    closeNewRecommendationForm: function () {
        this.setState({showNewRecommendationForm: false})
    },

    updatePredefinedRecommendations: function (id, recommendationType) {
        this.setState({showNewRecommendationForm: false, recommendation_id: id});

        if (recommendationType == "predefined") {
            // Reload select field with predefined recommendations and
            // change the value in the global state
            // TODO: There should be a nicer way to set proper value to recommendation_id select
            this.props.onChange({target: {type: "select", name: "recommendation_id", "value": id}});
        } else if (recommendationType == "test") {
            // Reload Recommendation list
            this.refs.testRecommendationList.reloadList(this.props.data.id, this.props.data.test_type_id);
        }

    },

    _onChange: function (e) {
        // Change value in this form's state to be able to select
        this.setState({recommendation_id: e.target.value});
        // Change the value in the global state to save it from there
        this.props.onChange(e);
    },

    render: function () {
        return (
            <form className="" method="post" action="#">
                <div className="tab_row">
                    <div className="col-lg-12">
                        <TestRecommendationList testResultId={this.props.data.id}
                                                testTypeId={this.props.data.test_type_id}
                                                ref="testRecommendationList"/>
                    </div>

                    <div className="col-lg-10 nopadding">
                        <SelectField source="recommendation"
                                     label="Predefined recommendation"
                                     name='recommendation_id'
                                     value={this.state.recommendation_id}
                                     disabled={this.state.showNewRecommendationForm}
                                     key={this.state.recommendation_id}
                                     onChange={this._onChange}
                                     ref="recommendation"
                        />
                    </div>
                    <div className="col-lg-1">
                        <Button bsStyle="primary" onClick={this.openNewRecommendationForm}>New</Button>
                    </div>
                    {this.state.showNewRecommendationForm ?
                        <div className="col-lg-12 nopadding">
                            <NewRecommendationForm testResultId={this.props.data.id}
                                                   selectedSubtests={this.props.data.selected_subtests}
                                                   testType={this.props.data.test_type}
                                                   handleClose={this.closeNewRecommendationForm}
                                                   onSuccess={this.updatePredefinedRecommendations}/>
                        </div>
                        : null
                    }

                </div>
            </form>
        )
    }
});

var EquipmentTestEqDiagnosisForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
        }
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {
            var items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    _onChange: function (e) {
        this.setState({diagnosis_id: e.target.value});
        this.props.onChange(e);
    },


    render: function () {
        return (
            <form className="" method="post" action="#">
                <div className="tab_row">
                    <div className="col-md-12 ">
                        <TestDiagnosisForm testResultId={this.props.data.id}
                                           testTypeId={this.props.data.test_type_id}/>

                        <div className="col-md-12 nopadding padding-right-xs">
                            <SelectField source="diagnosis"
                                         label="Predefined diagnosis"
                                         name='diagnosis_id'
                                         onChange={this._onChange}
                                         value={this.state.diagnosis_id}
                                         key={this.state.diagnosis_id}
                            />
                        </div>
                        { parseInt(this.props.data.diagnosis_id) === 3 ? <NewDiagnosisForm/> : null }
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
        switch (tableName) {
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
            csrf_token: 'not set',
            fields: ['test_type_id', 'test_reason_id',
                'status_id', 'temperature', 'lab_contract_id',
                'sampling_point_id', 'equipment_id', 'lab_id',
                'fluid_type_id', 'date_analyse', 'test_status_id'],
            testRecommendationFields: ['recommendation_id'],
            testRepairNotesFields: ['description', 'remark', 'sample', 'date_created'],
            errors: {},
            data: null
        }
    },

    _save: function () {
        this._saveTestRecommendation();
        this._saveRepairNote();
        this._saveDiagnosis();
        var fields = this.state.fields;
        var data = {};
        var url = '/api/v1.0/test_result/';
        var type = 'POST';
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state.data[key];
        }
        if ('id' in this.state.data) {
            url += this.state.data['id'];
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

    _saveTestRecommendation: function () {
        var fields = this.state.testRecommendationFields;
        var data = {};
        var url = '/api/v1.0/test_recommendation/';
        var type = 'POST';
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state.data[key];

        }

        if (Object.keys(data).length) {
            data.test_result_id = this.state.data['id'];
            data.test_type_id = this.state.data['test_type_id'];
            $.ajax({
                url: url,
                type: type,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data),
                beforeSend: function () {
                },
                success: function () {
                    NotificationManager.success('Test recommendation has been saved successfully');
                },
                error: function () {
                    NotificationManager.error("Sorry an error occurred while saving test recommendation");
                }.bind(this)
            });
        }
    },

    _saveRepairNote: function () {
        var fields = this.state.testRepairNotesFields;
        var data = {};
        var url = '/api/v1.0/test_repair_note/';
        var type = 'POST';
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state.data[key];

        }

        if (Object.keys(data).length) {
            data.test_result_id = this.state.data['id'];
            data.test_type_id = this.state.data['test_type_id'];
            $.ajax({
                url: url,
                type: type,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data),
                beforeSend: function () {
                },
                success: function () {
                },
                error: function (xhr, status, response) {
                    NotificationManager.error(response.error);
                }.bind(this)
            });
        }
    },

    _saveDiagnosis: function () {
        var data = {};
        var url = '/api/v1.0/test_diagnosis/';
        var type = 'POST';
        data.diagnosis_id = this.state.data['diagnosis_id'];
        data.test_result_id = this.state.data['id'];
        data.test_type_id = this.state.data['test_type_id'];
        $.ajax({
            url: url,
            type: type,
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            beforeSend: function () {
            },
            success: function () {
                NotificationManager.success('Test diagnosis has been saved successfully');
            },
            error: function (xhr, status, response) {
                NotificationManager.error(response.error);
            }.bind(this)
        });
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

    _onSuccess: function (data, status, xhr) {
        // this.refs.eqtype_form.getDOMNode().reset();
        // this.setState(this.getInitialState());
        this.props.handleClose();
        NotificationManager.success('Saved');
        this.props.updateSource('/api/v1.0/test_result/?equipment_id=' + this.state.data.equipment_id);
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
        var data = (this.state.data != null) ? this.state.data : {};
        if (e.target.type == 'checkbox') {
            data[e.target.name] = e.target.checked;
        } else if (e.target.type == 'radio') {
            data[e.target.name] = e.target.value;
        } else if (e.target.type == 'select-one') {
            data[e.target.name] = e.target.value;
        } else {
            data[e.target.name] = e.target.value;
        }
        this.setState({data: data});
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
            this.setState({data: (result['result'])});
        }.bind(this), 'json');
    },

    _onDateTimeFieldChange: function (timestamp, fieldName) {
        var stateData = this.state.data;
        // If date is not valid (for example, date is deleted) string "Invalid date" is received
        if (timestamp == "Invalid date") {
            timestamp = null;
        } else if (timestamp) {
            // It is UNIX timestamp in milliseconds if dateTimeField was empty on load
            // Format date here instead of specifying format in DateTimeField,
            // because error is raised when format is specified, but date is null/undefined/empty string.
            if (/^\d+$/.test(timestamp)) {
                timestamp = parseInt(timestamp);
                timestamp = moment(timestamp).toISOString();
            }
            stateData[fieldName] = timestamp;    // Already formatted to ISO string
        }
        this.setState({data: stateData});
    },

    render: function () {
        var data = (this.state.data != null) ? this.state.data : {};
        console.log("render DATA", data);
        return (
            <div>
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <input type="hidden" value={this.state.csrf_token}/>
                    <div className="maxwidth padding-top-lg margin-bottom-xs">
                        <ul id="tabs" className="nav nav-tabs " data-tabs="tabs">
                            <li className="active"><a href="#tabs-1" data-toggle="tab"> Identification </a></li>
                            <li><a href="#tabs-2" data-toggle="tab"> Test values </a></li>
                            <li><a href="#tabs-3" data-toggle="tab"> Test repair notes </a></li>
                            <li><a href="#tabs-4" data-toggle="tab"> Recommendation notes </a></li>
                            <li><a href="#tabs-5" data-toggle="tab"> Diagnosis </a></li>
                        </ul>
                        <div id="my-tab-content" className="tab-content col-lg-12 nopadding">
                            <div id="tabs-1" role="tabpanel" className="tab-pane active ">
                                <EquipmentTestIdentificationForm data={data}
                                                                 onChange={this._onChange}
                                                                 onDateTimeFieldChange={this._onDateTimeFieldChange}/>
                            </div>
                            <div id="tabs-2" role="tabpanel" className="tab-pane">
                                <TestValuesForm testResultId={this.props.selectedRowId}
                                                testType={data.test_type}
                                />
                            </div>
                            <div id="tabs-3" role="tabpanel" className="tab-pane">
                                <EquipmentTestRepairForm data={data}
                                                         onChange={this._onChange}
                                                         onDateTimeFieldChange={this._onDateTimeFieldChange}/>
                            </div>
                            <div id="tabs-4" role="tabpanel" className="tab-pane">
                                <EquipmentTestDiagnosisForm data={data}
                                                            onChange={this._onChange}/>
                            </div>
                            <div id="tabs-5" role="tabpanel" className="tab-pane">
                                <EquipmentTestEqDiagnosisForm data={data}
                                                              onChange={this._onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1 pull-right nopadding padding-right-xs">
                            <FormGroup>
                                <Button bsStyle="success"
                                        type="submit">Save</Button>
                            </FormGroup>
                        </div>
                        <div className="col-md-1 pull-right ">
                            <FormGroup>
                                <Button bsStyle="danger"
                                        onClick={this.props.handleClose}
                                >Cancel</Button>
                            </FormGroup>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

export default EquipmentTestForm;
