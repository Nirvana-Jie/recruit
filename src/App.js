import Create from "./componets/Create";
import Roomfirst from "./componets/Roomfirst/index.jsx";
import Letter from "./componets/Roomfirst/footer/Letter";
import { Redirect, Route } from "react-router-dom";
import React, { PureComponent } from "react";
import Diary from "./componets/Roomfirst/footer/Diary/index.jsx";
import Food from "./componets/Roomfirst/footer/Food";
import Map from "./componets/Roomfirst/footer/Map";

import "./assets/styles/font.scss";
import Submit from "./componets/Create/Submit";
//import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'
// import TestWrapper from "./componets/HT";

export default class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Route path="/create" component={Create} />
        <Route path="/room" component={Roomfirst} />
        <Route path="/map" component={Map} />
        <Route path="/food" component={Food} />
        <Route path="/letter" component={Letter} />
        <Route path="/submit" component={Submit} />
        <Redirect to="/room"></Redirect>
      </div>
    );
  }
}
