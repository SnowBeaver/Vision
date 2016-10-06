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


var GroupedRepairNotesList = React.createClass({

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
        var recommendations = [];
        var testTypeId = this.props.testTypeId;
        var panelClass = "pull-right glyphicon glyphicon-chevron-" + (this.state.accordionOpen ? "up" : "down");
        for (var i = 0; i < this.props.data.length; i++) {
            var item = this.props.data[i];
            recommendations.push(<TestRepairNote key={item.id}
                                                     data={item}
                                                     reloadList={this.props.reloadList}/>)
        }

        return (
            <Accordion>
                <Panel header={<h3>{this.props.header}<span className={panelClass}></span></h3>}
                       key={"repairNotes" + testTypeId}
                       eventKey={"repairNotes" + testTypeId}
                       onEnter={() => this._changeAccordionState(true)}
                       onExit={() => this._changeAccordionState(false)}>
                    <Table responsive hover id="test_repair">
                        <thead>
                        <tr>
                            <th className="col-md-3">Created on</th>
                            <th className="col-md-3">Description</th>
                            <th className="col-md-3">Remark</th>
                            <th className="col-md-2">Created by</th>
                            <th className="col-md-1">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recommendations}
                        </tbody>
                    </Table>
                </Panel>
            </Accordion>
        );
    }
});


var RepairNotesList = React.createClass({

    getInitialState: function () {
        return {
            repair_notes: [],
            isVisible: true,
            accordionOpen: false
        }
    },

    componentWillReceiveProps: function (nextProps) {
        var testResultId = nextProps.testResultId;
        if (testResultId && testResultId != this.props.testResultId) {
            var urlParams = '&test_result_id=' + testResultId;
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
        if (this.serverRequest) {
            this.serverRequest.abort();
        }
    },

    reloadList: function () {
        this.componentDidMount();
    },

    _changeAccordionState: function (state) {
        this.setState({accordionOpen: state});
    },

    render: function () {
        var repairNotes = [];
        var repairNotesGroups = [];
        var panelClass = "pull-right glyphicon glyphicon-chevron-" + (this.state.accordionOpen ? "up" : "down");

        for (var i = 0; i < this.state.repair_notes.length; i++) {
            var item = this.state.repair_notes[i];
            if (item.test_type_id) {
                if (!repairNotesGroups[item.test_type_id]) {
                    repairNotesGroups[item.test_type_id] = [];
                }
                repairNotesGroups[item.test_type_id].push(item);
            }
        }

        for (var i in repairNotesGroups) {
            repairNotes.push(<GroupedRepairNotesList key={i}
                                                     testTypeId={i}
                                                     data={repairNotesGroups[i]}
                                                     reloadList={this.props.reloadList}
                                                     header={repairNotesGroups[i][0].test_type.name}/>)
        }

        return (
                <div>
                    <div className="row">
                        <Accordion>
                            <Panel header={<h3>Test repair notes<span className={panelClass}></span></h3>}
                                   key="repairNotesBlock"
                                   eventKey="repairNotesBlock"
                                   onEnter={() => this._changeAccordionState(true)}
                                   onExit={() => this._changeAccordionState(false)}>
                                {repairNotes}
                            </Panel>
                        </Accordion>
                    </div>
                </div>
        );
    }
});

export default RepairNotesList;