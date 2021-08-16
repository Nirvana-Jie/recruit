import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import mountain from '../../assets/img/Waiting/mountain.png'
import lefttFlower from '../../assets/img/Waiting/flower2.png'
import rightFlower from '../../assets/img/Waiting/flower1.png'
import mushroom from '../../assets/img/Waiting/蘑菇.png'
import juanjuan from '../../assets/img/Waiting/卷卷.png'
import windmill from '../../assets/img/Waiting/风车.png'
import './Waiting.scss'


class Waiting extends Component {

    state = {
        value: 0,
        sp: '0%',
    }
    //进度条效果
    componentDidMount() {
        this.loading = setInterval(() => {
            const { value } = this.state
            if (value < 100) {
                this.setState({ value: value + 1, sp: value + 1 + '%'})
            }
        }, 25);
        this.loaing2 = setTimeout(() => {
            //路由自动跳转
            this.props.history.push('/home')
        }, 2700)
    };
    //清除定时器
    componentWillUnmount() {
        clearInterval(this.loading)
        clearTimeout(this.loaing2)
    }

    render() {
        const { sp } = this.state;
        return (
            <div id='waiting'>
                <div className='main'>
                    <div id='Waiting_loading'>
                        <div className='pics'>
                            <img alt='山' src={mountain} className='mountain'></img>
                            <img alt='❀' src={lefttFlower} className='leftFlower'></img>
                            <img alt='❀' src={rightFlower} className='rightFlower'></img>
                            <img alt='卷卷' src={juanjuan} className='waiting_juanjuan'></img>
                            <div className='pro'>
                                <img alt='风车' src={windmill} ></img>
                               <div className='pro2'></div>
                            </div>
                        </div>
                    </div>
                    <div className='sp' >{sp}</div>
                    <div className='welcome'>
                        <img alt='蘑菇'src={mushroom}></img>
                        <span>卷卷正在火速赶来迎接你</span>
                    </div>
                    <div className='waiting_footer'>@红岩网校工作站出品</div>
                </div>

            </div>
        )
    }
}

export default withRouter(Waiting)
