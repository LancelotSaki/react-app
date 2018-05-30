import React,{Component} from 'React'

const formFlex = {
    "display" : "flex",
    "justifyContent" : "center",
    "alignItems":"center",
}

function MyCitySelect(props) {

    const myCitys = props.value;
    const change = props.onChange;
    const selectTag = myCitys.map((myCity) =>
            <option key={myCity.cityId.toString()} value={myCity.cityId}>
                {myCity.cityName}</option>
    );
    return (<select onChange={change}>{selectTag}</select>)
}

function MyForm(props) {
    return (

        <form onSubmit={props.onSubmit} style={formFlex} action="http://www.baidu.com">
            账号:<input type="text" value={props.usernameValue}
                      onChange={props.onInputChange}/>
            密码:<input type="password" value={props.passwordValue}
                      onChange={props.onPasswordChange}/>
            说明:<textarea value={props.textArea} onChange={props.onTextAreaChange}
                         placeholder="请注入说明"></textarea>
            城市:<MyCitySelect value={props.selectValue} onChange={props.cityChange}/>
            <input type="submit" value="提交"/>

        </form>
    )
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.beforeSubmitCheck = this.beforeSubmitCheck.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.state = { username : "123",password:"123",textArea:"",
        city : [{"cityId":"321000","cityName":"南京市"},
            {"cityId":"451000","cityName":"南宁市"},
            {"cityId":"330300","cityName":"温州市"},
            {"cityId":"456000","cityName":"贵港市"}],
        currentCity : {"index":"2","cityId":"330300","cityName":"温州市"}};
     }
    onInputChange(e) {
        console.log(e.target.value)
        this.setState({username: e.target.value});
    }
    onPasswordChange(e){
        console.log(e.target.value)
        this.setState({password: e.target.value})
    }
    onTextAreaChange(e){
        console.log(e.target.value)
        this.setState({textArea: e.target.value})
    }
    onSelectChange(e) {
        const index = e.target.selectedIndex
        const key = e.target.options[index].value;
        const text = e.target.options[index].text;
        this.setState({"currentCity":{"index":index,"cityId":key,"cityName":text}})
        //e.target.options[index].selected = true;
    }
    beforeSubmitCheck(e){

        let u = this.state.username
        let p = this.state.password
        let c = this.state.currentCity
        console.log(c)
        console.log(u+";"+p)
        if(u && p) {
            alert("It is Ok!")
        }else {

            alert("current Value:"+u+";"+p)
            e.preventDefault()
        }

    }
    render(){
        return <MyForm
            onInputChange={this.onInputChange}
            usernameValue={this.state.username}
            onPasswordChange={this.onPasswordChange}
            passwordValue={this.state.password}
            textAreaVlue={this.state.textArea}
            onTextAreaChange={this.onTextAreaChange}
            selectValue={this.state.city}
            cityChange={this.onSelectChange}
            onSubmit={this.beforeSubmitCheck}/>
    }
}
export default Login
