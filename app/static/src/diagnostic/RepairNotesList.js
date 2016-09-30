import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Accordion from 'react-bootstrap/lib/Accordion';
import {Link} from 'react-router';
import Table from 'react-bootstrap/lib/Table';
import {NotificationContainer, NotificationManager} from 'react-notifications';


var TestRepairNote = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

    getInitialState: function () {
        return {
            items: [],
            isVisible: true
        };
    },

    edit: function () {
        this.props.editTestForm(this.props.data.id);
    },

    render: function () {
        var item = this.props.data;
        
        return (
            <tr>
                <td>{item.date_created}</td>
                 <td>
                    <span title={item.recommendation.description}>
                        {item.recommendation.description ? item.recommendation.description.substring(0, 100) : ""}
                    </span>
                </td>
                <td>
                    <span title={item.recommendation.remark}>
                        {item.recommendation.remark ? item.recommendation.remark.substring(0, 100) : ""}
                    </span>
                </td>

                <td>
                    <a href="javascript:void(0)"
                       className="glyphicon glyphicon-edit text-success"
                       aria-hidden="true">
                    </a>
                    <a href="javascript:void(0)"
                       className="glyphicon glyphicon-remove text-danger"
                       aria-hidden="true">
                    </a>
                </td>
            </tr>
        );
    }
});


var RepairNotesList = React.createClass({

    getInitialState: function () {
        return {
            notes: [],
            isVisible: true
        }
    },

    componentWillReceiveProps: function (nextProps) {
        var testResultId = nextProps.testResultId;
        var testTypeId = nextProps.testTypeId;
        if (testResultId && testTypeId &&
            testResultId != this.props.testResultId && testTypeId != this.props.testTypeId
        ) {
            var urlParams = 'test_type_id=' + testTypeId + '&test_result_id=' + testResultId;
            var url = '/api/v1.0/test_repair_note/?' + urlParams;

            this.serverRequest = $.get(url,
                function (result) {
                    this.setState({
                        notes: result['result']
                    });

                }.bind(this), 'json');
        }
    },
    

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    reloadList: function () {
        this.componentDidMount();
    },

    render: function () {

        console.log("data state:", this.props.data);

        return (
            <div>
                <div className="row">
                    <Accordion>
                        <Panel header="Test repair notes">
                            <Table responsive hover id="test_repair">
                                <thead>
                                <tr>
                                    <th className="col-md-3">Date</th>
                                    <th className="col-md-3">Description</th>
                                    <th className="col-md-3">Remark</th>
                                    <th className="col-md-3">Actions</th>
                                </tr>
                                </thead>
                                <tbody>

                                <button className="btn btn-primary btn-xs"><span
                                    className="glyphicon glyphicon-pencil"></span></button>
                                &nbsp;
                                <button className="btn btn-danger btn-xs"><span
                                    className="glyphicon glyphicon-trash"></span></button>
                                </tbody>
                            </Table>
                        </Panel>
                    </Accordion>
                </div>
            </div>
        );
    }
});

export default RepairNotesList;