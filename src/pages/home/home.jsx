import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.scss'


export default class home extends Component {
 
    state={
        startY:0,
        moveY:0
    }
    componentDidMount(){
        //获取手指的初始坐标
        window.addEventListener('touchstart',(event) => {
            const {startY} =this.state
             this.setState({
                startY:event.targetTouches[0].pageY
            })
            console.log(startY);
        });
        //移动手指 touchmove：计算手指的滑动距离，并且移动盒子
        window.addEventListener('touchmove',(event) => {
            const {startY} =this.state
            console.log(event.targetTouches[0].pageY);
            //计算移动距离
            this.setState({
                moveY:event.targetTouches[0].pageY - startY,
            })
        });
        window.addEventListener('touchend',(event) => {
            const {moveY} =this.state
            if(Math.abs(moveY)>150){
                //moveY是正值时，路由跳转
                if(moveY<0){
                    this.props.history.push('/creat');
                }
            }
        })
    }

    render() {
        return (
            <div style={{height: "100vh"}}>
                {/* <span className='musicControl'>
                    <Link className='mc-play'>
                        <audio  controls="controls" autoplay="autoplay">
                            <source src='./Level04Loop.mp3'></source>
                        </audio>
                    </Link>
                </span> */}
                <div className='title'>
                    <h1>未来，邮你探寻</h1>
                </div>
                <div className='message'>

                </div>
                
            </div>
        )
    }
}

