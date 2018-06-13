import React,{Component}  from 'React';
//import carney from '../../images/carney.png'
require('./Resume.css');

const context = [`静坐长思往日回，岁月蹉跎徒伤悲。
    小荷才露尖尖角，初设江湖岁月催。
    壮志未酬心犹在，琐事绕身家待归。
    日月虽往随心欲，梦里千回展翅飞。`]



export default class Resume extends Component {
    constructor(p) {
        super(p);
        this.state = {interval : 40,
        currentStyle : ''};
    }
    async pChange(e){
        return 123;
    }
    render(){
        this.pChange().then(x => console.log(x))
        return (<div>4444</div>)
    }
}