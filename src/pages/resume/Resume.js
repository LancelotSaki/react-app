import React,{Component}  from 'React';
//import carney from '../../images/carney.png'
require('./leftResume.css');
require('./rightResume.css')
require('./door.css')
const context = `reactJs版`;

const initArr = {name: "My name is blank page", volk: "汉族", birth: "3000-01-01", "age": "3000", school: "xxxxx学校"};

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


const ul = {
    width: '100%',
    display: 'flex'
}


function Li(props) {
    const f = props.flex === undefined ? 1 :  props.flex;
    const c = props.c === undefined ? "" : props.c;
    return (<li style={{
        border: '1px solid #BDCFE4',
        flex: f
    }}>{c}</li>)
}

const liCut11 = {
    border: '1px solid #BDCFE4',
    flex: 11
}

export default class Resume extends Component {
    constructor(p) {
        super(p);
       // const x = p.match.params.id;
        this.state = {
            currentStyle: '',
            rightFont : '',
            temp : '',
            name : "",
            volk : "",
            birth : "",
            age : "",
            school : ""
        };

    }
   /* 这里进行ajax操作*/
    //Promise一定要有res返回，没有then方法是不会被调用的
    componentDidMount(){
        let index = 0;
        new Promise((res) => {
            this.timer = setInterval(function() {
                this.setState({currentStyle:context.substring(0,index++)});
                if(context.length - index < 0) {//设置执行一段时间后停止，要不然定时器会一直执行下去
                    clearInterval(this.timer);
                    res({"index":index})
                }
            }.bind(this), 1000);
        }).then((res)=>{
            console.log("1.执行结束了"+res.index)
        }).catch((err)=>{
            console.log("1.执行错误了"+err)
        });
        console.log("1.index"+index)
        let index2 = 0;
        new Promise((res) => {
            this.ti = setInterval(function() {
                this.setState({rightFont:context.substring(0,index2++)});
                if(context.length - index2 < 0) {//设置执行一段时间后停止，要不然定时器会一直执行下去
                    clearInterval(this.ti);
                    res({"index":index2})
                }
            }.bind(this), 400);
        }).then((res)=>{
            console.log("2.执行结束了"+res.index)
        }).catch((err)=>{
            console.log("2.执行错误了"+err)
        });

        let initIndex = 0
        new Promise((res)=>{
            this.t0 = setInterval(()=>{
                this.setState({name:initArr.name.substring(0,initIndex++)});
               if(initArr.name.length - initIndex < 0) {
                   clearInterval(this.t0)
                   res("成功")
               }
            },100);
        }).then((res)=>{
            initIndex = 0;
            return new Promise((res)=>{
                this.t1 = setInterval(()=>{
                    this.setState({volk:initArr.volk.substring(0,initIndex++)});
                    if(initArr.volk.length - initIndex < 0) {
                        clearInterval(this.t1)
                        res("成功")
                    }
                },200);
            })
        }).then((res)=>{
            initIndex = 0;
            return new Promise((res)=>{
                this.t2 = setInterval(()=>{
                    this.setState({birth:initArr.birth.substring(0,initIndex++)});
                    if(initArr.birth.length - initIndex < 0) {
                        clearInterval(this.t2)
                        res("成功")
                    }
                },200);
            })
        }).then((res)=>{
            initIndex = 0;
            return new Promise((res)=>{
                this.t3 = setInterval(()=>{
                    this.setState({age:initArr.age.substring(0,initIndex++)});
                    if(initArr.age.length - initIndex < 0) {
                        clearInterval(this.t3)
                        res("成功")
                    }
                },200);
            })
        }).then((res)=>{
            initIndex = 0;
            return new Promise((res)=>{
                this.t4 = setInterval(()=>{
                    this.setState({school:initArr.school.substring(0,initIndex++)});
                    if(initArr.school.length - initIndex < 0) {
                        clearInterval(this.t4)
                        res("成功")
                    }
                },200);
            })
        }).then((res)=>{
            console.log("都执行完了")
        }).catch((err)=>{

        });

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
                <h1>个人简历</h1>
                <div className="personMessage">{this.state.currentStyle}</div>
                <div className="resumeToggleCss" id="myResumeId">
                    <ul style={ul}>
                        <Li c="姓名"/>
                        <Li flex={2} c={this.state.name}/>
                        <Li c="民族"/>
                        <Li flex={2} c={this.state.volk}/>
                        <Li c="出生年月"/>
                        <Li flex={2} c={this.state.birth}/>
                        <Li c="年龄"/>
                        <Li flex={2} c={this.state.age}/>
                    </ul>
                    <ul style={ul}>
                        <Li c="毕业学校"/>
                        <Li flex={2} c={this.state.school}/>
                        <Li c="学院"/>
                        <Li flex={2} c="qq"/>
                        <Li c="专业"/>
                        <Li flex={2} c="qq"/>
                        <Li c="英语证书等级"/>
                        <Li flex={2} c="qq"/>
                    </ul>
                    <ul style={ul}>
                        <Li c="文凭"/>
                        <Li flex={2} c="xxxxxx"/>
                        <Li c="工作年限"/>
                        <Li flex={2} c="qq"/>
                        <Li c="健康状态"/>
                        <Li flex={2} c="qq"/>
                        <Li c="应聘职位"/>
                        <Li flex={2} c="qq"/>
                    </ul>

                    <ul style={ul}>
                        <Li c="籍贯"/>
                        <Li flex={5} c="xxxxxx"/>
                        <Li c="出生地"/>
                        <Li flex={5} c="qq" />
                    </ul>

                    <ul style={ul}>
                        <Li c="工作经历"/>
                        <li style={liCut11}>
                            <ul style={ul}>
                                <Li c="所在公司"/>
                                <Li c="工作时间"/>
                                <Li c="担任职位"/>
                            </ul>
                            <ul style={ul}>
                                <Li c="1"/>
                                <Li c="1"/>
                                <Li c="2"/>
                            </ul>
                        </li>
                    </ul>

                    <ul style={ul}>
                        <Li c={`工作说明`}/>
                        <li style={liCut11}>
                            <ul style={ul}>
                                <Li c={`所在公司`}/>
                                <Li c={`工作时间`}/>
                            </ul>
                            <ul style={ul}>
                                <Li c={1}/>
                                <Li c={2}/>
                            </ul>
                            <ul style={ul}>
                                <Li c={1}/>
                                <Li c={2}/>
                            </ul>
                            <ul style={ul}>
                                <Li c={1}/>
                                <Li c={`2`}/>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="rightResumeCss">
                <div className="personMessage">{this.state.rightFont}</div>
            </div>
            <OpenDoor/>
        </div>)
    }
}