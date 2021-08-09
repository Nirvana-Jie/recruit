import React, { Fragment, PureComponent } from "react";
import Test from "../Test";
import "./index.scss";
import PubSub from "pubsub-js";
import Swip from "../Swip";
export default class Create extends PureComponent {
  state = {
    stuName: "",
    subject: "",
    isNameFinished: false,
    isSubjectFinished: false,
    isLetterout: false,
    submitChange: true,
  };
  blur = () => {};
  saveName = (e) => {
    this.setState({
      stuName: e.target.value,
      isNameFinished: e.target.value !== "" ? true : false,
    });
  };
  submit = () => {
    const { warn, paizi } = this;
    const { isNameFinished, isSubjectFinished } = this.state;
    paizi.style.backgroundPositionX = "-160px";
    setTimeout(() => {
      paizi.style.backgroundPositionX = "0";
    }, 100);
    warn.style.display = isNameFinished && isSubjectFinished ? "none" : "block";
    if (isNameFinished && isSubjectFinished) this.props.history.push("/map");
  };
  getPic = (part) => {
    const b = [1, 2, 3, 4];
    return b.map((data) => {
      return `/img/create/${part}/${data}.png`;
    });
  };
  letterOut = (e) => {
    const { isLetterout } = this.state;
    this.setState({ isLetterout: true });
  };
  letterIn = (e) => {
    this.setState({ isLetterout: false });
  };
  componentDidMount() {
    PubSub.subscribe("picker", (msg, v) => {
      this.setState({ subject: v.subject, isSubjectFinished: true });
    });
    const showPic = this.getPic();
  }

  render() {
    let b = 1;
    return (
      <Fragment>
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
                  }}
                  onFocus={(e) => {
                    e.target.placeholder = "";
                    e.target.className += " stuName-active";
                  }}
                ></input>
              </div>
            </div>
            <div className="sub">
              <p>我的专业</p>
              <div onTouchStart={this.letterOut}>
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
              />
            </div>
            <div className="body">
              <Swip
                key={2}
                showNum={1}
                showPic={this.getPic("body")}
                type={"bodybox"}
              />
            </div>
            <div className="footer">
              <Swip
                key={3}
                showNum={1}
                showPic={this.getPic("foot")}
                type={"footerbox"}
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
                请先填写信息哦
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
