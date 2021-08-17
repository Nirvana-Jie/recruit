import React, { Fragment, PureComponent } from "react";
import "./index.scss";
import Popup from "./Popup";
import { withRouter } from "react-router";

const cliH = document.documentElement.clientHeight;
// const cliW = document.documentElement.clientWidth;
//console.log(cliH, cliW);
class Map extends PureComponent {
  state = {
    isEventOut: { state: false, name: "" },
    isRunning: false,
    isFinished: false,
    topLength: 0,
    timer: "",
    leftLength: 0,
    mapNode: "",
    Flag: false,
  };
  componentDidMount() {
    // let offsetX = (375 - cliW) * (375 / cliW) * 0.05;
    // let offsetY = (667 - cliH) * (667 / cliH);
    // window.scrollTo((95 / 375) * cliW - offsetX, (600 / 667) * cliH + offsetY);
    //console.log((95 / 375) * cliW, (600 / 667) * cliH);
    // document.body.style.overflow = "hidden";
    window.scrollTo(560, 3900 - (1550 / 812) * cliH);
  }

  // mapAnimation = (map) => {
  //   const { topLength, rotateDeg, leftLength } = this.state;
  //   let a = topLength;
  //   let b = rotateDeg;
  //   let c = leftLength;
  //   const timer = setInterval(() => {
  //     if (a <= 230) {
  //       a = a + 1;
  //       b = b + 0.01;
  //     } else if (230 < a && a <= 270) {
  //       console.log("change1");
  //       a = a + 0.5;
  //       b = b + 0.02;
  //       c = c + 0.1;
  //     } else if (270 < a && a < 274) {
  //       console.log("change2");
  //       a = a + 0.04;
  //       b = b + 0.14;
  //       c = c + 0.08;
  //     } else if (274 < a && a < 279) {
  //       console.log("change2-1");
  //       a = a + 0.04;
  //       b = b + 0.06;
  //       c = c + 0.08;
  //     } else if (a > 279 && a < 281) {
  //       console.log("change3");
  //       a = a + 0.01;
  //       b = b + 0.1;
  //       c = c + 0.6;
  //     } else if (a > 281 && a < 285) {
  //       console.log("change4");
  //       a = a + 0.02;
  //       b = b + 0.1;
  //       c = c + 0.5;
  //     } else if (a > 285 && a < 292) {
  //       console.log("change5");
  //       a = a + 0.02;
  //       b = b + 0.1;
  //       c = c - 0.03;
  //     } else if (a > 292 && a < 642) {
  //       console.log("change6");
  //       a = a + 1;
  //       b = b + 0.01;
  //     } else if (a > 642) {
  //       clearInterval(timer);
  //       this.setState({ isFinished: true });
  //     }
  //     map.style.top = `${(a / cliH) * 100}vh`;
  //     map.style.transform = `rotate(-${b}deg)`;
  //     map.style.left = `-${(c / document.documentElement.clientWidth) * 100}vw`;
  //     //console.log(map.offsetTop);
  //     this.setState({
  //       timer: timer,
  //       topLength: a,
  //       rotateDeg: b,
  //       leftLength: c,
  //     });
  //   }, 10);
  // };
  mapMove = (map) => {
    const { topLength } = this.state;
    let a = topLength;

    const timer = setInterval(() => {
      if (a > 2320) {
        this.setState({ isFinished: true });
      }
      a = a + 1;
      map.style.top = `${a}px`;
      this.setState({
        timer: timer,
        topLength: a,
      });
    }, 10);
  };
  cancel = () => {
    this.setState({ isEventOut: { name: "", state: false } });
  };
  move = () => {
    const { mapNode } = this;
    // this.mapAnimation(mapNode);
    this.mapMove(mapNode);
    this.setState({ isRunning: true });
  };
  stop = () => {
    this.setState({ isRunning: false });
    const { timer } = this.state;
    clearInterval(timer);
  };
  scale = () => {
    const { Flag } = this.state;
    this.setState({ Flag: !Flag }, () => {
      this.pic.style.transform = Flag ? "scale(2)  " : "scale(1)  ";
    });
  };
  render() {
    const { isEventOut, isFinished } = this.state;
    return (
      <Fragment>
        {isEventOut.state ? (
          <Popup buildingName={isEventOut.name} cancel={this.cancel} />
        ) : (
          console.log()
        )}
        {isFinished ? (
          <div className="resultBack">
            <div className="bottom"></div>
            <div className="result">
              <div
                className="cancel"
                onClick={() => {
                  this.props.history.push("/room");
                }}
              ></div>
              <div>恭喜你完成地图冒险</div>
              <div>我们为你准备了一份地图</div>
              <div>快来下载保存吧!</div>
              <div>
                <div
                  className="pic"
                  ref={(c) => {
                    this.pic = c;
                  }}
                  onClick={this.scale}
                >
                  <img
                    alt="网络出现错误"
                    src={
                      require(`../../../../assets/img/room/Map/pic.png`).default
                    }
                  ></img>
                </div>
              </div>
              <p>点击查看，长按保存</p>
              <div>
                我们的<span>掌上重邮</span>也有最好用的
              </div>
              <div>地图快去下载使用吧</div>
            </div>
          </div>
        ) : (
          console.log()
        )}
        {this.state.isRunning ? (
          <div
            className="juanjuan running"
            onTouchStart={this.move}
            onTouchEnd={this.stop}
          />
        ) : (
          <div
            className="juanjuan paused"
            onTouchStart={this.move}
            onTouchEnd={this.stop}
          />
        )}
        {
          <div
            ref={(c) => {
              this.mapNode = c;
            }}
            className="backMap"
            onTouchStart={this.move}
            onTouchEnd={this.stop}
          >
            <div
              className="event1"
              onClick={() => {
                this.setState({
                  isEventOut: { name: "老图书馆", state: true },
                });
              }}
            />
            <div
              className="event2"
              onClick={(e) => {
                this.setState({
                  isEventOut: { name: "八教", state: true },
                });
              }}
            />
            <div
              className="event3"
              onClick={() => {
                this.setState({
                  isEventOut: { name: "信科大楼", state: true },
                });
              }}
            />
            <div
              className="event4"
              onClick={() => {
                this.setState({
                  isEventOut: { name: "数字图书馆", state: true },
                });
              }}
            />
            <div
              className="start"
              ref={(c) => {
                this.start = c;
              }}
            ></div>
          </div>
        }
      </Fragment>
    );
  }
}
export default withRouter(Map);
