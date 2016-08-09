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
            case '/assigntestform': Child = CampaignForm; break;
            case '/newtestform': Child = NewTestForm; break;
            case '/elecprofform': Child = ElectricalProfileForm; break;
            case '/fluidprofform': Child = FluidProfileForm; break;
            case '/chooseform': Child = ChooseTestForm; break;

            default: Child = Home;
        }
        // <ul>
        //     <li><a href='#/home'>Home</a></li>
        //     <li><a href='#/equipment'>Equipment</a></li>
        //     <li><a href='#/addeqform'>Add Equipment</a></li>
        //     <li><a href='#/assigntestform'>New Campaign</a></li>
        //     <li><a href='#/newtestform'>New Test</a></li>
        //     <li><a href='#/elecprofform'>Electrical Profile</a></li>
        //     <li><a href='#/fluidprofform'>Fluid Profile</a></li>
        //     <li><a href='#/chooseform'>Choose Test Profile</a></li>
        // </ul>

        return (
            <div className='app-container'>
                <a href='#/assigntestform' className="btn btn-success btn-large">Start New Campaign</a>
                <hr/>
                <Child />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);