import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Radio from 'react-bootstrap/lib/Radio';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import {NotificationContainer, NotificationManager} from 'react-notifications';


const TextField = React.createClass({
    render: function() {
        var label = (this.props.label != null) ? this.props.label: "";
        var name = (this.props.name != null) ? this.props.name: "";
        var value = (this.props.value != null) ? this.props.value: "";
        return (
            <FormGroup>
                <FormControl type="text"
                             placeholder={label}
                             name={name}
                             value={value}
                             onChange={this.props.onChange}
                />
                <FormControl.Feedback />
            </FormGroup>
        );
    }
});

var PrimaryWindingTestPanel = React.createClass({
    _onChange: function (e) {
        this.props.onChange(this.props.testId, e.target.name, e.target.value);
    },
    // handleFieldChange: function(name, value) {
    // _onChange: function(name, value) {
    //     this.props.onChange(this.props.testId, name, value);
    // },

    render: function () {
        var data = (this.props.data != null) ? this.props.data: {};
        return(
            <div className="form-container">
                <div className="row">
                    <div className="col-md-1">
                        <a href="javascript:void(0)"
                           className="glyphicon glyphicon-minus"
                           onClick={this.onClickTapRemove}
                           >Remove</a>
                    </div>
                    <div className="col-md-1">
                        <TextField onChange={this._onChange}
                                   name="mesure1"
                                   label="H1-H2"
                                   value={data.mesure1}/>
                    </div>
                    <div className="col-md-1">
                        <TextField onChange={this._onChange}
                                   name="temp1"
                                   label="Temp(C)"
                                   value={data.temp1}/>
                    </div>
                    <div className="col-md-1">
                        <TextField onChange={this._onChange}
                                   name="corr1"
                                   label="Corr.75C"
                                   value={data.corr1}/>
                    </div>
                    <div className="col-md-1">
                        <TextField onChange={this._onChange}
                                   name="mesure2"
                                   label="H2-H3"
                                   value={data.mesure2}/>
                    </div>
                    <div className="col-md-1">
                        <TextField onChange={this._onChange}
                                   name="temp2"
                                   label="Temp(C)"
                                   value={data.temp2}/>
                    </div>
                    <div className="col-md-1">
                        <TextField onChange={this._onChange}
                                   name="corr2"
                                   label="Corr.75C"
                                   value={data.corr2}/>
                    </div>

                    <div className="col-md-1">
                        <TextField onChange={this._onChange}
                                   name="mesure3"
                                   label="H3-H1"
                                   value={data.mesure3}/>
                    </div>
                    <div className="col-md-1">
                        <TextField onChange={this._onChange}
                                   name="temp3"
                                   label="Temp"
                                   value={data.temp3}/>
                    </div>
                    <div className="col-md-1">
                        <TextField onChange={this._onChange}
                                   name="corr3"
                                   label="Corr.75C"
                                   value={data.corr3}/>
                    </div>
                    <div className="col-md-1">
                        <TextField onChange={this._onChange}
                                   name="winding"
                                   label="Winding"
                                   value={data.winding}/>
                    </div>
                    <div className="col-md-1">
                        <TextField onChange={this._onChange}
                                   name="tap_position"
                                   label="Tap pos"
                                   value={data.tap_position}/>
                    </div>
                </div>
            </div>
        )
    }
});


var SecondaryWindingTestPanel = React.createClass({
    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-1">
                        <TextField name="mesure1" label="X1-X2" value={this.state.mesure1}/>
                    </div>
                    <div className="col-md-1">
                        <TextField name="temp1" label="Temperature(C)" value={this.state.temp1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField name="corr1" label="Corr. 75C" value={this.state.corr1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField name="mesure2" label="X2-X3" value={this.state.mesure2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField name="temp2" label="Temperature(C)" value={this.state.temp2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField name="corr2" label="Corr. 75C" value={this.state.corr2}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <TextField name="mesure3" label="X3-X1" value={this.state.mesure3}/>
                    </div>
                    <div className="col-md-2">
                        <TextField name="temp3" label="Temperature" value={this.state.temp3}/>
                    </div>
                    <div className="col-md-2">
                        <TextField name="corr3" label="Corr. 75C" value={this.state.corr3}/>
                    </div>
                    <div className="col-md-3">
                        <TextField name="winding" label="Winding" value={this.state.winding}/>
                    </div>
                    <div className="col-md-3">
                        <TextField name="tap_position" label="Tap Position" value={this.state.tap_position}/>
                    </div>

                </div>
            </div>
        )
    }
});


var TertiaryWindingTestPanel = React.createClass({


    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField name="mesure1" label="X1-X2" value={this.state.mesure1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField name="temp1" label="Temperature(C)" value={this.state.temp1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField name="corr1" label="Corr. 75C" value={this.state.corr1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField name="mesure2" label="X2-X3" value={this.state.mesure2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField name="temp2" label="Temperature(C)" value={this.state.temp2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField name="corr2" label="Corr. 75C" value={this.state.corr2}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <TextField name="mesure3" label="X3-X1" value={this.state.mesure3}/>
                    </div>
                    <div className="col-md-2">
                        <TextField name="temp3" label="Temperature" value={this.state.temp3}/>
                    </div>
                    <div className="col-md-2">
                        <TextField name="corr3" label="Corr. 75C" value={this.state.corr3}/>
                    </div>
                    <div className="col-md-3">
                        <TextField name="winding" label="Winding" value={this.state.winding}/>
                    </div>
                    <div className="col-md-3">
                        <TextField name="tap_position" label="Tap Position" value={this.state.tap_position}/>
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
            tests: [],
            errors: {},
            fields: [
                'temp1', 'corr1', 'mesure1', 'temp2', 'corr2', 'mesure2',
                'temp3', 'corr3', 'mesure3', 'winding', 'tap_position'

            ]
        }
    },

    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.tableName + '/?test_result_id=' + this.props.testResultId;
        this.serverRequest = $.get(source, function (result) {
            var res = (result['result']);
            var fields = this.state.fields;
            fields.push('id');
            var tests = [];
            for (var i = 0; i < res.length; i++) {
                var test = {position: i+1};
                var data = res[i];
                for (var j = 0; j < fields.length; j++) {
                    var key = fields[j];
                    if (data.hasOwnProperty(key)) {
                        test[key] = data[key];
                    }
                }
                tests[i] = test;
            }
            this.setState({numberOfTaps: res.length, tests: tests});
        }.bind(this), 'json');
    },

    _create: function () {
        var fields = this.state.fields;
        var numberOfTaps = this.state.numberOfTaps;
        var tests = this.state.tests;
        var data = [];
        for (var i = 1; i <= numberOfTaps; i++) {
            var test = {test_result_id: this.props.testResultId};
            var tap = tests[i];
            for (var j = 0; j < fields.length; j++) {
                var key = fields[j];
                test[key] = tap[key];
            }
            data.push(test)
        }
        return $.ajax({
            url: '/api/v1.0/test_result/multi/' + this.props.tableName,
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
        // Do not propagate the submit event of the main form
        e.stopPropagation();
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
        NotificationManager.success('Test values have been saved successfully.');
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
       if (e.target.type == 'checkbox') {
           state[e.target.name] = e.target.checked;
       }
       else if (e.target.type == 'radio') {
           state[e.target.name] = e.target.value;
       }
       else if (e.target.type == 'select-one') {
           state[e.target.name] = e.target.value;
       }
       else {
           state[e.target.name] = e.target.value;
       }
       this.setState(state);
   },

    _onFilterChange: function (e) {
        var state = {
            showPrimaryWindingTestPanel: false,
            showSecondaryWindingTestPanel: false,
            showTertiaryWindingTestPanel: false
        };
        if (e.target.id === 'primary') {
            state['showPrimaryWindingTestPanel'] = true;
        }
        else if (e.target.id === 'secondary') {
            state['showSecondaryWindingTestPanel'] = true;
        }
        else if (e.target.id === 'tertiary') {
            state['showTertiaryWindingTestPanel'] = true;
        }
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

    // handleFieldChange: function(testId, name, value) {
    //     var tests = this.state.tests;
    //     var fieldNameValue = this.state.tests[testId] || {};
    //     fieldNameValue[name] = value;
    //     tests[testId] = fieldNameValue;
    //     this.setState({tests: tests});
    //     // this.setState({
    //     //     tests: update(this.state.tests, {testId: {name: {$set: value}}})
    //     // })
    // },
    //
    // onClickTapAdd: function () {
    //     this.setState({
    //         numberOfTaps: this.state.numberOfTaps + 1
    //     });
    // },
    //
    // onClickTapRemove: function () {
    //     this.setState({
    //         numberOfTaps: this.state.numberOfTaps - 1
    //     });
    // },
    afterSaveCell: function () {
        console.log('afterSaveCell')
    },
    beforeSaveCell: function () {
        console.log('beforeSaveCell')
    },

    render: function () {
        // var windings=[];
        // var test_data = this.state.tests;
        console.log('render');
        var numberOfTaps= this.state.numberOfTaps;
        // for(var i=1; i<=numberOfTaps; i++){
            // var headName = "Primary Winding " + i;
            // var props = {
            //     testId: i.toString(),
            //     onChange: this.handleFieldChange,
            //     data: this.state.tests[i.toString()]
            // };
            // windings.push(
            //         <PrimaryWindingTestPanel
            //             key={"primary_winding_" + i}
            //             {...props}/>
            // );
        //     test_data.push(this.state.tests[i.toString()]);
        // }


        return (
            <div className="form-container">
                <form method="post" action="#" onSubmit={this._onSubmit} >
                    <BootstrapTable data={this.state.tests}
                                    striped={true}
                                    hover={true}
                                    condensed={true}
                                    ignoreSinglePage={true}
                                    insertRow={true}
                                    deleteRow={true}
                                    selectRow={{mode: "checkbox", clickToSelect: true,
                                        bgColor: "rgb(238, 193, 213)",}}
                                    cellEdit={{mode: "click", beforeSaveCell: this.beforeSaveCell, afterSaveCell: this.afterSaveCell}}
                    >
                        <TableHeaderColumn dataField="id" hidden={true} hiddenOnInsert={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="position" isKey={true}>N</TableHeaderColumn>
                        <TableHeaderColumn dataField="mesure1" editable={true} dataSort={true}>H1-H2</TableHeaderColumn>
                        <TableHeaderColumn dataField="temp1" >Temp(C)</TableHeaderColumn>
                        <TableHeaderColumn dataField="corr1" >Corr.75C</TableHeaderColumn>
                        <TableHeaderColumn dataField="mesure2" >H2-H3</TableHeaderColumn>
                        <TableHeaderColumn dataField="temp2" >Temp(C)</TableHeaderColumn>
                        <TableHeaderColumn dataField="corr2" >Corr.75C</TableHeaderColumn>
                        <TableHeaderColumn dataField="mesure3" >H3-H1</TableHeaderColumn>
                        <TableHeaderColumn dataField="temp3" >Temp</TableHeaderColumn>
                        <TableHeaderColumn dataField="corr3" >Corr.75C</TableHeaderColumn>
                        <TableHeaderColumn dataField="winding" >Winding</TableHeaderColumn>
                        <TableHeaderColumn dataField="tap_position" >Tap pos</TableHeaderColumn>
                    </BootstrapTable>
                    <div className="row">
                        <div className="col-md-2">
                            <a href="javascript:void(0)"
                               className="glyphicon glyphicon-plus"
                               onClick={this.onClickTapAdd}
                               aria-hidden="true">Add new Tap</a>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <a href="javascript:void(0)"
                                   className="glyphicon glyphicon-minus"
                                   onClick={this.onClickTapRemove}
                                   aria-hidden="true">Remove Tap</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-offset-7">
                            <div className="col-md-3" >
                                <Radio name="filter" id="primary" onClick={this._onFilterChange}>Primary(H)</Radio>
                            </div>
                            <div className="col-md-3" >
                                <Radio name="filter" id="secondary" onClick={this._onFilterChange} >Secondary(X)</Radio>
                            </div>
                            <div className="col-md-3" >
                                <Radio name="filter" id="tertiary" onClick={this._onFilterChange} >Tertiary(T)</Radio>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ">
                            <Button bsStyle="success"
                                    className="pull-right"
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
