import React,{Component} from 'React';
import './Photo.css'
export default class Photo extends Component {
    render() {
        return (<div>
            {/* 3d照片墙 */}
            <div className="demo-perspective-photo">
                <div id="stage">
                    <div id="container">
                        {/* 此处可上传自己的图片
                                <img src="../static/images/1.png" class='piece' style="-webkit-transform: rotateY(0deg) translateZ(196px);">
                        <img src="../static/images/2.png" class='piece' style="-webkit-transform: rotateY(60deg) translateZ(196px);">
                        <img src="../static/images/3.png" class='piece' style="-webkit-transform: rotateY(120deg) translateZ(196px);">
                        <img src="../static/images/1.png" class='piece' style="-webkit-transform: rotateY(180deg) translateZ(196px);">
                        <img src="../static/images/2.png" class='piece' style="-webkit-transform: rotateY(240deg) translateZ(196px);">
                        <img src="../static/images/4.png" class='piece' style="-webkit-transform: rotateY(300deg) translateZ(196px);">
                        */}
                        <div className='example'></div>
                        <div className='example'></div>
                        <div className='example'></div>
                        <div className='example'></div>
                        <div className='example'></div>
                        <div className='example'></div>
                    </div>
                </div>
            </div>
        </div>)
    }
}