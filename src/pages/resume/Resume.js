import React,{Component}  from 'React'
import './Resume.css'
function MyResume() {
    return (<div className="paperBox">
            <div className="paper" >
                <h1 className="myTitle">个人简历</h1>
            </div>
    </div>
    )
}

export default class Resume extends Component {
    render(){
        return <MyResume/>
    }
}