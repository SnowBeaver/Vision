import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";
import EquipmentForm from './EquipmentForm';

var ItemDetails = React.createClass({
    getInitialState: function () {
        return {
            isVisible: false,
            action: 'hide',
            equipment:{}
        }
    },

    toggle: function (action) {
        if (action != 'hide') {
            // Mode to choose equipment in the tree
            this.setState({isVisible: true});
        } else {
            // Mode to load graph for selected equipment
            this.setState({isVisible: false});
        }
    },
    componentDidMount: function () { 
        
    },
    load: function(equipmentId){
        var _self = this;
        
        $.get(url.info.replace(":id", equipmentId), function(data){
            _self.setState({"equipment" : data.equipment , "equipment_item" : data.equipment_item, "isVisible" : true})
            _self.refs['equipmentForm'].loadData();
        }, "json");
    },
    render: function () {
        var _self = this;
        if (!this.state.equipment.id) {
            return null
        }
        
        return (
            <div className={"col-md-12" + (!this.state.isVisible ? " collapse": "")} id="infoBlock">
                <EquipmentForm equipment={this.state.equipment} equipment_item={this.state.equipment_item} action="edit" ref="equipmentForm"/>
            </div>
        );
    }
});

export default ItemDetails;
