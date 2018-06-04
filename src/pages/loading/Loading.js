import React,{Component}  from 'React'
//import './LoadingCss.css'

function LoadingMask(props) {
    let background = props.background;
    if(background === undefined || background === '') {
        background = "rgba(0, 0, 0, 0.3)"
    }
    let status = 'none';
    if(props.show !== undefined && props.show){
        status = 'inline'
    }
    console.log(props.hide)
    let divMask = {
        display: status,
        width: "100%",
        height: "100%",
        position: "fixed",
        left: 0,
        top: 0,
        background: background,
        zIndex: "255"
    }
    const spa = {
        position: "fixed",
        left: "50%",
        top: "50%"
    }
    return (<div style={divMask}>
        <span style={spa}>loading....</span>
    </div>)
}

export default class Loading extends Component {
    render(){
        return <LoadingMask/>
    }
}