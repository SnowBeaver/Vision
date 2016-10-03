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


var OneTestRecommendationList = React.createClass({

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
        var recommendations = [];
        var testTypeId = this.props.testTypeId;
        for (var i = 0; i < this.props.data.length; i++) {
            var item = this.props.data[i];
            recommendations.push(<TestRecommendation key={item.id}
                                                     data={item}
                                                     reloadList={this.props.reloadList}/>)
        }
        return (
            <Accordion>
                <Panel header={this.props.header}
                       key={"recommendations" + testTypeId}
                       eventKey={"recommendations" + testTypeId}>
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
            isVisible: true
        };
    },

    componentWillReceiveProps: function (nextProps) {
        var testResultId = nextProps.testResultId;
        var testTypeId = nextProps.testTypeId;
        if (testResultId &&
            testResultId != this.props.testResultId
        ) {
            this._updateList(testResultId, testTypeId);
        }
    },

    _updateList: function (testResultId) {
        var urlParams = 'test_result_id=' + testResultId;
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

    reloadList: function (testResultId) {
        this._updateList(testResultId);
    },

    render: function () {
        var recommendations = [];
        var recommendationGroups = {};

        for (var i = 0; i < this.state.recommendations.length; i++) {
            var item = this.state.recommendations[i];
            if (!recommendationGroups[item.test_type_id]) {
                recommendationGroups[item.test_type_id] = [];
            }
            recommendationGroups[item.test_type_id].push(item);
        }

        for (var i in recommendationGroups) {
            recommendations.push(<OneTestRecommendationList key={i}
                                                            testTypeId={i}
                                                            data={recommendationGroups[i]}
                                                            reloadList={this.props.reloadList}
                                                            header={recommendationGroups[i][0].test_type.name}/>)
        }

        return (
                <div>
                    <div className="row">
                        <Accordion>
                            <Panel header="Recommendations"
                                   key="recommendationsBlock"
                                   eventKey="recommendationsBlock">
                                {recommendations}
                            </Panel>
                        </Accordion>
                    </div>
                </div>
        );
    }
});

export default TestRecommendationList;
