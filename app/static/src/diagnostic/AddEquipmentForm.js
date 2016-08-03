import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {findDOMNode} from 'react-dom';
import Panel from 'react-bootstrap/lib/Panel';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup';



 var AddSelectButton = React.createClass({

    onClick: function () {


    },

    render: function () {
        return(
                <Button bsStyle="primary">+</Button>

            );
    }
});


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
                <FormGroup controlId="formControlsSelect1">
                    <ControlLabel>Equipment type</ControlLabel>
                    <FormControl componentClass="select" placeholder="equipment type" onChange={this.handleChange}>
                        <option value="select">select equipment type</option>
                        {menuItems}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
});



var AddEquipmentForm = React.createClass({
   render :function () {
       return(

           <form className="" method="post" action="#" onSubmit={this._onSubmit} onChange={this._onChange}>
                <div>
                    <Panel header="Specify equipment">
                        <div className="maxwidth">
                            <EquipmentTypeSelectField/> <AddSelectButton/>
                        </div>
                    </Panel>
                </div>
            </form>
           
       );
   }
});

export default AddEquipmentForm;