import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import Form from 'react-bootstrap/lib/Form';
import Panel from 'react-bootstrap/lib/Panel';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


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
                />
                <FormControl.Feedback />
            </FormGroup>
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


var AirBreakerParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                "phase_number", "sealed", "welded_cover", "current_rating"
            ]
        }
    },

    componentDidMount: function () {
        // var source = '/api/v1.0/' + this.props.tableName + '/?test_result_id=' + this.props.testResultId;
        // this.serverRequest = $.get(source, function (result) {
        //     var res = (result['result']);
        //     if (res.length > 0) {
        //         var fields = this.state.fields;
        //         fields.push('id');
        //         var data = res[0];
        //         var state = {};
        //         for (var i = 0; i < fields.length; i++) {
        //             var key = fields[i];
        //             if (data.hasOwnProperty(key)) {
        //                 state[key] = data[key];
        //             }
        //         }
        //         this.setState(state);
        //     }
        // }.bind(this), 'json');
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

    render: function () {
        console.log('render inside air breaker');
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <TextField label="Phase Number" name="phase_number" value={this.state.phase_number}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Welded Cover" name="welded_cover" value={this.state.welded_cover}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Current Rating" name="current_rating" value={this.state.current_rating}/>
                    </div>
                </div>
            </div>
        )
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
                    <div className="col-md-1">
                        <TextField label="Winding" name="winding" value={this.state.winding}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Voltage" name="kv" value={this.state.kv}/>
                    </div>
                    <div className="col-md-3">
                        <SelectField
                            source="fluid_type"
                            label="Fluid Type"
                            value={this.state.fluid_type_id}/>
                    </div>
                    <div className="col-md-3">
                        <TextField label="Model" name="model" value={this.state.model}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Fluid Volume" name="fluid_volume" value={this.state.fluid_volume}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="C1" name="c1" value={this.state.c1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="C1PF" name="c1pf" value={this.state.c1pf}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="C2" name="c2" value={this.state.c2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="C2PF" name="c2pf" value={this.state.c2pf}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Current" name="current" value={this.state.current}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="BIL" name="bil" value={this.state.bil}/>
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


var CapacitorParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["phase_number", "sealed", "welded_cover", "current_rating", "kv", "kvar", "bil"

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
    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Phase Number" name="phase_number" value={this.state.phase_number}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Welded Cover" name="welded_cover" value={this.state.welded_cover}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Kv" name="kv" value={this.state.kv}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Kvar" name="kvar" value={this.state.kvar}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="BIL" name="bil" value={this.state.bil}/>
                    </div>
                </div>
            </div>
        )
    }
});


var BreakerParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["phase_number", "sealed", "welded_cover", "current_rating", "open", "current_rating"
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

    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <SelectField
                            source="fluid_type"
                            label="Fluid Type"
                            value={this.state.fluid_type_id}/>
                    </div>
                    <div className="col-md-3">
                        <SelectField
                            source="fluid_level"
                            label="Fluid Level"
                            value={this.state.fluid_level_id}/>
                    </div>
                    <div className="col-md-3">
                        <SelectField
                            source="interruping_medium"
                            label="Interruping Medium"
                            value={this.state.interruping_medium_id}/>
                    </div>
                    <div className="col-md-3">
                        <SelectField
                            source="breaker_mechanism"
                            label="Breaker Mechanism"
                            value={this.state.breaker_mechanism_id}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Phase Number" name="phase_number" value={this.state.phase_number}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Welded Cover" name="welded_cover" value={this.state.welded_cover}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Open" name="open" value={this.state.kv}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Current Rating" name="current_rating" value={this.state.kvar}/>
                    </div>
                </div>
            </div>

        )
    }
});


var PowerSourceParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["phase_number", "sealed", "welded_cover", "kv", "threephase"
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

    render: function () {
        return (
            <div className="row">
                <div className="col-md-2">
                    <TextField label="Phase Number" name="phase_number" value={this.state.phase_number}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Welded Cover" name="welded_cover" value={this.state.welded_cover}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Kv" name="kv" value={this.state.kv}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Three Phase" name="threephase" value={this.state.threephase}/>
                </div>
            </div>
        )
    }
});


var CableParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["phase_number", "sealed", "model", "threephase"

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

    render: function () {
        return (
            <div className="row">
                <div className="col-md-3">
                    <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                </div>
                <div className="col-md-5">
                    <TextField label="Model" name="model" value={this.state.model}/>
                </div>
                <div className="col-md-3">
                    <TextField label="Three Phase" name="threephase" value={this.state.threephase}/>
                </div>
            </div>
        )
    }
});


var SwitchGearParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["phase_number", "sealed", "model", "welded_cover", "current_rating", "threephase"

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


    render: function () {
        return (
            <div className="row">
                <div className="col-md-3">
                    <SelectField
                        source="insulation"
                        label="Insulation Type"
                        value={this.state.insulation_id}/>
                </div>
                <div className="col-md-3">
                    <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                </div>
                <div className="col-md-3">
                    <TextField label="Welded Cover" name="welded_cover" value={this.state.welded_cover}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Current Rating" name="current_rating" value={this.state.current_rating}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Three Phase" name="threephase" value={this.state.threephase}/>
                </div>
            </div>
        )
    }
});


var InductionMachineParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["phase_number", "sealed", "model", "welded_cover", "current_rating", "threephase",
                "hp", "kva", "pf"

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

    render: function () {
        return (
            <div className="row">
                <div className="col-md-2">
                    <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Welded Cover" name="welded_cover" value={this.state.welded_cover}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Current Rating" name="current_rating" value={this.state.current_rating}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Hp" name="hp" value={this.state.hp}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Kva" name="kva" value={this.state.kva}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Pf" name="pf" value={this.state.pf}/>
                </div>
            </div>
        )
    }
});


var SyncroMachineParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["phase_number", "sealed", "model", "welded_cover", "current_rating", "hp", "kw"
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

    render: function () {
        return (
            <div className="row">
                <div className="col-md-2">
                    <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Welded Cover" name="welded_cover" value={this.state.welded_cover}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Current Rating" name="current_rating" value={this.state.current_rating}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Hp" name="hp" value={this.state.hp}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Kw" name="kw" value={this.state.kw}/>
                </div>
            </div>

        )
    }
});


var TapChangerParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["phase_number", "sealed", "model", "welded_cover", "current_rating", "hp", "kw"
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


    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <SelectField
                            source="fluid_type"
                            label="Fluid Type"
                            value={this.state.fluid_type_id}/>
                    </div>
                    <div className="col-md-3">
                        <SelectField
                            source="fluid_level"
                            label="Fluid Level"
                            value={this.state.fluid_level_id}/>
                    </div>
                    <div className="col-md-3">
                        <SelectField
                            source="interruping_medium"
                            label="Interruping Medium"
                            value={this.state.interruping_medium_id}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                    </div>

                    <div className="col-md-2">
                        <TextField label="Welded Cover" name="welded_cover" value={this.state.welded_cover}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Current Rating" name="current_rating" value={this.state.current_rating}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Hp" name="hp" value={this.state.hp}/>
                    </div>
                    <div className="col-md-4">
                        <TextField label="Kw" name="kw" value={this.state.kw}/>
                    </div>
                </div>
            </div>
        )
    }
});


var RectifierParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["phase_number", "sealed", "model", "welded_cover", "fluid_volume", "cooling_rating"
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

    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <SelectField
                            source="fluid_type"
                            label="Fluid Type"
                            value={this.state.fluid_type_id}/>
                    </div>
                    <div className="col-md-4">
                        <SelectField
                            source="fluid_level"
                            label="Fluid Level"
                            value={this.state.fluid_level_id}/>
                    </div>
                    <div className="col-md-4">
                        <SelectField
                            source="gas_sensor"
                            label="Gas Sensor"
                            value={this.state.gas_sensor}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                    </div>

                    <div className="col-md-2">
                        <TextField label="Welded Cover" name="welded_cover" value={this.state.welded_cover}/>
                    </div>

                    <div className="col-md-2">
                        <TextField label="Fluid Volume" name="fluid_volume" value={this.state.fluid_volume}/>
                    </div>

                    <div className="col-md-2">
                        <TextField label="Cooling Rating" name="cooling_rating" value={this.state.cooling_rating}/>
                    </div>
                </div>
            </div>
        )
    }
});


var TransformerParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            isVisible: false,
            fields: ["phase_number", "sealed", "model", "welded_cover", "fluid_volume", "cooling_rating"
            ]
        }
    },

    componentDidMount: function () {
    },

    setVisible: function () {
        // var source = '/api/v1.0/' + this.props.tableName + '/?test_result_id=' + this.props.testResultId;
        // this.serverRequest = $.get(source, function (result) {
        //     var res = (result['result']);
        //     if (res.length > 0) {
        //         var fields = this.state.fields;
        //         fields.push('id');
        //         var data = res[0];
        //         var state = {};
        //         for (var i = 0; i < fields.length; i++) {
        //             var key = fields[i];
        //             if (data.hasOwnProperty(key)) {
        //                 state[key] = data[key];
        //             }
        //         }
        //         this.setState(state);
        //     }
        // }.bind(this), 'json');

        this.setState({
            isVisible: true
        })
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


    render: function () {
        console.log("transformer is invoked");
        if (!this.state.isVisible) {

            return null;
        }

        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <SelectField
                            source="gas_sensor"
                            label="Gas Sensor"
                            value={this.state.gas_sensor}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Windings" name="windings" value={this.state.windings}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Phase Number" name="phase_number" value={this.state.phase_number}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Fluid Volume" name="fluid_volume" value={this.state.fluid_volume}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Welded Cover" name="welded_cover" value={this.state.welded_cover}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Primary Tension" name="primary_tension" value={this.state.primary_tension}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Secondary Tension" name="secondary_tension"
                                   value={this.state.secondary_tension}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Tertiary Tension" name="tertiary_tension"
                                   value={this.state.tertiary_tension}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Based Power" name="based_transformerp_ower"
                                   value={this.state.based_transformerp_ower}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="First Cooling Stage Power" name="first_cooling_stage_power"
                                   value={this.state.first_cooling_stage_power}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Second Cooling Stage Power" name="second_cooling_stage_power"
                                   value={this.state.second_cooling_stage_power}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Autotransformer" name="autotransformer" value={this.state.autotransformer}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Primary Winding Connection" name="primary_winding_connection"
                                   value={this.state.primary_winding_connection}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Secondary Winding Connection" name="secondary_winding_connection"
                                   value={this.state.secondary_winding_connection}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Tertiary Winding Connection" name="tertiary_winding_connection"
                                   value={this.state.tertiary_winding_connection}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Winding Metal" name="winding_metal" value={this.state.winding_metal}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Bushing Neutral 1" name="bushing_neutral1"
                                   value={this.state.bushing_neutral1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Bushing Neutral 2" name="bushing_neutral2"
                                   value={this.state.bushing_neutral2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Bushing Neutral 3" name="bushing_neutral3"
                                   value={this.state.bushing_neutral3}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Bushing Neutral 4" name="bushing_neutral4"
                                   value={this.state.bushing_neutral4}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Temperature Rise" name="temperature_rise"
                                   value={this.state.temperature_rise}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Quaternary Winding Connection" name="quaternary_winding_connection"
                                   value={this.state.quaternary_winding_connection}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Ltc 1" name="ltc1" value={this.state.ltc1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Ltc 2" name="ltc2" value={this.state.ltc2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Ltc 3" name="ltc3" value={this.state.ltc3}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Impedance 1" name="impedance1" value={this.state.impedance1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Impedance 2" name="impedance2" value={this.state.static_shield2}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Base Impedance 1" name="imp_base1" value={this.state.imp_base1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Base Impedance 2" name="imp_base2" value={this.state.imp_base2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Mva Forced 11" name="mvaforced11" value={this.state.mvaforced11}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Mva Forced 12" name="mvaforced12" value={this.state.mvaforced12}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Mva Forced 13" name="mvaforced13" value={this.state.mvaforced13}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Mva Forced 14" name="mvaforced14" value={this.state.mvaforced14}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Mva Forced 21" name="mvaforced21" value={this.state.mvaforced21}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Mva Forced 22" name="mvaforced22" value={this.state.mvaforced22}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Mva Forced 23" name="mvaforced23" value={this.state.mvaforced23}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Mva Forced 24" name="mvaforced24" value={this.state.mvaforced24}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Cooling Rating" name="cooling_rating" value={this.state.cooling_rating}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Three Phase" name="threephase" value={this.state.threephase}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <TextField label="Ratio Tag 1" name="ratio_tag1" value={this.state.ratio_tag1}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Ratio Tag 2" name="ratio_tag2" value={this.state.ratio_tag2}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Ratio Tag 3" name="ratio_tag3" value={this.state.ratio_tag3}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Ratio Tag 4" name="ratio_tag4" value={this.state.ratio_tag4}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Ratio Tag 5" name="ratio_tag5" value={this.state.ratio_tag5}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Ratio Tag 6" name="ratio_tag6" value={this.state.ratio_tag6}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Ratio Tag 7" name="ratio_tag7" value={this.state.ratio_tag7}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Ratio Tag 8" name="ratiot_ag8" value={this.state.ratiot_ag8}/>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-2">
                        <SelectField
                            source="bushing_serial1"
                            label="Bushing Serial 1"
                            value={this.state.bushing_serial1}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="bushing_serial2"
                            label="Bushing Serial 2"
                            value={this.state.bushing_serial2}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="bushing_serial3"
                            label="Bushing Serial 3"
                            value={this.state.bushing_serial3}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="bushing_serial4"
                            label="Bushing Serial 4"
                            value={this.state.bushing_serial4}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="bushing_serial5"
                            label="Bushing Serial 5"
                            value={this.state.bushing_serial5}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="bushing_serial6"
                            label="Bushing Serial 1"
                            value={this.state.bushing_serial6}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <SelectField
                            source="bushing_serial7"
                            label="Bushing Serial 7"
                            value={this.state.bushing_serial7}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="bushing_serial8"
                            label="Bushing Serial 8"
                            value={this.state.bushing_serial8}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="bushing_serial9"
                            label="Bushing Serial 9"
                            value={this.state.bushing_serial9}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="bushing_serial10"
                            label="Bushing Serial 10"
                            value={this.state.bushing_serial10}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="bushing_serial11"
                            label="Bushing Serial 11"
                            value={this.state.bushing_serial11}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="bushing_serial12"
                            label="Bushing Serial 12"
                            value={this.state.bushing_serial12}/>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-1">
                        <TextField label="Mva Actual" name="mvaactual" value={this.state.mvaactual}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Mvar Actual" name="mvaractual" value={this.state.mvaractual}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Reserve Mw" name="mwreserve" value={this.state.mwreserve}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Reserve Mva" name="mvareserve" value={this.state.mvareserve}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Ultime Mw" name="mwultime" value={this.state.mwultime}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Ultime Mvar" name="mvarultime" value={this.state.mvarultime}/>
                    </div>
                    <div className="col-md-1">
                        <SelectField
                            source="fluid_level"
                            label="Fluid Level"
                            value={this.state.fluid_level_id}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <TextField label="BIL 1" name="bil1" value={this.state.bil1}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="BIL 2" name="bil2" value={this.state.bil2}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="BIL 3" name="bil3" value={this.state.bil3}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="BIL 3" name="bil4" value={this.state.bil4}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Mva 1" name="mva1" value={this.state.mva1}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Mva 2" name="mva2" value={this.state.mva2}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Mva 3" name="mva3" value={this.state.mva3}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Mva 4" name="mva4" value={this.state.mva4}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField label="Reserve Mw" name="mwreserve" value={this.state.mwreserve}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Reserve Mva" name="mvareserve" value={this.state.mvareserve}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Ultime Mw" name="mwultime" value={this.state.mwultime}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Ultime Mvar" name="mvarultime" value={this.state.mvarultime}/>
                    </div>
                    <div className="col-md-2">
                        <SelectField
                            source="fluid_level"
                            label="Fluid Level"
                            value={this.state.fluid_level_id}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <TextField label="Formula Ratio 1" name="formula_ratio1" value={this.state.formula_ratio1}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Formula Ratio 2" name="formula_ratio2" value={this.state.formula_ratio2}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Formula Ratio 3" name="formula_ratio3" value={this.state.formula_ratio3}/>
                    </div>
                </div>

            </div>
        )
    }
});


var TankParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["sealed", "welded_cover"]
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

    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <SelectField
                            source="fluid_type"
                            label="Fluid Type"
                            value={this.state.fluid_type_id}/>
                    </div>
                    <div className="col-md-4">
                        <SelectField
                            source="fluid_level"
                            label="Fluid Level"
                            value={this.state.fluid_level_id}/>
                    </div>
                    <div className="col-md-4">
                        <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                    </div>
                    <div className="col-md-4">
                        <TextField label="Welded Cover" name="welded_cover" value={this.state.welded_cover}/>
                    </div>
                </div>
            </div>
        )
    }
});


var SwitchParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["sealed", "welded_cover", "threephase", "current_rating"]
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

    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <SelectField
                            source="interrupting_medium"
                            label="Interrupting Medium"
                            value={this.state.interrupting_medium_id}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Welded Cover" name="welded_cover" value={this.state.welded_cover}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="three Phase" name="threephase" value={this.state.threephase}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="Current Rating" name="current_rating" value={this.state.current_rating}/>
                    </div>
                </div>
            </div>
        )
    }
});


var InductanceParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["sealed", "welded_cover", "winding", "fluid_volume", "cooling_rating"]
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

    render: function () {
        return (
            <div className="row">
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
                <div className="col-md-2">
                    <TextField label="Sealed" name="sealed" value={this.state.sealed}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Winding" name="winding" value={this.state.winding}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Welded Cover" name="welded_cover" value={this.state.welded_cover}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Fluid Volume" name="fluid_volume" value={this.state.fluid_volume}/>
                </div>
                <div className="col-md-2">
                    <TextField label="Cooling Rating" name="cooling_rating" value={this.state.cooling_rating}/>
                </div>
            </div>
        )
    }
});


var GasSensorParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ["sealed", "welded_cover", "winding", "fluid_volume", "cooling_rating", "h2",
                "c2h2", "c2h4", "c2h6", "co", "co2", "o2", "n2", "ppm_error", "percent_error", "model"
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

    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField label="H2" name="h2" value={this.state.h2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="CH4" name="welded_cover" value={this.state.ch4}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="C2H2" name="c2h2" value={this.state.c2h2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="C2H4" name="c2h4" value={this.state.c2h4}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="C2H6" name="c2h6" value={this.state.c2h6}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="CO" name="co" value={this.state.co}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField label="CO2" name="co2" value={this.state.co2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="O2" name="o2" value={this.state.o2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="N2" name="n2" value={this.state.n2}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Error(ppm)" name="ppm_error" value={this.state.ppm_error}/>
                    </div>
                    <div className="col-md-1">
                        <TextField label="Error(%)" name="percent_error" value={this.state.percent_error}/>
                    </div>
                    <div className="col-md-4">
                        <TextField label="Model" name="model" value={this.state.model}/>
                    </div>
                </div>
            </div>
        )
    }
});

//module.exports = AirBreakerParams ;
//module.exports =  BushingParams ;
// export default CapacitorParams ;
// export default BreakerParams ;
// export default PowerSourceParams ;
// export default CableParams ;
// export default SwitchGearParams ;
// export default InductionMachineParams ;
// export default SyncroMachineParams ;
// export default TapChangerParams ;
// export default RectifierParams ;
//
// export default TankParams ;
// export default SwitchParams ;
// export default GasSensorParams ;
// export default InductanceParams ;
export default TransformerParams;