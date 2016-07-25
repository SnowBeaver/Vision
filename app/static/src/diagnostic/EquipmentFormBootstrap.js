import React from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import Checkbox from 'react-bootstrap/lib/Checkbox';
var DateTimeField = require('react-bootstrap-datetimepicker');

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
            // menuItems.push(<MenuItem eventKey="{this.state.items[key].id}">{`${this.state.items[key].name}`}</MenuItem>);
            menuItems.push(<option value={this.state.items[key].id}>{`${this.state.items[key].name}`}</option>);
        }

        return (
            <div>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="select">select</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});


var ManufacturerSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: value,
            manufac_id: value,
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
            menuItems.push(<MenuItem eventKey={this.state.items[key].id}>{`${this.state.items[key].name}`}</MenuItem>);
        }

        return (
            <div>
                <DropdownButton title='manufacturer' key={key} id={`dropdown-basic-2`}>
                    {menuItems}
                </DropdownButton>
            </div>
        );
    }
});

var LocationSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: value,
            manufac_id: value,
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
            menuItems.push(<MenuItem eventKey={this.state.items[key].id}>{`${this.state.items[key].name}`}</MenuItem>);
        }

        return (
            <div>
                <DropdownButton title='Location' key={key} id={`dropdown-basic-3`}>
                    {menuItems}
                </DropdownButton>
            </div>
        );
    }
});

var VisualInspBySelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: value,
            manufac_id: value,
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
            menuItems.push(<MenuItem eventKey={this.state.items[key].id}>{`${this.state.items[key].name}`}</MenuItem>);
        }

        return (
            <div>
                <DropdownButton title='Visual Inspection By' key={key} id={`dropdown-basic-3`}>
                    {menuItems}
                </DropdownButton>
            </div>
        );
    }
});


var VisualInspBySelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: value,
            manufac_id: value,
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
            menuItems.push(<MenuItem eventKey={this.state.items[key].id}>{`${this.state.items[key].name}`}</MenuItem>);
        }

        return (
            <div>
                <DropdownButton title='Visual Inspection By' key={key} id={`dropdown-basic-4`}>
                    {menuItems}
                </DropdownButton>
            </div>
        );
    }
});


var AssignedToSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: value,
            manufac_id: value,
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
            menuItems.push(<MenuItem eventKey={this.state.items[key].id}>{`${this.state.items[key].name}`}</MenuItem>);
        }

        return (
            <div>
                <DropdownButton title='Assigned To' key={key} id={`dropdown-basic-5`}>
                    {menuItems}
                </DropdownButton>
            </div>
        );
    }
});


var AssignedToSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: value,
            manufac_id: value,
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
            menuItems.push(<MenuItem eventKey={this.state.items[key].id}>{`${this.state.items[key].name}`}</MenuItem>);
        }

        return (
            <div>
                <DropdownButton title='Assigned To' key={key} id={`dropdown-basic-5`}>
                    {menuItems}
                </DropdownButton>
            </div>
        );
    }
});


var NormSelectField = React.createClass ({

    handleChange: function(event, index, value){
        this.setState({
            value: value,
            manufac_id: value,
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
            menuItems.push(<MenuItem eventKey={this.state.items[key].id}>{`${this.state.items[key].name}`}</MenuItem>);
        }

        return (
            <div>
                <DropdownButton title='Norm' key={key} id={`dropdown-basic-6`}>
                    {menuItems}
                </DropdownButton>
            </div>
        );
    }
});
// var ManufacturerSelectField = React.createClass({
//
//     handleChange: function (event, index, value) {
//         this.setState({
//             value: value,
//             manufac_id: value
//         })
//         console.log("manufac console", event, index, value);
//     },
//
//     getInitialState: function(){
//         return {
//             items: []
//         };
//     },
//     componentDidMount: function () {
//         this.serverRequest = $.get(this.props.source, function (result) {
//
//             items = (result['result']);
//             this.setState({
//                 items: items
//             });
//         }.bind(this), 'json');
//     },
//
//     componentWillUnmount: function () {
//         this.serverRequest.abort();
//     },
//
//     render: function () {
//         var menuItems = [];
//         for (var key in this.state.items) {
//             menuItems.push(<MenuItem value={this.state.items[key].id} key={this.state.items[key].id}
//                                      primaryText={`${this.state.items[key].name}`}/>);
//         }
//
//         return (
//             <div>
//                 <SelectField
//                     onChange={ this.handleChange }
//                     value={ this.state.value}
//                     autoWidth={true}
//                     hintText="Manufacturer"
//                     errorText="This field is required">
//                     {menuItems}
//                 </SelectField>
//             </div>
//         );
//     }
// });
//
//
// var LocationSelectField = React.createClass ({
//
//     handleChange: function(event, index, value){
//         this.setState({
//             value: value,
//             location_id: value
//         })
//     },
//
//     getInitialState: function(){
//         return {
//             items: []
//         };
//     },
//
//     componentDidMount: function(){
//         this.serverRequest = $.get(this.props.source, function (result){
//
//             items = (result['result']);
//             this.setState({
//                 items: items
//             });
//         }.bind(this), 'json');
//     },
//
//     componentWillUnmount: function() {
//         this.serverRequest.abort();
//     },
//
//     render: function() {
//         var menuItems = [];
//         for (var key in this.state.items) {
//             menuItems.push(<MenuItem value={this.state.items[key].id} key={this.state.items[key].id} primaryText={`${this.state.items[key].name}`} />);
//         }
//
//         return (
//             <div>
//                 <SelectField
//                     value={this.state.value}
//                     onChange={this.handleChange}
//                     autoWidth={true}
//                     hintText="Location"
//                     errorText="This field is required">
//                     {menuItems}
//                 </SelectField>
//             </div>
//         );
//     }
// });
//
//
// var VisualInspectionSelectField = React.createClass ({
//
//     handleChange: function(event, index, value){
//         this.setState({
//             value: value,
//             visnsp_id: value
//         })
//
//     },
//
//     getInitialState: function(){
//         return {
//             items: []
//         };
//     },
//
//     componentDidMount: function(){
//         this.serverRequest = $.get(this.props.source, function (result){
//
//             items = (result['result']);
//             this.setState({
//                 items: items
//             });
//         }.bind(this), 'json');
//     },
//
//     componentWillUnmount: function() {
//         this.serverRequest.abort();
//     },
//
//     render: function() {
//         var menuItems = [];
//         for (var key in this.state.items) {
//             menuItems.push(<MenuItem value={this.state.items[key].id} key={this.state.items[key].id} primaryText={`${this.state.items[key].name}`} />);
//         }
//         return (
//             <div>
//                 <SelectField
//                     value={this.state.value}
//                     onChange={this.handleChange}
//                     autoWidth={true}
//                     hintText="Visual Inspection By"
//                     errorText="This field is required">
//                     {menuItems}
//                 </SelectField>
//             </div>
//         );
//     }
// });
//
//
// var AssignedToSelectField = React.createClass ({
//
//     handleChange: function(event, index, value){
//         this.setState({
//             value: value,
//             assignedto_id: value
//         })
//
//     },
//
//     getInitialState: function(){
//         return {
//             items: []
//         };
//     },
//
//     componentDidMount: function(){
//         this.serverRequest = $.get(this.props.source, function (result){
//
//             items = (result['result']);
//             this.setState({
//                 items: items
//             });
//         }.bind(this), 'json');
//     },
//
//     componentWillUnmount: function() {
//         this.serverRequest.abort();
//     },
//
//     render: function() {
//         var menuItems = [];
//         for (var key in this.state.items) {
//             menuItems.push(<MenuItem value={this.state.items[key].id} key={this.state.items[key].id} primaryText={`${this.state.items[key].name}`} />);
//         }
//         return (
//             <div>
//                 <SelectField
//                     value={this.state.value}
//                     onChange={this.handleChange}
//                     autoWidth={true}
//                     hintText="Assigned to"
//                     errorText="This field is required">
//                     {menuItems}
//                 </SelectField>
//             </div>
//         );
//     }
// });
//
//
// var NormSelectField = React.createClass ({
//
//     handleChange: function(event, index, value){
//         this.setState({
//             value: value,
//             norm_id: value
//         })
//
//     },
//
//     getInitialState: function(){
//         return {
//             items: []
//         };
//     },
//
//     componentDidMount: function(){
//         this.serverRequest = $.get(this.props.source, function (result){
//
//             items = (result['result']);
//             this.setState({
//                 items: items
//             });
//         }.bind(this), 'json');
//     },
//
//     componentWillUnmount: function() {
//         this.serverRequest.abort();
//     },
//
//     render: function() {
//         var menuItems = [];
//         for (var key in this.state.items) {
//             menuItems.push(<MenuItem value={this.state.items[key].id} key={this.state.items[key].id} primaryText={`${this.state.items[key].name}`} />);
//         }
//         return (
//             <div>
//                 <SelectField
//                     value={this.state.value}
//                     onChange={this.handleChange}
//                     autoWidth={true}
//                     hintText="Norm"
//                     errorText="This field is required">
//                     {menuItems}
//                 </SelectField>
//             </div>
//         );
//     }
// });
//
// const styles = {
//     block: {
//         maxWidth: 250
//     },
//     checkbox: {
//         marginBottom: 16
//     }
// };
// const style = {
//     margin: 12
// };
//
//
// const RaisedNewButton = () => (
//     <span><RaisedButton label="New" backgroundColor="#b8b8b8" style={style}/></span>
// );
//
// const RaisedSaveButton = React.createClass ({
//     render: function () {
//         return (
//             <span>
//                 <RaisedButton label="Save"
//                               backgroundColor="#2f70a8"
//                               style={style}
//                               type="submit"/>
//             </span>
//
//         );
//     }
// });
//
//
// const RaisedCancelButton = () => (
//     <span>
//         <RaisedButton label="Cancel"
//               backgroundColor="#cf4440"
//               style={style} />
//     </span>
// );
//
//
// const FormBar = () => (
//     <AppBar
//         title="Create Equipment"
//     />
// );


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
                <form id="eqtype_form" onSubmit={this._onSubmit}>
                    <div>
                        <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Eqtype</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" ref="eqt">
                        <option value="select">select</option>
                        <option value="other">...</option>
                        </FormControl>
                        </FormGroup>

                        <EquipmentTypeSelectField  ref="eqt" source="http://dev.vision.local/api/v1.0/equipment_type" value={this.state.value}/>
                        <ManufacturerSelectField  ref="mn" source="http://dev.vision.local/api/v1.0/manufacturer" value={this.state.value}/>
                        <LocationSelectField  ref="loc" source="http://dev.vision.local/api/v1.0/location" value={this.state.value}/>
                        <VisualInspBySelectField  ref="vis" source="http://dev.vision.local/api/v1.0/visual_inspection_by" value={this.state.value} />
                        <AssignedToSelectField  ref="ast" source="http://dev.vision.local/api/v1.0/assigned_to" value={this.state.value} />
                        <NormSelectField ref="norms" source="http://dev.vision.local/api/v1.0/norm" value={this.state.value} />

                        <FormGroup controlId="inputNameForm" type="text" ref="name">
                        <Col type="text" sm={2}>
                        Name
                        </Col>
                        <Col sm={10}>
                        <FormControl type="Name" placeholder="Name"/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="inputEqNumberForm" type="text" ref="number">
                        <Col type="text" sm={2}>
                        Equipment Number
                        </Col>
                        <Col sm={10}>
                        <FormControl type="Equipment Number" placeholder="equipment Number"/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="inputSerialForm" type="text" ref="serial">
                        <Col type="text" sm={2}>
                        Serial
                        </Col>
                        <Col sm={10}>
                        <FormControl type="Serial" placeholder="Serial"/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="descriptionTextarea">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="description" ref="description"/>
                        </FormGroup>

                        <FormGroup controlId="commentsTextarea">
                        <ControlLabel>Comments</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="comments" ref="comments"/>
                        </FormGroup>

                        <DateTimeField />

                        <FormGroup controlId="visualInspectionCommentsTextarea">
                        <ControlLabel>Visual Inspection Comments</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="visComments" ref="vis_comments"/>
                        </FormGroup>

                        <FormGroup controlId="tapChangesTextarea" ref="nr_taps">
                        <ControlLabel>Nbr of Tap Changes LTC</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="tap changes" ref="nr_taps"/>
                        </FormGroup>

                        <FormGroup controlId="upstream1Input" >
                        <ControlLabel>Upstream 1</ControlLabel>
                        <FormControl type="text" placeholder="upstream 1" ref="upstream1"/>
                        </FormGroup>

                         <FormGroup controlId="upstream1Input" >
                        <ControlLabel>Upstream 2</ControlLabel>
                        <FormControl type="text" placeholder="upstream 2" ref="upstream2"/>
                        </FormGroup>

                         <FormGroup controlId="upstream1Input" >
                        <ControlLabel>Upstream 3</ControlLabel>
                        <FormControl type="text" placeholder="upstream 3" ref="upstream3"/>
                        </FormGroup>

                         <FormGroup controlId="upstream1Input" >
                        <ControlLabel>Upstream 4</ControlLabel>
                        <FormControl type="text" placeholder="upstream 4" ref="upstream4"/>
                        </FormGroup>

                         <FormGroup controlId="upstream1Input" ref="upstream5">
                        <ControlLabel>Upstream 5</ControlLabel>
                        <FormControl type="text" placeholder="upstream 5" ref="upstream5"/>
                        </FormGroup>

                        <FormGroup controlId="downstream1Input" >
                        <ControlLabel>Downstream 1</ControlLabel>
                        <FormControl type="text" placeholder="downstream 1" ref="downstream1"/>
                        </FormGroup>

                        <FormGroup controlId="downstream2Input" >
                        <ControlLabel>Downstream 2</ControlLabel>
                        <FormControl type="text" placeholder="downstream 2" ref="downstream2"/>
                        </FormGroup>

                        <FormGroup controlId="downstream3Input" >
                        <ControlLabel>Downstream 3</ControlLabel>
                        <FormControl type="text" placeholder="downstream 3" ref="downstream3"/>
                        </FormGroup>

                        <FormGroup controlId="downstream4Input" >
                        <ControlLabel>Downstream 4</ControlLabel>
                        <FormControl type="text" placeholder="downstream 4" ref="downstream4"/>
                        </FormGroup>

                        <FormGroup controlId="downstream5Input" >
                        <ControlLabel>Downstream 5</ControlLabel>
                        <FormControl type="text" placeholder="downstream 5" ref="downstream5"/>
                        </FormGroup>

                        <FormGroup controlId="physPositionInput" >
                        <ControlLabel>Phys Position</ControlLabel>
                        <FormControl type="text" placeholder="phys position " ref="phys_position"/>
                        </FormGroup>

                        <FormGroup controlId="tensionInput" >
                        <ControlLabel>Tension4</ControlLabel>
                        <FormControl type="text" placeholder="tension4 " ref="tension4"/>
                        </FormGroup>


                        <Checkbox ref="validated">Validated</Checkbox>
                            <Checkbox ref="validation">Invalidation</Checkbox>

                        <FormGroup controlId="prevSerialNumInput" >
                        <ControlLabel>Prev Serial Number</ControlLabel>
                        <FormControl type="text" placeholder="prev serial number " ref="prev_serial"/>
                        </FormGroup>

                        <FormGroup controlId="prevEquipNumInput" >
                        <ControlLabel>Prev Equipment Number</ControlLabel>
                        <FormControl type="text" placeholder="prev equipment number " ref="prev_eqnumb"/>
                        </FormGroup>

                        <Button bsStyle="success" type="submit">save</Button>
                        <Button bsStyle="danger" type="close">cancel</Button>
                    </div>
                </form>
            </div>
        );
    }
});

export default EquipmentForm;

