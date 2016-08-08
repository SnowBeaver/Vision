import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Button from 'react-bootstrap/lib/Button';
import Radio from 'react-bootstrap/lib/Radio';
import {findDOMNode} from 'react-dom';



var fluid;
var electro;


const ChooseTestForm = React.createClass({

    onClick: function(e){
        var link = document.getElementsByClassName("test_choice");
        console.log(link);
        if(e=="fluid") {
            link.setAttribute("href","http://dev.vision.local/admin/#/fluidprofformForm/");
        } else if(e=="electro") {
             link.setAttribute("href","http://dev.vision.local/admin/#/elecprofform");
        }
    },

    render: function () {
        return (
            <div className="form-container">
                <form className="" method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                        < Panel  header="Choose Test Profile">
                            <div>
                                <Radio name="choice" ref="fluid"  onClick={this.onClick("fluid")} >
                                    Fluid Profile
                                </Radio>
                                <Radio name="choice" ref="electro"  onClick={this.onClick("electro")}>
                                    Electrical Profile
                                </Radio>
                            </div>
                            <div className="row">
                                        <div className="col-md-1 ">
                                            <a href="link" type="button" className="btn btn-primary test_choice">SAVE</a>
                                        </div>
                                        <div className="col-md-1 ">
                                            <Button bsStyle="danger">CANCEL</Button>
                                        </div>
                                    </div>
                        </Panel>
                </form>
            </div>
        );
    }
});

export default ChooseTestForm;