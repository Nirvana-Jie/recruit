import React, { Component } from "react";
import "./index.scss";
export default class Cover extends Component {
  componentDidMount() {
    document.body.parentNode.style.overflow = "hidden"; //隐藏且禁用
  }
  render() {
    const { cover } = this;
    return (
      <div
        ref={(c) => {
          this.cover = c;
        }}
        className="back"
        onTouchStart={() => {
          cover.style.display = "none";
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
