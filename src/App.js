import Create from "./componets/Create";
import React from "react";
import Map from "./componets/Map";
import { Redirect, Route } from "react-router-dom";
//import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'
// import TestWrapper from "./componets/HT";
function App() {
  return (
    <div className="App">
      <Route path="/create" component={Create} />
      <Route path="/map" component={Map} />
      <Redirect to="/map"></Redirect>
    </div>
  );
}
export default App;
