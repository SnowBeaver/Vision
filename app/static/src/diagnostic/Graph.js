import React from 'react';


var Graph = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            isVisible: false
        }
    },

    toggle: function (action) {
        if (action != 'hide') {
            this.setState({loading: true, isVisible: true});
        } else {
            this.setState({loading: false, isVisible: false});
        }
    },

    render: function () {
        return (
            <div className={"col-md-12" + (!this.state.isVisible ? " collapse": "")} id="graphBlock">
                <button className="btn btn-success pull-right"
                        id="addEquipmentToGraph"
                        onClick={this.props.onClick}>Click to Add Equipment</button>
                <div id="graph">
                    {this.state.loading ? 'Loading...':null}
                </div>
            </div>
        );
    }
});


export default Graph;