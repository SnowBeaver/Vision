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
    setVisible: function () {
        this.state.isVisible = true;
    },
    removeSelect: function () {
        this.props.removeSelect(this.props.index);
    },
    render: function () {

        console.log(this.props.upstream);
        var items = Object.keys(this.state.equipment).length;
        if (items == 0) {
            return (<div></div>);
        }
        var id;
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
                    <FormGroup >
                        <ControlLabel>{label}</ControlLabel>
                        <FormControl componentClass="select"
                                     onChange={this.props.onChange}
                                     name={name}
                                     value={this.props.upstream[key]}
                        >
                            <option key={this.state.equipment[this.props.upstream[key]].id}
                                    value={this.state.equipment[this.props.upstream[key]].id}>
                                {`${this.state.equipment[this.props.upstream[key]].name}`}</option>
                            {menuItems}
                            <FormControl.Feedback />
                        </FormControl>
                    </FormGroup>
                </div>
                <div className="col-md-2">
                    <a href="javascript:void(0)"
                       className="glyphicon glyphicon-remove text-danger"
                       onClick={this.removeSelect}
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
    setVisible: function () {
        this.state.isVisible = true;
    },
    removeSelect: function () {
        this.props.removeSelect(this.props.index);
    },
    render: function () {

        console.log(this.props.downstream);
        var items = Object.keys(this.state.equipment).length;
        if (items == 0) {
            return (<div></div>);
        }
        var id;
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
            label = 'downstream ' + label_num;
            var name = 'downstream' + key;
            downstreams.push(<div className="row">
                <div className="col-md-10">
                    <FormGroup >
                        <ControlLabel>{label}</ControlLabel>
                        <FormControl componentClass="select"
                                     onChange={this.props.onChange}
                                     name={name}
                                     value={this.props.downstream[key]}
                        >
                            <option key={this.state.equipment[this.props.downstream[key]].id}
                                    value={this.state.equipment[this.props.downstream[key]].id}>
                                {`${this.state.equipment[this.props.downstream[key]].name}`}</option>
                            {menuItems}
                            <FormControl.Feedback />
                        </FormControl>
                    </FormGroup>
                </div>
                <div className="col-md-2">
                    <a href="javascript:void(0)"
                       className="glyphicon glyphicon-remove text-danger"
                       onClick={this.removeSelect}
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
            loading: false,
            errors: {},
            equipment_id: 2
        }

    },

    _save: function () {
        return $.ajax({
            url: '/api/v1.0/equipment/' + this.props.source,
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
        var state = {};

        if (e.target.type == 'checkbox') {
            state[e.target.name] = e.target.checked;
        } else if (e.target.type == 'radio') {
            state[e.target.name] = e.target.value;
        } else if (e.target.type == 'select-one') {
            state[e.target.name] = e.target.value;
        } else {
            state[e.target.name] = e.target.value;
        }

        if (e.target.name === 'equipment_id') {
            var id = e.target.value;
            var source = '/api/v1.0/equipment/' + id + '/up_down_stream/';
            this.serverRequest = $.get(source, function (result) {
                this.setState({
                    items: result['result'],
                    equipment_id: id
                });
            }.bind(this), 'json');

            this.setState({});
        }

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