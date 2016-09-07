import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Panel from 'react-bootstrap/lib/Panel';
import {findDOMNode} from 'react-dom';
import { hashHistory } from 'react-router';
import {Link} from 'react-router';


const TextField = React.createClass({
    render: function() {
        var label = (this.props.label != null) ? this.props.label: "";
        var name = (this.props.name != null) ? this.props.name: "";
        var value = (this.props.value != null) ? this.props.value: "";
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

const CheckBox = React.createClass({
    render: function () {
        var name = (this.props.name != null) ? this.props.name: "";
        var checked = (this.props.value != null) ? this.props.value: false;
        if (checked) {
            return (
                <Checkbox checked name={name}>
                    <span className="glyphicon glyphicon-menu-left">
                    </span>
                </Checkbox>
            );
        }
        else {
            return (
                <Checkbox name={name}>
                    <span className="glyphicon glyphicon-menu-left" >
                    </span>
                </Checkbox>
            );
        }
    }

});

var SelectField = React.createClass({
    handleChange: function(event, index, value){
        console.log("Handle change");
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
    isVisible: function(){
        return this.state.isVisible;
    },
    componentDidMount: function(){
        var source = '/api/v1.0/' + this.props.source + '/';
        this.serverRequest = $.get(source, function (result){
            this.setState({ items: (result['result']) });
        }.bind(this), 'json');
    },
    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    setVisible: function(){
        this.state.isVisible = true;
    },
    render: function() {
        var label = (this.props.label != null) ? this.props.label: "";
        var name = (this.props.name != null) ? this.props.name: "";
        var value = (this.props.value != null) ? this.props.value: "";
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
                             name={name}
                             value={value}
                             >
                    {menuItems}
                    <FormControl.Feedback />
                </FormControl>
            </FormGroup>
        );
    }
});

var NewInhibitorTestForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                'inhibitor',
                'inhibitor_flag',
                'inhibitor_type_id',
                'remark'
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
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }
        if ('id' in this.state) {
            url += this.state['id'];
        }
        return $.ajax({
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
       }
       else if (e.target.type == 'radio') {
           state[e.target.name] = e.target.value;
       }
       else if (e.target.type == 'select-one') {
           state[e.target.name] = e.target.value;
       }
       else {
           state[e.target.name] = $.trim(e.target.value);
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
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-xs-1 ">
                                    <CheckBox name="inhibitor_flag" value={this.state.inhibitor_flag}/>
                                </div>
                                <div className="col-xs-6">
                                    <TextField label="Inhibitor" name="inhibitor" value={this.state.inhibitor}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-7">
                                    <SelectField label="Inhibitor Type"
                                                 name="inhibitor_type_id"
                                                 value={this.state.inhibitor_type_id}
                                                 source="inhibitor_type"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-7">
                                    <FormGroup>
                                        <FormControl componentClass="textarea"
                                                     placeholder="Remark"
                                                     name="remark"
                                                     value={this.state.remark}
                                        />
                                        <FormControl.Feedback />
                                    </FormGroup>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <Panel header="Calculation of inhibitor quantity to add to the transformer">
                                <TextField label="Final inhibitor concentration(ppm)" name="" value=""/>
                                <TextField label="Aditive mixture concetration(% v/v)" name="" value=""/>
                                <TextField label="Required quantity of additive(liters)" disabled name="" value=""/>
                                <TextField label="Required dry crystal weight(kg)" disabled name="" value=""/>
                                <TextField label="Equipment oil volume(liters)" disabled name="" value=""/>
                            </Panel>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 ">
                            <Button bsStyle="success"
                                    className="pull-right"
                                    onClick={this.props.handleClose}
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

export default NewInhibitorTestForm;
