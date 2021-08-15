import React, { Component, createRef } from 'react'
import { Switch, Route, withRouter } from "react-router-dom"
import Waiting from './pages/Waiting/Waiting';
import Music from './pages/components/Music/Music.jsx';
import Invite from './pages/Invite/Invite';
import './App.css';
import "./Animation.scss"
import  './assets/styles/font.scss'
import Home from './pages/home/home';
import { TransitionGroup, CSSTransition } from "react-transition-group"


class App extends Component {
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

  controlMusic =createRef()

  
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
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

export default withRouter(App)
