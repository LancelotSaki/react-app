import React,{Component} from 'React'

const MyAlert = {
    position: 'fixed',
    right: '1vw',
    top: '1vh',
    width: '250px',
    height: '35px',
    border: '1px solid #b3cf4d',
    borderRadius: '5px',
    background: 'rgba(99,207,65,0.22)'
};

const MyClose = {
    position: 'absolute',
    right: '5px',
    width: '10px',
    height: '35px',
    lineHeight : '35px',
};

/*
&:active {
    display : none;
}
&::after {
    content : 'X';
    cursor : pointer;
}*/

export default class Alert extends Component {
    render(){
        return (<div>
            <div style={MyAlert}>
                <div style={MyClose}></div>
            </div>
        </div>);
    }
}