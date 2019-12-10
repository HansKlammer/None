import { Component } from "react";
import React from "react";
import "./App.css";
import People from "./images/People";
import { Table } from "reactstrap";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "reactstrap";
import { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";

People.forEach((e, i) => (e.id = i));

class Tablet extends Component {
  state = {
    rex: 3,
    pag: 3,
    maxpag: People.length,
    basepag: 0,
    pagnum: 1
  };

  handleIncrese = () => {
    const y = this.state.basepag;
    const x = this.state.pag;
    const z = this.state.pagnum;
    this.setState({
      pag: x + this.state.rex,
      basepag: y + this.state.rex,
      pagnum: z + 1
    });
  };
  handleDecrese = () => {
    const y = this.state.basepag;
    const x = this.state.pag;
    const z = this.state.pagnum;
    this.setState({
      pag: x - this.state.rex,
      basepag: y - this.state.rex,
      pagnum: z - 1
    });
  };

  handleSelect = value => {
    const fu = value;
    this.setState({
      rex: 3,
      pag: 3,
      maxpag: People.length,
      basepag: 0,
      pagnum: 1
    });
    this.setState({ rex: fu, pag: fu });
  };

  render() {
    var btnp = false;
    var btnm = false;
    var bal = this.state.basepag;
    if (bal + this.state.rex >= this.state.maxpag) {
      btnp = true;
    }
    if (bal <= 0) {
      btnm = true;
    }
    const xen = People.slice(this.state.basepag, this.state.pag);
    const But = props => {
      const [dropdownOpen, setOpen] = useState(false);
      const toggle = () => setOpen(!dropdownOpen);
      const ar = [1, 2, 3, 4, 5, 6];
      return (
        <div>
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Select Pagination</DropdownToggle>
            <DropdownMenu>
              {ar.map((e, i) => (
                <DropdownItem key={i} onClick={() => this.handleSelect(e)}>
                  {e}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </ButtonDropdown>
        </div>
      );
    };
    const uuu = <div>Table</div>
    return (
      <Container className="list">
        <Header headerele={uuu}/>
        <div className="nav">
          <But />
          <Button onClick={this.handleIncrese} disabled={btnp}>
            +
          </Button>
          <span>{this.state.pagnum}</span>
          <Button onClick={this.handleDecrese} disabled={btnm}>
            -
          </Button>
        </div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Job Title</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {xen.map((e, i) => (
              <tr>
                <th scope="row">{e.id + 1}</th>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.jobTitleName}</td>
                <td>{e.emailAddress}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Footer ru="about" />
      </Container>
    );
  }
}

export default Tablet;
