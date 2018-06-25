import React,{Component} from 'React'
import "./main.css"
import cell from "../../images/svg/cellphone.svg"
import eva from "../../images/svg/evaluate.svg"
import email from "../../images/svg/email.svg"
import workExp from "../../images/svg/workExp.svg"
import stuExp from "../../images/svg/stuExp.svg"
import skill from "../../images/svg/skill.svg"
import perIcon from "../../images/svg/personMessage.svg"
import githubImage from '../../images/forkme.png'

export default class Main extends Component {
    render(){
        return (<div className={`page`}>
            <div className={`triangleImage`}>
                <a className={`forkMyGithub`} href={`https://github.com/LancelotSaki/react-app`}>
                    <img src={githubImage}/>
                </a>
            </div>
            <div className={`myPanel`}>
                <div className={`myHeadPhoto`}></div>
                <div className={`myPhoto`}></div>
                <div className={`personMess`}>
                    <ul className={`perUl`}>
                        <li>
                            <img src={cell} className={`cellImage`}/>
                        </li>
                        <li> 18888888888</li>
                    </ul>
                    <ul className={`perUl`}>
                        <li>
                            <img src={eva} className={`cellImage`}/>
                        </li>
                        <li> 18888888888</li>
                    </ul>
                    <ul className={`perUl`}>
                        <li>
                            <img src={email} className={`cellImage`}/>
                        </li>
                        <li>1103418874@qq.com</li>
                    </ul>
                    <ul className={`perUl`}>
                        <li>
                            <img src={workExp} className={`cellImage`}/>
                        </li>
                        <li> 18888888888</li>
                    </ul>
                    <ul className={`perUl`}>
                        <li>
                            <img src={stuExp} className={`cellImage`}/>
                        </li>
                        <li> 18888888888</li>
                    </ul>
                    <ul className={`perUl`}>
                        <li>
                            <img src={skill} className={`cellImage`}/>
                        </li>
                        <li> 18888888888</li>
                    </ul>
                </div>

                <div className={`myMess`}></div>

            </div>
        </div>)
    }
}