import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Panel from 'react-bootstrap/lib/Panel';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import {findDOMNode} from 'react-dom';
import Radio from 'react-bootstrap/lib/Radio';


var TestProfileSelectField = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true
        };
    },

    handleChange: function (event) {
        // console.log(event.target.name);
        // console.log(event.target.value);
        this.setState({
            value: event.target.value
        });
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {
            this.setState({
                items: result['result']
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
        var options = [];
        for (var key in this.state.items) {
            var index = Math.random() + '_'+ this.state.items[key].id;
            options.push(<option key={index} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <FormGroup>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    value={this.state.value}
                    onChange={this.handleChange}
                    name="test_prof">
                    <option value="select">Choose profile from saved</option>
                    {options}
                </FormControl>
            </FormGroup>
        )
    }
});



const ElectricalProfileForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {}
        }
    },
    _create: function () {

        return $.ajax({
            url: '/api/v1.0/electrical_profile/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
                'bushing': this.state.bushing,
                'insulation': this.state.insulation,
                'degree': this.state.degree,
                'winding': this.state.winding,
                'visual': this.state.visual,
                'turns': this.state.turns,
                'insulation_pf': this.state.insulation_pf,
                'resistance': this.state.resistance,
                'selection': this.state.selection,
                // 'description': this.state.description, not defined
            }),
            success: function (data, textStatus) { },
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })
    },
    _onSubmit: function (e) {
        e.preventDefault();
        // var errors = this._validate();
        // if(Object.keys(errors).length != 0) {
        //   this.setState({
        //     errors: errors
        //   });
        //    return;
        // }
        var xhr = this._create();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },
    hideLoading: function () {
        this.setState({loading: false});
    },
    _onSuccess: function (data) { 
        this.setState(this.getInitialState());
        alert('Profile saved successfully');
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
        var state = {};
        if (e.target.type == 'checkbox') {
            state[e.target.name] = e.target.checked;
        } else if ( e.target.type == 'select-one' ) {
            state[e.target.name] = e.target.value;
        } else {
            state[e.target.name] = $.trim(e.target.value);
        }
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
    

    render:function (){
        return( 
            <div className="form-container">
                <form className="" method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div className="maxwidth">
                        <Panel header="Electrical profile test parametres">
                            <div className="row">
                                <FormGroup>
                                    Choose from saved <TestProfileSelectField source="/api/v1.0/electrical_profile"/>
                                </FormGroup>
                            </div>

                            <div className="scheduler-border">
                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border">Test requested</legend>
                                    <div className="control-group">
                                        <div className="maxwidth">
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox name="bushing">Bushing Cap and PF</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox name="insulation">Insulation Resistance</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding">
                                                <Checkbox name="degree">Degree of Polymerization(DP)</Checkbox>
                                            </div>
                                        </div>
                                        <div className="maxwidth">
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox name="winding">Winding Cap an PF</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox name="visual">Visual Inspection</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding">
                                                <Checkbox name="turns">Turns Ration Test (TTR)</Checkbox>
                                            </div>
                                        </div>
                                        <div className="maxwidth">
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox name="insulation_pf">Winding Cap and PF Doble</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox name="resistance">Resistance; winding/contact</Checkbox>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="row">
                                    <div className="col-md-1">
                                        <div>Save As</div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="row">
                                            <FormGroup>
                                                <FormControl type="text"
                                                             placeholder="electrical profile name"
                                                             name="selection"/>
                                            </FormGroup>
                                        </div>
                                        <div className="row">
                                            <Radio name="shared" value="1" inline={true}>
                                                Global
                                            </Radio>
                                            <Radio name="shared" value="0" inline={true}>
                                                Private
                                            </Radio>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <FormGroup controlId="commentsTextarea">
                                            <FormControl componentClass="textarea" placeholder="comments" ref="comments"/>
                                        </FormGroup>
                                    </div>
                                </div> 
                                <div className="row">
                                    <div className="col-md-12">
                                        <Button bsStyle="success" type="submit" className="pull-right">Save</Button>
                                        <Button bsStyle="danger" 
                                                onClick={this.props.handleClose} 
                                                className="pull-right margin-right-xs">Cancel</Button>
                                    </div>
                                </div>

                            </div>
                        </Panel>
                    </div>
                </form>
            </div>
        );
    }
});

export default ElectricalProfileForm;