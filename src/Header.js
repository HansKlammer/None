import { Component } from "react";
import React from "react";
import "./App.css";
import { Button } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div className="header">
        Homepage{"   "}
        <Button outline color="primary">
          {this.props.ok}
        </Button>
      </div>
    );
  }
}

export default Header;
