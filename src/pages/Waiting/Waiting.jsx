import React, { Component } from 'react'
import leftPic from './left.jpg'
import rightPic from './right.jpg'
import styles from './Waiting.less'


export default class Waiting extends Component {

    state={
        value:0,
        sp:'0%',
        left:0,
    }

    componentDidMount(){
        this.loading = setInterval(() => {
                const {value} =this.state
                if(value<100){
                    this.setState({value:value+1,sp:value+1+'%',left:value*2.5})
                }
            },50)
        } 
    componentWillUnmount(){
        clearInterval(this.loading)
    }

    

    render() {
        const {value,sp,left} =this.state;
        return (
            <div id='waiting'>
                <div id={styles.Waiting_header}>
                    <img alt='图片' src={leftPic}/>
                    <span className={styles.Waiting_title}>新生驾到</span>
                    <img alt='图片' src={rightPic}/>
                </div>
                <div id={styles.Waiting_loading}>
                        <progress value={value} max='100' className={styles.pro}></progress>
                        <span className={styles.sp} style={{left:left+'px'}}>{sp}</span>
                    </div>
                    <div>卷卷正在火速赶来迎接你...</div>
            </div>
        )
    }
}
