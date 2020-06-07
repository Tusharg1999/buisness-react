import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';

import './index.css';
import * as serviceWorker from './infrastructure/serviceWorker';
import { ThemeProvider } from 'styled-components';
import theme from './config/theme';
import { ApplicationRouter } from './infrastructure/router'
import firebaseConfig from './config/firebaseConfig'

firebase.initializeApp(firebaseConfig);
ReactDOM.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApplicationRouter />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
