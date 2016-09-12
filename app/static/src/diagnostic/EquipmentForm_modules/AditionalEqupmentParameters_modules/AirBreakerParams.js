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
                <FormGroup>
                    <FormControl type="text"
                                 placeholder={label}
                                 name={name}
                    />
                    <FormControl.Feedback />
                </FormGroup>
        );
    }
});

const CheckBox = React.createClass({
    render: function () {
        var name = (this.props.name != null) ? this.props.name : "";
        //var checked = (this.state.value != null) ? this.state.value: false;
        //var is_checked = (checked) ? 'checked' : '';
        return (
            <Checkbox name={name}>
                <b>{this.props.name}</b>
            </Checkbox>
        );
    }
});


var AirBreakerParams = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            fields: [
                "phase_number", "sealed", "welded_cover", "current_rating"
            ],
        }
    },

    componentDidMount: function () {
    },

    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <TextField label="Phase Number"
                                   name="phase_number"
                                   value={this.state.phase_number}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField onChange={this.onChange}
                                   label="Current Rating"
                                   name="current_rating"
                                   value={this.state.current_rating}
                        />
                    </div>
                    <div className="col-md-1 ">
                        <CheckBox onChange={this.onChange}
                                  name="Sealed"
                                  value={this.state.sealed}
                        />
                    </div>
                    <div className="col-md-2">
                        <CheckBox onChange={this.onChange}
                                  name="Welded Cover"
                                  value={this.state.welded_cover}
                        />
                    </div>
                </div>
            </div>
        )
    }
});

export default AirBreakerParams;
