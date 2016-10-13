import React from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import {Link} from 'react-router';
import Table from 'react-bootstrap/lib/Table';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {DATETIME_FORMAT} from './appConstants.js';


var TestDiagnosis = React.createClass({

    getInitialState: function () {
        return {
            items: [],
            isVisible: true
        };
    },

    render: function () {
        var item = this.props.data;
        var diagnosis = item.diagnosis;
        return (
            <tr>
                <td>{item.date_created ? moment(item.date_created).utcOffset(0).format(DATETIME_FORMAT) : ""}</td>
                <td>{diagnosis ? diagnosis.code : ""}</td>
                <td>
                    <span title={diagnosis ? diagnosis.name : ""}>
                        {diagnosis && diagnosis.name ? diagnosis.name.substring(0, 100) : ""}
                    </span>
                </td>
                <td>
                    <span title={diagnosis ? diagnosis.description : ""}>
                        {diagnosis && diagnosis.description ? diagnosis.description.substring(0, 100) : ""}
                    </span>
                </td>
                <td>
                    <span title={item.diagnosis_notes}>
                        {item.diagnosis_notes ? item.diagnosis_notes.substring(0, 100) : ""}
                    </span>
                </td>
                <td>{item.user ? item.user.name: ""}</td>
                <td>
                    <a href="javascript:void(0)"
                       className="btn btn-primary btn-xs">
                        <span className="glyphicon glyphicon-pencil"> </span>
                    </a>
                    &nbsp;
                    <a href="javascript:void(0)"
                       className="btn btn-danger btn-xs">
                        <span className="glyphicon glyphicon-trash"> </span>
                    </a>
                </td>
            </tr>
        );
    }
});


var GroupedDiagnosisList = React.createClass({

    getInitialState: function () {
        return {
            items: [],
            isVisible: true,
            accordionOpen: false
        };
    },

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

    edit: function () {
        this.props.editTestForm(this.props.data.id);
    },

    _changeAccordionState: function (state) {
        this.setState({accordionOpen: state});
    },

    render: function () {
        var diagnosis = [];
        var testTypeId = this.props.testTypeId;
        var panelClass = "pull-right glyphicon glyphicon-chevron-" + (this.state.accordionOpen ? "up" : "down");

        for (var i = 0; i < this.props.data.length; i++) {
            var item = this.props.data[i];
            diagnosis.push(<TestDiagnosis key={item.id}
                                          data={item}
                                          reloadList={this.props.reloadList}/>)
        }

        return (
            <Accordion>
                <Panel header={<h3>{this.props.header}<span className={panelClass}> </span></h3>}
                       key={"diagnosis" + testTypeId}
                       eventKey={"diagnosis" + testTypeId}
                       onEnter={() => this._changeAccordionState(true)}
                       onExit={() => this._changeAccordionState(false)}>
                    <Table responsive hover id="testDiagnosis">
                        <thead>
                        <tr>
                            <th className="col-md-2">Created on</th>
                            <th className="col-md-1">Code</th>
                            <th className="col-md-2">Name</th>
                            <th className="col-md-2">Diagnosis Description</th>
                            <th className="col-md-2">Test Diagnosis Description</th>
                            <th className="col-md-2">Created by</th>
                            <th className="col-md-1">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {diagnosis}
                        </tbody>
                    </Table>
                </Panel>
            </Accordion>
        );
    }
});


var TestDiagnosisList = React.createClass({

    getInitialState: function () {
        return {
            diagnosis: [],
            isVisible: true,
            accordionOpen: false
        };
    },

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

    componentWillReceiveProps: function (nextProps) {
        var testResultId = nextProps.testResultId;
        if (testResultId && testResultId != this.props.testResultId) {
            this._updateList(testResultId);
        }
    },

    _updateList: function (testResultId) {
        var urlParams = 'test_result_id=' + testResultId;
        var url = '/api/v1.0/test_diagnosis/?' + urlParams;
        this.serverRequest = $.authorizedGet(url,
            function (result) {
                this.setState({
                    diagnosis: result['result']
                });

            }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        if (this.serverRequest) {
            this.serverRequest.abort();
        }
    },

    reloadList: function (testResultId) {
        this._updateList(testResultId);
    },

    _changeAccordionState: function (state) {
        this.setState({accordionOpen: state});
    },

    render: function () {
        var diagnosisGroups = [];
        var diagnosis = [];
        var panelClass = "pull-right glyphicon glyphicon-chevron-" + (this.state.accordionOpen ? "up" : "down");

        for (var i = 0; i < this.state.diagnosis.length; i++) {
            var item = this.state.diagnosis[i];
            if (item.test_type_id) {
                if (!diagnosisGroups[item.test_type_id]) {
                    diagnosisGroups[item.test_type_id] = [];
                }
                diagnosisGroups[item.test_type_id].push(item);
            }
        }

        for (var i in diagnosisGroups) {
            diagnosis.push(<GroupedDiagnosisList key={i}
                                                 testTypeId={i}
                                                 data={diagnosisGroups[i]}
                                                 reloadList={this.props.reloadList}
                                                 header={diagnosisGroups[i][0].test_type.name}/>)
        }
        return (
            <div>
                <div className="row">
                    <Accordion >
                        <Panel header={<h3>Diagnosis<span className={panelClass}> </span></h3>}
                               key="diagnosisBlock"
                               eventKey="diagnosisBlock"
                               onEnter={() => this._changeAccordionState(true)}
                               onExit={() => this._changeAccordionState(false)}>
                            {diagnosis}
                        </Panel>
                    </Accordion>
                </div>
            </div>
        );
    }
});

export default TestDiagnosisList;