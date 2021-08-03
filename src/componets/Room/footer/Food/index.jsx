import React, { PureComponent } from "react";
import Swip from "../../../Swip";
import "./index.scss";
export default class Food extends PureComponent {
  render() {
    return (
      <div className="food">
        <div className="content">
          <div className="shut">
            <img src=""></img>
          </div>
          <div className="header">
            <button>莘莘美食城</button>
            <button>兴业苑</button>
            <button>衍生食堂</button>
          </div>
          <div className="body">
            <div className="title"></div>
            <div className="pic">
              <Swip showNum={1} />
            </div>
            <div className="comment"></div>
          </div>
          <div className="footer">
            <button>中心食堂</button>
            <button>大西北</button>
            <button>樱花食堂</button>
          </div>
        </div>
      </div>
    );
  }
}
