import React from 'react';


var GraphBlock = React.createClass({
    getInitialState: function () {
        return {}
    },

    render: function () {
        return (
            <div className="col-md-12 collapse" id="graphBlock">
                <button className="btn btn-success pull-right"
                        id="addEquipmentToGraph"
                        onClick={this.props.onClick}>Click to Add Equipment</button>
                <div id="graph"></div>
            </div>
        );
    }
});


export default GraphBlock;