import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { injectGlobal } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/react-vis/dist/style.css';
import App from './App';

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };
  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
