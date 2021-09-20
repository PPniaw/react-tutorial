// main.jsx
import { useState, useEffect } from 'react';
import { setupMSW } from './mocks/browser'
import ReactDOM from 'react-dom'
// import Member from '@page/member'
import App from '@/App'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '@store/reducer';
import { HashRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import { createLogger } from 'redux-logger'

const logger = createLogger({
    collapsed: true
});

const store = createStore(reducer, applyMiddleware(logger));

setupMSW().then(() =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'))
)
