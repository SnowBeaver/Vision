import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var TextField = React.createClass({ 
    render: function () {
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var validationState = (this.props.errors[name]) ? 'error' : null;
        var error = this.props.errors[name];
        return (
            <FormGroup validationState={validationState}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type="text"
                             placeholder={label}
                             name={name}
                             value={value}
                             data-type="float"
                             />
                <HelpBlock className="warning">{error}</HelpBlock>
                <FormControl.Feedback />
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
                'h1', 'h2', 'h3', 'hn', 'x1', 'x2', 'x3', 'xn', 't1', 't2', 't3', 'tn', 'q1', 'q2', 'q3', 'qn',
                'h1c1', 'h2c1', 'h3c1', 'hnc1', 'h1c2', 'h2c2', 'h3c2', 'hnc2',
                'x1c1', 'x1c1', 'x1c1', 'xnc1', 'x1c2', 'x2c2', 'x3c2', 'xnc2',
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
                'facteurn', 'facteur1', 'facteur2', 'facteur3',
                'temperature', 'humidity'
            ]
        }
    },

    _create: function () {
        var fields = this.state.fields;
        var data = {test_result_id: this.props.testResultId};
        var url = '/api/v1.0/' + this.props.tableName + '/';
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }
        if ('id' in this.state) {
            url += this.state['id'];
        }
        return $.authorizedAjax({
                url: url,
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
        // Do not propagate the submit event of the main form
        e.stopPropagation();
        if (!this._validate()){
            NotificationManager.error('Please correct the errors');
            e.stopPropagation();
            return false;
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
        NotificationManager.success('Test values have been saved successfully.');
    },

    _onError: function (data) {

        var message = "Failed to create";
        var res = data.responseJSON;
        if (res.message) {
            message = data.responseJSON.message;
        }
        if (res.error) {
			// We get list of errors
			if (data.status >= 500) {
				message = res.error.join(". ");
			} else if (res.error instanceof Object){
				// We get object of errors with field names as key
				for (var field in res.error) {
					var errorMessage = res.error[field];
					if (Array.isArray(errorMessage)) {
						errorMessage = errorMessage.join(". ");
					}
					res.error[field] = errorMessage;
				}
				this.setState({
					errors: res.error
				});
			} else {
				message = res.error;
			}
		}
        NotificationManager.error(message);
    },
    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.tableName + '/?test_result_id=' + this.props.testResultId;
        this.serverRequest = $.authorizedGet(source, function (result) {
            var res = (result['result']);
            if (res.length > 0) {
                var data = res[0];
                var state = {data: data};
                for (var k in data) {
                    if (data.hasOwnProperty(k)) {
                        state[k] = data[k];
                    }
                }
                this.setState(state);
            }
        }.bind(this), 'json');
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
        var errors = this._validateFieldType(e.target.value, e.target.getAttribute("data-type"));
        state = this._updateFieldErrors(e.target.name, state, errors);
        this.setState(state);
    },

    _validateFieldType: function (value, type){
        var errors = {};
        if (type != undefined && value){
            var typePatterns = {
                "int": /^(-|\+)?(0|[1-9]\d*)$/,
                "float": /^(-|\+?)[0-9]+(\.)?[0-9]*$/
            };
             if (!typePatterns[type].test(value)){
                 errors = "Invalid " + type + " value";
             }
        }
        return errors;
    },

    _updateFieldErrors: function (fieldName, state, errors){
        // Clear existing errors related to the current field as it has been edited
        state.errors = this.state.errors;
        delete state.errors[fieldName];

        // Update errors with new ones, if present
        if (Object.keys(errors).length){
            state.errors[fieldName] = errors
        }
        return state;
    },

    _validate: function () {
        var response = true;
        if (Object.keys(this.state.errors).length > 0){
            response = false;
        }
        return response;
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
                            <TextField label="H1" name="h1" value={this.state.h1} errors={this.state.errors}
                                data-type="float"/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="H2" name="h2" value={this.state.h2} errors={this.state.errors}
                                data-type="float"/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="H3" name="h3" value={this.state.h3} errors={this.state.errors}
                                data-type="float"/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Hn" name="hn" value={this.state.hn} errors={this.state.errors}
                                data-type="float"/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X1" name="x1" value={this.state.x1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X2" name="x2" value={this.state.x2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X3" name="x3" value={this.state.x3} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Xn" name="xn" value={this.state.xn} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T1" name="t1" value={this.state.t1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T2" name="t2" value={this.state.t2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T3" name="t3" value={this.state.t3} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Tn" name="tn" value={this.state.tn} errors={this.state.errors}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="H1C1" name="h1c1" value={this.state.h1c1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="H2C1" name="h2c1" value={this.state.h2c1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="H3C1" name="h3c1" value={this.state.h3c1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="HnC1" name="hnc1" value={this.state.hnc1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X1C1" name="x1c1" value={this.state.x1c1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X2C1" name="x2c1" value={this.state.x2c1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X3C1" name="x3c1" value={this.state.x3c1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="XnC1" name="xnc1" value={this.state.xnc1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T1C1" name="t1c1" value={this.state.t1c1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T2C1" name="t2c1" value={this.state.t2c1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T3C1" name="t3c1" value={this.state.t3c1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="TnC1" name="tnc1" value={this.state.tnc1} errors={this.state.errors}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="H1C2" name="h1c2" value={this.state.h1c2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="H2C2" name="h2c2" value={this.state.h2c2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="H3C2" name="h3c2" value={this.state.h3c2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="HnC2" name="hnc2" value={this.state.hnc2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X1C2" name="x1c2" value={this.state.x1c2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X2C2" name="x2c2" value={this.state.x2c2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="X3C2" name="x3c2" value={this.state.x3c2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="XnC2" name="xnc2" value={this.state.xnc2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T1C2" name="t1c2" value={this.state.t1c2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T2C2" name="t2c2" value={this.state.t2c2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="T3C2" name="t3c2" value={this.state.t3c2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="TnC2" name="tnc2" value={this.state.tnc2} errors={this.state.errors}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="Q1" name="q1" value={this.state.q1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Q2" name="q2" value={this.state.q2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Q3" name="q3" value={this.state.q3} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Qn" name="qn" value={this.state.qn} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor" name="facteur" value={this.state.facteur}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor 1" name="facteur1" value={this.state.facteur1}
                                       errors={this.state.errors}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="Q1C1" name="q1c1" value={this.state.q1c1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Q2C1" name="q2c1" value={this.state.q2c1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Q3C1" name="q3c1" value={this.state.q3c1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="QnC1" name="qnc1" value={this.state.qnc1} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor 2" name="facteur2" value={this.state.facteur2}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor 3" name="facteur3" value={this.state.facteur3}
                                       errors={this.state.errors}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="Q1C2" name="q1c2" value={this.state.q1c2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Q2C2" name="q2c2" value={this.state.q2c2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Q3C2" name="q3c2" value={this.state.q3c2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="QnC2" name="qnc2" value={this.state.qnc2} errors={this.state.errors}/>
                        </div>
                        <div className="col-md-4 ">
                            <TextField label="Temperature" name="temperature" value={this.state.temperature}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-4 ">
                            <TextField label="Humidity" name="humidity" value={this.state.humidity}
                                       errors={this.state.errors}/>
                        </div>
                    </div>

                    <hr></hr>
                    <h4>Tests</h4>

                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="kV H1" name="test_kv_h1" value={this.state.test_kv_h1}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV H2" name="test_kv_h2" value={this.state.test_kv_h2}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV H3" name="test_kv_h3" value={this.state.test_kv_h3}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV Hn" name="test_kv_hn" value={this.state.test_kv_hn}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV X1" name="test_kv_x1" value={this.state.test_kv_x1}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV X2" name="test_kv_x2" value={this.state.test_kv_x2}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV X3" name="test_kv_x3" value={this.state.test_kv_x3}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV Xn" name="test_kv_xn" value={this.state.test_kv_xn}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor n" name="facteurn" value={this.state.facteurn}
                                       errors={this.state.errors}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="kV T1" name="test_kv_t1" value={this.state.test_kv_t1}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV T2" name="test_kv_t2" value={this.state.test_kv_t2}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV T3" name="test_kv_t3" value={this.state.test_kv_t3}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV Tn" name="test_kv_tn" value={this.state.test_kv_tn}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV Q1" name="test_kv_q1" value={this.state.test_kv_q1}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV Q2" name="test_kv_q2" value={this.state.test_kv_q2}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV Q3" name="test_kv_q3" value={this.state.test_kv_q3}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="kV Qn" name="test_kv_qn" value={this.state.test_kv_qn}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor n1" name="facteurn1" value={this.state.facteurn1}
                                       errors={this.state.errors}/>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="Test PFC H1" name="test_pfc2_h1" value={this.state.test_pfc2_h1}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC H2" name="test_pfc2_h2" value={this.state.test_pfc2_h2}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC H3" name="test_pfc2_h3" value={this.state.test_pfc2_h3}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC Hn" name="test_pfc2_hn" value={this.state.test_pfc2_hn}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC X1" name="test_pfc2_x1" value={this.state.test_pfc2_x1}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC X2" name="test_pfc2_x2" value={this.state.test_pfc2_x2}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC X3" name="test_pfc2_x3" value={this.state.test_pfc2_x3}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC Xn" name="test_pfc2_xn" value={this.state.test_pfc2_xn}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor n2" name="facteurn2" value={this.state.facteurn2}
                                       errors={this.state.errors}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <TextField label="Test PFC T1" name="test_pfc2_t1" value={this.state.test_pfc2_t1}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC T2" name="test_pfc2_t2" value={this.state.test_pfc2_t2}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC T3" name="test_pfc2_t3" value={this.state.test_pfc2_t3}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC Tn" name="test_pfc2_tn" value={this.state.test_pfc2_tn}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC Q1" name="test_pfc2_q1" value={this.state.test_pfc2_q1}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC Q2" name="test_pfc2_q2" value={this.state.test_pfc2_q2}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC Q3" name="test_pfc2_q3" value={this.state.test_pfc2_q3}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-1">
                            <TextField label="Test PFC Qn" name="test_pfc2_qn" value={this.state.test_pfc2_qn}
                                       errors={this.state.errors}/>
                        </div>
                        <div className="col-md-4">
                            <TextField label="Factor n3" name="facteurn3" value={this.state.facteurn3}
                                       errors={this.state.errors}/>
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
