import React, { PureComponent } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Waiting from "./pages/Waiting/Waiting";
import Music from "./pages/components/Music/Music.jsx";
import Invite from "./pages/Invite/Invite";
import "./App.css";
import "./Animation.scss";
import "./assets/styles/font.scss";
import Home from "./pages/home/home";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Create from "./componets/Create";
import Roomfirst from "./componets/Roomfirst/index.jsx";
import Map from "./componets/Roomfirst/footer/Map";
import "./assets/styles/font.scss";
import Submit from "./componets/Create/Submit";
import map from './assets/img/room/Map/map.png'
import pic from './assets/img/room/Map/pic.jpeg'
import mapback from './assets/img/room/mapopo/mapback.png'
import eight from './assets/img/room/mapopo/第八教学楼/0.jpg'
import old from './assets/img/room/mapopo/老图书馆/0.jpg'
import number from './assets/img/room/mapopo/数字图书馆/0.jpg'
import xinKe from './assets/img/room/mapopo/信科大楼/0.jpg'
import cat from './assets/img/room/mapopo/猫猫/0.jpg'

 
//import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'
// import TestWrapper from "./componets/HT";

class App extends PureComponent {
  state = {
    classNames: "",
  };
  componentDidMount() {
    window.removeEventListener("popstate", () => {}, false);
    setTimeout(() => {
      this.setState({
        classNames: "up",
      });
    });
  }
  render() {
    return (
      <div
        style={{
          position: "relative",
        }}
      >
      <img alt='预加载' src={map} style={{display:'none'}}></img>
      <img alt='八教' src={eight} style={{display:'none'}}></img>
      <img alt='老图' src={old} style={{display:'none'}}></img>
      <img alt='数图' src={number} style={{display:'none'}}></img>
      <img alt='信科' src={xinKe} style={{display:'none'}}></img>
      <img alt='mapback' src={mapback} style={{display:'none'}}></img>
      <img alt='重邮地图' src={pic} style={{display:'none'}}></img>
      <img alt='猫猫' src={cat} style={{display:'none'}}></img>
      <img alt='江南分校食堂' src='https://z3.ax1x.com/2021/08/19/fqdjk8.png' style={{display:'none'}}></img>
        <Music/>
        <TransitionGroup>
          <CSSTransition
            classNames={this.state.classNames}
            timeout={1500}
            key={Math.random()}
          >
            <Switch location={this.props.location}>
              <Route exact path="/" component={Waiting}></Route>
              <Route exact path="/waiting" component={Waiting}></Route>
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/create" component={Create} />
              <Route exact path="/room" component={Roomfirst} />
              <Route exact path="/map" component={Map} />
              <Route exact path="/submit" component={Submit} />
              <Route exact ptah="/invite" component={Invite}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}
export default withRouter(App);
