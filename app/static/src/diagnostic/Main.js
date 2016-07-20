/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
//import React, {Component} from 'react';
//import RaisedButton from 'material-ui/RaisedButton';
//import Dialog from 'material-ui/Dialog';
//import {deepOrange500} from 'material-ui/styles/colors';
//import FlatButton from 'material-ui/FlatButton';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import React from 'react';
//import AutoComplete from 'material-ui/AutoComplete';
//import MenuItem from 'material-ui/MenuItem';
//
//const dataSource1 = [
//  {
//    text: 'text-value1',
//    value: (
//      <MenuItem
//        primaryText="text-value1"
//        secondaryText="&#9786;"
//      />
//    ),
//  },
//  {
//    text: 'text-value2',
//    value: (
//      <MenuItem
//        primaryText="text-value2"
//        secondaryText="&#9786;"
//     />
//    ),
//  },
//];
//
//const dataSource2 = ['12345', '23456', '34567'];
//
//const dataSource3 = [
//  {textKey: 'Some Text', valueKey: 'someFirstValue'},
//  {textKey: 'Some Text', valueKey: 'someSecondValue'},
//];
//const dataSourceConfig = {
//  text: 'textKey',
//  value: 'valueKey',
//};
//
//const AutoCompleteExampleNoFilter = React.createClass({
//render(){
//return (
//  <div>
//    <AutoComplete
//      hintText="text-value data"
//      filter={AutoComplete.noFilter}
//      dataSource={dataSource1}
//    /><br />
//    <AutoComplete
//      floatingLabelText="showAllItems"
//      filter={AutoComplete.noFilter}
//      openOnFocus={true}
//      dataSource={dataSource2}
//    /><br />
//    <AutoComplete
//      floatingLabelText="Same text, different values"
//      filter={AutoComplete.noFilter}
//      openOnFocus={true}
//      dataSource={dataSource3}
//      dataSourceConfig={dataSourceConfig}
//      />
//  </div>);
//},
//});
//
//export default AutoCompleteExampleNoFilter;

//const styles = {
//  container: {
//    textAlign: 'center',
//    paddingTop: 200,
//  },
//};
//
//const muiTheme = getMuiTheme({
//  palette: {
//    accent1Color: deepOrange500,
//  },
//});
//
//class Main extends Component {
//  constructor(props, context) {
//    super(props, context);
//
//    this.handleRequestClose = this.handleRequestClose.bind(this);
//    this.handleTouchTap = this.handleTouchTap.bind(this);
//
//    this.state = {
//      open: false,
//    };
//  }
//
//  handleRequestClose() {
//    this.setState({
//      open: false,
//    });
//  }
//
//  handleTouchTap() {
//    this.setState({
//      open: true,
//    });
//  }
//
//  render() {
//    const standardActions = (
//      <FlatButton
//        label="Ok"
//        primary={true}
//        onTouchTap={this.handleRequestClose}
//      />
//    );
//
//    return (
//      <MuiThemeProvider muiTheme={muiTheme}>
//        <div style={styles.container}>
//          <Dialog
//            open={this.state.open}
//            title="Super Secret Password"
//            actions={standardActions}
//            onRequestClose={this.handleRequestClose}
//          >
//            1-2-3-4-5
//          </Dialog>
//          <h1>Material-UI</h1>
//          <h2>example project</h2>
//          <RaisedButton
//            label="Super Secret Password"
//            secondary={true}
//            onTouchTap={this.handleTouchTap}
//          />
//        </div>
//      </MuiThemeProvider>
//    );
//  }
//}
//
//export default Main;




