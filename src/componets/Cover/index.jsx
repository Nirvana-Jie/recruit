import React, { Component } from "react";
import "./index.scss";
export default class Cover extends Component {
  move = (e) => {
    console.log(e.target.style);
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
