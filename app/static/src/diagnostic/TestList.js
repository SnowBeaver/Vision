import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import {Link} from 'react-router';
import NewTestForm from './NewTestForm';
import Button from 'react-bootstrap/lib/Button';


var TestItem = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

    getInitialState: function () {
        return {
            items: [],
            isVisible: true,
        };
    },

    componentDidMount: function () {
    },

    componentWillUnmount: function () {
    },

    setVisible: function () {
        this.setState({
            isVisible: true
        });
    },
    onRemove: function () {
    },

    edit: function(){
        this.props.editTestForm(this.props.data.id);
    },
    
    render: function () {

        if (!this.props.data || typeof this.props.data == 'undefined' || !this.state.isVisible) {
            return (<div>No tests</div>);
        }
        var test = this.props.data;
        var test_type = test.test_type;
        var test_status = test.test_status;
        var performed_by = test.performed_by;

        return (
            <div className="row">
                <div id="test_prof">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-2">
                        <a href="javascript: void(0);" onClick={this.edit}>{test_type.name}</a>
                    </div>
                    <div className="col-md-1">
                        {test.analysis_number}
                    </div>
                    <div className="col-md-1">
                        {test_status.name}
                    </div>
                    <div className="col-md-2">
                        {performed_by.name}
                    </div>
                    <div className="col-md-1">
                        <a href="javascript:void(0)"
                           className="glyphicon glyphicon-remove text-danger"
                           onClick={this.onRemove}
                           aria-hidden="true">
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});

var TestItemList = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: event.target.value
        })
    },

    getInitialState: function () {
        return {
            items: [],
            isVisible: true,
            showTestForm: false
        };
    },

    componentDidMount: function () {
        // load test_result and show tests for each equipment
        // this.serverRequest = $.get(this.props.source, function (result) { 
        //     items = (result['result']);
        //     this.setState({
        //         items: items
        //     });
        // }.bind(this), 'json'); 
    },

    componentWillUnmount: function () {
        // this.serverRequest.abort();
    },

    setVisible: function () {
        this.setState({
            isVisible: true
        });
    },

    showTestForm: function () {
        this.setState({
            showTestForm: true
        })
    },

    closeTestForm: function () {
        this.setState({
            showTestForm: false
        })
    },

    editTestForm: function (id) {
        if (typeof id == 'undefined') {
            return null;
        }
        
        this.refs.new_test_form._edit(id);
        this.setState({
            showTestForm: true
        })
    },

    reloadList: function () {
        this.closeTestForm();
        this.props.reloadList();
    },

    render: function () {
        var equipment_id = this.props.id;
        var tests = [];

        for (var i=0;i < this.props.data.length;i++) {
            var item = this.props.data[i];
            if (item.equipment.id == equipment_id) {
                tests.push(<TestItem key={item.id} data={item} editTestForm={this.editTestForm}/>)
            }
        }
        
        // this.props.data.map(function (item) {
        //     if (item.equipment.id == equipment_id) {
        //         tests.push(<TestItem data={item} editTestForm={that.editTestForm}/>)
        //     }
        // });

        return (
                <div>
                    <div className="row">
                        {tests}
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <FormGroup>
                                <Button onClick={this.showTestForm} className="success">Add new test</Button>
                            </FormGroup>
                        </div>
                    </div>
                    <NewTestForm ref="new_test_form"
                                 show={this.state.showTestForm}
                                 handleClose={this.closeTestForm}
                                 reloadList={this.reloadList}
                    />

                </div> 
        );
    }
});


var TestList = React.createClass({

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

    componentDidMount: function () {
        var campaign_id = this.props.params['campaign'];
        this.serverRequest = $.get('/api/v1.0/test_result/?campaign_id=' + campaign_id,

            function (result) {

                var tests = result['result'];
                var equipment = [];

                tests.map(function (item) {
                    equipment[item.equipment.id] = item.equipment;
                });

                this.setState({
                    equipment: equipment,
                    tests: tests
                });

            }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.setState({
            isVisible: true
        });
    },

    reloadList: function () {
        this.componentDidMount();
    },

    render: function () {

        var items = [];
        for (var key in this.state.equipment) {
            items.push(
                <Panel
                    key={this.state.equipment[key].id}
                    eventKey={this.state.equipment[key].id}
                    header={this.state.equipment[key].name}
                >
                    <TestItemList data={this.state.tests} id={this.state.equipment[key].id}
                                  reloadList={this.reloadList}
                    />
                </Panel>
            );
        }
        return (
            this.state.isVisible ?
                <div>
                    <div className="row">
                        <Accordion>
                            {items}
                        </Accordion>
                    </div>
                </div> : null
        );
    }
});

export default TestList;
