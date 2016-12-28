import React from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';

import TextField from './TextField';

var NewNormIsolationForm = React.createClass({

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
                            label="C"
                            name="c"
                            value={this.state.c}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="F"
                            name="f"
                            value={this.state.f}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="Seal"
                            name="seal"
                            value={this.state.seal}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                    <div className="col-md-3">
                        <TextField
                            onChange={this.handleChange}
                            label="Not Seal"
                            name="not_seal"
                            value={this.state.not_seal}
                            data-type="float"
                            errors={errors}
                        />
                    </div>
                </div>
            </div>
        )
    }
});

export default NewNormIsolationForm;
