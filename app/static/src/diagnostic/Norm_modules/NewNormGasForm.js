import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';

import TextField from './TextField';

var NewNormGasForm = React.createClass({

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
                            label="C1"
                            name="c1"
                            value={this.state.c1}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="C2"
                            name="c2"
                            value={this.state.c2}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="C3"
                            name="c3"
                            value={this.state.c3}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="C4"
                            name="c4"
                            value={this.state.c4}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                </div>
            </div>
        )
    }
});

export default NewNormGasForm;
