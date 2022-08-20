import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import App from './App';
import Context from './FilterSection/context';



ReactDOM.render(
  <React.StrictMode>
    <Context>
    <App />
    </Context>
    
   
  </React.StrictMode>,
  document.getElementById('root')
);