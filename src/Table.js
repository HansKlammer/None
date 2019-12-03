import { Component } from "react";
import React from "react";
import "./App.css";
import People from "./images/People";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Table } from "reactstrap";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "reactstrap";

People.forEach((e, i) => (e.id = i));

class Tablet extends Component {
  state = {
    rex: 2,
    pag: 2,
    maxpag: People.length,
    basepag: 0
  };

  handleIncrese = () => {
    const y = this.state.basepag;
    const x = this.state.pag;
    this.setState({ pag: x + this.state.rex, basepag: y + this.state.rex });
  };
  handleDecrese = () => {
    const y = this.state.basepag;
    const x = this.state.pag;
    this.setState({ pag: x - this.state.rex, basepag: y - this.state.rex });
  };

  render() {
    var btnp = false;
    var btnm = false;
    var bal = 0;
    if (this.state.pag >= this.state.maxpag) {
      btnp = true;
      bal = +this.state.rex;
    }
    if (this.state.pag <= 0) {
      btnm = true;
      bal = -this.state.rex;
    }
    const xen = People.slice(this.state.basepag + bal, this.state.pag + bal);
    console.log(xen);
    const op = "home";
    return (
      <div>
        <Button onClick={this.handleIncrese} disabled={btnp}>
          +
        </Button>
        <Button onClick={this.handleDecrese} disabled={btnm}>
          -
        </Button>
        <Footer ru={op} />
      </div>
    );
  }
}

export default Tablet;
