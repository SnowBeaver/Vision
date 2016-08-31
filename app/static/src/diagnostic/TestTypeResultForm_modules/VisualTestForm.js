import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import Panel from 'react-bootstrap/lib/Panel';
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
                <FormControl componentClass="select"
                             onChange={this.handleChange}
                             defaultValue={this.props.value}
                             >
                    <option>{this.props.label}</option>
                    {menuItems}
                </FormControl>
            </FormGroup>
        );
    }
});

const TextField = React.createClass({
    render: function() {
        return (
            <FormGroup>
                <FormControl type="text" placeholder={this.props.label} value={this.props.value} />
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
                            <div className="col-md-8 ">
                                <div className="row">
                                    <div >
                                        <Panel header="Tank">
                                        </Panel>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6  ">
                                        <SelectField source="" label="Cover gasket" value=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <b>Pressure</b>
                                    </div>
                                    <div className="col-md-2">
                                        <SelectField source="" label="-" value=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <TextField label="0.0" value=""/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 ">
                                        <SelectField source="" label="Manhole gasket" value=""/>
                                    </div>
                                    <div className="col-md-6 ">
                                        <SelectField source="" label="Sud.Pres.Valve" value=""/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 ">
                                        <SelectField source="" label="Gas relay" value=""/>
                                    </div>
                                    <div className="col-md-6 ">
                                        <SelectField source="" label="Sampling Valves" value=""/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 ">
                                        <SelectField source="" label="Oil level" value=""/>
                                    </div>
                                    <div className="col-md-6 ">
                                        <SelectField source="" label="Oil Pump" value=""/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2"><b>Winding Temp.</b></div>
                                    <div className="col-md-2">
                                        <TextField label="Max" value=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <TextField label="Actual" value=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <Checkbox ><b>Ctc</b></Checkbox>
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <TextField label="Diss. Gas Analyzer" value=""/>
                                    </div>
                                    <div className="col-md-1 nopadding">
                                        <b>ppm</b>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2"><b>Oil Temp.</b></div>
                                    <div className="col-md-2">
                                        <TextField label="Max" value=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <TextField label="Actual" value=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <Checkbox ><b>Ctc</b></Checkbox>
                                    </div>
                                    <div className="col-md-4">
                                        <SelectField source="" label="Overall Condition" value=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 ">
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <Panel header="Miscelaneous">
                                        </Panel>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <SelectField source="" label="Foundation" value=""/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <TextField label="Ambient temp.(C)" value=""/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <TextField label="Load(MVA)" value=""/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <Panel header="Grounding">
                                        </Panel>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <TextField label="Value" value=""/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <TextField label="Connection" value=""/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-8 ">
                                <div className="row">
                                    <div >
                                        <Panel header="Tap Charger">
                                        </Panel>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <SelectField source="" label="Gasket" value=""/>
                                    </div>
                                    <div className="col-md-6 ">
                                        <SelectField source="" label="Sud Pres. Valve" value=""/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 ">
                                        <SelectField source="" label="Oil Level" value=""/>
                                    </div>
                                    <div className="col-md-6 ">
                                        <SelectField source="" label="Sampling Valves" value=""/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 col-md-offset-6">
                                        <TextField label="No. of Operations" value=""/>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-2"><b>Temperature(C)</b></div>
                                    <div className="col-md-2 col-md-offset-2">
                                        <TextField label="Max" value=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <TextField label="Actual" value=""/>
                                    </div>
                                    <div className="col-md-4 ">
                                        <SelectField source="" label="Counter" value=""/>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-2"><b>Pressure</b></div>
                                    <div className="col-md-2 ">
                                        <SelectField source="" label="Counter" value=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <TextField label="Max" value=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <TextField label="Actual" value=""/>
                                    </div>
                                    <div className="col-md-4">
                                        <SelectField source="" label="Filter" value=""/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2"><b>Position of NLTC</b></div>
                                    <div className="col-md-2 col-md-offset-4">
                                        <TextField label="Actual" value=""/>
                                    </div>
                                    <div className="col-md-4">
                                        <SelectField source="" label="Overall Condition" value=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 ">
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <Panel header="Expansion Conservation Tank">
                                        </Panel>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <SelectField source="" label="Pipe Tightness" value=""/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <SelectField source="" label="Oil Level" value=""/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <SelectField source="" label="Silica Gel Breather" value=""/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-11 col-md-offset-1">
                                        <SelectField source="" label="Overall Condition" value=""/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <Panel header="Radiator">
                                            </Panel>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <SelectField source="" label="Fan" value=""/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <SelectField source="" label="Gasket" value=""/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <SelectField source="" label="Overall Condition" value=""/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <Panel header="Control Cabinet">
                                            </Panel>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <SelectField source="" label="Connection" value=""/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <SelectField source="" label="Heating" value=""/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <SelectField source="" label="Overall Condition" value=""/>
                                        </div>
                                    </div>
                                </div>


                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <Panel header="Bushing+arrester">
                                        </Panel>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <SelectField source="" label="Gasket" value=""/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <SelectField source="" label="Oil Level" value=""/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <SelectField source="" label="Overall Condition" value=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                                <div className="col-md-12">
                                <FormGroup>
                                    <FormControl componentClass="textarea" placeholder="Notes" multiple/>
                                </FormGroup>
                                    </div>
                            </div>
                    </div>
                </form>
            </div>
        );
    }

});

export default VisualTestForm;
