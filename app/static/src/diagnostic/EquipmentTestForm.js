import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField'
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';

const EquipmentTestIdentificationForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            csrf_token: 'not set',
            errors: {},
            test_type: {
                label: 'Test type',
                value: null
            },
            initials: {
                label: 'Initials',
                optionList: []
            },
            acq_date: {
                label: 'Acq Date',
                value: null
            },
            reason: {
                label: 'Reason',
                optionList: []
            },
            status: {
                label: 'Status',
                value: null
            },
            temp: {
                label: null,
                value: null
            },
            insulating: {
                label: null,
                value: null
            },
            contract: {
                label: null,
                value: null
            },
            grouping: {
                label: null,
                value: null
            },
            sampling: {
                label: null,
                value: null
            },
            syringe: {
                label: null,
                optionList: []
            },
            test_number: {
                label: null,
                value: null
            },
            lab_date: {
                label: null,
                value: null
            },
            load_mva: {
                label: null,
                value: null
            },
            equipment: {
                label: null,
                value: null
            },
            order_status: {
                label: null,
                value: null
            },
            lab_no:{
                label: null,
                value: null
            },
            lab: {
                label: null,
                value: null
            }
        }
    },

    render: function() {
        return (
            <div className="form-container">
                <form method="post" action="#" >
                    <input type="hidden" value={this.state.csrf_token}/>
                        <div className="tab_row text-center">
                            <div className="col-lg-12 nopadding">
                                <div className="col-lg-6 nopadding padding-right-xs">
                                    <FormGroup controlId="formControlsSelect">
                                        <ControlLabel>{this.state.test_type.label}</ControlLabel>
                                        <FormControl componentClass="select" placeholder="select">
                                            <option value="select">select</option>
                                            {this.state.test_type.optionList}
                                        </FormControl>
                                    </FormGroup>
                                </div>
                                <div className="col-lg-6 nopadding">
                                    <div className="col-lg-6 nopadding padding-right-xs">
                                        <FormGroup controlId="formControlsSelect">
                                            <ControlLabel>{this.state.initials.label}</ControlLabel>
                                            <FormControl componentClass="select" placeholder="select">
                                                <option value="select">select</option>
                                                {this.state.initials.optionList}
                                            </FormControl>
                                        </FormGroup>
                                    </div>
                                    <div className="col-lg-6 nopadding">
                                        {this.state.acq_date.label }
                                        <div className="datetimepicker input-group date">
                                            <DateTimeField datetime={this.state.acq_date} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 nopadding">
                                <div className="col-lg-6 nopadding padding-right-xs">
                                    <FormGroup controlId="formControlsSelect">
                                        <ControlLabel>{this.state.reason.label}</ControlLabel>
                                        <FormControl componentClass="select" placeholder="select">
                                            <option value="select">select</option>
                                            {this.state.reason.optionList}
                                        </FormControl>
                                    </FormGroup>
                                </div>
                                <div className="col-lg-6 nopadding">
                                    <div className="col-lg-6 nopadding padding-right-xs"> 
                                        <FormControl label={ this.state.status.label } type="text" value={this.state.status.value} />
                                    </div>
                                    <div className="col-lg-6 nopadding">
                                        { this.state.temp.label }
                                        <FormControl type="text" value={this.state.temp.value} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 nopadding">
                                <div className="col-lg-6 nopadding">
                                    <div className="col-lg-6 nopadding padding-right-xs">
                                        { this.state.insulating.label }
                                        <FormControl type="text" value={this.state.insulating.value} />
                                    </div>
                                    <div className="col-lg-6 nopadding padding-right-xs">
                                        { this.state.contract.label }
                                        <FormControl type="text" value={this.state.contract.value} />
                                    </div>
                                </div>
                                <div className="col-lg-6 nopadding">
                                    { this.state.grouping.label }
                                    <FormControl type="text" value={this.state.grouping.value} />
                                </div>
                            </div>
                            <div className="col-lg-12 nopadding">
                                <div className="col-lg-2 nopadding padding-right-xs">
                                    { this.state.sampling.label }
                                    <FormControl type="text" value={this.state.sampling.value} />
                                </div>
                                <div className="col-lg-3 nopadding padding-right-xs">
                                    <FormGroup controlId="formControlsSelect">
                                        <ControlLabel>{this.state.syringe.label}</ControlLabel>
                                        <FormControl componentClass="select" placeholder="select">
                                            <option value="select">select</option>
                                            {this.state.syringe.optionList}
                                        </FormControl>
                                    </FormGroup>
                                </div>
                                <div className="col-lg-2 nopadding padding-right-xs">
                                    { this.state.test_number.label }
                                    <FormControl type="text" value={this.state.test_number.value} />
                                </div>
                                <div className="col-lg-3 nopadding padding-right-xs">
                                    <div className="datetimepicker input-group date">
                                        {this.state.lab_date.label}
                                        <DateTimeField datetime={this.state.lab_date.value} />
                                    </div>
                                </div>
                                <div className="col-lg-2 nopadding">
                                    {this.state.load_mva.label}
                                    <FormControl type="text" value={this.state.load_mva.value} />
                                </div>
                            </div>
                            <div className="col-lg-12 nopadding">
                                <div className="col-lg-3 nopadding padding-right-xs">
                                    {this.state.equipment.label}
                                    <FormControl type="text" value={this.state.equipment.value} />
                                </div>
                                <div className="col-lg-3 nopadding padding-right-xs">
                                    {this.state.order_status.label}
                                    <FormControl type="text" value={this.state.order_status.value} />
                                </div>
                                <div className="col-lg-3 nopadding padding-right-xs">
                                    {this.state.lab_no.label}
                                    <FormControl type="text" value={this.state.lab_no.value} />
                                </div>
                                <div className="col-lg-3 nopadding">
                                    {this.state.lab.label}
                                    <FormControl type="text" value={this.state.lab.value} />
                                </div>
                            </div>
                        </div>
                </form>
            </div>
        );
    }
});



const EquipmentTestRepairForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            csrf_token: null,
            errors: {},
            comments: {
                label: 'Comments',
                value: null
            },
            notes: {
                label: 'Notes',
                value: null
            },
            sampled: {
                label: 'Sampled',
                value: null
            },
            date: {
                label: 'Date',
                value: null
            }
        }
    },
    render: function(){
        return (
            <form className="" method="post" action="#" > 
                <div className="tab_row">
                    <div className="col-lg-12 nopadding">
                        <div className="col-lg-6 nopadding padding-right-xs">
                            { this.state.comments.label }
                            <FormControl componentClass="textarea" placeholder="textarea" value={ this.state.comments.value } />
                        </div>
                        <div className="col-lg-6 nopadding ">
                            { this.state.notes.label }
                            <FormControl componentClass="textarea" placeholder="textarea" value={ this.state.notes.value } />
                        </div>
                    </div>
                    <div className="col-lg-12 nopadding">
                        <div className="col-lg-6 nopadding padding-right-xs">
                            {this.state.sampled.label}
                            <FormControl type="text" value={ this.state.sampled.value } />
                        </div>
                        <div className="col-lg-6 nopadding">
                            {this.state.date.label}
                            <div className="datepicker input-group date">
                                <DateTimeField datetime={this.state.date.value} />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
});

const EquipmentTestDiagnosisForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            diagnosis: {
                label: null,
                value: null
            },
            recommendations: {
                label: null,
                value: null
            },
            predefined_diag: {
                label: null,
                value: null
            },
            predefined_rec: {
                label: null,
                value: null
            },
            date: {
                label: null,
                value: null
            },
        }
    },
    render: function(){
        return (
            <form className="" method="post" action="#" >
                <div className="tab_row">
                    <div className="col-lg-12 nopadding">
                        <div className="col-lg-6 nopadding padding-right-xs">
                            { this.state.diagnosis.label }
                            <FormControl componentClass="textarea" placeholder="textarea" value={ this.state.diagnosis.value } />
                        </div>
                        <div className="col-lg-6 nopadding ">
                           { this.state.recommendations.label }
                            <FormControl componentClass="textarea" placeholder="textarea" value={ this.state.recommendations.value } />
                        </div>
                    </div>
                    <div className="col-lg-12 nopadding">
                        { this.state.predefined_diag.label }
                        <FormControl type="text" value={ this.state.predefined_diag.value } />
                    </div>
                    <div className="col-lg-12 nopadding">
                        { this.state.predefined_rec.label }
                        <FormControl type="text" value={ this.state.predefined_rec.value } />
                    </div>
                    <div className="col-lg-12 nopadding">
                        <div className="col-lg-9 nopadding padding-right-xs">
                            { this.state.date.label }
                            <div className="datepicker input-group date">
                                <DateTimeField datetime={this.state.date.value} />
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


const EquipmentTestEqDiagnosisForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            diagnosis: {
                label: null,
                value: null
            },
            indicator: {
                label: null,
                value: null
            },
            condition: {
                label: null,
                value: null
            }
        }
    },
    render: function () {
        return (
            <form className="" method="post" action="#">
                <div className="tab_row">
                    <div className="col-lg-12 nopadding">
                        {this.state.diagnosis.label }
						<FormControl componentClass="textarea" placeholder="textarea" value={ this.state.diagnosis.value } />
                    </div>
                    <div className="col-lg-12 nopadding">
                        {this.state.indicator.label }
                        <FormControl type="text" value={ this.state.indicator.value } />
                    </div>
                    <div className="col-lg-12 nopadding">
                        {this.state.condition.label}
						<FormGroup>
							<Checkbox inline>
								{this.state.condition.value}
							</Checkbox>
						</FormGroup>
                    </div>
                </div>
            </form>
        );
    }
});

const EquipmentTestForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {}
        }
    },
    _create: function () {
        // console.log(this.refs);

        return $.ajax({
            url: '/api/v1.0/equipment/',
            type: 'POST',
            data: {
                'equipment_type_id': this.refs.eqt.state.eqtype_id,
                'manufacturer_id': this.refs.mn.state.manufac_id,
            },
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })
    },
    _onSubmit: function (e) {
        e.preventDefault();
        // var errors = this._validate();
        // if(Object.keys(errors).length != 0) {
        //   this.setState({
        //     errors: errors
        //   });
        //    return;
        // }
        var xhr = this._create();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },
    hideLoading: function () {
        this.setState({loading: false});
    },
    _onSuccess: function (data) {
        this.refs.eqtype_form.getDOMNode().reset();
        this.setState(this.getInitialState());
        // show success message
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
        // if(this.state.email == "") {
        //   errors.email = "Email is required";
        // }
        // if(this.state.password == "") {
        //   errors.password = "Password is required";
        // }
        // return errors;
    },
    _formGroupClass: function (field) {
        var className = "form-group ";
        if(field) {
            className += " has-error"
        }
        return className;
    },
    render: function() { 
        return (
            <div> 
                <div className="maxwidth padding-top-lg margin-bottom-xs">
                    <ul id="tabs" className="nav nav-tabs " data-tabs="tabs">
                        <li className="active"> <a href="#tabs-1" data-toggle="tab"> Identification </a> </li>
                        <li> <a href="#tabs-2" data-toggle="tab"> Test repair notes </a> </li>
                        <li> <a href="#tabs-3" data-toggle="tab"> Records diagnostic </a> </li>
                        <li> <a href="#tabs-4" data-toggle="tab"> Diagnosis and recommendations </a> </li>
                    </ul>
                    <div id="my-tab-content" className="tab-content col-lg-12 nopadding">
                        <div id="tabs-1" role="tabpanel" className="tab-pane active ">
                            <EquipmentTestIdentificationForm/>
                        </div>
                        <div id="tabs-2" role="tabpanel" className="tab-pane">
                            <EquipmentTestRepairForm/>
                        </div>
                        <div id="tabs-3" role="tabpanel" className="tab-pane">
                            <EquipmentTestDiagnosisForm/>
                        </div>
                        <div id="tabs-4" role="tabpanel" className="tab-pane">
                            <EquipmentTestEqDiagnosisForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default EquipmentTestForm;
