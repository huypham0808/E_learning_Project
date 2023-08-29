import React from 'react';
import ReactDOM from 'react-dom/client';
//Import Bootstrap@4.3.1 & Jquery
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'jquery/dist/jquery.min.js'
//
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//
import { Provider } from 'react-redux';
import  store from './store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
