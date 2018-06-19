import React,{Component} from 'React'
import './Main.css'
export default class Main extends Component {
    constructor(props) {
        super(props);
       // this.homeClick = this.homeClick.bind(this);
    }
    homeClick(){
        alert("点击一下?")
    }
    render() {
        return (<div className="page">
            <div className="bar">
               <div className="home" onClick={this.homeClick}>主页</div>
                <div className="anime">2</div>
                <div className="game">3</div>
                <div className="film">4</div>
            </div>
        </div>)
    }
}