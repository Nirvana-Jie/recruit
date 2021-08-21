import React, { PureComponent } from "react";
import "./index.scss";
import Popup from "./Popup";
import { withRouter } from "react-router";
import blank from "../../../../assets/img/blank.png";

const elements = [
  { name: "老图书馆", state: true, value: 119 },
  {name: "重邮的猫", state: true, value: 101 },
  {name: "运动场", state: true, value: 70.5},
  {name: "数字图书馆", state: true, value: 57 },
  {name: "八教", state: true, value: 43 },
  {name: "信科大楼", state: true, value: 38 },
]
//比例不是px
const HEIGHT = 144.5
const STEP = 20
class Map extends PureComponent {
  state = {
    isEventOut: { state: false, name: "" },
    isRunning: false,
    isFinished: false,
    topLength: -1820,
    // timer: "",
    mapNode: "",
    Flag: false,
    num: 0,
    index: 0,
    timer: null
  };
  componentDidUpdate() {
    const { mapNode } = this
    const { topLength, timer, index } = this.state
    const height = this.mapNode.offsetHeight
    const ch = document.documentElement.clientHeight

    const ratio = (-topLength + ch / 2) / height
    const len = elements.length
    for (let i = 0; i <len;i++ ) {
      const ele = elements[i]
      if (index === i && ratio <= ele.value / HEIGHT) {
        clearInterval(timer)
        this.setState({
          isEventOut: {name: ele.name, state: ele.state},
          index: index + 1,
          timer: null
        });
        mapNode.style.pointerEvents = "none";
        break
      }
    }
    if(index === 6 && ratio <= 29/ HEIGHT){
      clearInterval(timer)
      this.setState({ isFinished:true})
    }
  }
  componentDidMount() {
    this.setState({
      topLength: -1 * (this.mapNode.offsetHeight - document.documentElement.clientHeight)
    })
      const { mapNode } = this;
      mapNode.style.left = `${(-510 / 375) * 100}vw`;
    this.mapNode.addEventListener("touchstart", () => {
      const timer = setInterval(() => {
        this.setState({ topLength: this.state.topLength + STEP })
      }, 200)
      this.setState({ topLength: this.state.topLength + STEP, timer })
    })
    this.mapNode.addEventListener("touchend", () => {
      clearInterval(this.state.timer)
      this.setState({ timer: null })
    })
  }
  cancel = () => {
    const { mapNode } = this;
    this.setState({ isEventOut: { name: "", state: false } });
    mapNode.style.pointerEvents = "auto";
  };
  move = () => {
    this.setState({ isRunning: true });
  };
  stop = () => {
    this.setState({ isRunning: false });
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
            transform: ` translateY(${this.state.topLength}px)`
          }}
          onClick={(e) => { }}
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
