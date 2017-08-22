import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import requestVerify from './showResults';
import MaterialUiForm from './MaterialUiForm';
import Contacts from './confirmCodePage/index'

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div style={{ padding: 15 }}>
        <h2 style={{textAlign:"center"}}>Prodigy.A.I.</h2>
        <MaterialUiForm onSubmit={(val)=>{Contacts({})}}/>
      </div>
    </MuiThemeProvider>
  </Provider>,
  rootEl,
);
