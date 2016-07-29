import React from 'react';
import ReactDOM from 'react-dom';
import EquipmentForm from './EquipmentFormBootstrap';
import EquipmentList from './EquipmentListBootstrap';
import EquipmentTestForm from './EquipmentTestFormBootstrap';

const App = React.createClass ({

    getInitialState: function () {
        return {
            showEquipmentForm: true,
            showEquipmentList: true,
            showEquipmentTest: true
        }
    },
    showEquipmentForm: function () {
        this.setState({showEquipmentForm: true});
    },
    showEquipmentList: function () {
        this.setState({showEquipmentList: true});
    },
    showEquipmentTest: function () {
        this.setState({showEquipmentTest: true});
    },

    render: function () {
        return (
            <div>
                { this.state.showEquipmentList ?
                    <EquipmentList source="/api/v1.0/campaign/"/> : null }
                { this.state.showEquipmentForm ? <EquipmentForm /> : null }
                { this.state.showEquipmentTest ? <EquipmentTestForm /> : null }
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);