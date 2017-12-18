import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
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
            'model':'',
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
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="H2"
                                   name="h2"
                                   value={this.state.h2}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="CH4"
                                   name="ch4"
                                   value={this.state.ch4}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="O2"
                                   name="o2"
                                   value={this.state.o2}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="N2"
                                   name="n2"
                                   value={this.state.n2}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="CO"
                                   name="co"
                                   value={this.state.co}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="C2H2"
                                   name="c2h2"
                                   value={this.state.c2h2}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="CO2"
                                   name="co2"
                                   value={this.state.co2}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="C2H4"
                                   name="c2h4"
                                   value={this.state.c2h4}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="C2H6"
                                   name="c2h6"
                                   value={this.state.c2h6}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Error(ppm)" name="ppm_error"
                                   value={this.state.ppm_error}
                                   errors={errors}
                                   data-type="int"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Error(%)" name="percent_error"
                                   value={this.state.percent_error}
                                   errors={errors}
                                   data-type="float"/>
                    </div>
                    <div className="col-md-2">
                        <TextField onChange={this.handleChange}
                                   label="Model"
                                   name="model"
                                   value={this.state.model}
                                   errors={errors}
                                   data-len="50"/>
                    </div>
                </div>
            </div>
        )
    }
});

export default GasSensorParams;