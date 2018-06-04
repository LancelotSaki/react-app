import React, {Component} from 'React'
import './Modal.css'

function MyModal(props) {
    const value = props.value;
    console.log("传入的值:"+value)
    return (<div>
        <input id="checkMask" className="checkMaskCss" type="checkbox" onChange={props.onChange} value={value}/>
        <div className="modalCover">
            <div className="modal">
                <label className="close" htmlFor="checkMask">x</label>
                I'm a modal!
            </div>
        </div>
    </div>);
}

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.checkBoxOnchange = this.checkBoxOnchange.bind(this);
        this.state = {"checkBoxValue":"1",
        "show":props.show}
    }
    checkBoxOnchange(e) {
        console.log("当前值:"+e.target.value)
        this.setState({checkBoxValue: e.target.value});
    }
    render() {
        return <MyModal value="1" onChange={this.checkBoxOnchange}/>
    }
}

