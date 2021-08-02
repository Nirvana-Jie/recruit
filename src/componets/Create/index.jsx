import React, { Fragment, PureComponent } from "react";
import Test from "../Test";
import "./index.scss";
import PubSub from "pubsub-js";
import Swip from "../Swip";
import { Redirect, Route, Switch } from "react-router-dom";
export default class Create extends PureComponent {
  state = {
    stuName: "",
    subject: "",
    isNameFinished: false,
    isSubjectFinished: false,
  };
  saveName = (e) => {
    this.setState({
      stuName: e.target.value,
      isNameFinished: e.target.value !== "" ? true : false,
    });
  };
  submit = () => {
    const { warn } = this;
    console.log(this.props);
    const { isNameFinished, isSubjectFinished } = this.state;
    warn.style.display = isNameFinished && isSubjectFinished ? "none" : "block";
    if (isNameFinished && isSubjectFinished) this.props.history.push("/map");
  };
  componentDidMount() {
    console.log(123);
    PubSub.subscribe("picker", (msg, v) => {
      this.setState({ subject: v.subject, isSubjectFinished: true });
    });
  }
  render() {
    return (
      <Fragment>
        <div className="backGround">
          <div className="nameSub">
            <div className="name">
              <p>我的名字</p>
              <input
                className="stuName"
                placeholder="请输入你的名字"
                onChange={this.saveName}
              ></input>
            </div>
            <div className="sub">
              <p>我的专业</p>
              <Test />
            </div>
          </div>
          <div className="header">
            <Swip key={1} />
          </div>
          <div className="body">
            <Swip key={2} />
          </div>
          <div className="footer">
            <Swip key={3} />
          </div>
          <div className="submit">
            <p>生成你的信息和形象</p>
            <button onClick={this.submit}>准备好了</button>
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
      </Fragment>
    );
  }
}
