import {Component} from 'react';
import React from 'react';
import EquipmentForm from '../EquipmentForm';


var Equipment=React.createClass({
    getInitialState : function(){
        return{
            "location_id" : 0
        }
    },
    componentDidMount:function(){
        if (this.props.location.query['location'])
            this.refs.equipmentForm.set_location(this.props.location.query['location']);
    },
    render: function() {
        return (
            <div className="row">
                <EquipmentForm location_id={this.state.location_id} ref="equipmentForm"/>
            </div>
        )
    }
});

export default Equipment;