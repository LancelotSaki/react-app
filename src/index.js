import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as H,
    Route as R,
} from 'react-router-dom';
import './index.css';
import Main from './pages/main/Main.js'
import Register from './pages/register/Register.js'
import Resume from './pages/resume/Resume.js'
import Alert from './pages/alert/Alert.js'
import Photo from './pages/photo/Photo'
import registerServiceWorker from './registerServiceWorker';

//const width = document.documentElement.clientWidth 这种方式判断并不实用

ReactDOM.render(
    <div >
        <H>
            <div>
                <R exact path="/" component={Main}/>
                <R exact path="/register" component={Register}/>
                <R path="/resume" component={Resume}/>
                <R path="/alert" component={Alert}></R>
                <R path="/p" component={Photo}></R>
            </div>
        </H>
    </div>
   ,
document.getElementById('root'));
registerServiceWorker();
