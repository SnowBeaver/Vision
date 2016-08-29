import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';

var SelectField = React.createClass({
    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
        });
    },
    getInitialState: function () {
        return {
            items: [],
            isVisible: false,
            value: -1
        };
    },
    isVisible: function(){
        return this.state.isVisible;
    },
    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){
            this.setState({ items: (result['result']) });
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
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        console.log( "SelectField value" + (this.props.value || 'no data') );
        console.log( this.props.value );
        console.log( typeof(this.state.value) == "undefined" );
        console.log( this.state.value == null );
        return (
            <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>{this.props.label}</Col>
                <Col sm={10}>
                    <FormControl componentClass="select"
                                 onChange={this.handleChange}
                                 defaultValue={this.props.value}>
                        {menuItems}
                    </FormControl>
                </Col>
            </FormGroup>
        );
    }
});

const TextField = React.createClass({
    render: function() {
        return (
            <FormGroup>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl type="text" value={this.props.value} />
            </FormGroup>
        );
    }
});

var WindingTestForm = React.createClass({
    render: function() {
        return (
            <div className="form-container">
                <h3>Winding test</h3>
                <form method="post" action="#" >
                    <div className="tab_row text-center">
                        <div className="row">

                        </div>
                    </div>
                </form>
            </div>
        );
    }

});

export default WindingTestForm;
