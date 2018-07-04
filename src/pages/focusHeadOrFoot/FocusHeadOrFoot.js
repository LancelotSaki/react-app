import React, {Component} from 'React'
import to from './toHeadOrToFoot.css'
import { Tooltip } from 'antd';
/*这是一个能滚动到页面底部、顶部的标签*/
export default class FocusHeadOrFoot extends Component {
    toHeadClick(){
        let height = window.pageYOffset;
        let x = 0;
        let timer = setInterval(()=>{
            height = height - 30*(x++);
            //firefox
            document.documentElement.scrollTop = height;
            //chrome
            document.body.scrollTop = height;
            //safari
            window.pageYOffset = height;
            if(height <= 0) {
                //firefox
                document.documentElement.scrollTop = 0;
                //chrome
                document.body.scrollTop = 0;
                //safari
                window.pageYOffset = 0;
                clearInterval(timer);
            }
        },150)
    }
    toFootClick(){
        window.scrollBy(0,1500);
    }
    render(){
        return (<div>
            <Tooltip placement={`right`} title={`你好!!!`}>
                <div className={to.remu} onClick={this.toFootClick}></div>
            </Tooltip>
            <Tooltip placement={`left`} title={`hello!!!`}>
                <div className={to.ramu} onClick={this.toHeadClick}></div>
            </Tooltip>
        </div>)
    }
}