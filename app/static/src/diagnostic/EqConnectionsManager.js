import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var UpstreamSelectField = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            isVisible: false,
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
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].equipment_id}`}</option>);
        }
        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <FormControl componentClass="select"
                             onChange={this.props.onChange}
                             name={name}
                             value={value}
                >
                    <option key={null} value={null}></option>
                    {menuItems}
                    <FormControl.Feedback />
                </FormControl>
            </FormGroup>
        );
    }
});

var DownstreamSelectField = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            isVisible: false,
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
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].parent_id}`}</option>);
        }
        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <FormControl componentClass="select"
                             onChange={this.props.onChange}
                             name={name}
                             value={value}
                >
                    <option key={null} value={null}></option>
                    {menuItems}
                    <FormControl.Feedback />
                </FormControl>
            </FormGroup>
        );
    }
});


var EqConnectionsManager = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {}
        }
    },

    _save: function () {
        return $.ajax({
            url: '/api/v1.0/equipment/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
                if (Object.keys(subform).length != 0) {
                    subform['equipment_id'] = data['result'];
                    $.ajax({
                        url: '/api/v1.0/' + path + '/',
                        type: 'POST',
                        dataType: 'json',
                        contentType: 'application/json',
                        data: JSON.stringify(subform),
                        success: function (data) {
                        }
                    });
                }
            },
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })

    },

    _onSubmit: function (e) {
        e.preventDefault();
        if (!this._validate()) {
            NotificationManager.error('Please correct the errors');
            return;
        }
        this._clearErrors();
        var xhr = this._save();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },

    hideLoading: function () {
        this.setState({loading: false});
    },

    _onSuccess: function (data) {
        // Clean the form
        this.setState(this.getInitialState());
        NotificationManager.success('Equipment has been successfully saved');
    },

    _onError: function (data) {
        var message = "Failed to create";
        var res = data.responseJSON;
        if (res.message) {
            message = data.responseJSON.message;
        }
        if (res.error) {
            // Join multiple error messages
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
        }
        NotificationManager.error(message);
    },

    _clearErrors: function () {
        this.setState({errors: {}});
    },

    _onChange: function (e) {
        var form = {};

        if (e.target.type == 'checkbox') {
            form[e.target.name] = e.target.checked;
        } else if (e.target.type == 'radio') {
            form[e.target.name] = e.target.value;
        } else if (e.target.type == 'select-one') {
            form[e.target.name] = e.target.value;
        } else {
            form[e.target.name] = e.target.value;
        }
        this.setState(form);
    },
    
    render: function () {
        return (
            <div className="form-container">
                <form id="eqtype_form" ref="eqtype_form" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div className="row">
                        <div className="col-md-3">
                            <UpstreamSelectField source="equipment_connection"
                                                 label="Upstream"
                                                 name='equipment_id'
                                                 value={this.state.equipment_id}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <Panel header="Equipment" className="text-center">
                            </Panel>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <DownstreamSelectField source="equipment_connection"
                                                   label="Downstream"
                                                   name='parent_id'
                                                   value={this.state.parent_id}
                            />
                        </div>
                    </div>

                    <div className="row">
                                <div className="col-md-12">
                                    <Button bsStyle="success" type="submit" className="pull-right">Save</Button>
                                    <Button bsStyle="danger"
                                            onClick={this.handleClose}
                                            className="pull-right margin-right-xs">Cancel</Button>
                                </div>
                            </div>
                </form>
            </div>

        );
    }
});

export default EqConnectionsManager;