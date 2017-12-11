import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';


const TextField = React.createClass({
    _onChange: function (e) {
        this.props.onChange(e);
    },
    render: function () {
        let tooltip = <Tooltip id={this.props.label}>{this.props.label}</Tooltip>;
        var label = (this.props.label != null) ? this.props.label : "";
        var name = (this.props.name != null) ? this.props.name : "";
        var type = (this.props["data-type"] != null) ? this.props["data-type"]: undefined;
        var len = (this.props["data-len"] != null) ? this.props["data-len"]: undefined;
        var validationState = (this.props.errors[name]) ? 'error' : null;
        var error = this.props.errors[name];
        var value = (this.props["value"] != null) ? this.props["value"]: "";
        return (
            <OverlayTrigger overlay={tooltip} placement="top">
                <FormGroup validationState={validationState}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl type="text"
                                 placeholder={label}
                                 name={name}
                                 data-type={type}
                                 data-len={len}
                                 onChange={this._onChange}
                                 value={value}
                    />
                    <HelpBlock className="warning">{error}</HelpBlock>
                    <FormControl.Feedback />
                </FormGroup>
            </OverlayTrigger>
        );
    }
});


var SyncroMachineParams = React.createClass({

    getInitialState: function () {
        return {
            'phase_number':'',
            'sealed':'',
            'model':'',
            'welded_cover':'',
            'current_rating':'',
            'hp':'',
            'kw':'',
            'id':'',
            'errors': {}
        }
    },

    handleChange: function(e){
        var state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    },

    load:function() {
        this.setState(this.props.equipment_item)
    },
    
    render: function () {
        var errors = (Object.keys(this.state.errors).length) ? this.state.errors : this.props.errors;
        return (
            <div className="row">
                <div className="col-md-3">
                    <TextField onChange={this.handleChange}
                               label="Current Rating"
                               name="current_rating"
                               value={this.state.current_rating}
                               errors={errors}
                               data-type="int"
                               data-len="6"/>
                </div>
                <div className="col-md-3">
                    <TextField onChange={this.handleChange}
                               label="Hp"
                               name="hp"
                               value={this.state.hp}
                               errors={errors}
                               data-len="50"/>
                </div>
                <div className="col-md-3">
                    <TextField onChange={this.handleChange}
                               label="Kw"
                               name="kw"
                               value={this.state.kw}
                               errors={errors}
                               data-len="50"/>
                </div>
            </div>
        )
    }
});


export default SyncroMachineParams;