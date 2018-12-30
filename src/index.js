import React from 'react';
import ReactDOM from 'react-dom';
import {StoreContext} from 'redux-react-hook';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import 'style/main.module.scss';

import store from 'redux/create';
import Routes from './routes';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    htmlFontSize: 10,
  },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <StoreContext.Provider value={store}>
        <Routes />
      </StoreContext.Provider>
    </MuiThemeProvider>, document.getElementById('root')
  );
