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


var GroupedRecommendationsList = React.createClass({

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
        for (var i = 0; i < this.props.data.length; i++) {
            var item = this.props.data[i];
            recommendations.push(<TestRecommendation key={item.id}
                                                     data={item}
                                                     reloadList={this.props.reloadList}/>)
        }
        var panelClass = "pull-right glyphicon glyphicon-chevron-down";
        if (this.state.accordionOpen) {
            panelClass = "pull-right glyphicon glyphicon-chevron-up";
        }
        return (
            <Accordion>
                <Panel header={<h3>{this.props.header}<span className={panelClass}></span></h3>}
                       key={"recommendations" + testTypeId}
                       eventKey={"recommendations" + testTypeId}
                       onEnter={() => this._changeAccordionState(true)}
                       onExit={() => this._changeAccordionState(false)}
                       >
                    <Table responsive hover id="testRecommendation">
                        <thead>
                        <tr>
                            <th className="col-md-2">Created on</th>
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
            isVisible: true,
            accordionOpen: false
        };
    },

    componentWillReceiveProps: function (nextProps) {
        var testResultId = nextProps.testResultId;
        if (testResultId && testResultId != this.props.testResultId) {
            this._updateList(testResultId);
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
        var recommendations = [];
        var recommendationGroups = {};

        for (var i = 0; i < this.state.recommendations.length; i++) {
            var item = this.state.recommendations[i];
            if (item.test_type_id) {
                if (!recommendationGroups[item.test_type_id]) {
                    recommendationGroups[item.test_type_id] = [];
                }
                recommendationGroups[item.test_type_id].push(item);
            }
        }

        for (var i in recommendationGroups) {
            recommendations.push(<GroupedRecommendationsList key={i}
                                                             testTypeId={i}
                                                             data={recommendationGroups[i]}
                                                             reloadList={this.props.reloadList}
                                                             header={recommendationGroups[i][0].test_type.name}/>)
        }


        var panelClass = "pull-right glyphicon glyphicon-chevron-down";
        if (this.state.accordionOpen) {
            panelClass = "pull-right glyphicon glyphicon-chevron-up";
        }
        return (
                <div>
                    <div className="row">
                        <Accordion>
                            <Panel header={<h3>Recommendations<span className={panelClass}></span></h3>}
                                   key="recommendationsBlock"
                                   eventKey="recommendationsBlock"
                                   onEnter={() => this._changeAccordionState(true)}
                                   onExit={() => this._changeAccordionState(false)}>
                                {recommendations}
                            </Panel>
                        </Accordion>
                    </div>
                </div>
        );
    }
});

export default TestRecommendationList;
