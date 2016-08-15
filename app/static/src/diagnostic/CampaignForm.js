import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField'
import Panel from 'react-bootstrap/lib/Panel';
import Modal from 'react-bootstrap/lib/Modal';
import {findDOMNode} from 'react-dom';
import CreatedByForm from './CampaignForm_modules/CreatedByForm';
import NewContractForm from './CampaignForm_modules/NewContractForm';
import AddEquipmentForm from './AddEquipmentForm';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';


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
                    { this.getValidationState() == 'error' ?
                        <HelpBlock className="warning">{this.props.errors['created_by_id']},
                            please choose user and resubmit the form</HelpBlock> : null
                    }
                    <FormControl
                        componentClass="select"
                        placeholder="select user"
                        onChange={this.handleChange}
                        name="created_by_id">
                        <option key="0" value="select">Created by</option>
                        {menuItems}
                    </FormControl>
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
            selected: false,
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
                <FormGroup>
                    <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.handleChange}
                        name="contract_id"
                        value={this.state.selected}
                    >
                        <option value="select">Contract No.</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var CampaignForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            showCreatedByForm: false,
            showNewContractForm: false,
            showNewLabForm: false,
            fields: [
                'created_by_id', 'date_created', 'date_sampling',
                'date_application', 'description', 'contract_id'
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
            success: function (response) {
                alert('Campaign sucessfully started.');
            },
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
        this.setState(this.getInitialState());
        this.props.setCampaignId();
        // show success message
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
        this.refs.contract.setSelected(response);
        alert('Contract created');
    },

    render: function () {

        return (
            <div className="form-container">
                <Panel header="New Campaign">
                    <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                        <div className="row">
                            <div className="col-md-11">
                                <CreatedBySelectField
                                    source="/api/v1.0/user"
                                    handleChange={this.handleChange}
                                    errors={this.state.errors}
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
                                    <FormGroup>
                                        <ControlLabel>Date Created</ControlLabel>
                                        <DateTimeField datetime={this.state.date_created}/>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-11">
                                <ContractNoSelectField ref="contract"
                                                       source="/api/v1.0/contract/"/>
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
                                <FormGroup>
                                    <FormControl componentClass="textarea"
                                                 placeholder="comments"
                                                 name="comments"/>
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="datetimepicker input-group date col-md-3">
                                    <ControlLabel>Scheduled testing</ControlLabel>
                                    <DateTimeField datetime={this.state.date_application}/>
                                </div>
                                <div className="datetimepicker input-group date col-md-3">
                                    <ControlLabel>Lab measurement</ControlLabel>
                                    <DateTimeField datetime={this.state.date_sampling}/>
                                </div>
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
                                >Cancel</Button>
                            </div>
                        </div>
                    </form>
                </Panel>
                <hr/>

                <AddEquipmentForm showTestList={this.showTestList}/>

                <Modal show={this.state.showCreatedByForm}>
                    <CreatedByForm handleClose={this.closeCreatedByForm}/>
                </Modal>

                <Modal show={this.state.showNewContractForm}>
                    <NewContractForm onContractCreate={this.onContractCreate} handleClose={this.closeNewContractForm}/>
                </Modal>
            </div>
        );
    }
});


export default CampaignForm;
