import React, { PureComponent} from 'react'
import { Switch, Route, withRouter } from "react-router-dom"
import Waiting from './pages/Waiting/Waiting';
import Music from './pages/components/Music/Music.jsx';
import Invite from './pages/Invite/Invite';
import './App.css';
import "./Animation.scss"
import  './assets/styles/font.scss'
import Home from './pages/home/home';
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Create from "./componets/Create";
import Roomfirst from "./componets/Roomfirst/index.jsx";
import Map from "./componets/Roomfirst/footer/Map";
import "./assets/styles/font.scss";
import Submit from "./componets/Create/Submit";
//import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'
// import TestWrapper from "./componets/HT";




  


class App extends PureComponent {

  state = {
    classNames: "",
  }
  componentDidMount() {
    setTimeout(() =>{
      this.setState({
        classNames: "up"
      })
    })
  }

  render() {
    const { key } = this.props.location
    return (
      <div  style={{
        position:"relative" 
      }}>
        <Music/>
        <TransitionGroup>
          <CSSTransition
            classNames={this.state.classNames}
            timeout={1500}
            key={key}>
            <Switch location={this.props.location}>
              <Route exact path='/' component={Waiting}></Route>
              <Route exact path='/waiting' component={Waiting}></Route>
              <Route exact path='/home' component={Home}></Route>
              <Route exact ptah='/invite' component={Invite}></Route>
              <Route path="/create" component={Create} />
              <Route path="/room" component={Roomfirst} />
              <Route path="/map" component={Map} />
              <Route path="/submit" component={Submit} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>  
      </div>
    );
  }
}
export default withRouter(App)