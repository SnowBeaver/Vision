import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import {findDOMNode} from 'react-dom';
import { hashHistory } from 'react-router';
import {Link} from 'react-router';



var PrimaryWindingTestPanel = React.createClass({


    render: function () {
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>H1-H2</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase1"
                                         name="mesure1"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Temperature(C)</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase1"
                                         name="temp1"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Corr. 75C</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase1"
                                         name="corr1"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>H2-H3</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase2"
                                         name="mesure2"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Temperature(C)</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase2"
                                         name="temp2"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Corr. 75C</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase2"
                                         name="corr2"
                            />
                        </FormGroup>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>H3-H1</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase3"
                                         name="mesure3"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Temperature</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase3"
                                         name="temp3"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Corr. 75C</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase3"
                                         name="corr3"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-3">
                        <FormGroup>
                            <ControlLabel>Winding</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0.0"
                                         name="winding"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-3">
                        <FormGroup>
                            <ControlLabel>Tap Position</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0.0"
                                         name="tap_position"
                            />
                        </FormGroup>
                    </div>

                </div>
            </div>
        )
    }


});


var SecondaryWindingTestPanel = React.createClass({


    render: function () {
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>X1-X2</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase1"
                                         name="mesure1"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Temperature(C)</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase1"
                                         name="temp1"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Corr. 75C</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase1"
                                         name="corr1"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>X2-X3</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase2"
                                         name="mesure2"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Temperature(C)</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase2"
                                         name="temp2"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Corr. 75C</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase2"
                                         name="corr2"
                            />
                        </FormGroup>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>X3-X1</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase3"
                                         name="mesure3"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Temperature</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase3"
                                         name="temp3"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Corr. 75C</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase3"
                                         name="corr3"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-3">
                        <FormGroup>
                            <ControlLabel>Winding</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0.0"
                                         name="winding"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-3">
                        <FormGroup>
                            <ControlLabel>Tap Position</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0.0"
                                         name="tap_position"
                            />
                        </FormGroup>
                    </div>

                </div>
            </div>
        )
    }


});


var TertiaryWindingTestPanel = React.createClass({


    render: function () {
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>X1-X2</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase1"
                                         name="mesure1"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Temperature(C)</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase1"
                                         name="temp1"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Corr. 75C</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase1"
                                         name="corr1"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>X2-X3</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase2"
                                         name="mesure2"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Temperature(C)</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase2"
                                         name="temp2"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Corr. 75C</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase2"
                                         name="corr2"
                            />
                        </FormGroup>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>X3-X1</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase3"
                                         name="mesure3"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Temperature</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase3"
                                         name="temp3"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup>
                            <ControlLabel>Corr. 75C</ControlLabel>
                            <FormControl type="text"
                                         placeholder="Phase3"
                                         name="corr3"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-3">
                        <FormGroup>
                            <ControlLabel>Winding</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0.0"
                                         name="winding"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-3">
                        <FormGroup>
                            <ControlLabel>Tap Position</ControlLabel>
                            <FormControl type="text"
                                         placeholder="0.0"
                                         name="tap_position"
                            />
                        </FormGroup>
                    </div>

                </div>
            </div>
        )
    }


});


var NewWindingResistanceTestForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            numberOfTaps: 1,
            showPrimaryWindingTestPanel: true,
            showSecondaryWindingTestPanel: false,
            showTertiaryWindingTestPanel: false,
            errors: {},
            fields: [
                'temp1', 'corr1', 'measure1', 'temp2', 'corr2', 'measure2',
                'temp3', 'corr3', 'measure3', 'winding', 'tap_position'

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
            url: '/api/v1.0/winding_resistance_test/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
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
        // this.setState(this.getInitialState());

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
        state[e.target.name] = $.trim(e.target.value);
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

    onWindNumButtonClick: function (e) {
        if (e.target.id === 'primary') {
            this.setState({
                showPrimaryWindingTestPanel: true,
                showSecondaryWindingTestPanel: false,
                showTertiaryWindingTestPanel: false
            })
        }
        else if (e.target.id === 'secondary') {
            this.setState({
                showPrimaryWindingTestPanel: false,
                showSecondaryWindingTestPanel: true,
                showTertiaryWindingTestPanel: false
            })
        }
        else if (e.target.id === 'tertiary') {
            this.setState({
                showPrimaryWindingTestPanel: false,
                showSecondaryWindingTestPanel: false,
                showTertiaryWindingTestPanel: true
            })
        }

    },


    onClickTapAdd: function () {

        this.setState({
            numberOfTaps : this.state.numberOfTaps + 1
        });
    },

    onClickTapRemove: function () {

        this.setState({
            numberOfTaps : this.state.numberOfTaps - 1
        });
    },


    render: function () {

        var windings=[];
        var numberOfTaps= this.state.numberOfTaps;
        for(var i=1; i<=numberOfTaps; i++){
            var headName = "Primary Winding " + i;
            windings.push(
                <Panel header={headName}
                       eventKey={i}>
                    <PrimaryWindingTestPanel/>
                </Panel>);
        }


        return (
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>

                    <div className="row">
                        <PanelGroup defaultActiveKey={this.state.eventKey=1} accordion>
                            {windings}
                        </PanelGroup>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <a href="javascript:void(0)"
                               className="glyphicon glyphicon-plus"
                               onClick={this.onClickTapAdd}
                               aria-hidden="true">&nbsp;</a>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <a href="javascript:void(0)"
                                   className="glyphicon glyphicon-minus"
                                   onClick={this.onClickTapRemove}
                                   aria-hidden="true">&nbsp;</a>
                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-md-offset-3">
                            <div className="col-md-2">
                                <a id="primary"
                                   className="btn btn-info"
                                   onClick={this.onWindNumButtonClick}
                                >Primary</a>
                            </div>
                            <div className="col-md-2">
                                <a id="secondary"
                                   className="btn btn-info"
                                   onClick={this.onWindNumButtonClick}
                                >Secondary</a>
                            </div>
                            <div className="col-md-2">
                                <a id="tertiary"
                                   className="btn btn-info"
                                   onClick={this.onWindNumButtonClick}
                                >Tertiary</a>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 ">
                            <Button bsStyle="success"
                                    className="pull-right"
                                    onClick={this.props.handleClose}
                                    type="submit">Save</Button>
                            &nbsp;
                            <Button bsStyle="danger"
                                    className="pull-right margin-right-xs"
                                    onClick={this.props.handleClose}
                            >Cancel</Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});


export default NewWindingResistanceTestForm;