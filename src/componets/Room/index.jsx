import "./index.scss";
import React, { PureComponent } from "react";
import Cover from "../Cover";
export default class Map extends PureComponent {
  // Animate = () => {
  //   const c = this.cartoon;
  //   console.log(c.style);
  //   c.timer = setInterval(function () {
  //     if (c.offsetLeft >= 300) {
  //       c.style.top = c.offsetTop + 10 + "px";
  //     } else c.style.left = c.offsetLeft + Math.ceil((300 - c.offsetLeft) / 20) + "px";
  //   }, 30);
  // };
  // cancelAnimate = () => {
  //   const c = this.cartoon;
  //   clearInterval(c.timer);
  // };
  check = (e) => {
    console.log(window.scrollX);
  };
  componentDidMount() {
    window.scrollTo(50, 0);
  }
  render() {
    return (
      <div className="room">
        {/* <Cover /> */}
        <div className="content" onClick={this.check}>
          <div className="header"></div>
          <div
            className="map"
            // onTouchStart={this.Animate}
            // onTouchEnd={this.cancelAnimate}
          ></div>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}
