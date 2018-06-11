import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Register from './pages/register/Register.js'
import Resume from './pages/resume/Resume.js'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Resume/>,
document.getElementById('root'));
registerServiceWorker();
