import React,{Component}  from 'React';
//import carney from '../../images/carney.png'
require('./leftResume.css');
require('./rightResume.css')
require('./door.css')
const context = `<h>今天给大家表演一个魔术</h>`;

function BackWall() {
    return (<div className="BackWall"></div>)
}

function OpenDoor() {
    return (<div>
        <div className="leftDoor">

        </div>
        <div className="rightDoor">

        </div>
    </div>)
}

export default class Resume extends Component {
    constructor(p) {
        super(p);
       // const x = p.match.params.id;
        this.state = {
            index: 0,
            interval: 40,
            currentStyle: ''
        };

    }
    componentDidMount(){
        let index = this.state.index;
        let font  = this.state.currentStyle;
        this.timer = setInterval(function() {
            if(index === font.length) {
                this.setState({
                    index : 0
                });
            }
            this.setState({currentStyle:context.substring(0,index++)});
        }.bind(this), 120);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

   /* async pChange(e){
        return 123;
    }*/
    render() {
        //this.pChange().then(x => console.log(x))
        return (<div>
            <BackWall/>
            <div className="leftResumeCss">
                <h1>个人信息</h1>
                <div className="personMessage">{this.state.currentStyle}</div>
            </div>
            <div className="rightResumeCss">
            </div>
            <OpenDoor/>
        </div>)
    }
}