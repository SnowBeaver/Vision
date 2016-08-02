import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react'
import TestInsertionForm from './Components/TestInsertionForm';
import Equipment from './Components/Equipment';
import Home from './Components/Home';
import LabList from './Components/LabList';
import ElectricalProfileForm from './ElectricalProfileForm';
import FluidProfileForm from './FluidProfileForm';
import ChooseTestForm from './ChooseTestForm';



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
            case '/elecprofform': Child = ElectricalProfileForm; break;
            case '/fluidprofform': Child = FluidProfileForm; break;
            case '/chooseform': Child = ChooseTestForm; break;

            default: Child = Home;
        }

        return (
            <div className='app-container'>
                <ul>
                    <li><a href='#/home'>Home</a></li>
                    <li><a href='#/equipment'>Equipment</a></li>
                    <li><a href='#/elecprofform'>ElectricalProfileForm</a></li>
                    <li><a href='#/fluidprofform'>FluidProfileForm</a></li>
                    <li><a href='#/chooseform'>ChooseTestForm</a></li>
                </ul>
                <Child />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);