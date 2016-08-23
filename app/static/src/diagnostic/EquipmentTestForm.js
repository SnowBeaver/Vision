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
        }
    },

    render: function() {
        console.log(this.props.data)
        return (
            <div className="form-container">
                <form method="post" action="#" >
                    <input type="hidden" value={this.state.csrf_token}/>
                        <div className="tab_row text-center">
                            <div className="col-lg-12 nopadding">
                                <div className="col-lg-6 nopadding padding-right-xs">
                                    <FormGroup controlId="formControlsSelect">
                                        <ControlLabel>Test type</ControlLabel>
                                        <FormControl componentClass="select" placeholder="select">
                                            <option value="select">{this.props.data && this.props.data.test_type}</option>
                                            {/*{this.state.test_type.optionList}*/}
                                        </FormControl>
                                    </FormGroup>
                                </div>
                                <div className="col-lg-6 nopadding">
                                    <div className="col-lg-6 nopadding padding-right-xs">
                                        <FormGroup controlId="formControlsSelect">
                                            <ControlLabel>Initials</ControlLabel>
                                            <FormControl componentClass="select" placeholder="select">
                                                <option value="select">select</option>
                                                {/*{this.state.initials.optionList}*/}
                                            </FormControl>
                                        </FormGroup>
                                    </div>
                                    <div className="col-lg-6 nopadding">Acq Date
                                        <div className="datetimepicker input-group date"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 nopadding">
                                <div className="col-lg-6 nopadding padding-right-xs">
                                    <FormGroup controlId="formControlsSelect">
                                        <ControlLabel>Reason</ControlLabel>
                                        <FormControl componentClass="select" placeholder="select">
                                            <option value="select">select</option>
                                            {/*{this.state.reason.optionList}*/}
                                        </FormControl>
                                    </FormGroup>
                                </div>
                                <div className="col-lg-6 nopadding">
                                    <div className="col-lg-6 nopadding padding-right-xs"> 
                                        <FormControl label="Status" type="text" value="" />
                                    </div>
                                    <div className="col-lg-6 nopadding">Temp
                                        <FormControl type="text" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 nopadding">
                                <div className="col-lg-6 nopadding">
                                    <div className="col-lg-6 nopadding padding-right-xs">Insulating
                                        <FormControl type="text" value="" />
                                    </div>
                                    <div className="col-lg-6 nopadding padding-right-xs">Contract
                                        <FormControl type="text" value="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 nopadding">Grouping
                                    <FormControl type="text" value="" />
                                </div>
                            </div>
                            <div className="col-lg-12 nopadding">
                                <div className="col-lg-2 nopadding padding-right-xs">Sampling
                                    <FormControl type="text" value="" />
                                </div>
                                <div className="col-lg-3 nopadding padding-right-xs">
                                    <FormGroup controlId="formControlsSelect">
                                        <ControlLabel>Syringe</ControlLabel>
                                        <FormControl componentClass="select" placeholder="select">
                                            <option value="select">select</option>
                                            {/*{this.state.syringe.optionList}*/}
                                        </FormControl>
                                    </FormGroup>
                                </div>
                                <div className="col-lg-2 nopadding padding-right-xs">Test number
                                    <FormControl type="text" value="" />
                                </div>
                                <div className="col-lg-3 nopadding padding-right-xs">
                                    <div className="datetimepicker input-group date">Lab date
                                        <DateTimeField datetime="" />
                                    </div>
                                </div>
                                <div className="col-lg-2 nopadding">Load mva
                                    <FormControl type="text" value="" />
                                </div>
                            </div>
                            <div className="col-lg-12 nopadding">
                                <div className="col-lg-3 nopadding padding-right-xs">Equipment
                                    <FormControl type="text" value="" />
                                </div>
                                <div className="col-lg-3 nopadding padding-right-xs">Order status
                                    <FormControl type="text" value="" />
                                </div>
                                <div className="col-lg-3 nopadding padding-right-xs">Lab no
                                    <FormControl type="text" value="" />
                                </div>
                                <div className="col-lg-3 nopadding">Lab
                                    <FormControl type="text" value="" />
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

const EquipmentTestDiagnosisForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            // diagnosis: {
            //     label: null,
            //     value: null
            // },
            // recommendations: {
            //     label: null,
            //     value: null
            // },
            // predefined_diag: {
            //     label: null,
            //     value: null
            // },
            // predefined_rec: {
            //     label: null,
            //     value: null
            // },
            // date: {
            //     label: null,
            //     value: null
            // },
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


const EquipmentTestEqDiagnosisForm = React.createClass({
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

const EquipmentTestForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            source: '/api/v1.0/test_result/' + this.props.selectedRowId,
            data: null
        }
    },
    // _create: function () {
    //     // console.log(this.refs);
    //
    //     return $.ajax({
    //         url: '/api/v1.0/equipment/',
    //         type: 'POST',
    //         data: {
    //             'equipment_type_id': this.refs.eqt.state.eqtype_id,
    //             'manufacturer_id': this.refs.mn.state.manufac_id,
    //         },
    //         beforeSend: function () {
    //             this.setState({loading: true});
    //         }.bind(this)
    //     })
    // },
    _onSubmit: function (e) {
        e.preventDefault();
        // var errors = this._validate();
        // if(Object.keys(errors).length != 0) {
        //   this.setState({
        //     errors: errors
        //   });
        //    return;
        // }
        // var xhr = this._create();
        // xhr.done(this._onSuccess)
        //     .fail(this._onError)
        //     .always(this.hideLoading)
    },
    hideLoading: function () {
        this.setState({loading: false});
    },
    _onSuccess: function (data) {
        // this.refs.eqtype_form.getDOMNode().reset();
        // this.setState(this.getInitialState());
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
    componentDidMount: function () {
        $.get(this.state.source, function (result){
            var arr = (result['result']);
            var data = {
                id: arr.id,
                date: arr.date_analyse,
                reason: arr.reason_id,
                type: arr.test_type_id,
                contract: null,
                test_status: arr.test_status_id,
                analysis_number: arr.analysis_number,
                serial: arr.equipment.serial,
                equipment_number: arr.equipment.equipment_number
            };
            console.log(arr);
            console.log(data);
            this.setState({
                data: data
            });
        });
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
                            <EquipmentTestIdentificationForm data={this.state.data}/>
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
