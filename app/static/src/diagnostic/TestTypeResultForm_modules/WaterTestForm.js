import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';


const TextField = React.createClass({
    render: function() {
        return (
            <FormGroup>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl type="text" value={this.props.value} />
            </FormGroup>
        );
    }
});

var WaterTestForm = React.createClass({
    render: function() {
        return (
            <div className="form-container">
                <h3>Dissolved water(ppm)</h3>
                <form method="post" action="#" >
                    <div className="tab_row text-center">
                        <div className="col-lg-12 nopadding">
                            <div className="col-lg-1 nopadding padding-right-xs">
                                <FormGroup>
                                    <ControlLabel></ControlLabel>
                                    <Checkbox />
                                </FormGroup>
                            </div>
                            <div className="col-lg-6 nopadding padding-right-xs">
                                <TextField label="Dissolved water" value=""/>
                            </div>
                            <div className="col-lg-5 nopadding padding-right-xs">
                                Moisture at 25C(%): 17,8
                            </div>
                        </div>
                        <div className="col-lg-12 nopadding">
                            <TextField label="Remark" value=""/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

});

export default WaterTestForm;
