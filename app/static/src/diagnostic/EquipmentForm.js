import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';

import {findDOMNode} from 'react-dom';
injectTapEventPlugin();

var items = [];

var first_year = 1900;
var current_date = new Date();
var current_year = current_date.getFullYear();
var year_array = [];
year_array.push(first_year);
while (first_year != current_year) {
    first_year++;
    year_array.push(first_year.toString());
}


var EquipmentTypeSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: value,
            eqtype_id: value,
        })

    },

    getInitialState: function(){
        return {
            items: [],
            isVisible: false
        };
    },

    isVisible: function(){
        return this.state.isVisible;
    },

    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
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
            menuItems.push(<MenuItem value={this.state.items[key].id} key={this.state.items[key].id} primaryText={`${this.state.items[key].name}`} />);
        }

        return (
            <div>
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    autoWidth={true}
                    hintText="EqTypeAutocompl"
                    errorText="This field is required"
                >
                    {menuItems}
                </SelectField>
            </div>
        );
    }
});


var ManufacturerSelectField = React.createClass({

    handleChange: function (event, index, value) {
        this.setState({
            value: value,
            manufac_id: value
        })
        console.log("manufac console", event, index, value);
    },

    getInitialState: function(){
        return {
            items: []
        };
    },
    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    render: function () {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<MenuItem value={this.state.items[key].id} key={this.state.items[key].id}
                                     primaryText={`${this.state.items[key].name}`}/>);
        }

        return (
            <div>
                <SelectField
                    onChange={ this.handleChange }
                    value={ this.state.value}
                    autoWidth={true}
                    hintText="Manufacturer"
                    errorText="This field is required">
                    {menuItems}
                </SelectField>
            </div>
        );
    }
});


var LocationSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: value,
            location_id: value
        })
    },

    getInitialState: function(){
        return {
            items: []
        };
    },

    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<MenuItem value={this.state.items[key].id} key={this.state.items[key].id} primaryText={`${this.state.items[key].name}`} />);
        }

        return (
            <div>
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    autoWidth={true}
                    hintText="Location"
                    errorText="This field is required">
                    {menuItems}
                </SelectField>
            </div>
        );
    }
});


var VisualInspectionSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: value,
            visnsp_id: value
        })

    },

    getInitialState: function(){
        return {
            items: []
        };
    },

    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<MenuItem value={this.state.items[key].id} key={this.state.items[key].id} primaryText={`${this.state.items[key].name}`} />);
        }
        return (
            <div>
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    autoWidth={true}
                    hintText="Visual Inspection By"
                    errorText="This field is required">
                    {menuItems}
                </SelectField>
            </div>
        );
    }
});


var AssignedToSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: value,
            assignedto_id: value
        })

    },

    getInitialState: function(){
        return {
            items: []
        };
    },

    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<MenuItem value={this.state.items[key].id} key={this.state.items[key].id} primaryText={`${this.state.items[key].name}`} />);
        }
        return (
            <div>
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    autoWidth={true}
                    hintText="Assigned to"
                    errorText="This field is required">
                    {menuItems}
                </SelectField>
            </div>
        );
    }
});


var NormSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: value,
            norm_id: value
        })

    },

    getInitialState: function(){
        return {
            items: []
        };
    },

    componentDidMount: function(){
        this.serverRequest = $.get(this.props.source, function (result){

            items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<MenuItem value={this.state.items[key].id} key={this.state.items[key].id} primaryText={`${this.state.items[key].name}`} />);
        }
        return (
            <div>
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    autoWidth={true}
                    hintText="Norm"
                    errorText="This field is required">
                    {menuItems}
                </SelectField>
            </div>
        );
    }
});

const styles = {
    block: {
        maxWidth: 250
    },
    checkbox: {
        marginBottom: 16
    }
};
const style = {
    margin: 12
};


const RaisedNewButton = () => (
    <span><RaisedButton label="New" backgroundColor="#b8b8b8" style={style}/></span> 
);

const RaisedSaveButton = React.createClass ({
    render: function () {
        return (
            <span>
                <RaisedButton label="Save"
                              backgroundColor="#2f70a8"
                              style={style}
                              type="submit"/>
            </span>

        );
    }
});


const RaisedCancelButton = () => (
    <span>
        <RaisedButton label="Cancel"
              backgroundColor="#cf4440"
              style={style} />
    </span>
);


const FormBar = () => (
    <AppBar
        title="Create Equipment"
    />
);

const EquipmentForm = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            errors: {}
        }
    },
    _create: function () {
        // console.log(this.refs);

        return $.ajax({
            url: '/api/v1.0/equipment/',
            type: 'POST',
            data: {
                'equipment_type_id': this.refs.eqt.state.eqtype_id,
                'manufacturer_id': this.refs.mn.state.manufac_id,
                'location_id': this.refs.loc.state.location_id,
                'visual_inspection_by_id': this.refs.vis.state.visnsp_id,
                'assigned_to_id': this.refs.ast.state.assignedto_id,
                'norm_id': this.refs.norms.state.norm_id,
                'name': this.refs.name.getValue(),
                'serial': this.refs.serial.getValue(),
                'number': this.refs.number.getValue(),
                'description': this.refs.description.getValue(),
                'comments': this.refs.comments.getValue(),
                'vis_comments': this.refs.vis_comments.getValue(),
                'nr_taps': this.refs.nr_taps.getValue(), 
                'upstream1': this.refs.upstream1.getValue(),
                'upstream2': this.refs.upstream2.getValue(),
                'upstream3': this.refs.upstream3.getValue(),
                'upstream4': this.refs.upstream4.getValue(),
                'upstream5': this.refs.upstream5.getValue(),
                'downstream1': this.refs.downstream1.getValue(),
                'downstream2': this.refs.downstream2.getValue(),
                'downstream3': this.refs.downstream3.getValue(),
                'downstream4': this.refs.downstream4.getValue(),
                'downstream5': this.refs.downstream5.getValue(),
                'phys_position': this.refs.phys_position.getValue(),
                'tension4': this.refs.tension4.getValue(),
                'validated': this.refs.validated.getValue(),
                'invalidation': this.refs.invalidation.getValue(),
                'prev_serial': this.refs.prev_serial.getValue(),
                'prev_eqnumb': this.refs.prev_eqnumb.getValue(), 
            },  
            beforeSend: function () {
                this.setState({loading: true});
            }.bind(this)
        })
    },
    _onSubmit: function (e) {
        e.preventDefault();
        // var errors = this._validate();
        // if(Object.keys(errors).length != 0) {
        //   this.setState({
        //     errors: errors
        //   });
        //    return;
        // }
        var xhr = this._create();
        xhr.done(this._onSuccess)
            .fail(this._onError)
            .always(this.hideLoading)
    },
    hideLoading: function () {
        this.setState({loading: false});
    },
    _onSuccess: function (data) {
        this.refs.eqtype_form.getDOMNode().reset();
        this.setState(this.getInitialState());
        // show success message
    },
    _onError: function (data) {
        var message = "Failed to create";
        var res = data.responseJSON;
        if(res.message) {
            message = data.responseJSON.message;
        }
        if(res.errors) {
            this.setState({
                errors: res.errors
            });
        }
    },
    _onChange: function (e) {
        console.log(e.target.name);
        var state = {};
        state[e.target.name] =  $.trim(e.target.value);
        this.setState(state);
    },
    _validate: function () {
        var errors = {};
        // if(this.state.username == "") {
        //   errors.username = "Username is required";
        // }
        // if(this.state.email == "") {
        //   errors.email = "Email is required";
        // }
        // if(this.state.password == "") {
        //   errors.password = "Password is required";
        // }
        // return errors;
    },
    _formGroupClass: function (field) {
        var className = "form-group ";
        if(field) {
            className += " has-error"
        }
        return className;
    },
    render: function() {

        return (
            <div className="form-container">
                <FormBar/>
                <form id="eqtype_form" onSubmit={this._onSubmit}> 
                    <div><EquipmentTypeSelectField  ref="eqt" source="http://dev.vision.local/api/v1.0/equipment_type" value={this.state.value}/><RaisedNewButton/></div>
                    <ManufacturerSelectField ref="mn" source="http://dev.vision.local/api/v1.0/manufacturer" value={this.state.value} /><RaisedNewButton/>
                    <LocationSelectField ref="loc"  source="http://dev.vision.local/api/v1.0/location" value={this.state.value} />
                    <VisualInspectionSelectField ref="vis" source="http://dev.vision.local/api/v1.0/visual_inspection_by" value={this.state.value} />
                    <AssignedToSelectField ref="ast" source="http://dev.vision.local/api/v1.0/assigned_to" value={this.state.value} />
                    <NormSelectField ref="norms" source="http://dev.vision.local/api/v1.0/norm" value={this.state.value} />
                    <TextField ref="name" floatingLabelText="Name" hintText="Name" /><br />
                    <TextField ref="serial" floatingLabelText="Serial" hintText="Serial" /><br />
                    <TextField ref="number" floatingLabelText="Equipment number" hintText="Equipment number"/><br />
                    <div><TextField ref="description" hintText="Description" multiLine={true} rows={2} rowsMax={4} /></div>
                    <div><TextField ref="comments" hintText="Comments" multiLine={true} rows={2} rowsMax={4} /></div>
                    <div><TextField ref="vis_comments" hintText="Visual Inspection Comments " multiLine={true} rows={2} rowsMax={4} /></div>
                    <div><TextField ref="nr_taps" hintText="Enter the Text" floatingLabelText="Nbr Of Tap Change Ltc" /></div>
                    <div><TextField ref="upstream1" hintText="Enter the Text" floatingLabelText="Upstream1" /></div>
                    <div><TextField ref="upstream2" hintText="Enter the Text" floatingLabelText="Upstream2" /></div>
                    <div><TextField ref="upstream3" hintText="Enter the Text" floatingLabelText="Upstream3" /></div>
                    <div><TextField ref="upstream4" hintText="Enter the Text" floatingLabelText="Upstream4" /></div>
                    <div><TextField ref="upstream5" hintText="Enter the Text" floatingLabelText="Upstream5" /></div>
                    <div><TextField ref="downstream1" hintText="Enter the Text" floatingLabelText="Downstream1" /></div>
                    <div><TextField ref="downstream2" hintText="Enter the Text" floatingLabelText="Downstream2" /></div>
                    <div><TextField ref="downstream3" hintText="Enter the Text" floatingLabelText="Downstream3" /></div>
                    <div><TextField ref="downstream4" hintText="Enter the Text" floatingLabelText="Downstream4" /></div>
                    <div><TextField ref="downstream5" hintText="Enter the Text" floatingLabelText="Downstream5" /></div>
                    <div><TextField ref="phys_position" hintText="Enter the Text" floatingLabelText="Phys Position" /></div>
                    <div><TextField ref="tension4" hintText="Enter the Text" floatingLabelText="Tension4" /></div>
                    <div><Checkbox ref="validated" label="Validated" style={styles.checkbox} /></div>
                    <div><Checkbox ref="invalidation" label="Invalidation" style={styles.checkbox} /></div>
                    <div><TextField ref="prev_serial" hintText="Enter the Text" floatingLabelText="Prev Serial Number" /></div>
                    <div><TextField ref="prev_eqnumb" hintText="Enter the Text" floatingLabelText="Prev Equipment Number" /></div>
                    <Divider />
                    <div><RaisedSaveButton/><RaisedCancelButton/></div>
                </form>
            </div>
        );
    }
});

export default EquipmentForm;

