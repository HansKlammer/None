import { Component } from "react";
import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    let ruta=this.props.ru
    return (
      <div className="footer">
        <Link to={`/${ruta}`}>Redirect to {ruta}</Link>
      </div>
    );
  }
}

export default Footer;
