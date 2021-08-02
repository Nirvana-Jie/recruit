import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import leftPic from './left.jpg'
import rightPic from './right.jpg'
import './Waiting.scss'


class Waiting extends Component {

    state={
        value:0,
        sp:'0%',
        left:0,
    }
    //进度条效果
    componentDidMount(){
        this.loading = setInterval(() => {
                const {value} =this.state
                if(value<100){
                    this.setState({value:value+1,sp:value+1+'%',left:value*2.1})
                }
            },25);
        this.loaing2=setTimeout(() => {
            //路由自动跳转
            this.props.history.push('/home')
        },2700)    
     };
        
  
    //清除定时器
    componentWillUnmount(){
        clearInterval(this.loading)
        clearTimeout(this.loaing2)
    }

    

    render() {
        const {value,sp,left} =this.state;
        return (
            <div id='waiting'>
                <div id='Waiting_header'>
                    <img alt='图片' src={leftPic}/>
                    <span className='Waiting_title'>新生驾到</span>
                    <img alt='图片' src={rightPic}/>
                </div>
                <div id='Waiting_loading'>
                        <meter value={value} max='100' className='pro'></meter>
                        <span className='sp' style={{left:left+'px'}}>{sp}</span>
                    </div>
                    <div>卷卷正在火速赶来迎接你...</div>
            </div>
        )
    }
}

export default withRouter(Waiting)
