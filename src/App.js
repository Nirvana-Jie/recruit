import Create from "./componets/Create";
import Room from "./componets/Room";
import Letter from "./componets/Room/footer/Letter";
import { Redirect, Route } from "react-router-dom";
import React, { PureComponent } from "react";
import Diary from "./componets/Room/footer/Diary/index.jsx";
import Food from "./componets/Room/footer/Food";
//import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'
// import TestWrapper from "./componets/HT";

export default class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Route path="/create" component={Create} />
        <Route path="/room" component={Room} />
        {/* <Redirect to="/map"></Redirect> */}
        {/* <Food /> */}
        <Diary />
      </div>
    );
  }
}
