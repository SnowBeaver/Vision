import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Panel from 'react-bootstrap/lib/Panel';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import {findDOMNode} from 'react-dom';

const ElectricalProfileForm = React.createClass({

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

    render:function (){
        return(
            <div>
                <form className="" method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <div className="maxwidth">
                        <Panel header="Electrical profile test parametres">
                            <div className="scheduler-border">
                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border">Test requested</legend>
                                    <div className="control-group">
                                        <div className="maxwidth">
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox ref="bush_cap">Bushing Cap and PF</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox ref="ins_res">Insulation Resistance</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding">
                                                <Checkbox ref="polymer">Degree of Polymerization(DP)</Checkbox>
                                            </div>
                                        </div>
                                        <div className="maxwidth">
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox ref="wind_cap">Winding Cap an PF</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox ref="vis_insp">Visual Inspection</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding">
                                                <Checkbox ref="ratio">Turns Ration Test (TTR)</Checkbox>
                                            </div>
                                        </div>
                                        <div className="maxwidth">
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox ref="wind_cap">Winding Cap and PF Doble</Checkbox>
                                            </div>
                                            <div className="col-md-4 nopadding padding-right-xs">
                                                <Checkbox ref="res_win_con">Resistance; winding/contact</Checkbox>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                    <FormGroup>
                                        Save as
                                        <FormControl type="text" placeholder="electrical profile name" ref="elec_prof"/>
                                    </FormGroup>
                                    <ButtonToolbar>
                                    <Button bsStyle="success" type="submit">save</Button>
                                    <Button bsStyle="danger" >cancel</Button>
                                        </ButtonToolbar>

                            </div>
                        </Panel>
                    </div>
                </form>
            </div>
        );
    }
});

export default ElectricalProfileForm;