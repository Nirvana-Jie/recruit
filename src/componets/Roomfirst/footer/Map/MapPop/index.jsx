import React, { PureComponent } from "react";
import "./index.scss";
import { withRouter } from "react-router";
class MapPop extends PureComponent {
  render() {
    const { letter, food, diary, first, personImg } = this.props;
    return (
      <div className="mapBack">
        <div className="content">
          <div>重邮地图等你探索</div>
          <div>
            <span style={{ display: "inline-block", width: "14px" }}>1.</span>
            长按屏幕控制人物前行，不按即可停止人物，观赏重邮周围建筑
          </div>
          <div>
            <span style={{ display: "inline-block", width: "14px" }}>2.</span>
            探索请小心翼翼的喔，某些场景 可以点击触发一定的事件彩蛋喔~
          </div>
          <div>
            <span style={{ display: "inline-block", width: "14px" }}>3.</span>
            探索完成后还有惊喜等你
          </div>
          <p
            className="link"
            onClick={() => {
              localStorage.setItem("foodActive", `${food}`);
              localStorage.setItem("diaryActive", `${diary}`);
              localStorage.setItem("letterActive", `${letter}`);
              localStorage.setItem("mapActive", `true`);
              localStorage.setItem("first", `${first}`);
              localStorage.setItem("personImg", `${personImg}`);
              this.props.history.replace("/map");
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
