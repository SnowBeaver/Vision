import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import {Link} from 'react-router';
import Table from 'react-bootstrap/lib/Table';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var RepairNotesList = React.createClass({

    getInitialState: function () {
        return {
            
        };
    },

    componentWillReceiveProps: function (nextProps) {


    },

    componentWillUnmount: function () {
    },

    render: function () {
        return (
            <div>
                <div className="row">
                    <Panel header="Test repair notes" >
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
                                <button className="btn btn-primary btn-xs" ><span className="glyphicon glyphicon-pencil"></span></button>
                                &nbsp;
                                <button className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-trash"></span></button>
                            </tbody>
                        </Table>
                    </Panel>
                </div>
            </div>
        );
    }
});

export default RepairNotesList;