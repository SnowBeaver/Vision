import React from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import {Link} from 'react-router';
import Table from 'react-bootstrap/lib/Table';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var TestDiagnosis = React.createClass({

    getInitialState: function () {
        return {
            items: [],
            isVisible: true
        };
    },


    render: function () {
        var diagnosis = this.props.data;
        return (
            <tr>
                <td>{diagnosis ? diagnosis.diagnosis_notes : ""}</td>
                <td>
                    <span title={diagnosis ? diagnosis.date_created : ""}>
                        {diagnosis && diagnosis.date_created ? diagnosis.date_created.substring(0, 100) : ""}
                    </span>
                </td>
                <td>
                    <span title={diagnosis ? diagnosis.date_updated : ""}>
                        {diagnosis && diagnosis.date_updated ? diagnosis.date_updated.substring(0, 100) : ""}
                    </span>
                </td>
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


var TestDiagnosisList = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

    getInitialState: function () {
        return {
            diagnosis: [],
            isVisible: true
        };
    },

    componentWillReceiveProps: function (nextProps) {
        var testResultId = nextProps.testResultId;
        var testTypeId = nextProps.testTypeId;
        if (testResultId && testResultId != this.props.testResultId) {
            this._updateList(testResultId);
        }
    },

    _updateList: function (testResultId) {
        var urlParams = 'test_result_id=' + testResultId;
        var url = '/api/v1.0/test_diagnosis/?' + urlParams;
        this.serverRequest = $.get(url,
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

    render: function () {
        var diagnosis = [];
        for (var i = 0; i < this.state.diagnosis.length; i++) {
            var item = this.state.diagnosis[i];
            diagnosis.push(<TestDiagnosis key={item.id}
                                           data={item}/>)
        }
        return (
                <div>
                    <div className="row">
                        <Accordion>
                            <Panel header="Diagnosis" key="diagnosis" eventKey="diagnosis">
                                <Table responsive hover id="test_prof">
                                    <thead>
                                    <tr>
                                        <th className="col-md-5">Notes</th>
                                        <th className="col-md-3">Date Created</th>
                                        <th className="col-md-3">Date Updated</th>
                                        <th className="col-md-1">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {diagnosis}
                                    </tbody>
                                </Table>
                            </Panel>
                        </Accordion>
                    </div>
                </div>
        );
    }
});

export default TestDiagnosisList;