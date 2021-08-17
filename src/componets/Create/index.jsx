import React, { Fragment, PureComponent } from "react";
import Test from "../Test";
import "./index.scss";
import PubSub from "pubsub-js";
import Swip from "../Swip";
import Submit from "./Submit";
export default class Create extends PureComponent {
  state = {
    isSubmit: false,
    stuName: "",
    subject: "",
    perImg: { headbox: 0, bodybox: 0, footerbox: 0 },
    isNameFinished: false,
    isSubjectFinished: false,
    isLetterout: false,
    submitChange: true,
  };
  saveName = (e) => {
    if (e.target.value === "") {
      this.setState({
        stuName: "请输入你的姓名",
        isNameFinished: false,
        isNameError: "void",
      });
    }
    if (e.target.value.length > 8) {
      this.setState({
        isNameFinished: false,
        isNameError: "toolong",
      });
    }
    if (e.target.value.length <= 8 && e.target.value.length > 0) {
      this.setState({
        isNameError: "none",
        stuName: e.target.value,
        isNameFinished: true,
      });
    }
  };
  //使得后面人物放大和缩写可以拿到整体的图片
  changePerImg = (type, activeIndex) => {
    this.setState({ perImg: { ...this.state.perImg, [type]: activeIndex } });
  };
  submit = () => {
    const { warn, paizi } = this;
    const { isNameFinished, isSubjectFinished, perImg, isNameError } =
      this.state;
    paizi.className += " paiziActive";
    const timer = setTimeout(() => {
      paizi.className = "paizi";
      clearTimeout(timer);
    }, 100);
    warn.style.display = isNameFinished && isSubjectFinished ? "none" : "block";
    if (isNameFinished && isSubjectFinished && isNameError === "none") {
      this.setState({
        isSubmit: true,
      });
      PubSub.publish("person", perImg);
    }
    localStorage.setItem(
      "picture",
      `${perImg.headbox}${perImg.bodybox}${perImg.footerbox}`
    );
  };
  getPic = (part) => {
    const b = [1, 2, 3, 4];
    return b.map((data) => {
      return `${part}/${data}`;
    });
  };
  letterOut = () => {
    const { show } = this;
    this.setState({ isLetterout: true });
    show.className += " subActive";
  };

  letterIn = (subject) => {
    const { show } = this;
    if (subject !== "请选择你的学院") {
      this.setState({ isLetterout: false, isSubjectFinished: true });
      localStorage.setItem("subject", subject);
    } else {
      this.setState({ isLetterout: false });
    }
    show.className = "select";
  };
  componentDidMount() {
    localStorage.clear();
  }

  render() {
    const {
      isSubmit,
      perImg,
      subject,
      isNameError,
      isSubjectFinished,
      isNameFinished,
    } = this.state;
    return (
      <div className="hidden">
        {isSubmit ? (
          <Submit person={perImg} subject={subject} />
        ) : (
          <div className="backGround">
            {/* <img src={`/img/create/body/1.png`}></img> */}
            {this.state.isLetterout !== false ? (
              <Fragment>
                <div
                  className="bigLetter"
                  style={{ display: "block", height: "314px" }}
                ></div>
              </Fragment>
            ) : (
              <div className="bigLetter" style={{ display: "none" }}></div>
            )}
            <div className="bigLetter"></div>

            <div className="nameSub">
              <div className="name">
                <p>我的名字</p>
                <div>
                  <input
                    className="stuName"
                    placeholder="请输入你的名字"
                    onChange={this.saveName}
                    onBlur={(e) => {
                      e.target.className = " stuName";
                      if (e.target.value === "") {
                        e.target.placeholder = "请输入姓名";
                      }
                    }}
                    onFocus={(e) => {
                      e.target.placeholder = "";
                      e.target.className += " stuName-active";
                    }}
                  ></input>
                </div>
              </div>
              <div className="sub">
                <p>我的学院</p>
                <div
                  className="select"
                  ref={(c) => {
                    this.show = c;
                  }}
                  onTouchStart={this.letterOut}
                >
                  <Test letterIn={this.letterIn} />
                </div>
              </div>
            </div>
            <div className="content">
              <div className="header">
                <Swip
                  key={1}
                  showNum={1}
                  showPic={this.getPic("head")}
                  type={"headbox"}
                  changePerImg={this.changePerImg}
                  between={50}
                />
              </div>
              <div className="body">
                <Swip
                  key={2}
                  showNum={1}
                  showPic={this.getPic("body")}
                  type={"bodybox"}
                  changePerImg={this.changePerImg}
                  between={50}
                />
              </div>
              <div className="foot">
                <Swip
                  key={3}
                  showNum={1}
                  showPic={this.getPic("foot")}
                  type={"footerbox"}
                  changePerImg={this.changePerImg}
                  between={50}
                />
              </div>
            </div>
            <div className="submit">
              <div
                className="paizi"
                ref={(c) => {
                  this.paizi = c;
                }}
              >
                <p>生成你的信息和形象</p>
                <span className="word">准备好了</span>
                <button onClick={this.submit} className="readyBtn"></button>
                <span
                  className="warn"
                  ref={(c) => {
                    this.warn = c;
                  }}
                >
                  {isNameError === "none"
                    ? console.log()
                    : isNameError === "toolong"
                    ? "你输入的姓名太长了"
                    : isNameFinished && isSubjectFinished
                    ? console.log()
                    : "请先填写信息哦"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
