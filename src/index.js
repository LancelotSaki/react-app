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

const Fragment = React.Fragment;

//const width = document.documentElement.clientWidth 这种方式判断并不实用
let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
let type = "未知浏览器";
if (userAgent.indexOf("Opera") !== -1) {
    type = "Opera";//判断是否Opera浏览器
}else if (userAgent.indexOf("Firefox") !== -1) {
    type = "FF";//判断是否Firefox浏览器
} else if (userAgent.indexOf("Chrome") !== -1){
    type = "Chrome";
}else if (userAgent.indexOf("Safari") !== -1) {
    type = "Safari";//判断是否Safari浏览器
}else if (userAgent.indexOf("compatible") !== -1 && userAgent.indexOf("MSIE") !== -1) {
    type = "IE";
}; //判断是否IE浏览器

console.log("浏览器:"+type)

ReactDOM.render(
    <Fragment>
        <H>
            <Fragment>
                <R exact path="/" component={Main}/>
                <R exact path="/register" component={Register}/>
                <R path="/resume" component={Resume}/>
                <R path="/alert" component={Alert}></R>
                <R path="/p" component={Photo}></R>
            </Fragment>
        </H>
    </Fragment>
   ,
document.getElementById('root'));
registerServiceWorker();
