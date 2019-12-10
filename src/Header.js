import { Component } from "react";
import React from "react";
import "./App.css";


class Header extends Component {
  render() {
    return <div className="header">{this.props.headerele}</div>;
  }
}

export default Header;
