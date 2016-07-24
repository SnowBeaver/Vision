import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';

import injectTapEventPlugin from "react-tap-event-plugin";

import {findDOMNode} from 'react-dom';
injectTapEventPlugin();

//
// const EquipmentList = React.createClass({
//     getInitialState: function () {
//         return {
//             loading: false,
//             errors: {}
//         }
//     },
//     _create: function () { 
//         return $.ajax({
//             url: '/api/v1.0/equipment/',
//             type: 'GET',
//             data: { 
//             },
//             beforeSend: function () {
//                 this.setState({loading: true});
//             }.bind(this)
//         })
//     },
//     _onSubmit: function (e) {
//         e.preventDefault();
//         // var errors = this._validate();
//         // if(Object.keys(errors).length != 0) {
//         //   this.setState({
//         //     errors: errors
//         //   });
//         //    return;
//         // }
//         var xhr = this._create();
//         xhr.done(this._onSuccess)
//             .fail(this._onError)
//             .always(this.hideLoading)
//     },
//     hideLoading: function () {
//         this.setState({loading: false});
//     },
//     _onSuccess: function (data) {
//         this.refs.eqtype_form.getDOMNode().reset();
//         this.setState(this.getInitialState());
//         // show success message
//     },
//     _onError: function (data) {
//         var message = "Failed to create";
//         var res = data.responseJSON;
//         if(res.message) {
//             message = data.responseJSON.message;
//         }
//         if(res.errors) {
//             this.setState({
//                 errors: res.errors
//             });
//         }
//     },
//     _onChange: function (e) {
//         console.log(e.target.name);
//         var state = {};
//         state[e.target.name] =  $.trim(e.target.value);
//         this.setState(state);
//     },
//     _validate: function () {
//         var errors = {};
//     },
//     _formGroupClass: function (field) {
//         var className = "form-group ";
//         if(field) {
//             className += " has-error"
//         }
//         return className;
//     },
//     render: function() {
//
//         return (
//             <div className="form-container">
//                 <FormBar/>
//
//                 <div><RaisedSaveButton/><RaisedCancelButton/></div>
//             </form>
//             </div>
//         );
//     }
// });
//
// export default EquipmentList;
