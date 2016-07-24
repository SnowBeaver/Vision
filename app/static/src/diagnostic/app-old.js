//import React from 'react';
//import {render} from 'react-dom';
//import injectTapEventPlugin from 'react-tap-event-plugin';
//import EquipmentForm from './EquipmentForm'; // Our custom react component
//// Needed for onTouchTap
//// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();
//////
////// Render the main app react component into the app div.
////// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
//render(<EquipmentForm />, document.getElementById('app'));


import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
// import EquipmentForm from './EquipmentForm';
// import EquipmentList from './EquipmentList';

const App = React.createClass ({

    getInitialState: function(){
        return {
            showEquipmentForm: null,
            showEquipmentList: true
        }
    },
    showEquipmentForm: function(){
        this.setState({showEquipmentForm: true});
    },
    showEquipmentList: function(){
        this.setState({showEquipmentList: true});
    },

    render: function(){
        return (
            <MuiThemeProvider>
                <div>
                    /*<RaisedButton label="New equipment" onClick={this.showEquipmentForm} />*/
                    { this.state.showEquipmentList ? <EquipmentList /> : null }
                    { this.state.showEquipmentForm ? <EquipmentForm /> : null }
                </div>
            </MuiThemeProvider>
        );
    }

});
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
