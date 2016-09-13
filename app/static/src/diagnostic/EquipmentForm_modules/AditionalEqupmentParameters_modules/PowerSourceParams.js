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


var PowerSourceParams = React.createClass({

    getInitialState: function () {
        return {
            'phase_number':'',
            'sealed':'',
            'welded_cover':'',
            'kv':'',
            'threephase':''
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
                <div className="col-md-2">
                    <TextField onChange={this.handleChange}
                               label="Phase Number"
                               name="phase_number"
                               value={this.state.phase_number}/>
                </div>
                <div className="col-md-2">
                    <TextField onChange={this.handleChange}
                               label="Kv"
                               name="kv"
                               value={this.state.kv}/>
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
                <div className="col-md-2">
                    <Checkbox name="welded_cover" value="1"><b>Welded Cover</b></Checkbox>
                </div>
            </div>
        )
    }
});


export default PowerSourceParams;