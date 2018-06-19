import React,{Component}  from 'React';
//import carney from '../../images/carney.png'
require('./leftResume.css');
require('./rightResume.css')
require('./door.css')
const context = `今天给大家表演一个魔术
今天给大家表演一个魔术
今天给大家表演一个魔术
今天给大家表演一个魔术
今天给大家表演一个魔术
今天给大家表演一个魔术
今天给大家表演一个魔术
今天给大家表演一个魔术`;

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
            currentStyle: ''
        };

    }
   /* 这里进行ajax操作*/
    //Promise一定要有res返回，没有then方法是不会被调用的
    componentDidMount(){
        let index = this.state.index;
        let pro = new Promise((res) => {
            this.timer = setInterval(function() {
                this.setState({currentStyle:context.substring(0,index++)});
                if(context.length - index < 0) {//设置执行一段时间后停止，要不然定时器会一直执行下去
                    clearInterval(this.timer);
                    res({"index":index})
                }
            }.bind(this), 40);
        });
        pro.then((res)=>{
            console.log("执行结束了"+res.index)
        }).catch((err)=>{
            console.log("执行错误了"+err)
        })
    }

    componentWillUnmount() {

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