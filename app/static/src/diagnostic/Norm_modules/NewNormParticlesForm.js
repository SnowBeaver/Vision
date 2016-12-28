import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';

import TextField from './TextField';

var NewNormParticlesForm = React.createClass({

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
                            label="_2um"
                            name="_2um"
                            value={this.state._2um}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="_5um"
                            name="_5um"
                            value={this.state._5um}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="_10um"
                            name="_10um"
                            value={this.state._10um}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="_15um"
                            name="_15um"
                            value={this.state._15um}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="_25um"
                            name="_25um"
                            value={this.state._25um}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="_50um"
                            name="_50um"
                            value={this.state._50um}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="_100um"
                            name="_100um"
                            value={this.state._100um}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="nas1638"
                            name="nas1638"
                            value={this.state.nas1638}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="iso4406_1"
                            name="iso4406_1"
                            value={this.state.iso4406_1}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="iso4406_2"
                            name="iso4406_2"
                            value={this.state.iso4406_2}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="iso4406_3"
                            name="iso4406_3"
                            value={this.state.iso4406_3}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                </div>
            </div>
        )
    }
});

export default NewNormParticlesForm;
