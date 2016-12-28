import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';

import TextField from './TextField';

var NewNormFuranForm = React.createClass({

    getInitialState: function () {
        return {
            params: [],
            phase_number: '',
            sealed: '',
            welded_cover: '',
            current_rating: '',
            errors: {}
        }
    },

    handleChange: function(e){
        var state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    },

    render: function () {
        var errors = (Object.keys(this.state.errors).length) ? this.state.errors : this.props.errors;
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="Name"
                            name="name"
                            value={this.state.name}
                            data-type="text"
                            data-len="50"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="Condition"
                            name="condition"
                            value={this.state.condition}
                            data-type="int"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="H2"
                            name="h2"
                            value={this.state.h2}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="CH4"
                            name="ch4"
                            value={this.state.ch4}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="C2H2"
                            name="c2h2"
                            value={this.state.c2h2}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="C2H4"
                            name="c2h4"
                            value={this.state.c2h4}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="C2H6"
                            name="c2h6"
                            value={this.state.c2h6}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="CO"
                            name="co"
                            value={this.state.co}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="CO2"
                            name="co2"
                            value={this.state.co2}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="TDCG"
                            name="tdcg"
                            value={this.state.tdcg}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="Fluid Level"
                            name="fluid_level"
                            value={this.state.fluid_level}
                            data-type="int"
                            errors={errors}
                        />
                    </div>
                </div>
            </div>
        )
    }
});

export default NewNormFuranForm;
