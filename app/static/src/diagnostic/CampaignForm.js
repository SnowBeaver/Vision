import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField'
import Panel from 'react-bootstrap/lib/Panel';
import Modal from 'react-bootstrap/lib/Modal';
import {findDOMNode} from 'react-dom';
import CreatedByForm from './CampaignForm_modules/NewUserForm';
import NewContractForm from './CampaignForm_modules/NewContractForm';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import { hashHistory } from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';


var items = [];


var CreatedBySelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        });
    },

    getInitialState: function () {
        return {
            items: [],
            isVisible: false
        };
    },

    setSelected: function (data) {
        this.componentDidMount();
        this.setState({
            selected: data.result
        });
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    getValidationState: function () {
        var error_msg = this.props.errors['created_by_id'];
        var state = null;
        if (typeof error_msg != 'undefined') {
            state = "error";
        } else {
            return;
        }
        return state;
    },

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        return (
            <div>
                <FormGroup controlId="created_by" validationState={this.getValidationState()}>
                    <FormControl
                        componentClass="select"
                        placeholder="select user"
                        onChange={this.handleChange}
                        name="created_by_id"
                        required={this.props.required}
                        value={this.state.selected}>
                        <option key="0" value="">Created by{this.props.required ? " *" : ""}</option>
                        {menuItems}
                    </FormControl>
                    { this.getValidationState() == 'error' ?
                        <HelpBlock className="warning">{this.props.errors['created_by_id']},
                            please choose user and resubmit the form</HelpBlock> : null
                    }
                </FormGroup>
            </div>
        );
    }
});


var ContractNoSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        });
    },

    getInitialState: function () {
        return {
            items: [],
            isVisible: false
        };
    },

    setSelected: function (data) {
        this.componentDidMount();
        this.setState({
            selected: data.result
        });
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {

            items = (result['result']);
            this.setState({
                items: items
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
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup validationState={this.props.errors.contract_id ? 'error' : null}>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChange}
                        name="contract_id"
                        value={this.state.selected}
                        required
                    >
                        <option value="">Contract No. *</option>
                        {menuItems}
                    </FormControl>
                    <HelpBlock className="warning">{this.props.errors.contract_id}</HelpBlock>
                </FormGroup>
            </div>
        );
    }
});


var CampaignForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            campaign_id: false,
            date_created: new Date().toISOString(),
            errors: {},
            showCreatedByForm: false,
            showNewContractForm: false,
            showNewLabForm: false,
            fields: [
                'created_by_id', 'date_created', 'date_sampling',
                'description', 'contract_id'
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
            url: '/api/v1.0/campaign/',
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
        if (!this.is_valid()){
			NotificationManager.error('Please correct the errors');
            e.stopPropagation();
			return false;
		}
        this._clearErrors();
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
        this.setState({
            campaign_id: data.result
        });
        NotificationManager.success('Campaign successfully started.', null, 4000);
        setTimeout(function(){ hashHistory.push('/add_equipment/' + data.result); }, 2000);
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

    _onChange: function (e) {
        var state = {};
        if (e.target.type == 'checkbox') {
            state[e.target.name] = e.target.checked;
        } else if (e.target.type == 'select-one') {
            state[e.target.name] = e.target.value;
        } else {
            state[e.target.name] = e.target.value;
        }

        // Clear the errors
        state.errors = this.state.errors;
        delete state.errors[e.target.name];
        this.setState(state);
    },

    _clearErrors: function () {
        this.setState({errors: {}});
    },

    is_valid: function () {
        return (Object.keys(this.state.errors).length <= 0);
    },

    _formGroupClass: function (field) {
        var className = "form-group ";
        if (field) {
            className += " has-error"
        }
        return className;
    },

    handleClick: function () {
        document.getElementById('test_prof').remove();
    },

    onNewButtonClick: function (e) {
        if ('created_by' === e.target.id) {
            this.setState({
                    showCreatedByForm: true,
                    showNewContractForm: false
                }
            )
        }
        else if ('contract_no' === e.target.id) {
            this.setState({
                showCreatedByForm: false,
                showNewContractForm: true
            })
        }
    },

    closeCreatedByForm: function () {
        this.setState({
            showCreatedByForm: false
        })
    },

    closeNewContractForm: function () {
        this.setState({
            showNewContractForm: false
        })
    },

    showTestList: function () {
        this.refs.test_list.setVisible();
    },

    onContractCreate: function (response) {
        this.setState({contract_id: response.result});
        this.refs.contract.setSelected(response);
        NotificationManager.success("Contract added", null, 1000);
    },

    onUserCreate: function (response) {
        this.setState({created_by_id: response.result});
        this.refs.created_by.setSelected(response);
    },

    _getCampaign: function () {
        return this.state.campaign_id;
    },

    setDateCreated: function (timestamp){
        this._setDateTimeFieldDate(timestamp, "date_created");
    },

    setDateSampling: function (timestamp){
        this._setDateTimeFieldDate(timestamp, "date_sampling");
    },

    _setDateTimeFieldDate(timestamp, fieldName){
        var state = {};
        // If date is not valid (for example, date is deleted) string "Invalid date" is received
        if (timestamp == "Invalid date"){
            timestamp = null;
        } else if (timestamp){
            // It is UNIX timestamp in milliseconds if dateTimeField was empty on load
            // Format date here instead of specifying format in DateTimeField,
            // because error is raised when format is specified, but date is null/undefined/empty string.
            if (/^\d+$/.test(timestamp)){
                timestamp = parseInt(timestamp);
                timestamp = moment(timestamp).toISOString();
            }
            state[fieldName] = timestamp;    // Already formatted to ISO string
        }
        this.setState(state);
    },

    render: function () {
        var ISODateFormat = "YYYY-MM-DDTHH:mm:ss.SSS[Z]";
        // Do not set dateTime property if date is null/undefined/empty string, calendar will be broken
        var dateSampling = this.state.date_sampling;
        dateSampling = (dateSampling) ? {dateTime: dateSampling, format: ISODateFormat} : {defaultText: "Please select a date"};
        return (
            <div className="form-container">
                <Panel header="New Campaign">
                    <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                        <div className="row">
                            <div className="col-md-11">
                                <CreatedBySelectField
                                    ref="created_by"
                                    source="/api/v1.0/user"
                                    handleChange={this.handleChange}
                                    errors={this.state.errors}
                                    required
                                />
                            </div>
                            <div className="col-md-1">
                                <FormGroup>
                                    <a id="created_by"
                                       className="btn btn-primary "
                                       onClick={this.onNewButtonClick}>
                                        New
                                    </a>
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="datetimepicker input-group date">
                                    <FormGroup validationState={this.state.errors.date_created ? 'error' : null}>
                                        <ControlLabel>Date Created *</ControlLabel>
                                        <DateTimeField name="date_created"
                                                       inputProps={{required: true}}
                                                       dateTime={this.state.date_created}
                                                       format = {ISODateFormat}
                                                       onChange={this.setDateCreated}/>
                                        <HelpBlock className="warning">{this.state.errors.date_created}</HelpBlock>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-11">
                                <ContractNoSelectField ref="contract"
                                                       source="/api/v1.0/contract/"
                                                       errors={this.state.errors}/>
                            </div>
                            <div className="col-md-1">
                                <a id="contract_no"
                                   className="btn btn-primary new2"
                                   onClick={this.onNewButtonClick}>
                                    New
                                </a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-11">
                                <FormGroup validationState={this.state.errors.description ? 'error' : null}>
                                    <FormControl componentClass="textarea"
                                                 placeholder="Comments"
                                                 name="description"/>
                                    <HelpBlock className="warning">{this.state.errors.description}</HelpBlock>
                                    <FormControl.Feedback />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="datetimepicker input-group date col-md-3">
                                    <FormGroup validationState={this.state.errors.date_sampling ? 'error' : null}>
                                        <ControlLabel>Lab measurement</ControlLabel>
                                        <DateTimeField name="date_sampling"
                                                       onChange={this.setDateSampling}
                                                       {...dateSampling} />
                                        <HelpBlock className="warning">{this.state.errors.date_sampling}</HelpBlock>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 ">
                                <Button bsStyle="success"
                                        className="pull-right"
                                        type="submit">Next</Button>
                                &nbsp;
                                <Button bsStyle="danger"
                                        className="pull-right margin-right-xs"
                                >Cancel</Button>
                            </div>
                        </div>
                    </form>
                </Panel>
                <hr/>

                <Modal show={this.state.showCreatedByForm}>
                    <Modal.Header>
                        <Modal.Title>New User Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CreatedByForm data={this.props.data}
                                       onCreate={this.onUserCreate}
                                       handleClose={this.closeCreatedByForm}
                        />
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.showNewContractForm}>
                    <Modal.Header>
                        <Modal.Title>New Contract</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewContractForm onCreate={this.onContractCreate} handleClose={this.closeNewContractForm}/>
                    </Modal.Body>
                </Modal>

            </div>
        );
    }
});


export default CampaignForm;
