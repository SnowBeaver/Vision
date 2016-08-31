import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import {findDOMNode} from 'react-dom';
import { hashHistory } from 'react-router';
import {Link} from 'react-router';

const TextField = React.createClass({
    render: function() {
        var value = (this.props.value != null) ? this.props.value: "";
        var label = (this.props.label != null) ? this.props.label: "";
        var name = (this.props.name != null) ? this.props.name: "";
        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type="text"
                             placeholder={label}
                             name={name}
                             defaultValue={value}
                             />
            </FormGroup>
        );
    }
});

var NewBushingTestForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'h1','h2','h3','hn','x1','x2','x3','xn','t1','t2','t3','tn','q1','q2','q3','qn',
                'h1c1','h2c1', 'h3c1', 'hnc1', 'h1c2', 'h2c2', 'h3c2', 'hnc2',
                'x1c1', 'x1c1','x1c1','xnc1', 'x1c2', 'x2c2', 'x3c2', 'xnc2',
                'q1c1', 'q2c1', 'q3c1', 'qnc1', 'q1c2', 'q2c2', 'q3c2', 'qnc2',
                'test_kv_h1', 'test_kv_h2', 'test_kv_h3', 'test_kv_hn',
                'test_kv_x1', 'test_kv_x2', 'test_kv_x3', 'test_kv_xn',
                'test_kv_t1', 'test_kv_t2', 'test_kv_t3', 'test_kv_tn',
                'test_kv_q1', 'test_kv_q2', 'test_kv_q3', 'test_kv_qn',
                'test_pfc2_h1', 'test_pfc2_h2', 'test_pfc2_h3', 'test_pfc2_hn',
                'test_pfc2_x1', 'test_pfc2_x2', 'test_pfc2_x3', 'test_pfc2_xn',
                'test_pfc2_t1', 'test_pfc2_t2', 'test_pfc2_t3', 'test_pfc2_tn',
                'test_pfc2_q1', 'test_pfc2_q2', 'test_pfc2_q3', 'test_pfc2_qn',
                'facteur', 'facteur1', 'facteur2', 'facteur3',
                'facteurn','facteur1','facteur2','facteur3',
                'temperature', 'humidity'
            ]
        }
    },

    _create: function () {
        var fields = this.state.fields;
        var data = {test_result_id: this.props.testResultId};
        var url = '/api/v1.0/bushing_test/';
        var type = 'POST'
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }
        if (this.state.data != null && ('id' in this.state.data)) {
            url += this.state.data['id'];
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
    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.tableName + '/?test_result_id=' + this.props.testResultId;
        this.serverRequest = $.get(source, function (result) {
            var res = (result['result']);
            if (res.length > 0) { this.setState({data: res[0]}); }
        }.bind(this), 'json');
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

    _formGroupClass: function (field) {
        var className = "form-group ";
        if (field) {
            className += " has-error"
        }
        return className;
    },

    render: function () {
        if (this.state.data == null) { return (<div></div>);}
        return (
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <h4>Parameters and conditions</h4>
                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="H1" name="h1" value={this.state.data.h1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="H2" name="h2" value={this.state.data.h2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="H3" name="h3" value={this.state.data.h3}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Hn" name="hn" value={this.state.data.hn}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X1" name="x1" value={this.state.data.x1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X2" name="x2" value={this.state.data.x2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X3" name="x3" value={this.state.data.x3}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Xn" name="xn" value={this.state.data.xn}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T1" name="t1" value={this.state.data.t1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T2" name="t2" value={this.state.data.t2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T3" name="t3" value={this.state.data.t3}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Tn" name="tn" value={this.state.data.tn}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="H1C1" name="h1c1" value={this.state.data.h1c1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="H2C1" name="h2c1" value={this.state.data.h2c1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="H3C1" name="h3c1" value={this.state.data.h3c1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="HnC1" name="hnc1" value={this.state.data.hnc1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X1C1" name="x1c1" value={this.state.data.x1c1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X2C1" name="x2c1" value={this.state.data.x2c1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X3C1" name="x3c1" value={this.state.data.x3c1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="XnC1" name="xnc1" value={this.state.data.xnc1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T1C1" name="t1c1" value={this.state.data.t1c1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T2C1" name="t2c1" value={this.state.data.t2c1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T3C1" name="t3c1" value={this.state.data.t3c1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="TnC1" name="tnc1" value={this.state.data.tnc1}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="H1C2" name="h1c2" value={this.state.data.h1c2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="H2C2" name="h2c2" value={this.state.data.h2c2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="H3C2" name="h3c2" value={this.state.data.h3c2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="HnC2" name="hnc2" value={this.state.data.hnc2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X1C2" name="x1c2" value={this.state.data.x1c2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X2C2" name="x2c2" value={this.state.data.x2c2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X3C2" name="x3c2" value={this.state.data.x3c2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="XnC2" name="xnc2" value={this.state.data.xnc2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T1C2" name="t1c2" value={this.state.data.t1c2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T2C2" name="t2c2" value={this.state.data.t2c2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T3C2" name="t3c2" value={this.state.data.t3c2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="TnC2" name="tnc2" value={this.state.data.tnc2}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="Q1" name="q1" value={this.state.data.q1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Q2" name="q2" value={this.state.data.q2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Q3" name="q3" value={this.state.data.q3}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Qn" name="qn" value={this.state.data.qn}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor" name="facteur" value={this.state.data.facteur}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor 1" name="facteur1" value={this.state.data.facteur1}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="Q1C1" name="q1c1" value={this.state.data.q1c1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Q2C1" name="q2c1" value={this.state.data.q2c1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Q3C1" name="q3c1" value={this.state.data.q3c1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="QnC1" name="qnc1" value={this.state.data.qnc1}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor 2" name="facteur2" value={this.state.data.facteur2}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor 3" name="facteur3" value={this.state.data.facteur3}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="Q1C2" name="q1c2" value={this.state.data.q1c2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Q2C2" name="q2c2" value={this.state.data.q2c2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Q3C2" name="q3c2" value={this.state.data.q3c2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="QnC2" name="qnc2" value={this.state.data.qnc2}/>
                        </div>
                        <div className="col-md-4 ">
                            <TextField label="Temperature" name="temperature" value={this.state.data.temperature}/>
                        </div>
                        <div className="col-md-4 ">
                            <TextField label="Humidity" name="humidity" value={this.state.data.humidity}/>
                        </div>
                    </div>

                    <hr></hr>
                    <h4>Tests</h4>

                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="kV H1" name="test_kv_h1" value={this.state.data.test_kv_h1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV H2" name="test_kv_h2" value={this.state.data.test_kv_h2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV H3" name="test_kv_h3" value={this.state.data.test_kv_h3}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV Hn" name="test_kv_hn" value={this.state.data.test_kv_hn}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV X1" name="test_kv_x1" value={this.state.data.test_kv_x1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV X2" name="test_kv_x2" value={this.state.data.test_kv_x2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV X3" name="test_kv_x3" value={this.state.data.test_kv_x3}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV Xn" name="test_kv_xn" value={this.state.data.test_kv_xn}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor n" name="facteurn" value={this.state.data.facteurn}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="kV T1" name="test_kv_t1" value={this.state.data.test_kv_t1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV T2" name="test_kv_t2" value={this.state.data.test_kv_t2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV T3" name="test_kv_t3" value={this.state.data.test_kv_t3}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV Tn" name="test_kv_tn" value={this.state.data.test_kv_tn}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV Q1" name="test_kv_q1" value={this.state.data.test_kv_q1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV Q2" name="test_kv_q2" value={this.state.data.test_kv_q2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV Q3" name="test_kv_q3" value={this.state.data.test_kv_q3}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV Qn" name="test_kv_qn" value={this.state.data.test_kv_qn}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor n1" name="facteurn1" value={this.state.data.facteurn1}/>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="Test PFC H1" name="test_pfc2_h1" value={this.state.data.test_pfc2_h1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC H2" name="test_pfc2_h2" value={this.state.data.test_pfc2_h2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC H3" name="test_pfc2_h3" value={this.state.data.test_pfc2_h3}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC Hn" name="test_pfc2_hn" value={this.state.data.test_pfc2_hn}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC X1" name="test_pfc2_x1" value={this.state.data.test_pfc2_x1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC X2" name="test_pfc2_x2" value={this.state.data.test_pfc2_x2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC X3" name="test_pfc2_x3" value={this.state.data.test_pfc2_x3}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC Xn" name="test_pfc2_xn" value={this.state.data.test_pfc2_xn}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor n2" name="facteurn2" value={this.state.data.facteurn2}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="Test PFC T1" name="test_pfc2_t1" value={this.state.data.test_pfc2_t1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC T2" name="test_pfc2_t2" value={this.state.data.test_pfc2_t2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC T3" name="test_pfc2_t3" value={this.state.data.test_pfc2_t3}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC Tn" name="test_pfc2_tn" value={this.state.data.test_pfc2_tn}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC Q1" name="test_pfc2_q1" value={this.state.data.test_pfc2_q1}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC Q2" name="test_pfc2_q2" value={this.state.data.test_pfc2_q2}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC Q3" name="test_pfc2_q3" value={this.state.data.test_pfc2_q3}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC Qn" name="test_pfc2_qn" value={this.state.data.test_pfc2_qn}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor n3" name="facteurn3" value={this.state.data.facteurn3}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 ">
                            <Button bsStyle="success"
                                    className="pull-right"
                                    type="submit">Save</Button>
                            &nbsp;
                            <Button bsStyle="danger"
                                    className="pull-right margin-right-xs"
                                    onClick={this.props.handleClose}
                            >Cancel</Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});


export default NewBushingTestForm;
