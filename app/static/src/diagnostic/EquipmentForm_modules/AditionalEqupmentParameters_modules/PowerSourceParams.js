import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';


const TextField = React.createClass({

    render: function () {
        let tooltip = <Tooltip id={this.props.label}>{this.props.label}</Tooltip>;
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var value = (this.props.value != null) ? this.props.value : "";
        return (
            <OverlayTrigger overlay={tooltip} placement="top">
                <FormGroup>
                    <FormControl type="text"
                                 placeholder={label}
                                 name={name}
                                 value={value}
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </OverlayTrigger>
        );
    }
});

const CheckBox = React.createClass({
    render: function () {;
        var name = (this.props.name != null) ? this.props.name : "";
        var checked = (this.props.value != null) ? this.props.value : false;
        var is_checked = (checked) ? 'checked' : '';
        return (
            <Checkbox checked={is_checked} name={name}>
                <b>{this.props.label}</b>
            </Checkbox>
        );
    }
});


var PowerSourceParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: ['phase_number', 'sealed', 'welded_cover', 'kv', 'threephase'
            ]
        }
    },

    componentDidMount: function () {
    },

    render: function () {
        return (
            <div className="row">
                <div className="col-md-2">
                    <TextField onChange={this.props.onChange}
                               label="Phase Number"
                               name="phase_number"
                               value={this.state.phase_number}/>
                </div>
                <div className="col-md-2">
                    <TextField onChange={this.props.onChange}
                               label="Kv"
                               name="kv"
                               value={this.state.kv}/>
                </div>
                <div className="col-md-2">
                    <TextField onChange={this.props.onChange}
                               label="Three Phase"
                               name="threephase"
                               value={this.state.threephase}/>
                </div>
                <div className="col-md-1 ">
                    <CheckBox onChange={this.props.onChange}
                              label="Sealed"
                              name="sealed"
                              value={this.state.sealed}/>
                </div>
                <div className="col-md-2">
                    <CheckBox onChange={this.props.onChange}
                              label="Welded Cover"
                              name="welded_cover"
                              value={this.state.welded_cover}/>
                </div>
            </div>
        )
    }
});


export default PowerSourceParams;