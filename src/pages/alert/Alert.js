import React,{Component} from 'React'
import styled from 'styled-components';

const MyAlert = styled.div`
    position: fixed;
    right: 1vw;
    top: 1vh;
    width: 250px;
    height: 35px;
    border: 1px solid #b3cf4d;
    border-radius: 5px;
    background: rgba(99,207,65,0.22);
`;

const MyClose = styled.div`
    position: absolute;
    right: 5px;
    width: 10px;
    height: 35px;
    line-height : 35px;
    &:active {
       display : none;
    }
    &::after {
        content : 'X';   
        cursor : pointer;
    }
`;


export default class Alert extends Component {
    render(){
        return (<div>
            <MyAlert>
                <MyClose></MyClose>
            </MyAlert>
        </div>);
    }
}