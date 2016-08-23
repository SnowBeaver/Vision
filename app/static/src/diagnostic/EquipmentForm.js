import React from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import DateTimePicker from 'react-bootstrap-datetimepicker';
import Panel from 'react-bootstrap/lib/Panel';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Modal from 'react-bootstrap/lib/Modal';
import Table from 'react-bootstrap/lib/Table';


import {findDOMNode} from 'react-dom';
injectTapEventPlugin();

var options = [];
var items = [];

var first_year = 1900;
var current_date = new Date();
var current_year = current_date.getFullYear();
var year_array = [];
year_array.push(first_year);
while (first_year != current_year) {
    first_year++;
    year_array.push(first_year.toString());
}


var EquipmentTypeSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
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

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        return (
            <div>
                <FormGroup controlId="formControlsSelect1">
                    <FormControl
                        componentClass="select"
                        name="equipment_type_id"
                        placeholder="Equipment type"
                        onChange={this.handleChange}
                    >
                        <option value="select">Choose equipment type</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});

const NewEqModalWin = React.createClass({
    getInitialState() {
        return {showModal: false};
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true});
    },

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
            <span>
        <Button bsStyle="primary" bsSize="small" onClick={this.open}>
          New
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Existing equipment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              table
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
        );
    }
});


var EquipmentSelectField = React.createClass({

    getInitialState: function () {
        return {
            items: []
        };
    },

    handleChange: function (event, index, value) {

        this.setState({
            value: event.target.value
        })
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {
            var items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    removeSelect: function () {
        this.props.removeSelect(this.props.index);
    },

    getSelected: function () {
        return this.state.selected || this.state.value;
    },

    setSelected: function (selected) {
        this.setState({
            selected: selected
        })
    },

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(
                <option key={this.state.items[key].id}
                        value={this.state.items[key].id}>
                    {`${this.state.items[key].name} ${this.state.items[key].serial}`}
                </option>
            );
        }

        return (
            <div>
                <FormGroup>
                    <FormControl
                        componentClass="select"
                        placeholder="Select equipment in upstream"
                        name="equipment_id"
                        onChange={this.handleChange}
                        value={this.props.value}>
                        <option value="select">Choose equipment in upstream</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var ManufacturerSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
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

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        return (
            <div>
                <FormGroup controlId="formControlsSelect2">
                    <FormControl
                        name="manufacturer_id"
                        componentClass="select"
                        placeholder="Manufacturer"
                        onChange={this.handleChange}>
                        <option value="select">Choose manufacturer</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


const NewManufacModalWin = React.createClass({
    getInitialState() {
        return {showModal: false};
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true});
    },

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
            <span>
        <Button bsStyle="primary" bsSize="small" onClick={this.open}>
          New
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Manufacturers Database</Modal.Title>
          </Modal.Header>
          <Modal.Body>

  <Table striped bordered condensed hover>
    <thead>
      <tr>
          <th>#</th>
          <th><Checkbox> </Checkbox> </th>
          <th>Last Name</th>
          <th>Name</th>
          <th>Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
          <td>11111</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
          <td>22222</td>
      </tr>
    </tbody>
  </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
        );
    }
});

const NewLocationModalWin = React.createClass({
    getInitialState() {
        return {showModal: false};
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true});
    },

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
            <span>
        <Button bsStyle="primary" bsSize="small" onClick={this.open}>
          New
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Locations</Modal.Title>
          </Modal.Header>
          <Modal.Body>

  <Table striped bordered condensed hover>
    <thead>
      <tr>
          <th>#</th>
          <th><Checkbox> </Checkbox> </th>
          <th>Last Name</th>
          <th>Name</th>
          <th>Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
          <td>11111</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
          <td>22222</td>
      </tr>
    </tbody>
  </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
        );
    }
});


var LocationSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value,
        })

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

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect3">
                    <FormControl
                        name="location_id"
                        componentClass="select"
                        placeholder="Select location"
                        onChange={this.handleChange}>
                        <option value="select">Select equipment location</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});

var VisualInspBySelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
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

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option value={this.state.items[key].id}
                                   key={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect4">
                    <FormControl
                        name="visual_inspection_by_id"
                        componentClass="select"
                        placeholder="Visual inspection by"
                        onChange={this.handleChange}
                    >
                        <option value="select">Visual inspection by</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});

const NewVisualInspByModalWin = React.createClass({
    getInitialState() {
        return {showModal: false};
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true});
    },

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
            <span>
        <Button bsStyle="primary" bsSize="small" onClick={this.open}>
          New
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>List of Inpectors</Modal.Title>
          </Modal.Header>
          <Modal.Body>

  <Table striped bordered condensed hover>
    <thead>
      <tr>
          <th>#</th>
          <th><Checkbox> </Checkbox> </th>
          <th>Last Name</th>
          <th>Name</th>
          <th>Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
          <td>11111</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
          <td>22222</td>
      </tr>
    </tbody>
  </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
        );
    }
});


var AssignedToSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
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

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option value={this.state.items[key].id}
                                   key={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect5">
                    <FormControl
                        componentClass="select"
                        name="assigned_to_id"
                        placeholder="Assigned to"
                        onChange={this.handleChange}>
                        <option value="select">Assign performer</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});

const NewAssignedToModalWin = React.createClass({
    getInitialState() {
        return {showModal: false};
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true});
    },

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
            <span>
        <Button bsStyle="primary" bsSize="small" onClick={this.open}>
          New
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>List oof Assigned Persons</Modal.Title>
          </Modal.Header>
          <Modal.Body>

  <Table striped bordered condensed hover>
    <thead>
      <tr>
          <th>#</th>
          <th><Checkbox> </Checkbox> </th>
          <th>Last Name</th>
          <th>Name</th>
          <th>Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
          <td>11111</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
          <td>22222</td>
      </tr>
    </tbody>
  </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
        );
    }
});


var NormSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })

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

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect6">
                    <FormControl
                        name="norm_id"
                        componentClass="select"
                        placeholder="Select norm"
                        onChange={this.handleChange}>
                        <option value="select">Select norm</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});

const NewNormModalWin = React.createClass({
    getInitialState() {
        return {showModal: false};
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true});
    },

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
            <span>
        <Button bsStyle="primary" bsSize="small" onClick={this.open}>
          New
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Norm</Modal.Title>
          </Modal.Header>
          <Modal.Body>

  <Table striped bordered condensed hover>
    <thead>
      <tr>
          <th>#</th>
          <th><Checkbox> </Checkbox> </th>
          <th>Last Name</th>
          <th>Name</th>
          <th>Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
          <td>11111</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
          <td>22222</td>
      </tr>
    </tbody>
  </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
        );
    }
});


var FrequencySelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })

    },

    getInitialState: function () {
        return {
            items: ['25', '50', '60', 'DC'],
            isVisible: false
        };
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        options = [];
        for (var key in this.state.items) {
            options.push(<option key={this.state.items[key]}
                                 value={this.state.items[key]}>{`${this.state.items[key]}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect7">
                    <FormControl componentClass="select"
                                 name="frequency"
                                 placeholder="Select frequency"
                                 onChange={this.handleChange}
                    >
                        <option value="select">Choose Frequency</option>
                        {options}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});

var ManufacturedSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

    getInitialState: function () {
        return {
            items: year_array,
            isVisible: false
        };
    },

    isVisible: function () {
        return this.state.isVisible;
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        options = [];
        for (var key in this.state.items) {
            options.push(<option key={this.state.items[key]}
                                 value={this.state.items[key]}>{`${this.state.items[key]}`}</option>);
        }

        return (
            <div>

                <FormGroup controlId="formControlsSelect8">
                    <FormControl componentClass="select"
                                 name="manufactured"
                                 placeholder="Select manufactured date"
                                 onChange={this.handleChange}
                    >

                        <option value="select">Year manufactured</option>
                        {options}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


const EquipmentForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            visual_date: new Date().toISOString(),
            fields: [
                'equipment_type_id',
                'manufacturer_id',
                'location_id',
                'visual_inspection_by_id',
                'assigned_to_id',
                'norm_id',
                'name',
                'serial',
                'equipment_number',
                'frequency',
                'description',
                'comments',
                'visual_inspection_comments',
                'nbr_of_tap_change_ltc',
                'upstream1',
                'phys_position',
                'tension4',
                'validated',
                'invalidation',
                'prev_serial_number',
                'prev_equipment_number'
            ]
        }
    },

    _save: function () {

        // console.log(this.state);
        var fields = this.state.fields;
        var data = {};

        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }

        // console.log(data);
        this.setState({
            form: data
        });

        return $.ajax({
            url: '/api/v1.0/equipment/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data, textStatus) {
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
        var xhr = this._save();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },

    hideLoading: function () {
        this.setState({loading: false});
    },

    _onSuccess: function (data) {
        this.refs.eqtype_form.getDOMNode().reset();
        this.setState(this.getInitialState());
        // show success message
    },

    _onError: function (data) {
        var message = "Failed to create";
        var res = data.responseJSON;
        if (res.message) {
            message = data.responseJSON.message;
        }
        if (res.errors) {
            this.setState({
                errors: res.errors
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
        } else {
            state[e.target.name] = $.trim(e.target.value);
        }
        this.setState(state);
    },

    _validate: function () {
        var errors = {};
        // if(this.state.password == "") {
        //   errors.password = "Password is required";
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
    onEquipmentTypeChange: function (e) {
        $.get('/api/v1.0/equipment_type/1', function (result) {

            var eqtype_fields = (result['result']);
            this.setState({
                eqtype_fields: eqtype_fields
            });
        }.bind(this), 'json');

        console.log(this.state.eqtype_fields);
        console.log(e.target);
    },

    handleClose: function (e) {

    },

    render: function () {

        return (
            <div className="form-container">
                <form id="eqtype_form" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div>
                        <Panel header="Add Equipment">
                            <div className="row">
                                <div className="col-lg-11">
                                    <EquipmentTypeSelectField
                                        source="/api/v1.0/equipment_type"
                                        value={this.state.equipment_type_id}
                                        onChange={this.onEquipmentTypeChange}
                                    />
                                </div>
                                <div className="col-lg-1">
                                    <NewEqModalWin/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-11">
                                    <ManufacturerSelectField
                                        ref="mn"
                                        source="/api/v1.0/manufacturer"
                                        value={this.state.manufacturer_id}
                                    />
                                </div>
                                <div className="col-lg-1">
                                    <NewManufacModalWin/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-11">
                                    <LocationSelectField
                                        ref="loc"
                                        source="/api/v1.0/location"
                                        value={this.state.location_id}/>
                                </div>
                                <div className="col-lg-1">
                                    <NewLocationModalWin/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-11">
                                    <VisualInspBySelectField
                                        ref="vis"
                                        source="/api/v1.0/visual_inspection_by"
                                        value={this.state.visual_inspection_by_id}/>
                                </div>
                                <div className="col-lg-1">
                                    <NewVisualInspByModalWin/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-11">
                                    <AssignedToSelectField
                                        ref="ast"
                                        source="/api/v1.0/assigned_to"
                                        value={this.state.assigned_to_id}
                                    />
                                </div>
                                <div className="col-lg-1">
                                    <NewAssignedToModalWin/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-11">
                                    <NormSelectField
                                        ref="norms"
                                        source="/api/v1.0/norm"
                                        value={this.state.norm_id}
                                    />
                                </div>
                                <div className="col-lg-1">
                                    <NewNormModalWin/>
                                </div>
                            </div>
                            <FormGroup>
                                <ControlLabel>Name</ControlLabel>
                                <FormControl type="text"
                                             placeholder="Name"
                                             name="name"
                                />
                            </FormGroup>

                            <FormGroup>
                                <ControlLabel>Equipment Number</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Equipment number"
                                    name="equipment_number"
                                    value={this.state.equipment_number}
                                />
                            </FormGroup>

                            <FormGroup controlId="inputSerialField">
                                <ControlLabel>Serial</ControlLabel>
                                <FormControl type="text"
                                             name="serial"
                                             placeholder="serial"
                                             ref="serial"
                                             value={this.state.serial}
                                />
                            </FormGroup>
                            <div className="row">
                                <div className="col-lg-5">
                                    <FrequencySelectField name="frequency"
                                                          title="Frequency"
                                                          ref="frequency"
                                                          value={this.state.frequency}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5">
                                    <ManufacturedSelectField title="Manufactured"
                                                             id="manufactured"
                                                             value={this.state.manufactured}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="descriptionTextarea">
                                        <ControlLabel>Description</ControlLabel>
                                        <FormControl componentClass="textarea"
                                                     name="description"
                                                     placeholder="Description"
                                                     ref="description"
                                                     value={this.state.description}
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="commentsTextarea">
                                        <ControlLabel>Comments</ControlLabel>
                                        <FormControl componentClass="textarea"
                                                     name="comments"
                                                     placeholder="comments"
                                                     ref="comments"
                                        />
                                    </FormGroup>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-lg-5">
                                    <FormGroup controlId="DateTimePicker">
                                        <ControlLabel>Visual Date</ControlLabel>
                                        <DateTimePicker name="visual_date"
                                                        defaultText="Please select a date"
                                                        datetime={this.state.visual_date}
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="visualInspectionCommentsTextarea">
                                        <ControlLabel>Visual Inspection Comments</ControlLabel>
                                        <FormControl componentClass="textarea"
                                                     name="visual_inspection_comments"
                                                     placeholder="visComments"
                                                     ref="vis_comments"
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="tapChangesTextarea" ref="nr_taps">
                                        <ControlLabel>Nbr of Tap Changes LTC</ControlLabel>
                                        <FormControl componentClass="textarea"
                                                     name="nbr_of_tap_change_ltc"
                                                     placeholder="tap changes"
                                                     ref="nr_taps"
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="upstream1Input">
                                        <ControlLabel>Select equipment in Upstream 1</ControlLabel>
                                        <EquipmentSelectField
                                            source="/api/v1.0/equipment"
                                            value={this.state.upstream1}
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="physPositionInput">
                                        <ControlLabel>Physical Position</ControlLabel>
                                        <FormControl type="text"
                                                     placeholder="Physical position"
                                                     ref="phys_position"
                                                     name="phys_position"
                                                     value={this.state.phys_position}
                                        />
                                    </FormGroup>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="tensionInput">
                                        <ControlLabel>Tension4</ControlLabel>
                                        <FormControl type="text"
                                                     name="tension4"
                                                     placeholder="tension4"
                                                     ref="tension4"
                                                     value={this.state.tension4}
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <Checkbox ref="validated" name="validated">Validated</Checkbox>
                                    <Checkbox ref="invalidation" name="invalidation">Invalidation</Checkbox>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="prevSerialNumInput">
                                        <ControlLabel>Prev Serial Number</ControlLabel>
                                        <FormControl type="text"
                                                     name="prev_serial_number"
                                                     placeholder="Previous serial number"
                                                     ref="prev_serial"
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <FormGroup controlId="prevEquipNumInput">
                                        <ControlLabel>Prev Equipment Number</ControlLabel>
                                        <FormControl type="text"
                                                     name="prev_equipment_number"
                                                     placeholder="Previous equipment number"
                                                     ref="prev_eqnumb"
                                        />
                                    </FormGroup>
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
                        </Panel>
                    </div>
                </form>
            </div>
        );
    }
});

export default EquipmentForm;
