import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import {findDOMNode} from 'react-dom';
import Panel from 'react-bootstrap/lib/Panel';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import  Modal from 'react-bootstrap/lib/Modal';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import AssignTestForm from './AssignTestForm';
import EquipmentForm from './EquipmentForm'


var selectFields = [];
var numb=1;

var TestModalWin = React.createClass({

    getInitialState() {
        return { showModal: false };
    },

    close() {
        this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },


    render() {
        return (
            <span>
                <Button bsStyle="success" onClick={this.open}>
                  TESTS
                </Button>
                <Modal show={this.state.showModal}  {...this.props}  >
                    <AssignTestForm/>
                  <Modal.Footer>
                      <div className="row">
                                    <div className="col-md-5">
                                    </div>
                                    <div className="col-md-1 nopadding padding-right-xs">
                                        <Button bsStyle="success" type="submit">save</Button>
                                    </div>
                                    <div className="col-md-1 ">
                                        <Button bsStyle="danger" onClick={this.close}>cancel</Button>
                                    </div>
                                </div>
                  </Modal.Footer>
                </Modal>
              </span>
        );
    }
});



var AddEquipmentButton = React.createClass({

    getInitialState() {
        return { showModal: false };
    },

    close() {
        this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },

    onClick: function () {


    },

    render: function () {
        return(
            <span>
                <Button bsStyle="primary" onClick={this.open}>NEW</Button>
                    <Modal show={this.state.showModal}  {...this.props}  >
                    <EquipmentForm/>
                  <Modal.Footer>
                      <Button bsStyle="success" type="submit">Save</Button>
                    <Button bsStyle="danger" onClick={this.close}>Close</Button>
                  </Modal.Footer>
                </Modal>
                </span>
        );
    }
});




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
            menuItems.push(<option value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        return (
            <span>
                <FormGroup controlId="formControlsSelect1">
                    <ControlLabel>Equipment type</ControlLabel>
                    <FormControl componentClass="select" placeholder="equipment type" onChange={this.handleChange}>
                        <option value="select">select equipment type</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </span>

        );
    }
});



var AddEquipmentForm = React.createClass({


    onClickSelectRemove: function () {
        document.getElementById('select_field').remove();
    },

    onClickSelectAdd: function () {
       this.setState({ numberOfSelects: nbr++})

    },


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

    render :function () {
        return(
            <div className="form-container">
                <form className="" method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <Panel header="Specify equipment">
                        <div className="row">
                            <div className="col-md-6 " id="select_field" >
                                <EquipmentTypeSelectField/>
                            </div>
                            <div className="col-md-1 ">
                                <a href="javascript:void(0)"  className="glyphicon glyphicon-plus" onClick={this.onClickSelectAdd}  aria-hidden="true"></a>
                            </div>
                            <div className="col-md-1 ">
                                <a href="javascript:void(0)"  className="glyphicon glyphicon-remove" onClick={this.onClickSelectRemove}  aria-hidden="true"></a>
                            </div>
                            <div className="col-md-1 ">
                                <AddEquipmentButton/>
                            </div>
                            <div className="col-md-1 ">
                                <TestModalWin/>
                            </div>
                        </div>
                    </Panel>

                </form>
            </div>
        );
    }
});

export default AddEquipmentForm;