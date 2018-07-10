import React, {Component} from 'React'
import to from './toHeadOrToFoot.css'
import { Tooltip } from 'antd';
const Fragment = React.Fragment;
/*这是一个能滚动到页面底部、顶部的标签*/
export default class FocusHeadOrFoot extends Component {
    constructor(props){
        super(props);
        //绑定监听滚动条事件
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {right : false, left : true}
    }

    componentDidMount() {
        const height = document.documentElement.scrollTop;
        const sh = document.documentElement.scrollHeight;
        const ch = document.documentElement.clientHeight;
        const mh = sh - ch;//当前浏览器滚动条的最大高度
        this.setState({left: height === mh ? false : true, right: height <= 3 ? false : true})
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        const height = e.target.documentElement.scrollTop;
        const sh = document.documentElement.scrollHeight;
        const ch = document.documentElement.clientHeight;
        const mh = sh - ch;//当前浏览器滚动条的最大高度
        this.setState({left: height === mh ? false : true, right: height <= 3 ? false : true})
    }

    toHeadClick() {
        let height = document.documentElement.scrollTop;
        let x = 0;
        let timer = setInterval(() => {
            height = height - 2 * (x++);
            document.documentElement.scrollTop = height;
            if (height <= 0) {
                document.documentElement.scrollTop = 0;
                clearInterval(timer);
            }
        }, 25)
    }

    toFootClick() {
        let x = 0;
        let height = document.documentElement.scrollTop;
        const sh = document.documentElement.scrollHeight;
        const ch = document.documentElement.clientHeight;
        const mh = sh - ch;//当前浏览器滚动条的最大高度
        let timer = setInterval(() => {
            height = height + 2 * (x++);
            document.documentElement.scrollTop = height;
            if (mh - height <= 0) {
                clearInterval(timer);
            }
        }, 25);
    }
    render(){
        return (<Fragment>
            <Tooltip placement={`right`} title={`你好!!!`}>
                <div className={to.remu} onClick={this.toFootClick}
                style={{display:this.state.left?"block":"none"}}/>
            </Tooltip>
            <Tooltip placement={`left`} title={`hello!!!`}>
                <div className={to.ramu} onClick={this.toHeadClick}
                     style={{display : this.state.right?"block":"none"}}/>
            </Tooltip>
        </Fragment>)
    }
}