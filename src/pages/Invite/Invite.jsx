import React, { Component } from "react";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";
import "./Invite.scss";

export default class Invite extends Component {
  state = {
    Flag: true,
    name: "",
    picUrl: "",
  };

  componentDidMount() {
    let stuName = localStorage.getItem("personName");
    this.setState({ name: stuName });
  }

  // let browser = {
  //     versions: function () {
  //         let u = navigator.userAgent;
  //         return {
              // trident: u.indexOf('Trident') > -1, //IE内核
              // presto: u.indexOf('Presto') > -1, //opera内核
              // webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
              // gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //火狐内核
              // mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
              // ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
              // android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
              // iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
              // iPad: u.indexOf('iPad') > -1, //是否iPad
              // webApp: u.indexOf('Safari') === -1 //是否web应该程序，没有头部与底部
  //         };
  //     }(),
  //     language: (navigator.browserLanguage || navigator.language).toLowerCase()
  // }
  // let ua = navigator.userAgent.toLowerCase();
  // if (ua.match(/MicroMessenger/i) === "micromessenger") {
  //     console.log('这是微信浏览器')

  // } else {
  //     console.log('这不是微信浏览器');
  // }

  // if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
  //     // 如果是ios系统就执行

  // }

  componentDidUpdate() {
    const { button, button2 } = this;
    button.disabled = false;
    button2.disabled = false;
  }

  back = () => {
    this.props.history.replace("/home");
  };
  getPic = () => {
    const { button, button2 } = this;
    const { Flag } = this.state;
    let dom = document.getElementById("upDiv");
    html2canvas(dom, {
      allowTaint: false,
      useCORS: true,
    }).then((canvas) => {
      let imgsrc = canvas.toDataURL("image/png");
      // console.log(imgsrc);
      let image = new Image();
      // 解决跨域 Canvas 污染问题
      image.setAttribute("crossOrigin", "anonymous");
      this.pic.src = imgsrc;
      button.disabled = Flag;
      button2.disabled = Flag;
    });
    this.hidebg.style.display = "block";
    this.inviter.style.display = "block";
    this.bg.addEventListener("touchend", () => {
      this.setState({ Flag: !Flag });
      if (this.props.location.pathname === "/invite") {
        this.hidebg.style.display = "none";
        this.inviter.style.display = "none";
        this.hidebg.addEventListener("touchstart", function (e) {
          e.preventDefault();
        });
      }
    });
  };
  render() {
    const { name } = this.state;
    let pic = localStorage.getItem("picture");
    return (
      <div className="hidden">
        <div className="inviter" ref={c=>this.bg=c}>
          <div
            className="shadow"
            ref={(c) => (this.hidebg = c)}
            style={{ display: "none" }}
          ></div>
          <div
            className="invitePic"
            ref={(c) => (this.inviter = c)}
            style={{ display: "none" }}
          >
            <img alt="请耐心等待哦" ref={(c) => (this.pic = c)} src=""></img>
          </div>
          <div id="upDiv">
            <h2>重邮邀请函</h2>
            <div className="invite_header">
              <div>亲爱的</div>
              <span className="name">{name}</span>
              <span className="student">同学</span>
            </div>
            <div className="invite_body">
              <div className="body1">
                &nbsp;&nbsp;&nbsp;&nbsp;欢迎来到重庆市海拔最高的学府--
                <span>重庆邮电大学</span>
                ，我们将在这3800亩地里播种梦想，扬帆起航。
              </div>
              <div className="body1">
                &nbsp;&nbsp;&nbsp;&nbsp;恭喜你成功开启大学新生活，我们在重邮等你！
              </div>
              <div className="school">
                <div className="cqupt">重庆邮电大学</div>
                <div>红岩网校工作站</div>
              </div>
              <div
                className="model"
                style={{
                  background:
                    "url(" +
                    require(`../../assets/img/create/persons/${pic}.png`)
                      .default +
                    ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              ></div>

              <div className="border">
                <QRCode
                  value={window.location.href}
                  size={(42 / 375) * window.innerWidth}
                  fgColor="#306627"
                ></QRCode>
              </div>
            </div>
            <div className="more">
              <div>凭二维码线下领重邮纪念品</div>
              <div className="more2">
                更多内容关注<span>"重邮小帮手"</span>
              </div>
            </div>
            <div className="invite_footer">
              <div className="motto">
                #&nbsp;修德&nbsp;博学&nbsp;求实&nbsp;创新&nbsp;#
              </div>
              <div className="wechat">
                快保存形象分享至朋友圈，和好友们一起打卡重邮
              </div>
            </div>
          </div>
          <div className="underButton">
            <button
              onClick={this.getPic}
              ref={(c) => (this.button = c)}
              className="button1"
            >
              查看保存图片
            </button>
            <button
              onClick={this.back}
              ref={(c) => (this.button2 = c)}
              className="button2"
            ></button>
          </div>
          <div className="invites_footer">@红岩网校工作站出品</div>
        </div>
      </div>
    );
  }
}
