import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
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



var GasSensorParams = React.createClass({

    getInitialState: function () {
        return {

            'sealed':'',
            'welded_cover':'',
            'winding':'',
            'fluid_volume':'',
            'cooling_rating':'',
            'h2':'',
            'c2h2':'',
            'c2h4':'',
            'c2h6':'',
            'co':'',
            'co2':'',
            'o2':'',
            'n2':'',
            'ppm_error':'',
            'percent_error':'',
            'model':''

        }
    },

    handleChange: function(e){
        var state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    },

    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="H2"
                                   name="h2"
                                   value={this.state.h2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="CH4"
                                   name="welded_cover"
                                   value={this.state.ch4}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="O2"
                                   name="o2"
                                   value={this.state.o2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="N2"
                                   name="n2"
                                   value={this.state.n2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="CO"
                                   name="co"
                                   value={this.state.co}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="C2H2"
                                   name="c2h2"
                                   value={this.state.c2h2}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="CO2"
                                   name="co2"
                                   value={this.state.co2}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="C2H4"
                                   name="c2h4"
                                   value={this.state.c2h4}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="C2H6"
                                   name="c2h6"
                                   value={this.state.c2h6}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Error(ppm)" name="ppm_error"
                                   value={this.state.ppm_error}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Error(%)" name="percent_error"
                                   value={this.state.percent_error}/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Model"
                                   name="model"
                                   value={this.state.model}/>
                    </div>
                </div>
            </div>
        )
    }
});

export default GasSensorParams;