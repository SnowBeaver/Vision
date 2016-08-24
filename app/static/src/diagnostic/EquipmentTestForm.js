import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField'
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';

var TestTypeSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        });
    },

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
        this.serverRequest = $.get(this.props.source, function (result) {
            var items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChange}
                        name="name">
                        <option key="0" value="select">Test Type</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});

var InitialsSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

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
        this.serverRequest = $.get(this.props.source, function (result) {

            var items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option value={this.state.items[key].id}
                                   key={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect4">
                    <FormControl componentClass="select" placeholder="Select initials" onChange={this.handleChange}>
                        <option key="0" value="select">Initials</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});

var TestReasonSelectField = React.createClass({

    handleChange: function (event) {
        this.setState({
            value: event.target.value
        });
    },

    getInitialState: function () {
        return {
            items: [],
            isVisible: false,
            value: null
        };
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    componentDidMount: function () {

        this.serverRequest = $.get(this.props.source, function (result) {

            var items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <FormGroup controlId="formControlsSelect1">
                <ControlLabel>Reason of testing</ControlLabel>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <option value="select">Select reason</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});

var SyringeSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

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
        this.serverRequest = $.get(this.props.source, function (result) {

            var items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect1">
                    <ControlLabel>Syringe</ControlLabel>
                    <FormControl componentClass="select" placeholder="equipment type" onChange={this.handleChange}>
                        <option value="select">select syringe</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});

const EquipmentTestIdentificationForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            csrf_token: 'not set',
            errors: {}
        }
    },

    render: function () {
        console.log(this.props.data)
        return (
            <div className="form-container">
                <form method="post" action="#">
                    <input type="hidden" value={this.state.csrf_token}/>
                    <div className="tab_row text-center">
                        <div className="col-lg-12 nopadding">
                            <div className="col-lg-6 nopadding padding-right-xs">
                                <ControlLabel>Test type</ControlLabel>
                                <TestTypeSelectField
                                    source="/api/v1.0/test_type"
                                    handleChange={this.handleChange}/>
                            </div>
                            <div className="col-lg-6 nopadding">
                                <div className="col-lg-6 nopadding padding-right-xs">
                                    <InitialsSelectField source="/api/v1.0/user"
                                                         handleChange={this.handleChange}/>
                                </div>
                                <div className="col-lg-6 nopadding">Acq Date
                                    <div className="datetimepicker input-group date"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 nopadding">
                            <div className="col-lg-6 nopadding padding-right-xs">
                                <TestReasonSelectField
                                    source="/api/v1.0/test_reason"
                                    handleChange={this.handleChange}
                                >
                                </TestReasonSelectField>
                            </div>
                            <div className="col-lg-6 nopadding">
                                <div className="col-lg-6 nopadding padding-right-xs">
                                    <FormControl label="Status" type="text" value=""/>
                                </div>
                                <div className="col-lg-6 nopadding">Temp
                                    <FormControl type="text" value=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 nopadding">
                            <div className="col-lg-6 nopadding">
                                <div className="col-lg-6 nopadding padding-right-xs">Insulating
                                    <FormControl type="text" value=""/>
                                </div>
                                <div className="col-lg-6 nopadding padding-right-xs">Contract
                                    <FormControl type="text" value=""/>
                                </div>
                            </div>
                            <div className="col-lg-6 nopadding">Grouping
                                <FormControl type="text" value=""/>
                            </div>
                        </div>
                        <div className="col-lg-12 nopadding">
                            <div className="col-lg-2 nopadding padding-right-xs">Sampling
                                <FormControl type="text" value=""/>
                            </div>
                            <div className="col-lg-3 nopadding padding-right-xs">
                                <SyringeSelectField ref="syringe" source="/api/v1.0/syringe"/>
                            </div>
                            <div className="col-lg-2 nopadding padding-right-xs">Test number
                                <FormControl type="text" value=""/>
                            </div>
                            <div className="col-lg-3 nopadding padding-right-xs">
                                <div className="datetimepicker input-group date">Lab date
                                    <DateTimeField datetime=""/>
                                </div>
                            </div>
                            <div className="col-lg-2 nopadding">Load mva
                                <FormControl type="text" value=""/>
                            </div>
                        </div>
                        <div className="col-lg-12 nopadding">
                            <div className="col-lg-3 nopadding padding-right-xs">Equipment
                                <FormControl type="text" value=""/>
                            </div>
                            <div className="col-lg-3 nopadding padding-right-xs">Order status
                                <FormControl type="text" value=""/>
                            </div>
                            <div className="col-lg-3 nopadding padding-right-xs">Lab no
                                <FormControl type="text" value=""/>
                            </div>
                            <div className="col-lg-3 nopadding">Lab
                                <FormControl type="text" value=""/>
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

const EquipmentTestDiagnosisForm = React.createClass({
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

const EquipmentTestForm = React.createClass({
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
        alert('Saved');
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
        console.log(e.target.name);
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

        console.log(this.props);
        $.get('/api/v1.0/test_result/' + this.props.selectedRowId, function (result) {
            var arr = (result['result']);

            this.setState({
                id: arr.id,
                date: arr.date_analyse,
                reason: arr.reason_id,
                type: arr.test_type_id,
                contract: null,
                test_status: arr.test_status_id,
                analysis_number: arr.analysis_number,
                serial: arr.equipment.serial,
                equipment_number: arr.equipment.equipment_number
            });

        }.bind(this), 'json'); 
        console.log(this.state);
    },
    render: function () {
        return (
            <div>
                <div className="maxwidth padding-top-lg margin-bottom-xs">
                    <ul id="tabs" className="nav nav-tabs " data-tabs="tabs">
                        <li className="active"><a href="#tabs-1" data-toggle="tab"> Identification </a></li>
                        <li><a href="#tabs-2" data-toggle="tab"> Test repair notes </a></li>
                        <li><a href="#tabs-3" data-toggle="tab"> Records diagnostic </a></li>
                        <li><a href="#tabs-4" data-toggle="tab"> Diagnosis and recommendations </a></li>
                    </ul>
                    <div id="my-tab-content" className="tab-content col-lg-12 nopadding">
                        <div id="tabs-1" role="tabpanel" className="tab-pane active ">
                            <EquipmentTestIdentificationForm data={this.state}/>
                        </div>
                        <div id="tabs-2" role="tabpanel" className="tab-pane">
                            <EquipmentTestRepairForm data={this.state}/>
                        </div>
                        <div id="tabs-3" role="tabpanel" className="tab-pane">
                            <EquipmentTestDiagnosisForm data={this.state}/>
                        </div>
                        <div id="tabs-4" role="tabpanel" className="tab-pane">
                            <EquipmentTestEqDiagnosisForm data={this.state}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default EquipmentTestForm;
