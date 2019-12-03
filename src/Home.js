import Header from "./Header";
import Footer from "./Footer";
import { Component } from "react";
import React from "react";
import "./App.css";
import Car from "./Car";
import { Button } from "reactstrap";

class Home extends Component {
  state = {
    count: 0
  };
  handleCount = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };
  render() {
    const op="list"
    return (
      <div>
        <Header ok={this.state.count}/>
        <div className="home">
          <div>
            Send Nortification{" "}
            <Button outline color="primary" onClick={this.handleCount}>
              Send
            </Button>
          </div>
          <Car />
        </div>
        <Footer ru={op}/>
      </div>
    );
  }
}

export default Home;
