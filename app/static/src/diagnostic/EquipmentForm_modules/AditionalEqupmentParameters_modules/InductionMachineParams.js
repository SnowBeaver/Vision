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


var InductionMachineParams = React.createClass({

    getInitialState: function () {
        return {
            'phase_number':'',
            'sealed':'',
            'model':'',
            'welded_cover':'',
            'current_rating':'',
            'threephase':'',
            'hp':'',
            'kva':'',
            'pf':''

        }
    },

    componentDidMount: function () {
    },

    render: function () {
        return (
            <div className="row">
                <div className="col-md-2">
                    <TextField onChange={this.handleChange}
                               label="Current Rating"
                               name="current_rating"
                               value={this.state.current_rating}/>
                </div>
                <div className="col-md-2">
                    <TextField onChange={this.handleChange}
                               label="Hp"
                               name="hp"
                               value={this.state.hp}/>
                </div>
                <div className="col-md-2">
                    <TextField onChange={this.handleChange}
                               label="Kva"
                               name="kva"
                               value={this.state.kva}/>
                </div>
                <div className="col-md-2">
                    <TextField onChange={this.handleChange}
                               label="Pf"
                               name="pf"
                               value={this.state.pf}/>
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


export default InductionMachineParams;
