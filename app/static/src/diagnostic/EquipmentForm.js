import React from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
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



var EquipmentTypeSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
            eqtype_id: event.target.value
        })
    },

    getInitialState: function(){
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function(){
        return this.state.isVisible;
    },

    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    setVisible: function(){
        this.state.isVisible = true;
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            // menuItems.push(<MenuItem eventKey="{this.state.items[key].id}">{`${this.state.items[key].name}`}</MenuItem>);
            menuItems.push(<option key={this.state.items[key].id} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        return (
            <div>
                <FormGroup controlId="formControlsSelect1">
                    <FormControl componentClass="select" placeholder="equipment type" onChange={this.handleChange}>
                        <option key="0" value="select">Equipment type</option>
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




var ManufacturerSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
            manufac_id: event.target.value,
        })

    },

    getInitialState: function(){
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function(){
        return this.state.isVisible;
    },

    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    setVisible: function(){
        this.state.isVisible = true;
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        return (
            <div>
                <FormGroup controlId="formControlsSelect2">
                    <FormControl componentClass="select" placeholder="manufacturer" onChange={this.handleChange}>
                        <option key="0" value="select">Manufacturer</option>
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



var LocationSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
            location_id: event.target.value
        })

    },

    getInitialState: function(){
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function(){
        return this.state.isVisible;
    },

    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    setVisible: function(){
        this.state.isVisible = true;
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect3">
                    <FormControl componentClass="select" placeholder="select location" onChange={this.handleChange}>
                        <option key="0" value="select">Location</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
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

var VisualInspBySelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
        })
    },

    getInitialState: function(){
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function(){
        return this.state.isVisible;
    },

    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    setVisible: function(){
        this.state.isVisible = true;
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option value={this.state.items[key].id} key={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect4">
                    <FormControl componentClass="select" placeholder="select inspector" onChange={this.handleChange}>
                        <option key="0" value="select">Visual Inspected By</option>
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

var AssignedToSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
        })

    },

    getInitialState: function(){
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function(){
        return this.state.isVisible;
    },

    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    setVisible: function(){
        this.state.isVisible = true;
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option value={this.state.items[key].id} key={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect5">
                    <FormControl componentClass="select" placeholder="select person" onChange={this.handleChange}>
                        <option key="0" value="select">Assigned By</option>
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



var NormSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
        })

    },

    getInitialState: function(){
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function(){
        return this.state.isVisible;
    },

    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    setVisible: function(){
        this.state.isVisible = true;
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect6">
                    <FormControl componentClass="select" placeholder="select norm" onChange={this.handleChange}>
                        <option key="0" value="select">Norm</option>
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



var FrequencySelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
        })

    },

    getInitialState: function(){
        return {
            items: [ '25', '50', '60', 'DC' ],
            isVisible: false
        };
    },

    isVisible: function(){
        return this.state.isVisible;
    },

    setVisible: function(){
        this.state.isVisible = true;
    },

    render: function() {
        options = [];
        for (var key in this.state.items) {
            options.push(<option key={this.state.items[key].id} value={this.state.items[key]}>{`${this.state.items[key]}`}</option>);
        }

        return (
            <div>

                <FormGroup  controlId="formControlsSelect7" >
                    <ControlLabel>Frequency</ControlLabel>
                    <FormControl componentClass="select"
                                 placeholder="select frequency"
                                 onChange={this.handleChange}
                    >
                        <option key="0" value="select">select frequency</option>
                        {options}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});

var ManufacturedSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
        })

    },

    getInitialState: function(){
        return {
            items: year_array,
            isVisible: false
        };
    },

    isVisible: function(){
        return this.state.isVisible;
    },

    setVisible: function(){
        this.state.isVisible = true;
    },

    render: function() {
        options=[];
        for (var key in this.state.items) {
            options.push(<option key={this.state.items[key].id} value={this.state.items[key]}>{`${this.state.items[key]}`}</option>);
        }

        return (
            <div>

                <FormGroup controlId="formControlsSelect8">
                    <ControlLabel>Manufactured</ControlLabel>
                    <FormControl componentClass="select"
                                 placeholder="select manufactured date"
                                 onChange={this.handleChange}
                    >
                        <option key="0" value="select">select manufactured date</option>
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
            errors: {}
        }
    },
    
    _create: function () {

        return $.ajax({
            url: '/api/v1.0/equipment/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
                'equipment_type_id': this.refs.eqt.state.eqtype_id,
                'manufacturer_id': this.refs.mn.state.manufac_id,
                'location_id': this.refs.loc.state.value,
                'visual_inspection_by_id': this.refs.vis.state.value,
                'assigned_to_id': this.refs.ast.state.value,
                'norm_id': this.refs.norms.state.value,
                'name': findDOMNode(this.refs.name).value,
                'serial': findDOMNode(this.refs.serial).value,
                'equipment_number': findDOMNode(this.refs.number).value,
                'frequency': this.refs.frequency.state.value,
                'description': findDOMNode(this.refs.description).value,
                'comments': findDOMNode(this.refs.comments).value,
                'visual_inspection_comments': findDOMNode(this.refs.vis_comments).value,
                'nr_taps': findDOMNode(this.refs.nr_taps).value,
                'upstream1': findDOMNode(this.refs.upstream1).value,
                'phys_position': findDOMNode(this.refs.phys_position).value,
                'tension4': findDOMNode(this.refs.tension4).value,
                'validated': findDOMNode(this.refs.validated).value,
                'invalidation': findDOMNode(this.refs.invalidation).value,
                'prev_serial_number': findDOMNode(this.refs.prev_serial).value,
                'prev_equipment_number': findDOMNode(this.refs.prev_eqnumb).value
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
        this.refs.eqtype_form.getDOMNode().reset();
        this.setState(this.getInitialState());
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
        state[e.target.name] =  $.trim(e.target.value);
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
    render: function() {

        return (
            <div className="form-container">
                <form id="eqtype_form" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div>
                        <Panel header="Add Equipment">
                            <div className="row">
                                <div className="col-lg-11">
                                    <EquipmentTypeSelectField ref="eqt" source="/api/v1.0/equipment_type" value={this.state.value}/>
                                </div>
                                <div className="col-lg-1">
                                    <NewEqModalWin/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-11">
                                    <ManufacturerSelectField ref="mn" source="/api/v1.0/manufacturer" value={this.state.value}/>
                                </div>
                                <div className="col-lg-1">
                                    <NewManufacModalWin/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-11">
                                    <LocationSelectField ref="loc" source="/api/v1.0/location" value={this.state.value}/>
                                </div>
                                <div className="col-lg-1">
                                    <NewLocationModalWin/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-11">
                                    <VisualInspBySelectField ref="vis" source="/api/v1.0/visual_inspection_by" value={this.state.value} />
                                </div>
                                <div className="col-lg-1">
                                    <NewVisualInspByModalWin/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-11">
                                    <AssignedToSelectField  ref="ast" source="/api/v1.0/assigned_to" value={this.state.value} />
                                </div>
                                <div className="col-lg-1">
                                    <NewAssignedToModalWin/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-11">
                                    <NormSelectField ref="norms" source="/api/v1.0/norm" value={this.state.value} />
                                </div>
                                <div className="col-lg-1">
                                    <NewNormModalWin/>
                                </div>
                            </div>
                            <FormGroup controlId="inputNameField" >
                                <ControlLabel>Name</ControlLabel>
                                <FormControl type="text" placeholder="name" ref="name" />
                            </FormGroup>

                            <FormGroup controlId="EqNumberField" >
                                <ControlLabel>Equipment Number</ControlLabel>
                                <FormControl type="text" placeholder="equipment number" ref="number"/>
                            </FormGroup>

                            <FormGroup controlId="inputSerialField" >
                                <ControlLabel>Serial</ControlLabel>
                                <FormControl type="text" placeholder="serial" ref="serial"/>
                            </FormGroup>
                            <div className="row">
                                <div className="col-lg-5">
                                    <FrequencySelectField title="Frequency"  ref="frequency" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5">
                                    <ManufacturedSelectField title="Manufactured" id="manufactured"/>
                                </div>
                            </div>
                            <FormGroup controlId="descriptionTextarea">
                                <ControlLabel>Description</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="description" ref="description"/>
                            </FormGroup>

                            <FormGroup controlId="commentsTextarea">
                                <ControlLabel>Comments</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="comments" ref="comments"/>
                            </FormGroup>

                            <FormGroup controlId="DateTimePicker">
                                <ControlLabel>Visual Date</ControlLabel>
                                <DateTimePicker defaultText="Please select a date"/>
                            </FormGroup>

                            <FormGroup controlId="visualInspectionCommentsTextarea">
                                <ControlLabel>Visual Inspection Comments</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="visComments" ref="vis_comments"/>
                            </FormGroup>

                            <FormGroup controlId="tapChangesTextarea" ref="nr_taps">
                                <ControlLabel>Nbr of Tap Changes LTC</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="tap changes" ref="nr_taps"/>
                            </FormGroup>

                            <FormGroup controlId="upstream1Input" >
                                <ControlLabel>Upstream 1</ControlLabel>
                                <FormControl type="text" placeholder="upstream 1" ref="upstream1"/>
                            </FormGroup>

                            <FormGroup controlId="physPositionInput" >
                                <ControlLabel>Phys Position</ControlLabel>
                                <FormControl type="text" placeholder="phys position " ref="phys_position"/>
                            </FormGroup>

                            <FormGroup controlId="tensionInput" >
                                <ControlLabel>Tension4</ControlLabel>
                                <FormControl type="text" placeholder="tension4 " ref="tension4"/>
                            </FormGroup>

                            <Checkbox ref="validated">Validated</Checkbox>
                            <Checkbox ref="invalidation">Invalidation</Checkbox>

                            <FormGroup controlId="prevSerialNumInput" >
                                <ControlLabel>Prev Serial Number</ControlLabel>
                                <FormControl type="text" placeholder="prev serial number " ref="prev_serial"/>
                            </FormGroup>

                            <FormGroup controlId="prevEquipNumInput" >
                                <ControlLabel>Prev Equipment Number</ControlLabel>
                                <FormControl type="text" placeholder="prev equipment number " ref="prev_eqnumb"/>
                            </FormGroup>
                            <Button bsStyle="success" type="submit">Save</Button>
                            <Button bsStyle="danger" onClick={this.close}>Close</Button>
                        </Panel>
                    </div>
                </form>
            </div>
        );
    }
});

export default EquipmentForm;
