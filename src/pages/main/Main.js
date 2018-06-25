import React, {Component} from 'React'
import "./main.css"
import githubImage from '../../images/forkme.png'

export default class Main extends Component {
    render() {
        return (<div className={`page`}>
            {/*这是右上角的内容*/}
            <a className={`forkMyGithub`} href={`https://github.com/LancelotSaki/react-app`} target="_blank">
                <img src={githubImage}/>
            </a>
            <div className={`triangleImage`}></div>
            {/*这是面板层*/}
            <div className={`myPanel`}>
                {/*这是头像*/}
                <div className="myHeadPhoto"></div>
                <div className="myPhoto"></div>


                <div className={`personMess`}>
                    <div className={`perCellPhone`}>1888888887</div>
                    <div className={`perEva`}>评价</div>
                    <div className={`perEmail`}>邮箱</div>
                    <div className={`perExp`}>工作经历</div>
                    <div className={`perStu`}>教育经历</div>
                    <div className={`perSkill`}>个人技能</div>
                    <div className={`skillProgress`}>
                        <progress value={`0.78`} className={`myJavaProgress`}/>
                        <progress value={`0.55`} className={`myLinuxProgress`}/>
                        <progress value={`0.6`} className={`myReactProgress`}/>
                        <progress value={`0.65`} className={`myVueProgress`}/>
                        <progress value={`0.5`} className={`myJavaScriptProgress`}/>
                        <progress value={`0.54`} className={`myJqueryProgress`}/>
                        <progress value={`0.4`} className={`myCssProgress`}/>
                    </div>
                </div>

                {/*这是右下角个人详细信息层*/}
                <div className={`myMess`}>

                </div>
            </div>
        </div>)
    }
}