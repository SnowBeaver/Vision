import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';


var SelectField = React.createClass({
    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
        });
    },
    getInitialState: function(){
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
        this.serverRequest = $.get(this.props.source, function (result){
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
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        console.log( "SelectField value" + (this.props.value || 'no data') );
        console.log( this.props.value );
        console.log( typeof(this.state.value) == "undefined" );
        console.log( this.state.value == null );
        return (
            <FormGroup>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl componentClass="select"
                             onChange={this.handleChange}
                             defaultValue={this.props.value}>
                    {menuItems}
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
        return (
            <FormGroup>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl type="text" value={this.props.value} />
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
        console.log('EquipmentTestIdentificationForm render')
        console.log(this.props.data)
        return (
            <div className="form-container">
                <form method="post" action="#" >
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
                                <TextField label="Insulating ?" />
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <SelectField source="/api/v1.0/contract" label="Lab contract" value={this.props.data.lab_contract_id}/>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <TextField label="Grouping ?" />
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
                                <TextField label="Test number ?"/>
                            </div>
                            <div className="col-lg-3 nopadding padding-right-xs">
                                <TextField label="Load mva ?"/>
                            </div>
                        </div>
                        <div className="col-lg-12 nopadding">
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <SelectField source="/api/v1.0/equipment" label="Equipment" value={this.props.data.equipment_id}/>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <TextField label="Order status ?" />
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
    render: function(){
        return (
            <form className="" method="post" action="#" > 
                <div className="tab_row">
                    <div className="col-lg-12 nopadding">
                        <div className="col-lg-6 nopadding padding-right-xs">Comments
                            <FormControl componentClass="textarea" placeholder="textarea" value="" />
                        </div>
                        <div className="col-lg-6 nopadding ">Notes
                            <FormControl componentClass="textarea" placeholder="textarea" value="" />
                        </div>
                    </div>
                    <div className="col-lg-12 nopadding">
                        <div className="col-lg-6 nopadding padding-right-xs">Sample
                            <FormControl type="text" value="" />
                        </div>
                        <div className="col-lg-6 nopadding">Date
                            <div className="datepicker input-group date">
                                <DateTimeField datetime="" />
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
    render: function(){
        return (
            <form className="" method="post" action="#" >
                <div className="tab_row">
                    <div className="col-lg-12 nopadding">
                        <div className="col-lg-6 nopadding padding-right-xs">Diagnosis
                            <FormControl componentClass="textarea" placeholder="textarea" value="" />
                        </div>
                        <div className="col-lg-6 nopadding ">Recommendations
                            <FormControl componentClass="textarea" placeholder="textarea" value="" />
                        </div>
                    </div>
                    <div className="col-lg-12 nopadding">Predefined diag
                        <FormControl type="text" value="" />
                    </div>
                    <div className="col-lg-12 nopadding">Predefined rec
                        <FormControl type="text" value="" />
                    </div>
                    <div className="col-lg-12 nopadding">
                        <div className="col-lg-9 nopadding padding-right-xs">Date
                            <div className="datepicker input-group date">
                                <DateTimeField datetime="" />
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
						<FormControl componentClass="textarea" placeholder="textarea" value="" />
                    </div>
                    <div className="col-lg-12 nopadding">Indicator
                        <FormControl type="text" value="" />
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
        return (
            <div>Here would be the test values.</div>
        );
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
        if(Object.keys(errors).length != 0) {
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
        alert('Saved');
    },
    
    _onError: function (data) {
        var message = "Failed to create";
        var res = data.responseJSON;
        if(res.message) {
            message = data.responseJSON.message;
        }
        if(res.errors) {
            this.setState({
                errors: res.errors
            });
        }
    },
    
    _onChange: function (e) {
        console.log(e.target.name);
        var state = {};
        state[e.target.name] =  $.trim(e.target.value);
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
        if(field) {
            className += " has-error"
        }
        return className;
    },
    
    componentDidMount: function () {
        this.serverRequest = $.get('/api/v1.0/test_result/' + this.props.selectedRowId, function (result) {
            var arr = (result['result']);
            this.setState({ data : (result['result']) });
            // this.setState({ data : {
            //     id: arr.id,
            //     date: arr.date_analyse,
            //     reason: arr.reason_id,
            //     type: arr.test_type_id,
            //     lab_id: arr.lab_id,
            //     test_type_id: arr.test_type_id,
            //     contract: null,
            //     test_status: arr.test_status_id,
            //     analysis_number: arr.analysis_number,
            //     serial: arr.equipment.serial,
            //     equipment_number: arr.equipment.equipment_number
            //     }
            // });
        }.bind(this), 'json');
    },
    render: function() {
        console.log('EquipmentTestForm render');
        console.log(this.state.data);
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
                                            testTypeId={this.state.data.test_type_id} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default EquipmentTestForm;
