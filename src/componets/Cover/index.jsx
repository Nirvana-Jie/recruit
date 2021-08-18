import React, { Component } from "react";
import "./index.scss";
export default class Cover extends Component {
  state = {};
  componentDidMount() {
    document.body.parentNode.style.overflow = "hidden"; //隐藏且禁用
  }
  render() {
    const { cancel } = this.props;
    return (
      <div
        className="back"
        onTouchEnd={(e) => {
          e.preventDefault();
          e.target.style.display = "none";
          cancel();
        }}
      >
        <div>探索房间</div>
        <div>发现新生要素</div>
        <div>点击特定元素，触发未知之旅</div>
        <div>解锁新生四要素，收获专属邀请函</div>
        <div>自由滑动，探索更多</div>
        <div className="leftArrow"></div>
        <div className="rightArrow"></div>   
      </div>
    );
  }
}
