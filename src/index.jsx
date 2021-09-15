// main.jsx
import { useState, useEffect } from 'react';
import { setupMSW } from './mocks/browser'
import ReactDOM from 'react-dom'
import Member from '@page/member'
import App from '@/App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '@store/reducer';
import { HashRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";

const store = createStore(reducer);


setupMSW().then(() =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'))
)

