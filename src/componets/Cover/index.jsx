import { loadPartialConfig } from "@babel/core";
import React, { Component } from "react";
import "./index.scss";
export default class Cover extends Component {
  componentDidMount() {
    document.body.parentNode.style.overflow = "hidden"; //隐藏且禁用
  }
  move = (e) => {
    e.target.style.cssText = " width:75px;height:100px";
    setTimeout(function (params) {
      document.body.parentNode.style.overflow = "scroll";
    }, 2000);
  };
  render() {
    return (
      <div className="back" onClick={this.move}>
        <div className="person"></div>
        点击任意位置继续
      </div>
    );
  }
}
