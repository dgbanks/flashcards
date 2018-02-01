import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'materialize-css/dist/css/materialize.min.css'; // if not js, you DO have to include the extension

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);