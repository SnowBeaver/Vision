import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';

var SelectField = React.createClass({
    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value
        });
    },
    getInitialState: function () {
        return {
            items: [],
            isVisible: false,
            value: -1
        };
    },
    isVisible: function(){
        return this.state.isVisible;
    },
    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){
            this.setState({ items: (result['result']) });
        }.bind(this), 'json');
    },
    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    setVisible: function(){
        this.state.isVisible = true;
    },
    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id}
                                   value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }
        console.log( "SelectField value" + (this.props.value || 'no data') );
        console.log( this.props.value );
        console.log( typeof(this.state.value) == "undefined" );
        console.log( this.state.value == null );
        return (
            <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>{this.props.label}</Col>
                <Col sm={10}>
                    <FormControl componentClass="select"
                                 onChange={this.handleChange}
                                 defaultValue={this.props.value}>
                        {menuItems}
                    </FormControl>
                </Col>
            </FormGroup>
        );
    }
});

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

var VisualTestForm = React.createClass({
    render: function() {
        return (
            <div className="form-container">
                <h3>Visual inspection</h3>
                <form method="post" action="#" >
                    <div className="tab_row text-center">
                        <div className="row">
                            <div className="col-lg-8 nopadding padding-right-xs">
                                Tank
                                <div className="col-lg-6">
                                    <SelectField source="" label="Cover gasket" value=""/>
                                    <SelectField source="" label="Manhole gasket" value=""/>
                                    <SelectField source="" label="Gas relay" value=""/>
                                    <SelectField source="" label="Oil level" value=""/>
                                    <div className="col-lg-2">
                                        <TextField label="Winding temp Max" value=""/>
                                        <TextField label="Oil temp Max" value=""/>
                                    </div>
                                    <div className="col-lg-2 nopadding padding-right-xs">
                                        <TextField label="Winding temp Actual" value=""/>
                                        <TextField label="Oil temp Actual" value=""/>
                                    </div>
                                    <div className="col-lg-2 nopadding padding-right-xs">
                                        <FormGroup>
                                            <ControlLabel>Ctc</ControlLabel>
                                            <Checkbox />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Ctc</ControlLabel>
                                            <Checkbox />
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="col-lg-3 nopadding padding-right-xs">
                                        <SelectField source="" label="Pressure" value=""/>
                                    </div>
                                    <div className="col-lg-3 nopadding padding-right-xs">
                                        <TextField label="" value=""/>
                                    </div>

                                    <SelectField source="" label="Sud. pres. valve" value=""/>
                                    <SelectField source="" label="Sampling valves" value=""/>
                                    <SelectField source="" label="Oil pump" value=""/>
                                    <div className="col-lg-6 nopadding padding-right-xs">
                                        <TextField label="Dissolved gas analyzer (ppm)" value=""/>
                                    </div>
                                    <SelectField source="" label="Overall condition" value=""/>
                                </div>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                Expansion/Conservator tank
                                <SelectField source="" label="Pipe tightness" value=""/>
                                <SelectField source="" label="Oil level" value=""/>
                                <SelectField source="" label="Silica gel breather" value=""/>
                                <SelectField source="" label="Overall condition" value=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 nopadding padding-right-xs">
                                <FormGroup>
                                    <ControlLabel>Notes</ControlLabel>
                                    <FormControl componentClass="textarea" placeholder="Notes" value="" />
                                </FormGroup>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                Bushing + arrester
                                <SelectField source="" label="Gasket" value=""/>
                                <SelectField source="" label="Oil level" value=""/>
                                <SelectField source="" label="Overall condition" value=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 nopadding padding-right-xs">
                                Tap changer
                                <div className="col-lg-6">
                                    <SelectField source="" label="Gasket" value=""/>
                                    <SelectField source="" label="Oil level" value=""/>
                                    <div className="col-lg-6">
                                        <TextField label="Temperature(C) Max" value=""/>
                                    </div>
                                    <div className="col-lg-6 nopadding padding-right-xs">
                                        <TextField label="Temperature(C) Actual" value=""/>
                                    </div>
                                    <div className="col-lg-4">
                                        <SelectField source="" label="Pressure" value=""/>
                                    </div>
                                    <div className="col-lg-4">
                                        <TextField label="Pressure Max" value=""/>
                                    </div>
                                    <div className="col-lg-4 nopadding padding-right-xs">
                                        <TextField label="Pressure Actual" value=""/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <SelectField source="" label="Sud. pres. valve" value=""/>
                                    <SelectField source="" label="Sampling valves" value=""/>
                                    <TextField label="No. of operations" value=""/>
                                    <SelectField source="" label="Counter" value=""/>
                                    <SelectField source="" label="Filter" value=""/>
                                    <SelectField source="" label="Overall condition" value=""/>
                                </div>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                Radiator
                                <SelectField source="" label="Fan" value=""/>
                                <SelectField source="" label="Gasket" value=""/>
                                <SelectField source="" label="Overall condition" value=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 nopadding padding-right-xs">
                                Control cabinet
                                <SelectField source="" label="Connection" value=""/>
                                <SelectField source="" label="Heating" value=""/>
                                <SelectField source="" label="Overall condition" value=""/>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                Grounding
                                <TextField label="Value" value=""/>
                                <SelectField source="" label="Connection" value=""/>
                            </div>
                            <div className="col-lg-4 nopadding padding-right-xs">
                                Miscellaneous
                                <SelectField source="" label="Foundation" value=""/>
                                <TextField label="Ambient temp.(C)" value=""/>
                                <TextField label="Load (MVA)" value=""/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

});

export default VisualTestForm;
