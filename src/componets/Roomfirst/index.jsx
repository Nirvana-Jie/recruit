import "./index.scss";
import React, { Fragment, PureComponent } from "react";
import Cover from "../Cover";
import Letter from "./footer/Letter";
import Food from "./footer/Food";
import Diary from "./footer/Diary";
export default class Roomfirst extends PureComponent {
  state = {
    isMapActive: false,
    isFoodActive: false,
    isLetterActive: false,
    isDiaryActive: false,
    isPopOut: false,
    type: "",
    elementNodes: [],
    firstClick: [true, true, true, true],
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
  selectAction = (type, node) => {
    let offsetX = 0;
    let offsetY = 0;
    switch (type) {
      case "food":
        offsetX = 365 - window.scrollX;
        offsetY = window.scrollY + 4;
        // node.style.transform = `translate(-${offsetX}px,${offsetY}px)`;
        node.style.transform = `translate(-150px,200px)`;
        const timer = setTimeout(() => {
          this.setState({ isFoodActive: true });
          clearTimeout(timer);
        }, 2000);
        break;
      case "map":
        offsetX = 365 - window.scrollX;
        node.style.transform = `translate(-${offsetX}px,150px)`;
        const timer1 = setTimeout(() => {
          this.setState({ isMapActive: true });
          clearTimeout(timer1);
        }, 2000);
        break;
      case "letter":
        offsetX = 365 - window.scrollX;
        node.style.transform = `translate(-${offsetX}px,150px)`;
        const timer2 = setTimeout(() => {
          this.setState({ isLetterActive: true });
          clearTimeout(timer2);
        }, 2000);
        break;
      case "diary":
        offsetX = 365 - window.scrollX;
        node.style.transform = `translate(-${offsetX}px,150px)`;
        const timer3 = setTimeout(() => {
          this.setState({ isDiaryActive: true });
          clearTimeout(timer3);
        }, 2000);
        break;
      default:
        break;
    }
  };
  moveItem = (type) => {
    const { elementNodes } = this.state;
    const Item = elementNodes.filter((data) => {
      return data.name === type;
    });
    Item[0].node.className += ` ${type}ItemActive`;
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
      }, 2000);
    };
  };
  componentDidMount() {
    window.scrollTo(200, 0);
  }
  render() {
    const {
      isMapActive,
      isFoodActive,
      isLetterActive,
      isDiaryActive,
      isPopOut,
      type,
    } = this.state;
    return (
      <Fragment>
        <div
          className="view"
          ref={(c) => {
            this.view = c;
          }}
        >
          <div
            className="room"
            onClick={(e) => {
              console.log(window.scrollX, window.scrollY);
            }}
          >
            {isPopOut ? (
              <div className="pop">
                {type === "letter" ? (
                  <Letter cancel={this.cancel("letter")} />
                ) : type === "food" ? (
                  <Food cancel={this.cancel("food")} />
                ) : (
                  <Diary cancel={this.cancel("diary")} />
                )}
              </div>
            ) : (
              <div></div>
            )}
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
            <div className="header">123456</div>
          </div>
        </div>
        <div className="footer">
          {isMapActive ? (
            <div className="active">
              <div className="map mapActive"></div>
            </div>
          ) : (
            <div>
              <div className="map"></div>
            </div>
          )}

          {isFoodActive ? (
            <div className="active">
              <div className="food foodActive"></div>
            </div>
          ) : (
            <div>
              <div className="food"></div>
            </div>
          )}

          {isLetterActive ? (
            <div className="active">
              <div className="letter letterActive"></div>
            </div>
          ) : (
            <div>
              <div className="letter"></div>
            </div>
          )}

          {isDiaryActive ? (
            <div className="active">
              <div className="diary diaryActive"></div>
            </div>
          ) : (
            <div>
              <div className="diary"></div>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}
