import React, { Component } from "react";
import "./index.scss";
export default class Cover extends Component {
  state = {};
  componentDidMount() {
    document.body.parentNode.style.overflow = "hidden"; //隐藏且禁用
  }
  render() {
    return (
      <div
        className="back"
        onTouchStart={(e) => {
          e.target.style.display = "none";
        }}
      >
        <div>探索房间</div>
        <div>发现新生要素</div>
        <div>点击特定元素，触发未知之旅</div>
        <div>左右滑动，探索更多</div>
        <div className="leftArrow"></div>
        <div className="rightArrow"></div>
      </div>
    );
  }
}
