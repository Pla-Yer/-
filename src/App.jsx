import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainViewLayout from './MainView/MainLayout';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={MainViewLayout}></Route>   
        </Switch>
      </div>
    </Router>
    )
  }
}


