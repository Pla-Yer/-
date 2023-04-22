import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
// import 'antd/dist/antd.less'
ReactDom.render(
  <Router>
    <App />
  </Router>
, document.getElementById("root"));
