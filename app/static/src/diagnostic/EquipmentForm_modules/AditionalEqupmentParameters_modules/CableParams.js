import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';


const TextField = React.createClass({

    render: function () {
        let tooltip = <Tooltip id={this.props.label}>{this.props.label}</Tooltip>;
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        return (
            <OverlayTrigger overlay={tooltip} placement="top">
                <FormGroup>
                    <FormControl type="text"
                                 placeholder={label}
                                 name={name}
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </OverlayTrigger>
        );
    }
});

var SelectField = React.createClass({
    handleChange: function (event, index, value) {
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
    isVisible: function () {
        return this.state.isVisible;
    },
    componentDidMount: function () {
        var source = '/api/v1.0/' + this.props.source + '/';
        this.serverRequest = $.get(source, function (result) {
            this.setState({items: (result['result'])});
        }.bind(this), 'json');
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    setVisible: function () {
        this.state.isVisible = true;
    },
    render: function () {
        var label = (this.props.label != null) ? this.props.label : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        return (
            <FormGroup>

                <FormControl componentClass="select"
                             onChange={this.handleChange}
                             defaultValue={value}
                             name={this.props.name}
                >
                    <option>{this.props.label}</option>);
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});


var CableParams = React.createClass({

    getInitialState: function () {
        return {
            'phase_number':'',
            'sealed':'',
            'model':'',
            'threephase':'',
            'insulation_id':''
        }
    },

    handleChange: function(e){
        var state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    },

    render: function () {
        return (
            <div className="row">
                <div className="col-md-4">
                    <TextField onChange={this.handleChange}
                               label="Model"
                               name="model"
                               value={this.state.model}/>
                </div>
                <div className="col-md-3">
                        <SelectField
                            source="insulation"
                            label="insulation_id"
                            name="insulation_id"
                            value={this.state.insulation_id}/>
                    </div>
                <div className="col-md-2">
                    <TextField onChange={this.handleChange}
                               label="Three Phase"
                               name="threephase"
                               value={this.state.threephase}/>
                </div>
                <div className="col-md-1 ">
                        <Checkbox name="sealed" value="1"><b>Sealed</b></Checkbox>
                    </div>
            </div>
        )
    }
});


export default CableParams;