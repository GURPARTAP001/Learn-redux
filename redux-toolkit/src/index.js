import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './slices/accountSlice';
import bonusReducer from './slices/bonusSlice';
import { Provider } from 'react-redux';

// configurestore contains the middleware such as thunk ,logger
const store = configureStore(
  {
    reducer: {
      account: accountReducer,
      bonus: bonusReducer
    }
  }
  )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


