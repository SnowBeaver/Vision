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
import EquipmentForm from './EquipmentForm';

const App = () => (
  <MuiThemeProvider>
    <EquipmentForm />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);