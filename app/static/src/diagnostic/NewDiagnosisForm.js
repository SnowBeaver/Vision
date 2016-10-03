import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker/lib/DateTimeField';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {DATETIMEPICKER_FORMAT} from './appConstants.js';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';


var SelectField = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            isVisible: false,
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
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        return (
            <FormGroup>
                <FormControl componentClass="select"
                             onChange={this.props.onChange}
                             name={name}
                             value={value}
                             disabled={this.props.disabled}
                >
                    <option>{label}</option>
                    {menuItems}
                    <FormControl.Feedback />
                </FormControl>
            </FormGroup>
        );
    }
});

const TextField = React.createClass({
    render: function () {
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type="text"
                             placeholder={label}
                             name={name}
                             value={value}
                             onChange={this.props.onChange}
                             disabled={this.props.disabled}
                />
                <FormControl.Feedback />
            </FormGroup>
        );
    }
});

const TextArea = React.createClass({
    render: function () {
        let tooltip = <Tooltip id={this.props.label}>{this.props.label}</Tooltip>;
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        var error = this.props.errors[name];
        return (
            <OverlayTrigger overlay={tooltip} placement="top">
                <FormGroup>
                    <FormControl componentClass="textarea"
                                 placeholder={label}
                                 name={name}
                                 value={value}
                                 onChange={this.props.onChange}
                                 required={this.props.required}
                    />
                    <HelpBlock className="warning">{error}</HelpBlock>
                    <FormControl.Feedback />
                </FormGroup>
            </OverlayTrigger>
        );
    }
});

var NewDiagnosisForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {}
        }
    },


    render: function () {
        var data = (this.props.data != null) ? this.props.data : {}
        return (
            <div>
                <div className="tab_row nopadding">
                    <div className="col-lg-12">
                        <TextField label="Name"
                                   name='name'
                                   value={data.name}
                                   onChange={this.props.onChange}
                                   errors={this.state.errors}/>
                    </div>
                </div>
                <div className="tab_row nopadding">
                    <div className="col-lg-12">
                        <TextField label="Code"
                                   name='code'
                                   value={data.code}
                                   onChange={this.props.onChange}
                                   errors={this.state.errors}/>
                    </div>
                </div>
                <div className="tab_row nopadding">
                    <div className="col-md-10 nopadding padding-right-xs">
                        <SelectField source="test_type"
                                     label="Test type"
                                     name='test_type_id'
                                     value={this.state.test_type_id}
                                     onChange={this._onChange}
                                     key={this.state.test_type_id}
                        />
                    </div>
                </div>
                <div className="tab_row nopadding">
                    <div className="col-md-12">
                        <TextArea label="Description"
                                  name='description'
                                  value={data.description}
                                  onChange={this.props.onChange}
                                  errors={this.state.errors}/>
                    </div>
                </div>

            </div>
        );
    }
});

export default NewDiagnosisForm;
