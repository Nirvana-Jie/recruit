import React, { Component } from 'react'
import { Redirect, Switch } from "react-router-dom"
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect to="./pages/home/home.jsx"/>
        </Switch>
      </div>
    )
  }
}

