import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// createStore -> configureStore
import { createStore, applyMiddleware, compose } from 'redux'
// import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import Reducers from './reducers'
//import authReducer from './reducers/auth';

const store = createStore( Reducers, compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  
);