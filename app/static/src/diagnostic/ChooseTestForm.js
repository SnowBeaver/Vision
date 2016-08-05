import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Button from 'react-bootstrap/lib/Button';
import Radio from 'react-bootstrap/lib/Radio';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import {findDOMNode} from 'react-dom';







const ChooseTestForm = React.createClass({

    testChoice: function () {

    },

    render: function () {
        return (
            <div className="form-container">
                <form className="" method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                        <Panel header="Choose Test Profile">
                            <div>
                                <Radio name="choice" ref="fluid">
                                    Fluid Profile
                                </Radio>
                                <Radio name="choice" ref="electro">
                                    Electrical Profile
                                </Radio>
                            </div>
                        </Panel>
                </form>
            </div>
        );
    }
});

export default ChooseTestForm;