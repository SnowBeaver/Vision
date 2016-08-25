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
                <h1>Dissolved water(ppm)</h1>
                <form method="post" action="#" >
                    <input type="hidden" value={this.state.csrf_token}/>
                    <div className="tab_row text-center">
                        <div className="col-lg-12 nopadding">
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <Checkbox checked readOnly/>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                <TextField label="Dissolved water" value=""/>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
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