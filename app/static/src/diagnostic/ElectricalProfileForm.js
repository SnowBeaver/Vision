import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Panel from 'react-bootstrap/lib/Panel';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import {findDOMNode} from 'react-dom';
import Radio from 'react-bootstrap/lib/Radio';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var TestProfileSelectField = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true
        };
    },

    handleChange: function (event) {
        this.setState({
            value: event.target.value
        });
        this.loadProfileData(event);
    },

    loadProfileData: function (event) {

        if ('select' == event.target.value) {

            this.setState({
                saved_profile: null
            });

            this.props.fillUpForm();

        } else {

            this.serverRequest = $.get('/api/v1.0/electrical_profile/' + event.target.value, function (result) {
                this.setState({
                    saved_profile: result['result']
                });
                this.props.fillUpForm(this.state.saved_profile);
            }.bind(this), 'json');
        }
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
            var index = Math.random() + '_' + this.state.items[key].id;
            options.push(<option key={index}
                                 value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
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
            errors: {},
            data: {},
            fields: [
                'bushing',
                'insulation',
                'degree',
                'winding',
                'visual',
                'turns',
                'insulation_pf',
                'resistance',
                'selection',
                'shared',
                'name',
                'description'
            ]
        }
    },

    componentDidMount: function () {
        //test_result_id
    },

    fillUpForm: function (saved_data) {

        if (null == saved_data) {
            this.refs.electrical_profile.reset();
        } else {
            this.setState({
                data: saved_data
            });
        }
    },

    _save: function () {
        var fields = this.state.fields;
        var data = {};
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }
        data['campaign_id'] = this.props.data.campaign_id;
        data['equipment_id'] = this.props.data.equipment_id;

        if (this.state.name != '' && (typeof this.state.name != 'undefined')) {
            var url = '/api/v1.0/electrical_profile/';
            if (this.state.data.electrical_profile_id) {
                url = url + this.state.data.electrical_profile_id;
            }
            // if profile name is not empty and radio is checked then use this url to save profile
            // and save to test_result
            // otherwise just use these values for saving test_result
            $.ajax({
                url: url,
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function (data, textStatus) {
                    NotificationManager.success('Profile saved successfully');
                },
                beforeSend: function () {
                    this.setState({loading: true});
                }.bind(this)
            });
        }

        // save part to test_result
        return $.ajax({
            url: '/api/v1.0/test_result/' + this.props.data.id,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        });
    },

    _onSubmit: function (e) {
        e.preventDefault();
        if (!this._validate()){
            NotificationManager.error('Please correct the errors');
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
        NotificationManager.success('Test updated successfully');
        this.props.handleClose();
        this.hideLoading();
    },

    _onError: function (data) {
        var message = "Failed to create";
        var res = data.responseJSON;
        if (res.message) {
            message = data.responseJSON.message;
        }
        if (res.error) {
            // Join multiple error messages
            for (var field in res.error){
                var errorMessage = res.error[field];
                if (Array.isArray(errorMessage)){
                     errorMessage = errorMessage.join(". ");
                }
                res.error[field] = errorMessage;
            }
            this.setState({
                errors: res.error
            });
        }
        NotificationManager.error(message);
    },

    _onChange: function (e) {
        var state = {};
        if (e.target.type == 'checkbox') {
            state[e.target.name] = e.target.checked;
        } else if (e.target.type == 'select-one') {
            state[e.target.name] = e.target.value;
        } else if (e.target.type == 'radio') {
            state[e.target.name] = e.target.value;
        } else {
            state[e.target.name] = e.target.value;
        }
        this.setState(state);
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
                <form ref="electrical_profile" method="post" action="#" onSubmit={this._onSubmit}
                      onChange={this._onChange}>
                    <div className="maxwidth">
                        <Panel header="Electrical profile test parametres">
                            <div className="row">
                                <div className="col-md-9">
                                </div>
                                <div className="col-md-3">
                                    <FormGroup>
                                        <TestProfileSelectField fillUpForm={this.fillUpForm}
                                                                source="/api/v1.0/electrical_profile"/>
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="scheduler-border">
                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border">Test requested</legend>
                                    <div className="control-group">
                                        <div className="maxwidth">
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox
                                                    name="bushing"
                                                    checked={this.state.data.bushing ? 'checked': null}
                                                    value="1"
                                                >Bushing Cap and PF</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox
                                                    name="insulation"
                                                    checked={this.state.data.insulation ? 'checked': null}
                                                    value="1"
                                                >Insulation Resistance</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding">
                                                <Checkbox
                                                    name="degree"
                                                    checked={this.state.data.degree ? 'checked': null}
                                                    value="1"
                                                >Degree of Polymerization(DP)</Checkbox>
                                            </div>
                                        </div>
                                        <div className="maxwidth">
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox
                                                    name="winding"
                                                    checked={this.state.data.winding ? 'checked': null}
                                                    value="1"
                                                >Winding Cap an PF</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox
                                                    name="visual"
                                                    checked={this.state.data.visual ? 'checked': null}
                                                    value="1"
                                                >Visual Inspection</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding">
                                                <Checkbox
                                                    name="turns"
                                                    checked={this.state.data.turns ? 'checked': null}
                                                    value="1"
                                                >Turns Ration Test (TTR)</Checkbox>
                                            </div>
                                        </div>
                                        <div className="maxwidth">
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox
                                                    name="insulation_pf"
                                                    checked={this.state.data.insulation_pf ? 'checked': null}
                                                    value="1"
                                                >Winding Cap and PF Doble</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox
                                                    name="resistance"
                                                    checked={this.state.data.resistance ? 'checked': null}
                                                    value="1"
                                                >Resistance; winding/contact</Checkbox>
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
                                                             placeholder="Electrical profile name"
                                                             name="name"
                                                />
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
                                    <div className="col-md-4">
                                        <FormGroup controlId="descTextarea">
                                            <FormControl
                                                componentClass="textarea"
                                                placeholder="Description"
                                                ref="description"
                                                name="description"
                                            />
                                        </FormGroup>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Button bsStyle="success" type="submit" className="pull-right">Save</Button>
                                        <Button bsStyle="danger"
                                                onClick={this.props.handleClose}
                                                className="pull-right margin-right-xs">Close</Button>
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
