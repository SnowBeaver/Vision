import {Component} from 'react';
import React from 'react';
// import EquipmentList from '../EquipmentList';
import TestResultForm from '../TestResultForm';
import EquipmentTestForm from '../EquipmentTestForm';
import TreeComponent from '../TreeComponent';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

var Home = React.createClass ({

    getInitialState: function(){
        return {
            source: '/api/v1.0/campaign/',
            text: ''
        }
    },

    onTreeSearch: function(e){
        // console.log(e.target);
        // console.log(e.target.value);
        // this.setState({
        //     searchValue: e.target.value
        // });
        this.refs.tree.handleTreeSearch(e.target.value);
    },

    onTreeNodeClick: function(treeItem){

        var src = (treeItem.equipment_id) ? '/api/v1.0/campaign/?equipment_id=' + treeItem.equipment_id: '#';
        // console.log('got equipment id from tree click', treeItem.equipment_id);
        this.setState({
            source: src
        });
        this.refs.testResultList.updateSource(this.state.source);
    },

    render: function() {
        return (
            <div>
                <div className="col-md-3 equal_col">
                    <div className="maxwidth">
                        <FormGroup>
                            <ControlLabel>Search</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="searchTree"
                                ref="search"
                                id="plugins4_q"
                                className="input col-md-12"
                                value={this.state.searchValue}
                                onKeyUp={this.onTreeSearch} />
                        </FormGroup>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <TreeComponent
                            ref="tree"
                            struct={treeStruct}
                            onTreeNodeClick={this.onTreeNodeClick}
                        />
                    </div>
                </div>
                <div className="col-md-9">
                    <TestResultForm ref="testResultList" source={this.state.source} />
                    {/* <EquipmentList ref="equipmentList" source={this.state.source} /> */}
                    {/*<EquipmentTestForm />*/}
                </div>
            </div>
        )
    }
});
 export default Home;
