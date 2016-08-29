import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import {findDOMNode} from 'react-dom';
import { hashHistory } from 'react-router';
import {Link} from 'react-router';


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
        var data = {};
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }

        return $.ajax({
            url: '/api/v1.0/bushing_test/',
            type: 'POST',
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

    _formGroupClass: function (field) {
        var className = "form-group ";
        if (field) {
            className += " has-error"
        }
        return className;
    },

    render: function () {

        return (
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <h4>Parameters and conditions</h4>
                    <div className="row">
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="H1"
                                             name="h1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="H2"
                                             name="h2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="H3"
                                             name="h3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Hn"
                                             name="hn"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="X1"
                                             name="x1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="X2"
                                             name="x2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="X3"
                                             name="x3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Xn"
                                             name="xn"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="T1"
                                             name="t1"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="T2"
                                             name="t2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="T3"
                                             name="t3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Tn"
                                             name="tn"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="H1C1"
                                             name="h1c1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="H2C1"
                                             name="h2c1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="H3C1"
                                             name="h3c1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="HnC1"
                                             name="hnc1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="X1C1"
                                             name="x1c1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="X2C1"
                                             name="x2c1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="X3C1"
                                             name="x3c1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="XnC1"
                                             name="xnc1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="T1C1"
                                             name="t1c1"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="T2C1"
                                             name="t2c1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="T3C1"
                                             name="t3c1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="TnC1"
                                             name="tnc1"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="H1C2"
                                             name="h1c2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="H2C2"
                                             name="h2c2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="H3C2"
                                             name="h3c2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="HnC2"
                                             name="hnc2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="X1C2"
                                             name="x1c2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="X2C2"
                                             name="x2c2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="X3C2"
                                             name="x3c2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="XnC2"
                                             name="xnc2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="T1C2"
                                             name="t1c2"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="T2C2"
                                             name="t2c2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="T3C2"
                                             name="t3c2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="TnC2"
                                             name="tnc2"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Q1"
                                             name="q1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Q2"
                                             name="q2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Q3"
                                             name="q3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Qn"
                                             name="qn"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Factor 1"
                                             name="facteur"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Factor 2"
                                             name="facteur1"
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Q1C1"
                                             name="q1c1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Q2C1"
                                             name="q2c1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Q3C1"
                                             name="q3c1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="QnC1"
                                             name="qnc1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Factor 3"
                                             name="facteur2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Factor 4"
                                             name="facteur3"
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Q1C2"
                                             name="q1c2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Q2C2"
                                             name="q2c2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Q3C2"
                                             name="q3c2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="QnC2"
                                             name="qnc2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-4 ">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Temperature"
                                             name="temperature"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-4 ">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Humidity"
                                             name="humidity"
                                />
                            </FormGroup>
                        </div>
                    </div>



                    <hr></hr>
                    <h4>Tests</h4>

                    <div className="row">
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV H1"
                                             name="test_kv_h1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV H2"
                                             name="test_kv_h2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV H3"
                                             name="test_kv_h3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV Hn"
                                             name="test_kv_hn"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV X1"
                                             name="test_kv_x1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV X2"
                                             name="test_kv_x2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV X3"
                                             name="test_kv_x3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV Xn"
                                             name="test_kv_xn"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Factor 1"
                                             name="facteurn"
                                />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV T1"
                                             name="test_kv_t1"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV T2"
                                             name="test_kv_t2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV T3"
                                             name="test_kv_t3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV Tn"
                                             name="test_kv_tn"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV Q1"
                                             name="test_kv_q1"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV Q2"
                                             name="test_kv_q2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV Q3"
                                             name="test_kv_q3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV Qn"
                                             name="test_kv_qn"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Factor 2"
                                             name="facteurn1"
                                />
                            </FormGroup>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF H1"
                                             name="test_pfc2_h1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF H2"
                                             name="test_pfc2_h2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF H3"
                                             name="test_pfc2_h3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF Hn"
                                             name="test_pfc2_hn"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF X1"
                                             name="test_pfc2_x1"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF X2"
                                             name="test_pfc2_x2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF X3"
                                             name="test_pfc2_x3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="kV Xn"
                                             name="test_pfc2_xn"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Factor 3"
                                             name="facteurn2"
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF T1"
                                             name="test_pfc2_t1"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF T2"
                                             name="test_pfc2_t2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF T3"
                                             name="test_pfc2_t3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF Tn"
                                             name="test_pfc2_tn"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF Q1"
                                             name="test_pfc2_q1"
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF Q2"
                                             name="test_pfc2_q2"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF Q3"
                                             name="test_pfc2_q3"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-1">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="pF Qn"
                                             name="test_pfc2_qn"
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Factor 4"
                                             name="facteurn3"
                                />
                            </FormGroup>
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