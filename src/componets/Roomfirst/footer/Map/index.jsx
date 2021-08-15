import React, { Fragment, PureComponent } from "react";
import "./index.scss";
import Popup from "./Popup";
const cliH = document.documentElement.clientHeight;
const cliW = document.documentElement.clientWidth;
console.log(cliH, cliW);
export default class Map extends PureComponent {
  state = {
    isRunning: false,
    rotateDeg: 0,
    topLength: 0,
    timer: "",
    leftLength: 0,
    mapNode: "",
  };
  componentDidMount() {
    let offsetY = 0;
    let offsetX = 0;
    offsetY = (667 - cliH) * 0.4;
    // offsetX = 95 - cliW;
    // 11 110 - 540
    window.scrollTo((95 / 375) * cliW - offsetX, (600 / 667) * cliH + offsetY);
    console.log((95 / 375) * cliW, (600 / 667) * cliH);
    document.body.style.overflow = "hidden";
  }
  mapAnimation = (map) => {
    const { topLength, rotateDeg, leftLength } = this.state;
    let a = topLength;
    let b = rotateDeg;
    let c = leftLength;
    const timer = setInterval(() => {
      if (a <= 230) {
        a = a + 1;
        b = b + 0.01;
      } else if (230 < a && a <= 270) {
        a = a + 0.5;
        b = b + 0.02;
        c = c + 0.1;
      } else if (270 < a && a < 279) {
        a = a + 0.04;
        b = b + 0.1;
        c = c + 0.08;
      } else if (a > 279 && a < 281) {
        a = a + 0.01;
        b = b + 0.1;
        c = c + 0.6;
      } else if (a > 281 && a < 285) {
        a = a + 0.02;
        b = b + 0.1;
        c = c + 0.5;
      } else if (a > 285 && a < 292) {
        a = a + 0.02;
        b = b + 0.1;
        c = c - 0.03;
      } else if (a > 292 && a < 642) {
        a = a + 1;
        b = b + 0.01;
      } else if (a > 642) {
        clearInterval(timer);
      }

      map.style.top = `${(a / cliH) * 100}vh`;
      map.style.transform = `rotate(-${b}deg)`;
      map.style.left = `-${(c / document.documentElement.clientWidth) * 100}vw`;
      console.log(map.offsetTop);
      this.setState({
        timer: timer,
        topLength: a,
        rotateDeg: b,
        leftLength: c,
      });
    }, 10);
  };
  move = () => {
    const { mapNode } = this;
    this.mapAnimation(mapNode);
    this.setState({ isRunning: true });
  };
  stop = () => {
    this.setState({ isRunning: false });
    const { timer } = this.state;
    clearInterval(timer);
  };
  render() {
    return (
      <Fragment>
        {this.state.isRunning ? (
          <Fragment>
            <div
              className="juanjuan running"
              onTouchStart={this.move}
              onTouchEnd={this.stop}
            ></div>
          </Fragment>
        ) : (
          <Fragment>
            <div
              className="juanjuan paused"
              onTouchStart={this.move}
              onTouchEnd={this.stop}
            ></div>
          </Fragment>
        )}
        {
          <div
            ref={(c) => {
              this.mapNode = c;
            }}
            className="backMap"
            style={{
              translate: `transform: rotate(30deg);`,
            }}
            onTouchStart={this.move}
            onTouchEnd={this.stop}
          >
            <div className="event1"></div>
            <div className="event2"></div>
            <div className="event3"></div>
            <div className="event4"></div>
          </div>
        }
        <Popup buildingName={"八教"} />
      </Fragment>
    );
  }
}
