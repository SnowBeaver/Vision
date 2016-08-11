import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react'
import Equipment from './Components/Equipment';
import Home from './Components/Home';
import AddEquipmentForm from './AddEquipmentForm';
import CampaignForm from './CampaignForm';
import ChooseTestForm from './ChooseTestForm';
import ElectricalProfileForm from './ElectricalProfileForm';
import FluidProfileForm from './FluidProfileForm';
import NewTestForm from './NewTestForm';
import CreatedByForm from './CampaignForm_modules/CreatedByForm';
import NewMaterialForm from './NewTestForm_modules/NewMaterialForm';
import NewContractForm from './CampaignForm_modules/NewContractForm';
import NewLabForm from './CampaignForm_modules/NewLabForm';
import NewFluidForm from './NewTestForm_modules/NewFluidForm';
import NewRecommendationForm from './NewTestForm_modules/NewRecommendationForm';
import TestList from './TestList';


export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            route: window.location.hash.substr(1)
        }
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }

    render() {
        let Child;

        switch( this.state.route ) {
            case '/equipment': Child = Equipment; break;
            case '/addeqform': Child = AddEquipmentForm; break;
            case '/createdby': Child = CreatedByForm; break;
            case '/contract': Child = NewContractForm; break;
            case '/material': Child = NewMaterialForm; break;
            case '/newfluid': Child = NewFluidForm; break;
            case '/lab': Child = NewLabForm; break;
            case '/recommend': Child = NewRecommendationForm; break;
            case '/campaign': Child = CampaignForm; break;
            case '/testlist': Child = TestList; break;
            case '/test': Child = NewTestForm; break;
            case '/electro': Child = ElectricalProfileForm; break;
            case '/fluid': Child = FluidProfileForm; break;
            case '/chooseform': Child = ChooseTestForm; break;

            default: Child = Home;
        } 

        // <ul>
        //     <li><a href='#/home'>Home</a></li>
        //     <li><a href='#/equipment'>Equipment</a></li>
        //     <li><a href='#/addeqform'>Add Equipment</a></li>
        //     <li><a href='#/campaign'>New Campaign</a></li>
        //     <li><a href='#/test'>New Test</a></li>
        //     <li><a href='#/testlist'>Testlist</a></li>
        //     <li><a href='#/electro'>Electrical Profile</a></li>
        //     <li><a href='#/fluid'>Fluid Profile</a></li>
        //     <li><a href='#/chooseform'>Choose Test Profile</a></li>
        // </ul>

        return (
            <div className="content">
                <div>
                    <ul>
                        <li><a href='#/createdby'>created by</a></li>
                        <li><a href='#/contract'>contract</a></li>
                        <li><a href='#/lab'>lab</a></li>
                        <li><a href='#/material'>material</a></li>
                        <li><a href='#/newfluid'>fluid</a></li>
                        <li><a href='#/recommend'>recommend</a></li>
                    </ul>
                </div>
                <div className='app-container'>
                    <a href='#/campaign' className="btn btn-success btn-large">Start New Campaign</a>
                    <hr/>
                    <Child />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
