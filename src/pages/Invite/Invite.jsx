import React, { Component } from 'react'
import QRCode from 'qrcode.react'
import html2canvas from 'html2canvas';
import './Invite.scss'





export default class Invite extends Component {

    state={
        Flag:true
    }
 
    componentDidMount(){
        let browser = {
            versions: function () {
                let u = navigator.userAgent;
                return {
                    trident: u.indexOf('Trident') > -1, //IE内核
                    presto: u.indexOf('Presto') > -1, //opera内核
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //火狐内核
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                    iPad: u.indexOf('iPad') > -1, //是否iPad
                    webApp: u.indexOf('Safari') === -1 //是否web应该程序，没有头部与底部
                };
            }(),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        }
        
        
        if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
            //如果是ios系统就执行
            const {button,button2} =this;
            const {Flag}=this.state
            console.log(Flag);
            button.innerHTML='查看邀请函';
            console.log('这是ios系统');
            let dom =document.getElementById('upDiv')
             this.getPic = async () => {
                html2canvas(dom, {
                    allowTaint: false,
                    useCORS: true,
                }).then( (canvas) => {
                    let imgsrc = canvas.toDataURL('image/png');
                    this.pic.src=imgsrc
                    button.disabled =Flag
                    button2.disabled=Flag
                })
                this.hidebg.style.display='block';
                this.inviter.style.display='block';
                window.addEventListener('touchstart',  () => {
                    this.setState({Flag:!Flag})   
                    this.hidebg.style.display='none';
                    this.inviter.style.display='none';
                    this.hidebg.addEventListener('touchstart',function(e){
                        e.preventDefault()
                    })
               });
            }
        }
        // let ua = navigator.userAgent.toLowerCase();
        // if (ua.match(/MicroMessenger/i) === "micromessenger") {
        //     console.log('这是微信浏览器')
        // } else {
        //     console.log('这不是微信浏览器');
        // }
        
    }

    componentDidUpdate(){
        const {button,button2} =this;
        button.disabled=false
        button2.disabled =false
    }
    
    back = () => {
        this.props.history.push('/home');
    }
    getPic = () => {
        
        let dom =document.getElementById('upDiv')
        html2canvas(dom, {
            allowTaint: false,
            useCORS: true,
            width: dom.offsetWidth,
            height: dom.offsetHeight
        }).then((canvas) => {
            let imgsrc = canvas.toDataURL('image/png');
            let image = new Image();
            // 解决跨域 Canvas 污染问题
            image.setAttribute("crossOrigin", "anonymous");
            image.onload = function () {
                let canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;
                let context = canvas.getContext("2d");
                context.drawImage(image, 0, 0, image.width, image.height);
                let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
                let a = document.createElement("a"); // 生成一个a元素
                let event = new MouseEvent("click"); // 创建一个单击事件
                a.download = "专属二维码"; // 设置图片名称
                a.href = url; // 将生成的URL设置为a.href属性
                a.dispatchEvent(event); // 触发a的单击事件
            };
            image.src = imgsrc;
        })
    }
    render() {
        return (
            <div style={{ height: "100vh" }}>
                <div className='shadow' ref={c=>this.hidebg=c} style={{display:'none'}}></div>
                <div  className='invitePic' ref={c=>this.inviter=c} style={{display:'none'}}>
                    <img alt='请耐心等待哦' ref={c=>this.pic=c} src=''></img>
                </div>
                <div className='underDiv'>
                    <div id='upDiv'>
                        <h1>重邮邀请函</h1>
                        <span>亲爱的xxx同学，</span>
                        <span></span>
                        <QRCode
                            value={window.location.href}
                            size={150}
                            fgColor='#000000'
                        ></QRCode>
                    </div>
                </div>
                <div className='underButton'>
                    <button onClick={this.getPic} ref={c=>this.button=c}>一键保存到相册</button>
                    <button onClick={this.back} ref={c=>this.button2=c}>返回首页</button>
                </div>

            </div>
        )
    }
}
