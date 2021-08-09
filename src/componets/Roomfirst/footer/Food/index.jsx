import React, { PureComponent } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./index.scss";
import Shenshen from "./Shenshen";
import Xingye from "./Xinye";
import Yansheng from "./Yansheng";
import Zhongxing from "./Zhongxing";
import Daxibei from "./Daxibei";
import Yinghua from "./Yinghua";
export default class Food extends PureComponent {
  render() {
    return (
      <div className="food">
        <div className="content">
          <div className="shut">
            <img src=""></img>
          </div>
          <div className="header">
            <NavLink className="btn" to="/food/shenshen">
              莘莘美食城
            </NavLink>
            <NavLink className="btn" to="/food/xingye">
              兴业苑
            </NavLink>

            <NavLink className="btn" to="/food/yansheng">
              衍生食堂
            </NavLink>
          </div>
          <div className="body">
            <Switch>
              <Route path="/food/shenshen" component={Shenshen}></Route>
              <Route path="/home/xingye" component={Xingye}></Route>
              <Route path="/home/yansheng" component={Yansheng}></Route>
              <Route path="/home/zhongxing" component={Zhongxing}></Route>
              <Route path="/home/daxibei" component={Daxibei}></Route>
              <Route path="/home/yinghua" component={Yinghua}></Route>
            </Switch>
          </div>
          <div className="footer">
            <NavLink className="btn" to="/food/zhongxing">
              中心食堂
            </NavLink>
            <NavLink className="btn" to="/food/daxibei">
              大西北食堂
            </NavLink>
            <NavLink className="btn" to="/food/yinghua">
              樱花食堂
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
