import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import {NotificationContainer, NotificationManager} from 'react-notifications';


var UpstreamSelectFields = React.createClass({
    getInitialState: function () {
        return {
            equipment: {}
        };
    },
    componentDidMount: function () {
        this.serverRequest = $.authorizedGet("/api/v1.0/equipment/", function (result) {
            this.setState({
                equipment: result['result']
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    upstreamAdd: function () {
        this.props.upstream.push(0);
        var upstreams = this.props.upstream;
        this.setState({upstreams});
    },

    remove: function (e) {
        var url = '/api/v1.0/equipment/' + this.props.value + '/upstream/' + e;
        this.props.upstream.splice(this.props.upstream.indexOf(e), 1);
        var upstreams = this.props.upstream;
        this.setState({upstreams});
        $.authorizedAjax({
            url: url,
            type: 'DELETE',
            success: function (data) {
            }
        })
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
                <div className="col-md-10">
                    <FormGroup controlId={key}>
                        <ControlLabel>{label}</ControlLabel>
                        <FormControl componentClass="select"
                                     onChange={this.props.onChange}
                                     name={name}
                                     value={(this.props.upstream[key]!='undefined') ? this.props.upstream[key] : null}

                        >
                            <option value='undefined'>Choose equipment</option>
                            {menuItems}
                            <FormControl.Feedback />
                        </FormControl>
                    </FormGroup>
                </div>
                <div className="col-md-1">
                    <a href="javascript:void(0)"
                       className="glyphicon glyphicon-remove text-danger"
                       onClick={this.remove.bind(this,this.props.upstream[key])}
                       aria-hidden="true">
                    </a>
                </div>
            </div>);

        }
        return (
            <div>
                {upstreams}
                <div className="col-md-1">
                    <a href="javascript:void(0)"
                       className="glyphicon glyphicon-plus"
                       onClick={this.upstreamAdd}
                       aria-hidden="true">&nbsp;</a>
                </div>
            </div>
        );
    }
});


var DownstreamSelectFields = React.createClass({
    getInitialState: function () {
        return {
            equipment: {}
        };
    },
    componentDidMount: function () {
        this.serverRequest = $.authorizedGet("/api/v1.0/equipment/", function (result) {
            this.setState({
                equipment: result['result']
            });
        }.bind(this), 'json');
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    downstreamAdd: function () {
        this.props.downstream.push(0);
        var upstreams = this.props.downstream;
        this.setState({upstreams});
    },

    remove: function (e) {
        var url = '/api/v1.0/equipment/' + this.props.value + '/downstream/' + e;
        this.props.downstream.splice(this.props.downstream.indexOf(e), 1);
        var downstreams = this.props.downstream;
        this.setState({downstreams});
        $.authorizedAjax({
            url: url,
            type: 'DELETE',
            success: function (data) {
            }
        })
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
                <div className="col-md-10">
                    <FormGroup controlId={key}>
                        <ControlLabel>{label}</ControlLabel>
                        <FormControl componentClass="select"
                                     onChange={this.props.onChange}
                                     name={name}
                                     value={(this.props.downstream[key]!='undefined') ? this.props.downstream[key] : null}
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
                       onClick={this.remove.bind(this,this.props.downstream[key])}
                       aria-hidden="true">
                    </a>
                </div>
            </div>);

        }
        return (
            <div>
                {downstreams}
                <div className="col-md-1">
                    <a href="javascript:void(0)"
                       className="glyphicon glyphicon-plus"
                       onClick={this.downstreamAdd}
                       aria-hidden="true">&nbsp;</a>
                </div>
            </div>
        );
    }
});


var SelectField = React.createClass({
    getInitialState: function () {
        return {
            items: [],
        };
    },
    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.source + '/';
        this.serverRequest = $.authorizedGet(source, function (result) {
            this.setState({items: (result['result'])});
        }.bind(this), 'json');
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
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
                             name={name}
                             value={value}
                             disabled={this.props.disabled}
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
            loading: false,
            errors: {},
            equipment_id: this.props.equip_id
        }
    },
    _save: function () {

        var data = {"upstream":this.state.items.upstream, "downstream": this.state.items.downstream};
        console.log("data:", data);
        var url = '/api/v1.0/equipment/' + this.state.equipment_id + '/up_down_stream/';
        return $.authorizedAjax({
            url: url,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
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

        console.log("submit log", this.state);
    },
    hideLoading: function () {
        this.setState({loading: false});
    },
    _onSuccess: function (data) {
        this.props.handleClose();
        NotificationManager.success('Upstreams & downstreams were succesfully set');
    },
    _onError: function (data) {

    },

    _clearErrors: function () {
        
    },

    componentDidMount: function () {
        var source = '/api/v1.0/equipment/' + this.state.equipment_id + '/up_down_stream/';
        this.serverRequest = $.authorizedGet(source, function (result) {
            this.setState({items: (result['result'])});
        }.bind(this), 'json');
    },

    _onChange: function (e) {
        var index;
        var state = this.state;

        if (e.target.name.indexOf('upstream') == 0) {
            index = parseInt(e.target.id);
            state.items.upstream[index] = parseInt(e.target.value);
        } else if (e.target.name.indexOf('downstream') == 0) {
            index = parseInt(e.target.id);
            state.items.downstream[index] = parseInt(e.target.value);
        }

        this.setState(state);

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
                            <UpstreamSelectFields onChange={this._onChange}
                                                  upstream={this.state.items.upstream}
                                                  value={this.state.equipment_id}
                            />
                        </div>
                        <div className="col-md-4 ">
                            <Panel header="Equipment" className="text-center">
                            </Panel>
                            <SelectField source="equipment"
                                         name='equipment_id'
                                         value={this.state.equipment_id}
                                         disabled
                            />
                        </div>
                        <div className="col-md-4">
                            <DownstreamSelectFields onChange={this._onChange}
                                                    downstream={this.state.items.downstream}
                                                    value={this.state.equipment_id}
                            />
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
                </form>
            </div>

        );
    }
});

export default EqConnectionsManager;