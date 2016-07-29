import React from 'react';
import ReactDOM from 'react-dom';
import EquipmentForm from './EquipmentFormBootstrap';
import EquipmentList from './EquipmentListBootstrap';
import EquipmentTestForm from './EquipmentTestFormBootstrap';
import TreeComponent from './TreeComponent';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


const App = React.createClass ({

    getInitialState: function () {
        return {
            showEquipmentForm: false,
            showEquipmentList: true,
            showEquipmentTest: false
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

    onTreeSearch: function(){
        
    },
    
    render: function () {
        return (
            <div>
                <div className="col-md-3 equal_col"> 
                    <div className="maxwidth">
                        <FormGroup>
                            <ControlLabel>Search</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="searchTree"
                                ref="searchTree"
                                id="plugins4_q"
                                className="input col-md-12"
                                value={this.state.value} onChange={this.onTreeSearch} />
                        </FormGroup>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                            <TreeComponent struct={treeStruct}/>
                    </div>
                </div>
                <div className="col-md-9">
                    { this.state.showEquipmentList ?
                        <EquipmentList source="/api/v1.0/campaign/"/> : null }
                    { this.state.showEquipmentForm ? <EquipmentForm /> : null }
                    { this.state.showEquipmentTest ? <EquipmentTestForm /> : null }
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);