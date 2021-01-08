import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css'
import reportWebVitals from './reportWebVitals';

import StateProvider from './contexts/StateProvider';
import AuthProvider from './contexts/AuthProvider';
import { reducer, initialState } from './dataLayer/reducer';

ReactDOM.render(
  <React.Fragment>
    <StateProvider reducer={reducer} initialState={initialState}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StateProvider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
