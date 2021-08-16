import React, { Component } from 'react'
// import { Link, Redirect } from 'react-router-dom'
import './home.scss'
import button from '../../assets/img/Home/button.png'
import slide from '../../assets/api/slide'
import PubSub from 'pubsub-js'


export default class home extends Component {
 
    state={
        startY:0,
        moveY:0,
        time:'0',
        deadline:new Date('2021/9/14 00:00:00'),
        d:'00',
        h:'00',
        m:'00',
        s:'00',
        name:'zhu',
        date:new Date().getTime()

    }
    componentDidMount(){
        //获取倒计时
        this.timer = setInterval(() => {
            const {deadline} =this.state
            let time =new Date()
            let leftime =deadline.getTime()-time.getTime();
            let leftd =Math.floor(leftime/(1000*60*60*24));
            let lefth = Math.floor(leftime/(1000*60*60)%24) ; 
            let leftm = Math.floor(leftime/(1000*60)%60) ; 
            let lefts = Math.floor(leftime/1000%60);
            if(leftd<10)leftd='0'+leftd;
            if(lefth<10)lefth='0'+lefth;
            if(leftm<10)leftm='0'+leftm;
            if(lefts<10)lefts='0'+lefts;
            this.setState({
                d:leftd,
                h:lefth,
                m:leftm,
                s:lefts
            })
        },1000)
        slide(this,this.homeNode,'/create')
        
        }
    componentWillUnmount(){
        //清除定时器
        clearInterval(this.timer)
    }

  

    render() {
        const {d,h,m,s} = this.state
        return (
            <div className="hidden">
                <div className='home_backgroud' ref={c=>this.homeNode=c} >
                        <div className='t1'>
                        距新生入学还有
                        </div>
                        <div className='t2'>
                            <span>{d}</span>
                            <span>天</span>
                            <span>{h}</span>
                            <span>时</span>
                            <span>{m}</span>
                            <span>分</span>
                            <span>{s}</span>
                            <span>秒</span>
                        </div>
                        <img alt='button' src={button}></img>
                        <div className='t3'>开启我的</div>
                        <div className='t4'>重邮探索之旅</div>
                </div>                    
            </div>
            
        )
    }
}

