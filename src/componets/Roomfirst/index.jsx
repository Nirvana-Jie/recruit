import "./index.scss";
import React, { Fragment, PureComponent } from "react";
import Cover from "../Cover";
import Letter from "./footer/Letter";
import Food from "./footer/Food";
import Diary from "./footer/Diary";
import PubSub from "pubsub-js";
import MapPop from "./footer/Map/MapPop";
import { withRouter } from "react-router";
class Roomfirst extends PureComponent {
  state = {
    isMapActive: false,
    isFoodActive: false,
    isLetterActive: false,
    isDiaryActive: false,
    isPopOut: false,
    isTipOut: false,
    type: "",
    elementNodes: [],
    firstClick: [true, true, true, true],
    personImg: "000",
    tips: [
      {
        type: "food",
        slogan: "天大地大，吃饭最大",
      },
      {
        type: "map",
        slogan: "新生入学，怎么能没有地图",
      },
      { type: "diary", slogan: "迷彩军训，青春无悔" },
      { type: "letter", slogan: "新生入校，快来报道" },
    ],
  };
  mapMove = (e) => {
    e.target.className += " mapActive";
  };
  stopScroll = () => {
    const { view } = this;
    view.style.overflow = "hidden";
  };
  clickItem = (type, index) => {
    return (e) => {
      const { elementNodes, firstClick } = this.state;
      // this.preventDefault(e.target);
      //判断是否为第一次点击
      if (firstClick[index]) {
        firstClick[index] = false;
        this.stopScroll();
        this.setState({
          type: type,
          isPopOut: true,
          elementNodes: [{ name: type, node: e.target }, ...elementNodes],
        });
      }
    };
  };
  tipOut = (type) => {
    return () => {
      const { tips } = this.state;
      const { tip } = this;
      tip.className += " tipActive";
      const Item = tips.filter((data) => {
        return data.type === type;
      });
      tip.innerText = Item[0].slogan;
      const timer = setTimeout((type) => {
        tip.className = "tip";
        clearTimeout(timer);
      }, 2000);
    };
  };
  selectAction = (type, node) => {
    const { letterNode, mapNode, foodNode, diaryNode } = this;
    switch (type) {
      case "food":
        foodNode.className += " move";
        const timer = setTimeout(() => {
          this.setState({ isFoodActive: true });
          this.isFinished();
          clearTimeout(timer);
        }, 500);
        break;
      case "map":
        mapNode.className += " move";
        const timer1 = setTimeout(() => {
          this.setState({ isMapActive: true });
          this.isFinished();
          clearTimeout(timer1);
        }, 500);
        break;
      case "letter":
        letterNode.className += " move";
        const timer2 = setTimeout(() => {
          this.setState({ isLetterActive: true });
          this.isFinished();
          clearTimeout(timer2);
        }, 500);
        break;
      case "diary":
        diaryNode.className += " move";
        const timer3 = setTimeout(() => {
          this.setState({ isDiaryActive: true });
          this.isFinished();
          clearTimeout(timer3);
        }, 500);
        break;
      default:
        break;
    }
  };
  isFinished = () => {
    const { isMapActive, isFoodActive, isLetterActive, isDiaryActive } =
      this.state;
    if (isMapActive && isFoodActive && isLetterActive && isDiaryActive) {
      const timer = setTimeout(() => {
        this.props.history.push("/invite");
        clearTimeout(timer);
      }, 4000);
    }
  };
  moveItem = (type) => {
    const { elementNodes } = this.state;
    const Item = elementNodes.filter((data) => {
      return data.name === type;
    });
    // Item[0].node.className += ` ${type}ItemActive`;
    this.selectAction(type, Item[0].node);
  };

  //关闭弹窗并移动Item
  cancel = (type) => {
    //解除禁止页面滑动并在2秒后停止
    return () => {
      this.moveItem(type);
      this.setState({ type: "", isPopOut: false });
      const timer = setTimeout((e) => {
        const { view } = this;
        view.style.overflow = "auto";
        clearTimeout(timer);
      }, 500);
    };
  };
  preventDefault = (e) => {
    e.addEventListener("click", (e) => {
      e.preventDefault();
    });
  };
  componentDidMount() {
    const { view } = this;
    view.style.overflow = "auto";
    PubSub.subscribe("person", (msg, data) => {
      this.setState({
        personImg: `${data.headbox}${data.bodybox}${data.footerbox}`,
      });
    });
    // let b = JSON.parse(localStorage.getItem("active"));
    const letter1 = localStorage.getItem("letterActive");
    if (letter1 === "true") this.setState({ isLetterActive: true });
    const food1 = localStorage.getItem("foodActive");
    if (food1 === "true") this.setState({ isFoodActive: true });
    const diary1 = localStorage.getItem("diaryActive");
    if (diary1 === "true") this.setState({ isDiaryActive: true });
    const map1 = localStorage.getItem("mapActive");
    if (map1 === "true") this.selectAction("map");
  }
  render() {
    const {
      isMapActive,
      isFoodActive,
      isLetterActive,
      isDiaryActive,
      isPopOut,
      type,
      personImg,
    } = this.state;
    return (
      <Fragment>
        <div
          className="view"
          ref={(c) => {
            this.view = c;
          }}
        >
          <Cover />
          {isMapActive && isFoodActive && isLetterActive && isDiaryActive ? (
            <div className="finished">
              <div className="personback">
                <div
                  className="person"
                  style={{
                    backgroundImage:
                      "url(" +
                      require(`../../assets/img/create/persons/${this.state.personImg}.png`)
                        .default +
                      ")",
                  }}
                ></div>
              </div>
              <span> 恭喜完成新生要素探秘</span>
              <span>正在为你生成专属邀请函</span>
              <span>请稍等......</span>
            </div>
          ) : (
            console.log()
          )}
          <div className="room">
            {isPopOut ? (
              <div
                className="pop"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                {type === "letter" ? (
                  <Letter
                    cancel={this.cancel("letter")}
                    personImg={personImg}
                  />
                ) : type === "food" ? (
                  <Food cancel={this.cancel("food")} />
                ) : type === "diary" ? (
                  <Diary cancel={this.cancel("diary")} />
                ) : (
                  <MapPop
                    cancel={this.cancel("map")}
                    letter={isLetterActive}
                    food={isFoodActive}
                    diary={isDiaryActive}
                  />
                )}
              </div>
            ) : (
              <div></div>
            )}
            <div className="personBack">
              <div
                className="personItem"
                style={{
                  backgroundImage:
                    "url(" +
                    require(`../../assets/img/create/persons/${this.state.personImg}.png`)
                      .default +
                    ")",
                }}
              ></div>
            </div>
            <div className="mapItem" onClick={this.clickItem("map", 0)}></div>
            <div className="foodItem" onClick={this.clickItem("food", 1)}></div>
            <div
              className="letterItem"
              onClick={this.clickItem("letter", 2)}
            ></div>
            <div
              className="diaryItem"
              onClick={this.clickItem("diary", 3)}
            ></div>
          </div>
        </div>

        <div className="footer">
          <div
            className="tip"
            ref={(c) => {
              this.tip = c;
            }}
          ></div>
          {isMapActive ? (
            <div className="active" onClick={this.tipOut("map")}>
              <div className="map mapActive"></div>
            </div>
          ) : (
            <div onClick={this.tipOut("map")}>
              <div
                className="map"
                ref={(c) => {
                  this.mapNode = c;
                }}
              ></div>
            </div>
          )}
          {isFoodActive ? (
            <div className="active" onClick={this.tipOut("food")}>
              <div className="food foodActive"></div>
            </div>
          ) : (
            <div onClick={this.tipOut("food")}>
              <div
                className="food"
                ref={(c) => {
                  this.foodNode = c;
                }}
              ></div>
            </div>
          )}

          {isLetterActive ? (
            <div className="active" onClick={this.tipOut("letter")}>
              <div className="letter letterActive"></div>
            </div>
          ) : (
            <div onClick={this.tipOut("letter")}>
              <div
                className="letter"
                ref={(c) => {
                  this.letterNode = c;
                }}
              ></div>
            </div>
          )}

          {isDiaryActive ? (
            <div className="active" onClick={this.tipOut("diary")}>
              <div className="diary diaryActive"></div>
            </div>
          ) : (
            <div onClick={this.tipOut("diary")}>
              <div
                className="diary"
                ref={(c) => {
                  this.diaryNode = c;
                }}
              ></div>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}
export default withRouter(Roomfirst);
