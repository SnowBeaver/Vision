import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Button from 'react-bootstrap/lib/Button';
import Radio from 'react-bootstrap/lib/Radio';
import {findDOMNode} from 'react-dom';


const ChooseTestForm = React.createClass({

    onChange: function(e){
        this.setState({
            profile: e.target.value
        });
    },
    onSubmit: function(e) { 
        e.preventDefault();
        var hash = '';
        if(this.state.profile == "fluid") {
            hash = '#/fluid';
        } else if(this.state.profile == "electro") {
            hash = '#/electro';
        }
        window.location.hash = hash;
    },
    render: function () {
        return (
            <div className="form-container">
                <form method="post" action="#" onSubmit={this.onSubmit} onChange={this.onChange}>
                    <Panel header="Choose Test Profile">
                        <div>
                            <Radio name="profile" value="fluid">
                                Fluid Profile
                            </Radio>
                            <Radio name="profile" value="electro">
                                Electrical Profile
                            </Radio>
                        </div>
                        <div className="row">
                            <div className="col-md-1 ">
                                <Button type="submit" className="btn btn-primary">Next</Button>
                            </div>
                            <div className="col-md-1 ">
                                <Button bsStyle="danger">Cancel</Button>
                            </div>
                        </div>
                    </Panel>
                </form>
            </div>
        );
    }
});

export default ChooseTestForm;