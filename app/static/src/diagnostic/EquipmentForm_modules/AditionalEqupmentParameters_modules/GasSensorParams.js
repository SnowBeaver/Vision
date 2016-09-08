import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
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
                        <TextField label="O2" name="o2" value={this.state.o2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="N2" name="n2" value={this.state.n2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="CO" name="co" value={this.state.co}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="C2H2" name="c2h2" value={this.state.c2h2}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField label="CO2" name="co2" value={this.state.co2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="C2H4" name="c2h4" value={this.state.c2h4}/>
                    </div>
                    <div className="col-md-2">
                        <TextField label="C2H6" name="c2h6" value={this.state.c2h6}/>
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

export default GasSensorParams;