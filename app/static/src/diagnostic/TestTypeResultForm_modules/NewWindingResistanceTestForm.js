import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Radio from 'react-bootstrap/lib/Radio';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';


const TextField = React.createClass({
    render: function() {
        var label = (this.props.label != null) ? this.props.label: "";
        var name = (this.props.name != null) ? this.props.name: "";
        var value = (this.props.value != null) ? this.props.value: "";
        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
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
                    <div className="col-md-2">
                        <TextField onChange={this._onChange}
                                   name="mesure1"
                                   label="H1-H2"
                                   value={data.mesure1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this._onChange}
                                   name="temp1"
                                   label="Temperature(C)"
                                   value={data.temp1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this._onChange}
                                   name="corr1"
                                   label="Corr. 75C"
                                   value={data.corr1}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this._onChange}
                                   name="mesure2"
                                   label="H2-H3"
                                   value={data.mesure2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this._onChange}
                                   name="temp2"
                                   label="Temperature(C)"
                                   value={data.temp2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this._onChange}
                                   name="corr2"
                                   label="Corr. 75C"
                                   value={data.corr2}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this._onChange}
                                   name="mesure3"
                                   label="H3-H1"
                                   value={data.mesure3}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this._onChange}
                                   name="temp3"
                                   label="Temperature"
                                   value={data.temp3}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this._onChange}
                                   name="corr3"
                                   label="Corr. 75C"
                                   value={data.corr3}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this._onChange}
                                   name="winding"
                                   label="Winding"
                                   value={data.winding}/>
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this._onChange}
                                   name="tap_position"
                                   label="Tap Position"
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
            tests: {'1': {}},
            errors: {},
            fields: [
                'temp1', 'corr1', 'measure1', 'temp2', 'corr2', 'measure2',
                'temp3', 'corr3', 'measure3', 'winding', 'tap_position'

            ]
        }
    },

    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.tableName + '/?test_result_id=' + this.props.testResultId;
        this.serverRequest = $.get(source, function (result) {
            var res = (result['result']);
            var fields = this.state.fields;
            fields.push('id');
            var tests = {};
            for (var i = 1; i <= res.length; i++) {
                var test = {};
                var data = res[i];
                for (var j = 0; j < fields.length; j++) {
                    var key = fields[j];
                    if (data.hasOwnProperty(key)) {
                        test[key] = data[key];
                    }
                }
                tests[i.toString()] = test;
            }
            this.setState({numberOfTaps: i, tests: tests});
        }.bind(this), 'json');
    },

    _create: function () {
        var fields = this.state.fields;
        var data = {test_result_id: this.props.testResultId};
        var url = '/api/v1.0/' + this.props.tableName + '/';
        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            data[key] = this.state[key];
        }
        if ('id' in this.state) {
            url += this.state['id'];
        }
        return $.ajax({
            url: url,
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
           state[e.target.name] = $.trim(e.target.value);
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

    handleFieldChange: function(testId, name, value) {
        // {1: {'a': 1, 'b':2} 2: {'a': 3, 'b':4}}
        var tests = this.state.tests;
        var fieldNameValue = this.state.tests[testId] || {};
        fieldNameValue[name] = value;
        tests[testId] = fieldNameValue;
        console.log('handleFieldChange', testId);
        console.log('handleFieldChange', JSON.stringify(fieldNameValue));
        console.log('handleFieldChange', JSON.stringify(tests));
        this.setState({tests: tests});
        // this.setState({
        //     tests: update(this.state.tests, {testId: {name: {$set: value}}})
        // })
      },

    onClickTapAdd: function () {
        this.setState({
            numberOfTaps: this.state.numberOfTaps + 1
        });
    },

    onClickTapRemove: function () {
        this.setState({
            numberOfTaps: this.state.numberOfTaps - 1
        });
    },

    render: function () {
        var windings=[];
        var numberOfTaps= this.state.numberOfTaps;
        for(var i=1; i<=numberOfTaps; i++){
            var headName = "Primary Winding " + i;
            var props = {
                testId: i.toString(),
                onChange: this.handleFieldChange,
                data: this.state.tests[i.toString()]
            };
            windings.push(
                <Panel header={headName}
                       key={"primary_winding_" + i}
                       eventKey={i}>
                    <PrimaryWindingTestPanel {...props}/>
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
