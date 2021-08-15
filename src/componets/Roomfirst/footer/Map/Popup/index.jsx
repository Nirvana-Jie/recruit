import React, { PureComponent } from "react";
import Swip from "../../../../Swip";
import "./index.scss";
export default class Popup extends PureComponent {
  state = {
    buildings: [
      {
        name: "八教",
        img: [],
        tag: ["教学楼", "自习室", "学院办公室"],
        time: "7:00-12:00",
      },
      { name: "信科大楼", img: [], tag: [], time: "7:00-12:00" },
      { name: "老图书馆", img: [], tag: [], time: "7:00-12:00" },
    ],
  };
  render() {
    const { buildingName, cancel } = this.props;
    const building = this.state.buildings.filter((data) => {
      return data.name === buildingName;
    });
    const { name, img, tag, time } = building[0];

    return (
      <div className="backPop">
        <div className="content">
          <p
            className="shut"
            onClick={() => {
              cancel();
            }}
          ></p>
          <p className="title">{name}</p>
          <div className="swip">
            <div>
              <Swip type={"popUp"} showPic={img} />
            </div>
          </div>
          <div className="tag">
            <p>关于该地点</p>
            <div>
              {tag.map((data) => {
                return <div>{data}</div>;
              })}
            </div>
          </div>
          <div className="time">
            <p>开放时间</p>
            <div>{time}</div>
          </div>
        </div>
      </div>
    );
  }
}
