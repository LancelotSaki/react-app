import React,{Component}  from 'React';
//import carney from '../../images/carney.png'
require('./Resume.css');



export default class Resume extends Component {
    constructor(p) {
        super(p);
        console.log(p)
        const x = p.match.params.id;
        console.log(x)
        this.state = {interval : 40,
        currentStyle : ''};
    }
    async pChange(e){
        return 123;
    }
    render(){
        this.pChange().then(x => console.log(x))
        return (<div>
            <div id="myDiv">
            <div id="divFlex1"></div>
            <div id="divFlex2"></div>
            <div id="divFlex3"></div>
        </div>

        </div>)
    }
}