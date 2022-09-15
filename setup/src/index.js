import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import App from './App';
import Context from './FilterSection/context';
import {Provider} from 'react-redux'
import store from './redux/store';



ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}>
  <Context>
  <App />
  </Context>
  </Provider>
    
   
  </React.StrictMode>,
  document.getElementById('root')
);