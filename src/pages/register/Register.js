import React, {Component} from 'React'
import AreaJson from './Area'
import Modal from '../modal/Modal'
import Loading from '../loading/Loading'
import {
    Link as L,
} from 'react-router-dom';
const myFormCss = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}
const myUl = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%"
}
const innerLeftLi = {
    flex: 1,
    textAlign: "right",
    paddingRight: "20px",
    listStyle: "none"
}
const innerRightLi = {
    flex: 2,
    listStyle: "none"
}

function MyCitySelect(props) {

    const myCitys = props.value;
    const change = props.onChange;
    const selectTag = myCitys.map((myCity) =>
        <option key={myCity.cityId.toString()} value={myCity.cityId} >
            {myCity.cityName}</option>
    );
    return (<select onChange={change}>{selectTag}</select>)
}


function MyFormAlert(props) {
    const type = props.type;
    let tip = "";
    let alertCss = {}
    if (type === 1) {
        if (props.username == null || props.username.length === 0) {
           // tip = "用户名为空"
        } else if (props.username.length < 6) {
            tip = "用户名至少六位"
        } else {
            tip = "用户名可以正常使用"
        }
    } else if (type === 2) {
        if (props.nickName == null || props.nickName.length === 0) {
           // tip = "昵称为空"
        } else if (props.nickName.length < 4) {
            tip = "昵称至少四位"
        } else {
            tip = "昵称可以正常使用"
        }
    } else if (type === 3) {
        if (props.password == null || props.password.length === 0) {
          //  tip = "密码为空"
        } else if (props.password.length < 6) {
            tip = "弱";
            alertCss = {
                color : "red"
            }
        } else if(props.password.length >=6 && props.password.length < 10) {
            tip = "强"
            alertCss = {
                color : "#FFA500"
            }
        } else {
            tip = "超强"
            alertCss = {
                color : "green"
            }
        }
    }
    return <div style={alertCss}>{tip}</div>
}


function MyForm(props) {
    return (
        <form onSubmit={props.beforeSumbit} style={myFormCss} action="http://www.baidu.com">
            <ul style={myUl}>
                <li style={innerLeftLi}>用户账号:</li>
                <li style={innerRightLi}><input type="text" value={props.username}
                                                onChange={props.onInputChange} placeholder="邮箱、手机号都可以"/></li>
            </ul>
            <ul style={myUl}>
                <li style={innerLeftLi}>&nbsp;</li>
                <li style={innerRightLi}>
                    <MyFormAlert type={1} {...props}/>
                </li>
            </ul>
            <ul style={myUl}>
                <li style={innerLeftLi}>
                    昵称:
                </li>
                <li style={innerRightLi}><input type="text" value={props.nickName}
                                                onChange={props.onNickNameChange}/></li>
            </ul>
            <ul style={myUl}>
                <li style={innerLeftLi}>&nbsp;</li>
                <li style={innerRightLi}>
                    <MyFormAlert type={2} {...props}/>
                </li>
            </ul>
            <ul style={myUl}>
                <li style={innerLeftLi}>
                    用户密码:
                </li>
                <li style={innerRightLi}><input type="password" value={props.password}
                                                onChange={props.onPasswordChange}/>
                </li>
            </ul>
            <ul style={myUl}>
                <li style={innerLeftLi}>&nbsp;</li>
                <li style={innerRightLi}>
                    <MyFormAlert type={3} {...props}/>
                </li>
            </ul>
            <ul style={myUl}>
                <li style={innerLeftLi}>
                    说明:
                </li>
                <li style={innerRightLi}><textarea value={props.textArea} onChange={props.onTextAreaChange}
                                                   placeholder="请注入说明"></textarea>
                </li>
            </ul>
            <ul style={myUl}>
                <li style={innerLeftLi}>&nbsp;</li>
                <li style={innerRightLi}>
                    <MyFormAlert type={4} {...props}/>
                </li>
            </ul>
            <ul style={myUl}>
                <li style={innerLeftLi}>城市:</li>
                <li style={innerRightLi}><MyCitySelect value={props.select} onChange={props.cityChange}/>
                </li>
            </ul>
            <ul style={myUl}>
                <li style={innerLeftLi}>&nbsp;</li>
                <li style={innerRightLi}>
                    <MyFormAlert type={5} {...props}/>
                </li>
            </ul>
            <ul style={myUl}>
                <li style={innerLeftLi}>&nbsp;</li>
                <li style={innerRightLi}>
                    <input type="submit" value="提交"/></li>
            </ul>
        </form>
    )
}


class Register extends Component {
    constructor(props) {
        console.log("register构造函数")
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onNickNameChange = this.onNickNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.beforeSubmitCheck = this.beforeSubmitCheck.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.state = {
            username: "",
            nickName: "",
            password: "",
            textArea: "",
            city: AreaJson.city,
            currentCity: AreaJson.defaultCity,
            modal : false
        };
    }

    componentWillMount() {
        console.log("页面即将被加载")
    }

    onInputChange(e) {
        console.log(e.target.value)
        this.setState({username: e.target.value});
    }

    onNickNameChange(e) {
        console.log(e.target.value)
        this.setState({nickName: e.target.value});
    }

    onPasswordChange(e) {
        console.log(e.target.value)
        this.setState({password: e.target.value})
    }

    onTextAreaChange(e) {
        console.log(e.target.value);
        this.setState({textArea: e.target.value})
    }

    onSelectChange(e) {
        const index = e.target.selectedIndex;
        const key = e.target.options[index].value;
        const text = e.target.options[index].text;
        this.setState({"currentCity": {"index": index, "cityId": key, "cityName": text}});
        //e.target.options[index].selected = true;
        console.log(this.state.currentCity);
    }

    beforeSubmitCheck(e) {

        let u = this.state.username;
        let p = this.state.password;
        let t = this.state.textArea;
        let c = this.state.currentCity;
        //let modal = this.state.modal;
        console.log(c)
        console.log(u + ";" + p)
        if (u && p && t) {
            alert("It is Ok!")
        } else {
            //alert("current Value:" + u + ";" + p)
            //this.setState({"modal"})
            e.preventDefault()
        }

    }

    render() {
        const uChange = this.onInputChange;
        const nChange = this.onNickNameChange;
        const pChange = this.onPasswordChange;
        const tChange = this.onTextAreaChange;
        const cChange = this.onSelectChange;
        const modal = this.state.modal;
        const beforeSumbit = this.beforeSubmitCheck;
        const resultValue = {
            "username": this.state.username,
            "nickName": this.state.nickName,
            "password": this.state.password,
            "textArea":this.state.textArea,
            "select": this.state.city,
            "onInputChange": uChange,
            "onNickNameChange": nChange,
            "onPasswordChange": pChange,
            "onTextAreaChange": tChange,
            "cityChange": cChange,
            "beforeSumbit": beforeSumbit,
            "modal" : modal
        }
        return (<div>
                <L to="/resume">链接到个人简介</L>
                <MyForm {...resultValue}/>
                <Modal show/>
                <Loading/>
            </div>
        )
    }
}

export default Register
