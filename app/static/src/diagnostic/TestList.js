import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';


var items =[];

var TestList = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
        })
    },

    getInitialState: function(){
        return {
            items: [],
            isVisible: true
        };
    }, 
    
    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    setVisible: function(){
        this.setState({
            isVisible: true
        });
    },

    render: function() {
        return (
            this.state.isVisible ? 
            <div>
                <div className="row">
                    <div className="col-md-10">
                        <fieldset className="scheduler-border">
                            <legend className="scheduler-border">Campaign tests</legend>
                            <div id="test_prof">
                                <div className="col-md-4">
                                    <a href="#/elecprofform">Electrical test 39489</a>
                                    &nbsp;
                                    &nbsp;
                                    <a href="javascript:void(0)"
                                       className="glyphicon glyphicon-remove text-danger"
                                       onClick={this.handleClick}
                                       aria-hidden="true">
                                    </a>
                                </div>
                            </div>
                        </fieldset>
                    </div>
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
                            <Link to="/add_test" className="btn btn-success">Create new one</Link>
                        </FormGroup>
                    </div>
                </div>
            </div> : null
        );
    }
});

var TestProfileSelectField = React.createClass ({

    handleChange: function(event){
        console.log('here 2');
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            value: event.target.value
        });
        this.props.handleChange(event);
    },

    getInitialState: function(){
        return {
            items: [],
            isVisible: false,
            value: null
        };
    },

    componentDidMount: function(){

        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    setVisible: function(){
        this.state.isVisible = true;
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}  value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
        <FormGroup>
            <FormControl
                componentClass="select"
                placeholder="select"
                value={this.state.value}
                onChange={this.handleChange}
                name="test_prof" >
                <option value="select">Choose profile from saved</option>
                {menuItems}
            </FormControl>
        </FormGroup>
        )
    }
});

export default TestList;

