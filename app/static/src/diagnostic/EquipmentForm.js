import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import AppBar from 'material-ui/AppBar';
import DatePicker from 'material-ui/DatePicker';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
import Dialog from 'material-ui/Dialog';
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
            eqtype_id: value
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
        // console.log("loc log", event,index,value, event.target.index, event.target.value);
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


var TextFieldName = React.createClass({

    getInitialState: function(){
        return {
            items: []
        };
    },
    
    render: function() {
        return(
            <div>
            <TextField
                floatingLabelText="Name"
                floatingLabelFixed={true}
            /><br />
        </div>)
    }
});


var TextFieldEqNumber = React.createClass({

    getInitialState: function(){
        return {
            items: []
        };
    },

    render: function() {
        return(
            <div>
            <TextField
                floatingLabelText="Equipment Number"
                floatingLabelFixed={true}
            /><br />
        </div>)
    }
});


var TextFieldSerial = React.createClass({

    getInitialState: function(){
        return {
            items: []
        };
    },

    render: function() {
        return(
            <div>
            <TextField
                floatingLabelText="Serial"
                floatingLabelFixed={true}
            /><br />
        </div>)
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

const ValiadateCheckbox = () => (
    <div style={styles.block}>
        <Checkbox
            label="Valiadated"
            style={styles.checkbox}
        />
    </div>
);

const InvalidationCheckbox = () => (
    <div style={styles.block}>
        <Checkbox
            label="Invalidation"
            style={styles.checkbox}
        />
    </div>
);

const style = {
    margin: 12

};


const RaisedNewButton = () => (
    <span>
        <RaisedButton label="New" backgroundColor="#b8b8b8" labelColor="#ffffff" style={style}/>
                                       </span>
);

const RaisedSaveButton = React.createClass ({

    render: function () {
        return (
            <span>
                <RaisedButton label="Save"
                              backgroundColor="#2f70a8"
                              labelColor="#ffffff"
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
              labelColor="#ffffff"
              style={style} />
    </span>
        );


const FormBar = () => (
            <AppBar
                title="Create Equipment"
            />
        );


// const EquipmentForm =  (
//
// render : function(){
//     return
//     <div>
//     <FormBar/>
//   <br />
//   <br />
//   <br />
//     <ManufacturedAutocomplete source="http://dev.vision.local:5000/api/v1/manufacturers" />
//     <br />
//     <EqTypeAutocomplete source="http://dev.vision.local:5000/api/v1.0/equipment_type" />
//     <RaisedNewButton/>
// 	<br />
//     <ManfacturerAutocomplete source="http://dev.vision.local:5000/api/v1.0/manufacturer" />
//     <RaisedNewButton/>
// 	<br />
//     <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Location"
//     />
//     <RaisedNewButton/>
// 	<br />
//     <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Visual Inspection By"
//     />
//     <RaisedNewButton/>
// 	<br />
//     <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Assigned To"
//     />
//     <RaisedNewButton/>
// 	<br />
//     <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Norm"
//     />
//     <RaisedNewButton/>
//     <br />
//     <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Name"
//     />
// 	<br />
//     <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Equipment Number"
//     />
// 	<br />
//     <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Serial"
//     />
// 	<br />
//     <TextField
//       hintText="Description"
//       multiLine={true}
//       rows={2}
//       rowsMax={4}
//     />
//   <br />
//       <TextField
//       hintText="Comments"
//       multiLine={true}
//       rows={2}
//       rowsMax={4}
//     />
//     <br />
//       <TextField
//       hintText="Visual Inspection Comments "
//       multiLine={true}
//       rows={2}
//       rowsMax={4}
//     />
//    <br />
//       <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Nbr Of Tap Change Ltc"
//     />
// 	<br />
//   <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Upstream1"
//     />
// 	<br />
//   <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Upstream2"
//     />
// 	<br />
//   <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Upstream3"
//     />
// 	<br />
//   <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Upstream4"
//     />
// 	<br />
//   <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Upstream5"
//     />
// 	<br />
//   <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Downstream1"
//     />
// 	<br />
//   <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Downstream2"
//     />
// 	<br />
//   <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Downstream3"
//     />
// 	<br />
//   <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Downstream4"
//     />
// 	<br />
//   <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Downstream5"
//     />
// 	<br />
//   <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Phys Position"
//     />
// 	<br />
//   <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Tension4"
//     />
// 	<br />
//   <br />
//   <br />
//   <ValiadateCheckbox/>
//   <br />
//   <InvalidationCheckbox/>
//   <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Prev Serial Number "
//     />
// 	<br />
//
//   <TextField
//       hintText="Enter the Text"
//       floatingLabelText="Prev Equipment Number"
//     />
// 	<br />
//   <br />
//   <br />
//   <br />
//   <RaisedSaveButton/><RaisedCancelButton/>
//   </div>
// );
//

        const EquipmentForm = React.createClass({
            getInitialState: function () {
                return {
                    loading: false,
                    errors: {}
                }
            },
            _create: function () {
                // console.log(this.refs.eqt);
                // console.log(this.refs.eqt.state.eqtype_id);

                return $.ajax({
                    url: '/api/v1.0/equipment',
                    type: 'POST',
                    data: {'eqtype_id': this.refs.eqt.state.eqtype_id,
                        'manufac_id': this.refs.mn.state.manufac_id,
                        'location_id': this.refs.loc.state.location_id,
                        'visnsp_id': this.refs.vis.state.visnsp_id,
                        'assignedto_id': this.refs.ast.state.assignedto_id,
                        'norm_id': this.refs.norms.state.norm_id,
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
                            <EquipmentTypeSelectField  ref="eqt" source="http://dev.vision.local/api/v1.0/equipment_type" value={this.state.value}/><RaisedNewButton/>
                            <br/>
                            <ManufacturerSelectField ref="mn" source="http://dev.vision.local/api/v1.0/manufacturer" value={this.state.value} /><RaisedNewButton/>
                            <br/>
                            <LocationSelectField ref="loc"  source="http://dev.vision.local/api/v1.0/location" value={this.state.value}   />
                            <br/>
                            <VisualInspectionSelectField ref="vis" source="http://dev.vision.local/api/v1.0/visual_inspection_by" value={this.state.value} />
                            <br/>
                            <AssignedToSelectField ref="ast" source="http://dev.vision.local/api/v1.0/assigned_to" value={this.state.value} />
                            <br/>
                            <NormSelectField ref="norms" source="http://dev.vision.local/api/v1.0/norm" value={this.state.value} />
                            <br/>
                            <TextFieldName/>
                            <TextFieldEqNumber/>
                            <TextFieldSerial/>
                            <RaisedSaveButton/><RaisedCancelButton/>
                        </form>
                    </div>
                );
            }
        });

export default EquipmentForm;

