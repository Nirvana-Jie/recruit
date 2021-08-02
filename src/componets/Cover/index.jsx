import { loadPartialConfig } from "@babel/core";
import React, { Component } from "react";
import "./index.scss";
export default class Cover extends Component {
  componentDidMount() {
    console.log(window);
  }
  move = () => {
    const person = this.person;
    person.style.cssText = " width:75px;height:100px";
  };
  render() {
    return (
      <div className="back" onClick={this.move}>
        <div
          className="person"
          ref={(c) => {
            this.person = c;
          }}
        ></div>
        点击任意位置继续
      </div>
    );
  }
}
