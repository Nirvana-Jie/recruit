import React, { Component } from 'react'
import { Redirect, Switch,Route } from "react-router-dom"
import Waiting from './pages/Waiting/Waiting';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/waiting' component={Waiting}></Route>
          <Redirect to="/waiting" />
        </Switch>
      </div>
    )
  }
}

