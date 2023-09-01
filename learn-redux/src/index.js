import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { accountReducer } from './reducers/account';
import { bonusReducer } from './reducers/bonus';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store=createStore(combineReducers({account:accountReducer,bonus:bonusReducer}),applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* now we can access the dispatch and state method of store in any component of the App */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
