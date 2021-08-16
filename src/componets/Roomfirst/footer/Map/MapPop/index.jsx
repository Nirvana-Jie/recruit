import React, { PureComponent } from "react";
import "./index.scss";
import { withRouter } from "react-router";
class MapPop extends PureComponent {
  render() {
    const { letter, food, diary } = this.props;
    return (
      <div className="mapBack">
        <div className="content">
          <div>重邮地图等你探索</div>
          <div>1.长按屏幕控制人物前行，不按即 可停止人物观赏重邮周围建筑</div>
          <div>
            2.探索请小心翼翼的喔，某些场景 可以点击触发一定的事件彩蛋喔~
          </div>
          <div>3.探索完成后还有惊喜等你</div>
          <p
            className="link"
            onClick={() => {
              localStorage.setItem("foodActive", `${food}`);
              localStorage.setItem("diaryActive", `${diary}`);
              localStorage.setItem("letterActive", `${letter}`);
              localStorage.setItem("mapActive", `true`);
              this.props.history.push("/map");
            }}
          >
            立即探索
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(MapPop);
