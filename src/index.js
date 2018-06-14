import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as H,
    Route as R,
} from 'react-router-dom';
import './index.css';
import Register from './pages/register/Register.js'
import Resume from './pages/resume/Resume.js'
import registerServiceWorker from './registerServiceWorker';

//const width = document.documentElement.clientWidth 这种方式判断并不实用

ReactDOM.render(
    <H>
        <div>
         <R exact path="/" component={Register} />
         <R path="/resume" component={Resume}/>
        </div>
    </H>,
document.getElementById('root'));
registerServiceWorker();
