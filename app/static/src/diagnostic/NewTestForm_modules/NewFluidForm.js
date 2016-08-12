import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import {findDOMNode} from 'react-dom';


var items= [];



var NewFluidForm = React.createClass ({


    _create: function () {
        var fields = [
            'name'
        ];
        var data = {};
        for (var i=0;i<fields.length;i++){
            var key= fields[i];
            data[key] = this.state[key];
        }
        console.log(data);

        return $.ajax({
            url: '/api/v1.0/fluid_type/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
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
        // console.log(e.target.type);
        if(e.target.type == 'checkbox'){
            state[e.target.name] = e.target.checked;
        }
        else if(e.target.type == 'select-one'){
            state[e.target.name] = e.target.value;
        }
        else{
            state[e.target.name] = $.trim(e.target.value);
        }
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

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            equipment_number: ''
        }
    },

    handleClick: function() {
        document.getElementById('test_prof').remove();
    },

    render : function() {

        return(
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <Panel header="New Fluid Profile">

                        <div className="maxwidth">
                            <FormGroup>
                                <FormControl type="text"
                                             placeholder="Name"
                                             name="name"
                                />
                            </FormGroup>
                        </div>

                        <div className="row">
                            <div className="col-md-12 ">
                                <Button bsStyle="success"
                                        className="btn btn-success pull-right"
                                        type="submit"
                                        onClick={this.props.handleClose}
                                >Save</Button>
                                &nbsp;
                                <Button bsStyle="danger"
                                        className="pull-right"
                                        onClick={this.props.handleClose}
                                        className="pull-right margin-right-xs"
                                >Cancel</Button>
                            </div>
                        </div>
                    </Panel>
                </form>
            </div>
        );
    }
});


export default NewFluidForm;