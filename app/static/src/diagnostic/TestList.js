import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import {Link} from 'react-router';
import NewTestForm from './NewTestForm';
import Button from 'react-bootstrap/lib/Button'; 
import Modal from 'react-bootstrap/lib/Modal';


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
            name: 'Electrical test 39489 by default',
            id: null
        };
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {

            items = (result['result']);
            this.setState({
                items: item
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
    onRemove: function(){ 
    },

    render: function () {
        return (
            this.state.isVisible ?
                <div className="row">
                    <div id="test_prof">
                        <div className="col-md-4">
                            <Link to="/edit_test/{this.state.id}">{this.state.name}</Link>
                            &nbsp;
                            &nbsp;
                            <a href="javascript:void(0)"
                               className="glyphicon glyphicon-remove text-danger"
                               onClick={this.onRemove}
                               aria-hidden="true">
                            </a>
                        </div>
                    </div>
                </div> : null
        );
    }
});

var TestProfileSelectField = React.createClass({

    getInitialState: function () {
        return {
            isVisible: true
        };
    },

    handleChange: function (event) {
        // console.log(event.target.name);
        // console.log(event.target.value);
        this.setState({
            value: event.target.value
        });
    },

    componentDidMount: function () { 
        this.serverRequest = $.get(this.props.source, function (result) { 
            this.setState({
                items: result['result']
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.state.isVisible = true;
    },

    render: function () {
        var options = [];
        for (var key in this.state.items) {
            var index = Math.random() + '_'+ this.state.items[key].id;
            options.push(<option key={index} value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <FormGroup>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    value={this.state.value}
                    onChange={this.handleChange}
                    name="test_prof">
                    <option value="select">Choose profile from saved</option>
                    {options}
                </FormControl>
            </FormGroup>
        )
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
        // this.serverRequest = $.get(this.props.source, function (result) { 
        //     items = (result['result']);
        //     this.setState({
        //         items: items
        //     });
        // }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
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

    render: function () {
        var tests = [];
        for (var key in this.state.items) {
            tests.push(
                <TestItem />
            );
        } 
        return (
            this.state.isVisible ?
                <div>
                    <div className="row">
                        {tests}
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <FormGroup>
                                <TestProfileSelectField source="/api/v1.0/test_profile"/>
                            </FormGroup>
                        </div>
                        <div className="col-md-1 text-center">OR</div>
                        <div className="col-md-2">
                            <FormGroup>
                                <Button onClick={this.showTestForm}>Create new one</Button>
                            </FormGroup>
                        </div>
                    </div>

                        <NewTestForm show={this.state.showTestForm} handleClose={this.closeTestForm} />
                    
                </div> : null
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
            isVisible: true, 
            equipment: [
                { id: 1, name: 'Test equoment 1' },
                { id: 2, name: 'Test equoment 2' },
                { id: 3, name: 'Test equoment 3' }
            ]
        };
    },

    componentDidMount: function () {
        var campaign_id = this.props.params['campaign'];
        // this.serverRequest = $.get('/api/v1.0/test_result/?campaign_id=' + campaign_id,
        //     function (result) {
        //         this.setState({
        //             equipment: result['result']
        //         });
        //     }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    setVisible: function () {
        this.setState({
            isVisible: true
        });
    },

    render: function () {

        console.log(this.props.params);
        console.log(this.state.equipment);
        
        var items = [];
        for (var key in this.state.equipment) {
            console.log(this.state.equipment[key]);
            items.push(
                <Panel 
                    key={this.state.equipment[key].id} 
                    eventKey={this.state.equipment[key].id} 
                    header={this.state.equipment[key].name}
                >
                    <TestItemList equipment_id={this.state.equipment[key].id}/>
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
