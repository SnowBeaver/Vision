import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Accordion from 'react-bootstrap/lib/Accordion';
import {Link} from 'react-router';
import Table from 'react-bootstrap/lib/Table';
import {NotificationContainer, NotificationManager} from 'react-notifications';


var TestRepairNote = React.createClass({

    getInitialState: function () {
        return {
            items: [],
            isVisible: true
        };
    },

    render: function () {
        var item = this.props.data;

        return (
            <tr>
                <td>{item.date_created}</td>
                <td>
                    <span title={item.description}>
                        {item.description ? item.description.substring(0, 100) : ""}
                    </span>
                </td>
                <td>
                    <span title={item.remark}>
                        {item.remark ? item.remark.substring(0, 100) : ""}
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


var RepairNotesList = React.createClass({

    getInitialState: function () {
        return {
            repair_notes: [],
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
                        repair_notes: result['result']
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

        var repair_notes = [];

        for (var i = 0; i < this.state.repair_notes.length; i++) {
            var item = this.state.repair_notes[i];
            repair_notes.push(<TestRepairNote key={item.id}
                                       data={item}/>)
        }

        return (
            <div>
                <div className="row">
                    <Accordion>
                        <Panel header="Test repair notes" key="repair_notes" eventKey="repair_notes">
                            <Table responsive hover id="test_repair">
                                <thead>
                                <tr>
                                    <th className="col-md-3">Date</th>
                                    <th className="col-md-4">Description</th>
                                    <th className="col-md-4">Remark</th>
                                    <th className="col-md-1">Actions</th>

                                </tr>
                                </thead>
                                <tbody>
                                {repair_notes}
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