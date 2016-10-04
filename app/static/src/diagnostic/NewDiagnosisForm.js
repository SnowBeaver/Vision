import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';

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
                                 onChange={this.props.onChange}
                                 disabled={this.props.disabled}
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </OverlayTrigger>
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

var NewDiagnosisForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            predefinedDiagnosisFields: ['name', 'code', 'description', 'test_type_id'],
            testDiagnosisFields: ['test_type_id','test_result_id', 'diagnosis_notes'],
            public_diagnosis: false
        }
    },

    _onChange: function (e) {
        e.stopPropagation();
        var state = this.state.predefinedDiagnosisFields;

        if (e.target.type == 'checkbox') {
            state[e.target.name] = e.target.checked;
        } else if (e.target.type == 'select-one') {
            state[e.target.name] = e.target.value;
        } else {
            state[e.target.name] = e.target.value;
        }

        this.setState(state);
    },

    _onSubmit: function (e) {
        var xhr = this._create();
        if (xhr) {
            xhr.done(this._onSuccess)
                .fail(this._onError)
                .always(this.hideLoading);
        }
    },

    hideLoading: function () {
        this.setState({loading: false});
    },

    _create: function () {
        if(this.state.public_diagnosis){
            this._createPredefinedDiagnoses();
        }
        else{
            this._createTestDiagnoses();
        }
    },

    _createTestDiagnoses: function () {
        var fields = this.state.testDiagnosisFields;
        var data = {};
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            var value = this.state[key];
            if (value == "") {
                value = null;
            }
            data[key] = value;
        }
        console.log("save data", data);
        return $.ajax({
            url: '/api/v1.0/test_diagnosis/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
            },
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })

    },

    _createPredefinedDiagnoses: function () {
        var fields = this.state.predefinedDiagnosisFields;
        var data = {};
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            var value = this.state[key];
            if (value == "") {
                value = null;
            }
            data[key] = value;
        }
        console.log("save data", data);
        return $.ajax({
            url: '/api/v1.0/diagnosis/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
            },
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })
    },

    _onSuccess: function () {
        NotificationManager.success("New diagnosis has been successfully added");
    },


    render: function () {
        console.log("props", this.props);
        console.log("state", this.state);
        return (
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>


                    <div className="tab_row">
                        <div className="col-md-5 ">
                            <SelectField source="test_type"
                                         label="Test type"
                                         name='test_type_id'
                                         value={this.state.test_type_id}
                                         key={this.state.test_type_id}
                            />
                        </div>
                        <div className="col-md-1">
                            <Checkbox checked={this.state.public_diagnosis}
                                      name="public_diagnosis">Public</Checkbox>
                        </div>
                        {this.state.public_diagnosis ?
                            <div>
                                <div className="col-md-3">
                                    <TextField label="Name"
                                               name='name'
                                               value={this.state.name}
                                               errors={this.state.errors}/>
                                </div>
                                <div className="col-md-3">
                                    <TextField label="Code"
                                               name='code'
                                               value={this.state.code}
                                               errors={this.state.errors}/>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                    <div className="tab_row">
                        <div className="col-md-12">
                        <TextArea label= {this.state.public_diagnosis ? "Description": "Diagnosis Notes"}
                                  name= {this.state.public_diagnosis ? "description": "diagnosis_notes"}
                                  value= {this.state.public_diagnosis ? this.state.description: this.state.diagnosis_notes}
                                  errors={this.state.errors}/>
                        </div>
                        <div className="col-md-12 ">
                            <Button bsStyle="success"
                                    className="btn btn-success pull-right"
                                    type="submit"
                            >Add {this.state.public_diagnosis ? "Predefined" : "Test"} Diagnosis</Button>
                            &nbsp;
                            <Button bsStyle="danger"
                                    className="pull-right"
                                    onClick={this.props.handleClose}
                                    className="pull-right margin-right-xs"
                            >Cancel</Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

export default NewDiagnosisForm;
