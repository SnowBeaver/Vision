import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import {Link} from 'react-router';
import NewTestForm from './NewTestForm';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';
import {NotificationContainer, NotificationManager} from 'react-notifications';

var TestRecommendation = React.createClass({

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
        var recommendation = item.recommendation;
        return (
            <tr>
                <td>{item.date_created}</td>
                <td>{recommendation ? recommendation.code : ""}</td>
                <td>
                    <span title={recommendation ? recommendation.name : ""}>
                        {recommendation && recommendation.name ? recommendation.name.substring(0, 100) : ""}
                    </span>
                </td>
                <td>
                    <span title={recommendation ? recommendation.description : ""}>
                        {recommendation && recommendation.description ? recommendation.description.substring(0, 100) : ""}
                    </span>
                </td>
                <td>
                    <span title={item.recommendation_notes}>
                        {item.recommendation_notes ? item.recommendation_notes.substring(0, 100) : ""}
                    </span>
                </td>
                <td>{item.user ? item.user.name: ""}</td>
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


var TestRecommendationList = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

    getInitialState: function () {
        return {
            recommendations: [],
            isVisible: true,
        };
    },

    componentWillReceiveProps: function (nextProps) {
        var testResultId = nextProps.testResultId;
        var testTypeId = nextProps.testTypeId;
        if (testResultId && testTypeId &&
            testResultId != this.props.testResultId && testTypeId != this.props.testTypeId
        ) {
            this._updateList(testResultId, testTypeId);
            //var urlParams = 'test_result_id=' + testResultId + '&test_type_id=' + testTypeId;
            //var url = '/api/v1.0/test_recommendation/?' + urlParams;
            //this.serverRequest = $.get(url,
            //    function (result) {
            //        this.setState({
            //            recommendations: result['result']
            //        });
            //
            //    }.bind(this), 'json');
        }
    },

    _updateList: function (testResultId, testTypeId) {
        var urlParams = 'test_result_id=' + testResultId + '&test_type_id=' + testTypeId;
        var url = '/api/v1.0/test_recommendation/?' + urlParams;
        this.serverRequest = $.get(url,
            function (result) {
                this.setState({
                    recommendations: result['result']
                });

            }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    reloadList: function (testResultId, testTypeId) {
        this._updateList(testResultId, testTypeId);
    },

    render: function () {
        var recommendations = [];

        for (var i = 0; i < this.state.recommendations.length; i++) {
            var item = this.state.recommendations[i];
            recommendations.push(<TestRecommendation key={item.id}
                                           data={item}
                                           editTestForm={this.editTestForm}
                                           reloadList={this.props.reloadList}/>)
        }
        return (
                <div>
                    <div className="row">
                        <Accordion>
                            <Panel header="Recommendations" key="recommendations" eventKey="recommendations">
                                <Table responsive hover id="test_prof">
                                    <thead>
                                    <tr>
                                        <th className="col-md-2">Date</th>
                                        <th className="col-md-1">Code</th>
                                        <th className="col-md-2">Name</th>
                                        <th className="col-md-2">Recommendation Description</th>
                                        <th className="col-md-2">Test Recommendation Description</th>
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
                    </div>
                </div>
        );
    }
});

export default TestRecommendationList;
