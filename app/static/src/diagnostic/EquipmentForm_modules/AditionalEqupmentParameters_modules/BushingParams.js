import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


const TextField = React.createClass({
    render: function () {
        let tooltip = <Tooltip id={this.props.label}>{this.props.label}</Tooltip>;
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var placeholder = (this.props.label != null) ? this.props.label : "";

        return (
            <OverlayTrigger overlay={tooltip} placement="top">
                <FormGroup>
                    <ControlLabel>{label}</ControlLabel>

                    <FormControl type="text"
                                 placeholder={placeholder}
                                 name={name}
                                 value={value}
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
                <ControlLabel>{label}</ControlLabel>
                <FormControl componentClass="select"
                             onChange={this.handleChange}
                             defaultValue={value}
                >
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});

const CheckBox = React.createClass({
    render: function () {
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var checked = (this.props.value != null) ? this.props.value : false;
        var is_checked = (checked) ? 'checked' : '';
        return (
            <Checkbox checked={is_checked} name={name}>
                {label}
            </Checkbox>
        );
    }
});


var BushingParams = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["phase_number", "sealed", "winding", "model", "kw", "current", "fluid_volume",
                "bushing_manufacturer_h1", "bushing_manufacturer_h2", "bushing_manufacturer_h3", "bushing_manufacturer_hn",
                "bushing_manufacturer_x1", "bushing_manufacturer_x2", "bushing_manufacturer_x3", "bushing_manufacturer_xn",
                "bushing_manufacturer_t1", "bushing_manufacturer_t2", "bushing_manufacturer_t3", "bushing_manufacturer_tn",
                "bushing_manufacturer_q1", "bushing_manufacturer_q2", "bushing_manufacturer_q3", "bushing_manufacturer_qn",
                "bushing_type_h", "bushing_type_hn", "bushing_type_x", "bushing_type_xn", "bushing_type_t", "bushing_type_tn",
                "bushing_type_q", "bushing_type_qn", "c1", "c1pf", "c2", "c2pf", "bil"
            ]
        }
    },

    componentDidMount: function () {

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
        if (e.target.type == 'checkbox') {
            state[e.target.name] = e.target.checked;
        } else if (e.target.type == 'select-one') {
            state[e.target.name] = e.target.value;
        } else {
            state[e.target.name] = e.target.value;
        }
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

    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Phase Number" name="phase_number" value={this.state.phase_number}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Frequency" name="frequency" value={this.state.frequency}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Fluid Volume" name="fluid_volume" value={this.state.fluid_volume}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="fluid_type"
                            label="Fluid Type"
                            value={this.state.fluid_type_id}/>
                    </div>
                    <div className="col-md-4">
                        <TextField label="Model" name="model" value={this.state.model}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Winding" name="winding" value={this.state.winding}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Voltage" name="kv" value={this.state.kv}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="C1" name="c1" value={this.state.c1}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="C1PF" name="c1pf" value={this.state.c1pf}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="C2" name="c2" value={this.state.c2}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="C2PF" name="c2pf" value={this.state.c2pf}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Current" name="current" value={this.state.current}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="BIL" name="bil" value={this.state.bil}/>
                    </div>
                    <div className="col-md-1 ">
                        <b>Sealed</b> <CheckBox name="sealed" value={this.state.tank_winding_flag}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField label="Manufac. H1" name="bushing_manufacturer_h1"
                                   value={this.state.bushing_manufacturer_h1}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Manufac. H2" name="bushing_manufacturer_h2"
                                   value={this.state.bushing_manufacturer_h2}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Manufac. H3" name="bushing_manufacturer_h3"
                                   value={this.state.bushing_manufacturer_h3}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Manufac. Hn" name="bushing_manufacturer_hn"
                                   value={this.state.bushing_manufacturer_hn}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField label="Manufac. X1" name="bushing_manufacturer_x1"
                                   value={this.state.bushing_manufacturer_x1}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Manufac. X2" name="bushing_manufacturer_x2"
                                   value={this.state.bushing_manufacturer_x2}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Manufac. X3" name="bushing_manufacturer_x3"
                                   value={this.state.bushing_manufacturer_x3}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Manufac. Xn" name="bushing_manufacturer_xn"
                                   value={this.state.bushing_manufacturer_xn}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField label="Manufac. T1" name="bushing_manufacturer_t1"
                                   value={this.state.bushing_manufacturer_t1}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Manufac. T2" name="bushing_manufacturer_t2"
                                   value={this.state.bushing_manufacturer_t2}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Manufac. T3" name="bushing_manufacturer_t3"
                                   value={this.state.bushing_manufacturer_t3}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Manufac. Tn" name="bushing_manufacturer_tn"
                                   value={this.state.bushing_manufacturer_tn}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField label="Manufac. Q1" name="bushing_manufacturer_q1"
                                   value={this.state.bushing_manufacturer_q1}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Manufac. Q2" name="bushing_manufacturer_q2"
                                   value={this.state.bushing_manufacturer_q2}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Manufac. Q3" name="bushing_manufacturer_q3"
                                   value={this.state.bushing_manufacturer_q3}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Manufac. Qn" name="bushing_manufacturer_qn"
                                   value={this.state.bushing_manufacturer_qn}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField label="Type H" name="bushing_type_h" value={this.state.bushing_type_h}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Type Hn" name="bushing_type_hn" value={this.state.bushing_type_hn}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Type X" name="bushing_type_x" value={this.state.bushing_type_x}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Type Xn" name="bushing_type_xn" value={this.state.bushing_type_xn}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <TextField label="Type T" name="bushing_type_t" value={this.state.bushing_type_t}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Type Tn" name="bushing_type_tn" value={this.state.bushing_type_tn}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Type Q" name="bushing_type_q" value={this.state.bushing_type_q}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Type Qn" name="bushing_type_qn" value={this.state.bushing_type_qn}/>
                    </div>
                </div>
            </div>
        )
    }
});

export default BushingParams;
