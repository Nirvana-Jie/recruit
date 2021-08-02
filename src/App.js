import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from "react-router-dom"
import Waiting from './pages/Waiting/Waiting';
import Create from './pages/Create/create';
import './App.css';
import "./Animation.scss"
import Home from './pages/home/home';
import { TransitionGroup, CSSTransition } from "react-transition-group"

class App extends Component {
  state = {
    classNames: ""
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
      <div style={{
        position:"relative"
      }}>
        <TransitionGroup>
          <CSSTransition
            classNames={this.state.classNames}
            timeout={1000}
            key={key}>
            <Switch location={this.props.location}>
              <Route exact path='/' component={Waiting}></Route>
              <Route exact path='/waiting' component={Waiting}></Route>
              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/create' component={Create}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

export default withRouter(App)
