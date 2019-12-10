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
    const uuu = (
      <div>
        {" "}
        Homepage{"   "}
        <Button outline color="primary">
          {this.state.count}
        </Button>
      </div>
    );
    return (
      <div>
        <Header headerele={uuu} />
        <div className="home">
          <div>
            Send Nortification{" "}
            <Button outline color="primary" onClick={this.handleCount}>
              Send
            </Button>
          </div>
          <Car />
        </div>
        <Footer ru="list" />
      </div>
    );
  }
}

export default Home;
