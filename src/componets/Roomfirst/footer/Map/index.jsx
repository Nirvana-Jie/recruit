import React, { PureComponent } from "react";
import "./index.scss";
import Popup from "./Popup";
import { withRouter } from "react-router";
import blank from "../../../../assets/img/blank.png";
const cliH = document.documentElement.clientHeight;
// const cliW = document.documentElement.clientWidth;
//console.log(cliH, cliW);
class Map extends PureComponent {
  state = {
    isEventOut: { state: false, name: "" },
    isRunning: false,
    isFinished: false,
    topLength: -1820,
    timer: "",
    mapNode: "",
    Flag: false,
    num: 0,
    Flag2: 0,
  };
  // componentDidUpdate() {
  //   //动画进程监听
  //   const { mapNode } = this;
  //   const { Flag2 } = this.state;
  //   if (Flag2 === 0 && mapNode.getAnimations()[0].currentTime > 600) {
  //     this.setState({
  //       isEventOut: { name: "老图书馆", state: true },
  //       Flag2: 1,
  //     });
  //     mapNode.className = "backMap mapPaused";
  //     mapNode.style.pointerEvents = "none";
  //   } else if (Flag2 === 1 && mapNode.getAnimations()[0].currentTime > 4450) {
  //     this.setState({
  //       isEventOut: { name: "重邮的猫", state: true },
  //       Flag2: 2,
  //     });
  //     mapNode.className = "backMap mapPaused";
  //   } else if (Flag2 === 2 && mapNode.getAnimations()[0].currentTime > 10500) {
  //     this.setState({
  //       isEventOut: { name: "运动场", state: true },
  //       Flag2: 3,
  //     });
  //     mapNode.className = "backMap mapPaused";
  //   } else if (Flag2 === 3 && mapNode.getAnimations()[0].currentTime > 13050) {
  //     this.setState({
  //       isEventOut: { name: "数字图书馆", state: true },
  //       Flag2: 4,
  //     });
  //     mapNode.className = "backMap mapPaused";
  //   } else if (Flag2 === 4 && mapNode.getAnimations()[0].currentTime > 15900) {
  //     this.setState({
  //       isEventOut: { name: "八教", state: true },
  //       Flag2: 5,
  //     });
  //     mapNode.className = "backMap mapPaused";
  //   } else if (Flag2 === 5 && mapNode.getAnimations()[0].currentTime > 17000) {
  //     this.setState({
  //       isEventOut: { name: "信科大楼", state: true },
  //       Flag2: 6,
  //     });
  //     mapNode.className = "backMap mapPaused";
  //   }
  // }
  componentDidMount() {
    if (cliH >= "823") this.setState({ topLength: -1950 });
    else if (cliH >= "812") this.setState({ topLength: -1820 });
    else if (cliH >= "731") this.setState({ topLength: -2070 });
    else if (cliH >= "667") this.setState({ topLength: -2180 });
    else if (cliH >= "568") this.setState({ topLength: -1980 });
    else this.setState({ topLength: -1700 });
    setTimeout(() => {
      const { mapNode } = this;
      mapNode.style.left = `${(-510 / 375) * 100}vw`;
      mapNode.addEventListener("animationend", () => {
        const { Flag2 } = this.state;
        if (Flag2 === 0) {
          this.setState({
            isEventOut: { name: "老图书馆", state: true },
            Flag2: 1,
          });
          mapNode.style.animation = "mapMove2 5s linear forwards";
          mapNode.className = "backMap mapPaused";
        } else if (Flag2 === 1) {
          this.setState({
            isEventOut: { name: "重邮的猫", state: true },
            Flag2: 2,
          });
          mapNode.style.animation = "mapMove3 8s linear forwards";
          mapNode.className = "backMap mapPaused";
        } else if (Flag2 === 2) {
          this.setState({
            isEventOut: { name: "运动场", state: true },
            Flag2: 3,
          });
          mapNode.style.animation = "mapMove4 2.5s linear forwards";
          mapNode.className = "backMap mapPaused";
        } else if (Flag2 === 3) {
          this.setState({
            isEventOut: { name: "数字图书馆", state: true },
            Flag2: 4,
          });
          mapNode.style.animation = "mapMove5 4s linear forwards";
          mapNode.className = "backMap mapPaused";
        } else if (Flag2 === 4) {
          this.setState({
            isEventOut: { name: "八教", state: true },
            Flag2: 5,
          });
          mapNode.style.animation = "mapMove6 1s linear forwards";
          mapNode.className = "backMap mapPaused";
        } else if (Flag2 === 5) {
          this.setState({
            isEventOut: { name: "信科大楼", state: true },
            Flag2: 6,
          });
          mapNode.style.animation = "mapMove7 2s linear forwards";
          mapNode.className = "backMap mapPaused";
        } else if (Flag2 === 6) {
          this.setState({
            isFinished: true,
            Flag2: 7,
          });
          mapNode.className = "backMap mapPaused";
        }
      });
    }, 0);
    //启用state监听动画进程
    // setInterval(() => {
    //   const { num } = this.state;
    //   this.setState({ num: num + 1 });
    // }, 100);

    // let offsetX = (375 - cliW) * (375 / cliW) * 0.05;
    // let offsetY = (667 - cliH) * (667 / cliH);
    // window.scrollTo((95 / 375) * cliW - offsetX, (600 / 667) * cliH + offsetY);
    //console.log((95 / 375) * cliW, (600 / 667) * cliH);
    // const root = document.getElementById("root");
    // root.style.overflow = "hidden";
  }

  mapMove = (map) => {
    map.className = "backMap mapActive";
  };
  cancel = () => {
    const { mapNode } = this;
    this.setState({ isEventOut: { name: "", state: false } });
    mapNode.style.pointerEvents = "auto";
  };
  move = () => {
    const { mapNode } = this;
    this.mapMove(mapNode);
    this.setState({ isRunning: true });
  };
  stop = () => {
    this.setState({ isRunning: false });
    const { mapNode } = this;
    mapNode.className = "backMap mapPaused";
    // const { timer } = this.state;
    // clearInterval(timer);
  };
  scale = () => {
    const { Flag } = this.state;
    this.setState({ Flag: !Flag }, () => {
      this.pic.style.transform = Flag ? "scale(2)  " : "scale(1)  ";
    });
  };
  render() {
    const { isEventOut, isFinished, topLength } = this.state;
    return (
      <div className="mapView">
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
                  this.props.history.replace("/room");
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
                >
                  <img
                    alt="网络出现错误"
                    src={
                      require(`../../../../assets/img/room/Map/pic.jpeg`)
                        .default
                    }
                    onClick={this.scale}
                  ></img>
                </div>
              </div>
              <p>点击查看，长按保存</p>
              <div>
                我们的<span>掌上重邮</span>也有最好用的
              </div>
              <div>地图，快去下载使用吧</div>
            </div>
          </div>
        ) : (
          console.log()
        )}
        {this.state.isRunning ? (
          <img
            alt="您的网络有问题"
            src={blank}
            className="juanjuan running"
            onTouchStart={this.move}
            onTouchEnd={this.stop}
          />
        ) : (
          <img
            alt="您的网络有问题"
            src={blank}
            className="juanjuan paused"
            onTouchStart={this.move}
            onTouchEnd={this.stop}
          />
        )}

        <div
          ref={(c) => {
            this.mapNode = c;
          }}
          className="backMap mapPaused"
          style={{
            transform: ` translateY(${(topLength / 667) * 100}vh) `,
          }}
          onClick={(e) => {}}
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
            className="event5"
            onClick={() => {
              this.setState({
                isEventOut: { name: "运动场", state: true },
              });
            }}
          />
          <div
            className="event6"
            onClick={() => {
              this.setState({
                isEventOut: { name: "重邮的猫", state: true },
              });
            }}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(Map);
