import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Login from './pages/login/Login.js'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Login/>,
document.getElementById('root'));
registerServiceWorker();
