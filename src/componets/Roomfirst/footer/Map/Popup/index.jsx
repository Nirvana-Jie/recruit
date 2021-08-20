import React, { PureComponent } from "react";
import Swip from "../../../../Swip";
import "./index.scss";

export default class Popup extends PureComponent {
  state = {
    buildings: [
      {
        name: "八教",
        img: ["第八教学楼/0", "第八教学楼/1", "第八教学楼/2"],
        tag: ["传媒教学楼", "重邮三原色", "天梯", "自习室", "艺术展览"],
        time: "7:00-22:30",
      },
      {
        name: "信科大楼",
        img: ["信科大楼/0", "信科大楼/1", "信科大楼/2"],
        tag: ["办公楼", "实验室", "重邮地标", "会议厅", "科研集聚地"],
        time: "",
      },
      {
        name: "老图书馆",
        img: ["老图书馆/0", "老图书馆/1", "老图书馆/2"],
        tag: ["图书馆", "人脸识别", "考研自习", "藏书最多", "学霸云集"],
        time: "8:00-23:00",
      },
      {
        name: "数字图书馆",
        img: ["数字图书馆/0", "数字图书馆/1", "数字图书馆/2"],
        tag: ["图书馆", "数字阅读", "一卡通中心", "新生借阅办理", "考研自习"],
        time: "8:00-23:00",
      },
      {
        name: "运动场",
        img: ["运动场/0", "运动场/1", "运动场/2"],
        tag: ["图书馆", "数字阅读", "一卡通中心", "新生借阅办理", "考研自习"],
        time: "8:00-23:00",
      },
    ],
  };
  render() {
    const { buildingName, cancel } = this.props;
    const building = this.state.buildings.filter((data) => {
      return data.name === buildingName;
    });
    const { name, img, tag } = building[0];

    return (
      <div className="coverPop">
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
              <div className="swipback">
                <Swip type={"mapPop"} showPic={img} showNum={1} between={0} />
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
          </div>
        </div>
      </div>
    );
  }
}
