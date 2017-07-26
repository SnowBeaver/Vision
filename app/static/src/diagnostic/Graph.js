import React from 'react';


var Graph = React.createClass({
    getInitialState: function () {
        return {
            loading: false,
            isVisible: false,
            action: 'choose'
        }
    },

    toggle: function (action) {
        if (action != 'hide') {
            // Mode to choose equipment in the tree
            this.setState({loading: true, isVisible: true, action: 'add'});
        } else {
            // Mode to load graph for selected equipment
            this.setState({loading: false, isVisible: false, action: 'choose'});
        }
    },

    onClick: function () {
        if (this.state.action === 'add') {
            // Show checkboxes for selecting equipment
            let state = this.state;
            state.action = 'choose';
            this.setState(state);
            this.props.onClick();
        } else {
            // Load graph for the selected equipment
            this.setState({loading: true, isVisible: true, action: 'add'});
            let ids = $('#tree').jstree(true).get_checked().map(function(id) {
                let equipment_id = $('#tree').jstree(true).get_node(id).state.equipment_id;
                return equipment_id ? equipment_id : null
            });
            if (ids.length) {
                this.load(ids.join(','));
            }
            this.props.onClick(false);
        }
    },

    load: function (equipmentId) {
        let that = this;
        $.get(url.graph + '?id=' + equipmentId, function (img) {
            let state = that.state;
            state.loading = false;
            that.setState(state);
            $('#graph').html(img);
        }).fail(function () {
            that.props.toggleGraphBlock('hide');
        });
    },

    render: function () {
        return (
            <div className={"col-md-12" + (!this.state.isVisible ? " collapse": "")} id="graphBlock">
                <button className="btn btn-success pull-right"
                        disabled={this.state.loading ? "disabled":null}
                        onClick={this.onClick}>
                    {(this.state.action === 'add' ?'Choose':'Add') + ' equipment'}
                    </button>
                <div id="graph" >
                    {this.state.loading ? 'Loading...':null}
                </div>
            </div>
        );
    }
});


export default Graph;