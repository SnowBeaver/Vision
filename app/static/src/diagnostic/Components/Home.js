import {Component} from 'react';
import React from 'react';
import EquipmentList from '../EquipmentList';
import EquipmentTestForm from '../EquipmentTestForm';
import TreeComponent from '../TreeComponent';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

export default class Home extends Component {
    onTreeSearch(){
        
    }
    
    render() {
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
                                onChange={this.onTreeSearch} />
                        </FormGroup>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <TreeComponent struct={treeStruct}/>
                    </div>
                </div>
                <div className="col-md-9">
                    <EquipmentList source="/api/v1.0/campaign/"/>
                    <EquipmentTestForm />
                </div>
            </div> 
        )
    }
}

