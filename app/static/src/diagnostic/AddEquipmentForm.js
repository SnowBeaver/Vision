import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import {findDOMNode} from 'react-dom';
import Panel from 'react-bootstrap/lib/Panel';


var EquipmentTypeSelectField = React.createClass ({


    handleChange: function(event, index, value){
        this.setState({
            value: event.target.value,
            eqtype_id: event.target.value
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
            var items = (result['result']);
            this.setState({
                items: items
            });
        }.bind(this), 'json');

    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    removeSelect: function () {
        this.props.removeSelect(this.props.index);
    },

    setVisible: function(){
        this.state.isVisible = true;
    },

    render: function() {
        var menuItems = [];
        for (var key in this.state.items) {
            menuItems.push(<option key={this.state.items[key].id} value={this.state.items[key].id}>{`${this.state.items[key].name} ${this.state.items[key].serial}`}</option>);
        }
        return (
            <div className="row">
                <div className="col-md-1">
                    {this.props.index}
                </div>
                <div className="col-md-6">
                    <span>
                        <FormGroup controlId="formControlsSelect1">
                            <FormControl 
                                componentClass="select" 
                                placeholder="equipment type" 
                                onChange={this.handleChange}>
                                <option key="0" value="select">Select equipment {this.props.index}</option>
                                {menuItems}
                            </FormControl>
                        </FormGroup>
                    </span>
                </div>
                <div className="col-md-1">
                    <a href="javascript:void(0)"
                       className="glyphicon glyphicon-remove text-danger"
                       onClick={this.removeSelect}
                       aria-hidden="true">
                    </a>
                </div>
                <div className="col-md-1">
                   <a href="#/testlist" type="button" className="btn btn-success">Tests</a>
                </div>
            </div>
        );
    }
});


var AddEquipmentForm = React.createClass({

    getInitialState: function () {
        return {
            loading: false,
            errors: {},
            numberOfSelects: 1
        }
    },

    onClickSelectAdd: function () {
        var i = this.state.numberOfSelects+1;
        this.setState({
            numberOfSelects: i
        })
    },
    
    removeSelect: function(index){

        var i = this.state.numberOfSelects-1;
        this.setState({
            numberOfSelects: i
        });
        document.getElementById('index-'+index).remove();
    },

    _create: function () {

        return $.ajax({
            url: '/api/v1.0/equipment/',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
                'equipment_type_id': this.refs.eqt.state.eqtype_id,

            }),
            success: function (data, textStatus) { },
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

    render :function () {
        var selects = [];
        for(var i=1; i <= this.state.numberOfSelects;i++){
            selects.push(
                <EquipmentTypeSelectField index={i} source="/api/v1.0/equipment" removeSelect={this.removeSelect} />
            );
        }

        return(
            <div className="form-container">
                <form className="" method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                    <Panel header="Add equipment">
                        {selects}
                        <div className="row">
                            <div className="col-md-10">
                                <a href="javascript:void(0)"
                                   className="glyphicon glyphicon-plus"
                                   onClick={this.onClickSelectAdd}
                                   aria-hidden="true"></a>
                            </div>
                        </div>
                    </Panel>
                </form> 
            </div>
        );
    }
});


export default AddEquipmentForm;