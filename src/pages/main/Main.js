import React, {Component} from 'React'
import m from "./main.css"
export default class Main extends Component {
    render() {
        return (<div className={m.page}>
            {/*这是右上角的内容*/}
            <a className={m.forkMyGithub} rel="nofollow noopener noreferrer"
               href="https://github.com/LancelotSaki/react-app"
               target="_blank"> </a>
            <div className={m.triangleCatImage}/>
            {/*这是面板层*/}
            <div className={m.myPanel}>
                {/*这是头像*/}
                <div className={m.myHeadPhoto}/>
                <div className={m.myPhoto}/>
                <div className={m.showMyName}>Carney</div>

                <div className={m.personMess}>
                    <div className={m.perCellPhone}>1888888887</div>
                    <div className={m.perEva}>评价</div>
                    <div className={m.perEmail}>1103418874@qq.com</div>
                    <div className={m.perStu}>教育经历</div>
                </div>


                <div className={m.skillProgress}>
                    <progress value={`0.78`} className={m.myJavaProgress}>o(︶︿︶)o就不能换个好点的浏览器?
                    </progress>
                    <progress value={`0.55`} className={m.myLinuxProgress}/>
                    <progress value={`0.60`} className={m.myOracleProgress}/>
                    <progress value={`0.58`} className={m.mySqlProgress}/>
                    <progress value={`0.6`} className={m.myReactProgress}/>
                    <progress value={`0.65`} className={m.myVueProgress}/>
                    <progress value={`0.5`} className={m.myJavaScriptProgress}/>
                    <progress value={`0.54`} className={m.myJqueryProgress}/>
                    <progress value={`0.4`} className={m.myCssProgress}/>
                    <progress value={`0.6`} className={m.myExtJsProgress}/>
                </div>

                {/*这是右下角个人详细信息层*/}
                <div className={m.myMessageDetail}>
                    <div className={m.workLeftTopLine}/>
                    <div className={m.workExp}>
                        <div/>
                    </div>
                    <div className={m.workTable}>
                        <ul>
                            <li>2014.01.01-2015.06.07</li>
                            <li>2</li>
                        </ul>
                        <ul>
                            <li>2015.07.01-2016.12.31</li>
                            <li>2</li>
                        </ul>
                        <ul>
                            <li>2017.01.01-2018.12.31</li>
                            <li>2</li>
                        </ul>
                    </div>
                    <div className={m.workLeftBottomLine}/>
                </div>
                {/*这是个人项目经历*/}
                <div className={m.projectDetail}>
                    <div className={m.projectLeftTopLine}></div>
                    <div className={m.projectExp}>
                        <div/>
                    </div>
                    <div className={m.projectLeftBottomLine}></div>
                    <div className={m.expTable}>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                        </ul>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                        </ul>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>)
    }
}