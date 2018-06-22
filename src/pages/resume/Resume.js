import React,{Component}  from 'React';
//import carney from '../../images/carney.png'
require('./leftResume.css');
require('./rightResume.css')
require('./door.css')
const context = `reactJs版`;

let map = new Map();
map.set("name", "My name is blank page")
    .set("volk", "汉族")
    .set("birth", "3000-01-01")
    .set("age","3000")
    .set("school", "xxxxx学校")
    .set("academy", "计算机学院")
    .set("major", "软件工程")
    .set("certificate", "6级")
    .set("diploma", "大学本科")
    .set("workTime", "工作时间")
    .set("status", "健康")
    .set("positionApp", "软件开发工程师")
    .set("nativePlace", "广西壮族自治区南宁市西乡塘区xxxx路xxx号")
    .set("homePlace", "广西壮族自治区南宁市西乡塘区")
    .set("firstCompany","Axxxxx股份有限公司")
    .set("firstWorkTime","2001.01.01~2005.01.01")
    .set("firstOffice","网络工程师")
    .set("secondCompany","Bxxxxx股份有限公司")
    .set("secondWorkTime","2006.01.01~2009.01.01")
    .set("secondOffice","软件开发工程师")
    .set("thirdCompany","Cxxxxx股份有限公司")
    .set("thirdWorkTime","2010.01.01~2013.01.01")
    .set("thirdOffice","Linux运维服务")

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
            rightFont: '',
            temp: '',
            name: "",
            volk: "",
            birth: "",
            age: "",
            school: "",
            academy: "",
            major: "",
            certificate: "",
            diploma: "",
            workTime: "",
            status: "",
            positionApp: "",
            nativePlace: "",
            homePlace: "",
            firstCompany: " ",
            firstWorkTime: " ",
            firstOffice: " ",
            secondCompany: " ",
            secondWorkTime: " ",
            secondOffice: " ",
            thirdCompany: " ",
            thirdWorkTime: " ",
            thirdOffice: " "
        };

    }

    returnMyself(key, value) {
        let x = 0;
        return new Promise((res) => {
            this.tx = setInterval(()=> {
                let st = '{"' + key + '":"' + value.substring(0, x++) + '"}';
                this.setState(JSON.parse(st));
                if (value.length - x < 0) {//设置执行一段时间后停止，要不然定时器会一直执行下去
                    clearInterval(this.tx);
                    res(key)
                }
            },100);
        })
    }

    async executeFunc() {
        for (let [key, value] of map) {
            //await等待该方法执行完才能继续下一个循环
            let returnKey = await this.returnMyself(key, value);
            console.log("lastKey:"+returnKey)
        }
    }

   /* 这里进行ajax操作*/
    //Promise一定要有res返回，没有then方法是不会被调用的
    componentDidMount(){
        let index = 0;
        new Promise((res) => {
            index = 0;
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
        new Promise((res) => {
            index = 0;
            this.ti = setInterval(function() {
                this.setState({rightFont:context.substring(0,index++)});
                if(context.length - index < 0) {//设置执行一段时间后停止，要不然定时器会一直执行下去
                    clearInterval(this.ti);
                    res({"index":index})
                }
            }.bind(this), 400);
        }).then((res)=>{
            console.log("2.执行结束了"+res.index)
        }).catch((err)=>{
            console.log("2.执行错误了"+err)
        });

        this.executeFunc()

    }

    componentWillUnmount() {

    }

   /* async pChange(e){
        return 123;
    }*/
    render() {
        //this.pChange().then(x => console.log(x))
        return (<div className="allResume">
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
                        <Li flex={2} c={this.state.academy}/>
                        <Li c="专业"/>
                        <Li flex={2} c={this.state.major}/>
                        <Li c="英语证书等级"/>
                        <Li flex={2} c={this.state.certificate}/>
                    </ul>
                    <ul style={ul}>
                        <Li c="文凭"/>
                        <Li flex={2} c={this.state.diploma}/>
                        <Li c="工作年限"/>
                        <Li flex={2} c={this.state.workTime}/>
                        <Li c="健康状态"/>
                        <Li flex={2} c={this.state.status}/>
                        <Li c="应聘职位"/>
                        <Li flex={2} c={this.state.positionApp}/>
                    </ul>

                    <ul style={ul}>
                        <Li c="籍贯"/>
                        <Li flex={5} c={this.state.nativePlace}/>
                        <Li c="出生地"/>
                        <Li flex={5} c={this.state.homePlace} />
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
                                <Li c={this.state.firstCompany}/>
                                <Li c={this.state.firstWorkTime}/>
                                <Li c={this.state.firstOffice}/>
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
                                <Li c={this.state.firstCompany}/>
                                <Li c={this.state.firstWorkTime}/>
                            </ul>
                            <ul style={ul}>
                                <Li c={this.state.secondCompany}/>
                                <Li c={this.state.secondWorkTime}/>
                            </ul>
                            <ul style={ul}>
                                <Li c={this.state.thirdCompany}/>
                                <Li c={this.state.thirdWorkTime}/>
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