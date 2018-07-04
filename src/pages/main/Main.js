import React, {Component} from 'React'
import m from "./main.css"
import { Tooltip } from 'antd';
import { Timeline, Icon } from 'antd';
import { Progress } from 'antd';
import FocusHeadOrFoot from '../focusHeadOrFoot/FocusHeadOrFoot'
let initInfoMap = new Map();
initInfoMap.set("name", "Carney")
    .set("phone","1888888888")
    .set("email","111111111@gmail.com")
    .set("level","大学本科")
    .set("university","GuangXi University")
    .set("major", "计算机学院网络工程")
    .set("salary","100K+")
    .set("address","广西南宁市西乡塘区大学路");

function MyInformation(p) {
    return (<div className={m.personMess}>
        <div className={m.phone} data={p.phone}/>
        <div className={m.email} data={p.email}/>
        <div className={m.level} data={p.level}/>
        <div className={m.university} data={p.university}/>
        <div className={m.major} data={p.major}/>
        <div className={m.salary} data={p.salary}/>
        <div className={m.address} data={p.address}/>
    </div>);
}

function MySkill(p) {
    const label = (<div className={m.skillProgress}>
        {p.skills.map((skill) =>
            <Tooltip key={skill.key} placement={`right`} title={skill.title}>
                <div className={
                    skill.name === 'java' ? m.myJava :
                        skill.name === 'linux' ? m.myLinux :
                            skill.name === 'oracle' ? m.myOracle :
                                skill.name === 'react' ? m.myReact :
                                    skill.name === 'mysql' ? m.mySql :
                                        skill.name === 'vue' ? m.myVue :
                                            skill.name === 'javaScript' ? m.myJavaScript :
                                                skill.name === 'css' ? m.myCss :
                                                    skill.name === 'jquery' ? m.myJquery : ``}>
                    <Progress key={skill.key} percent={skill.value} size="small"
                              showInfo={false}
                              status={skill.value >= 75 ? `success` : skill.value <= 50 ? `exception` :
                                  skill.value < 75 && skill.value > 60 ? `active` : `normal`}
                    />
                </div>
            </Tooltip>)}
    </div>);

    return label;
}

function MyWork() {
    return (<div className={m.myWorkDetail}>
        <div className={m.workExp}/>
        <div className={m.workTimeLine}>
            <Timeline>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">2014.01.01-2015.06.07</Timeline.Item>
                <Timeline.Item>I</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} color="pink"/>}>2015.07.01-2016.12.31</Timeline.Item>
                <Timeline.Item>am</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>2017.01.01-2018.12.31</Timeline.Item>
                <Timeline.Item>02</Timeline.Item>
            </Timeline>
        </div>
    </div>);
}

function MyProject() {
    return (<div className={m.projectDetail}>
        <div className={m.projectExp}/>
        <div className={m.workTimeLine}>
            <Timeline>
                <Timeline.Item color="red">JavaEE项目</Timeline.Item>
                <Timeline.Item color={`black`}>JavaEEWeb</Timeline.Item>
                <Timeline.Item color="pink">React项目</Timeline.Item>
                <Timeline.Item color={`grey`}>am</Timeline.Item>
                <Timeline.Item color="green">2017.01.01-2018.12.31</Timeline.Item>
                <Timeline.Item>02</Timeline.Item>
            </Timeline>
        </div>
    </div>);
}

export default class Main extends Component {
    constructor(pro){
       super(pro)
        this.state = {
                name : "",
                phone: "",
                email: "",
                university: "",
                level :"",
                salary : "",
                major: "",
                address: "",
                currentState : "",
                skill: []
        };
    }
    // 只调用一次
     componentDidMount(){
         this.setState({
         skill:[{key:1,name:"java",value:75,title:"This is Java!"},
             {key:2,name:"linux",value:62,title:"This is Linux!"},
             {key:3,name:"oracle",value:63,title:"This is Oracle!"},
             {key:4,name:"mysql",value:65,title:"This is Mysql!"},
             {key:5,name:"react",value:60,title:"This is React!"},
             {key:6,name:"vue",value:68,title:"This is Vue!"},
             {key:7,name:"javaScript",value:58,title:"This is JavaScript!"},
             {key:8,name:"jquery",value:67,title:"This is Jquery!"},
             {key:9,name:"css",value:50,title:"This is Css!"},]
        });

         //等待3s后执行打字
         window.setTimeout(()=>{
             this.executeAwait(initInfoMap);
         },3000);
     }

   /* componentDidUpdate(props,state){
          console.log(state)
    }*/

    /*打字效果*/
    returnMyself(key, value) {
        let x = 0;
        return new Promise((res) => {
            this.timer = setInterval(()=> {
                let st = `{"${key}":"${value.substring(0, x++)}"}`;
                this.setState(JSON.parse(st));
                if (value.length - x < 0) {//设置执行一段时间后停止，要不然定时器会一直执行下去
                    clearInterval(this.timer);
                    res(key)
                }
            },100);
        })
    }


    /*同步执行*/
    async executeAwait(map) {
        for (let [key, value] of map) {
            //await等待该方法执行完才能继续下一个循环
            let returnKey = await this.returnMyself(key, value);
            if(returnKey === 'address') {
                this.setState({currentState:"address"});
            }
            console.log("lastKey:"+returnKey)
        }
    }

    render() {

        const info = {
            phone: this.state.phone,
            email: this.state.email,
            level:this.state.level,
            university: this.state.university,
            major: this.state.major,
            salary : this.state.salary,
            address: this.state.address
        }

        return (<div className={m.page}>
            {/*这是右上角的内容*/}
            <div className={m.triangleCatImage}/>
            <a className={m.forkMyGithub} rel="nofollow noopener noreferrer"
               href="https://github.com/LancelotSaki/react-app"
               target="_blank"> </a>
            {/*这是面板层*/}
            <div className={m.myPanel}>
                {/*这是头像*/}
                <div className={m.headPhotoCircle}/>
                <div className={m.showMyName} data={this.state.name}/>
                 {/*个人信息*/}
                <MyInformation {...info}/>
                {/*我的技能*/}
                <MySkill skills={this.state.skill}/>
                {/*这是右下角个人详细信息层*/}
                <MyWork/>
                {/*这是个人项目*/}
                <MyProject/>
            </div>
            <FocusHeadOrFoot/>
        </div>)
    }
}