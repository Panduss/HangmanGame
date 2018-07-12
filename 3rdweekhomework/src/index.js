import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'
// import ReduxPromise from 'redux-promise'
//
//
//   => THIS IS FOR THE MIDDLEWARE
//
//
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(CreateStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
