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
            equipment: {},
            isVisible: false
        };
    },
    isVisible: function () {
        return this.state.isVisible;
    },
    componentDidMount: function () {
        this.serverRequest = $.get("/api/v1.0/equipment/", function (result) {
            this.setState({
                equipment: result['result']
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    removeUpstream: function () {
        this.props.removeUpstreamSelect(0);
    },

    render: function () {

        var items = Object.keys(this.state.equipment).length;
        if (items == 0) {
            return (<div></div>);
        }
        var key;
        var label_num = 0;
        var menuItems = [];
        var upstreams = [];
        var label;
        for (key in this.state.equipment) {
            menuItems.push(
                <option key={this.state.equipment[key].id}
                        value={this.state.equipment[key].id}>{`${this.state.equipment[key].name}`}</option>
            );
        }
        for (key in this.props.upstream) {
            label_num++;
            label = 'Upstream ' + label_num;
            var name = 'upstream' + key;
            upstreams.push(<div className="row">
                <div className="col-md-10" id={this.props.upstream[key]}>
                    <FormGroup >
                        <ControlLabel>{label}</ControlLabel>
                        <FormControl componentClass="select"
                                     onChange={this.props.onChange}
                                     name={name}
                                     value={this.props.upstream[key]}

                        >
                            <option value='undefined'>Choose equipment</option>
                            {menuItems}
                            <FormControl.Feedback />
                        </FormControl>
                    </FormGroup>
                </div>
                <div className="col-md-2">
                    <a href="javascript:void(0)"
                       className="glyphicon glyphicon-remove text-danger"
                       onClick={this.removeUpstream}
                       aria-hidden="true">
                    </a>
                </div>
            </div>);

        }
        return (
            <div>
                {upstreams}
            </div>
        );
    }
});


var DownstreamSelectField = React.createClass({
    getInitialState: function () {
        return {
            equipment: {},
            isVisible: false
        };
    },
    isVisible: function () {
        return this.state.isVisible;
    },
    componentDidMount: function () {
        this.serverRequest = $.get("/api/v1.0/equipment/", function (result) {
            this.setState({
                equipment: result['result']
            });
        }.bind(this), 'json');
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    removeDownstream: function () {
        this.props.removeDownstreamSelect(2);
    },

    render: function () {

        var items = Object.keys(this.state.equipment).length;
        if (items == 0) {
            return (<div></div>);
        }

        var key;
        var label_num = 0;
        var menuItems = [];
        var downstreams = [];
        var label;
        for (key in this.state.equipment) {
            menuItems.push(
                <option key={this.state.equipment[key].id}
                        value={this.state.equipment[key].id}>{`${this.state.equipment[key].name}`}</option>
            );
        }

        for (key in this.props.downstream) {
            label_num++;
            label = 'Downstream ' + label_num;
            var name = 'downstream' + key;
            var id = this.props.downstream[key];
            downstreams.push(<div className="row">
                <div className="col-md-10" id={this.props.downstream[key]} key={key}>
                    <FormGroup >
                        <ControlLabel>{label}</ControlLabel>
                        <FormControl componentClass="select"
                                     onChange={this.props.onChange}
                                     name={name}
                                     value={this.props.downstream[key]}

                        >
                            <option key={this.props.downstream[key]}
                                    value='undefined'> Choose equipment
                            </option>
                            {menuItems}
                            <FormControl.Feedback />
                        </FormControl>
                    </FormGroup>
                </div>
                <div className="col-md-2">
                    <a href="javascript:void(0)"
                       className="glyphicon glyphicon-remove text-danger"
                       onClick={this.removeDownstream}
                       aria-hidden="true">
                    </a>
                </div>
            </div>);

        }
        return (
            <div>
                {downstreams}
            </div>
        );
    }
});


var SelectField = React.createClass({
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
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }


        return (
            <FormGroup>
                <FormControl componentClass="select"
                             onChange={this.props.onChange}
                             name={name}
                             value={value}
                >
                    <option key={null} value={null}>Choose Equipment</option>
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
            items: {},
            data: {"upstream": [], "downstream": []},
            deldata: {"upstream2": [], "downstream2": []},
            loading: false,
            errors: {},
            equipment_id: 2
        }

    },

    _save: function () {

        var data = this.state;
        var deldata = this.state.deldata;
        var url = '/api/v1.0/equipment/' + this.state.equipment_id + '/up_down_stream/';


        return $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (deldata) {
                if (Object.keys(deldata).length != 0) {
                    $.ajax({
                        url: url,
                        type: 'DELETE',
                        dataType: 'json',
                        contentType: 'application/json',
                        data: JSON.stringify(deldata),
                        success: function (data) {
                        },
                        beforeSend: function () {
                        }
                    })
                }
            },
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })

    },

    _onSubmit: function (e) {
        e.preventDefault();
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

    componentDidMount: function () {
        var source = '/api/v1.0/equipment/' + this.state.equipment_id + '/up_down_stream/';
        this.serverRequest = $.get(source, function (result) {
            this.setState({items: (result['result'])});
        }.bind(this), 'json');
    },

    _onChange: function (e) {
        var state = {
            upstream: [],
            downstream: []
        };

        if (e.target.name.indexOf('upstream')) {
            state['upstream'][e.target.name] = e.target.value;
        } else if (e.target.name.indexOf('downstream')) {
            state['downstream'][e.target.name] = e.target.value;
        }

        state[e.target.name] = e.target.value;

        if (e.target.name === 'equipment_id') {
            var id = e.target.value;
            var source = '/api/v1.0/equipment/' + id + '/up_down_stream/';
            this.serverRequest = $.get(source, function (result) {
                this.setState({
                    items: result['result'],
                    equipment_id: id
                });
            }.bind(this), 'json');
        }
        this.setState(state);
    },

    removeUpstreamSelect: function (id) {
        console.log("handler id", id);
        var items = this.state.items.upstream;
        items.splice(items.indexOf(id), 1);
        this.state.deldata.upstream2.push(id);
        this.setState({
            upstream: items
        });
    },

    removeDownstreamSelect: function (id) {
        var items = this.state.items.downstream;
        items.splice(items.indexOf(id), 1);
        this.state.deldata.downstream2.push(id);
        this.setState({
            downstream: items
        });

    },

    render: function () {
        var items = Object.keys(this.state.items).length;
        if (items == 0) {
            return (<div></div>);
        }

        return (
            <div className="form-container">
                <form id="eqtype_form" ref="eqtype_form" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div className="row">
                        <div className="col-md-4">
                            <UpstreamSelectField upstream={this.state.items.upstream}
                                                 value={this.state.equipment_id}
                                                 removeUpstreamSelect={this.removeUpstreamSelect}
                            />
                        </div>
                        <div className="col-md-4 ">
                            <Panel header="Equipment" className="text-center">
                            </Panel>
                            <SelectField source="equipment"
                                         name='equipment_id'
                                         value={this.state.equipment_id}
                            />
                        </div>
                        <div className="col-md-4">
                            <DownstreamSelectField downstream={this.state.items.downstream}
                                                   value={this.state.parent_id}
                                                   removeDownstreamSelect={this.removeDownstreamSelect}
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