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
class List extends Component {
  state = {
    fullName: 0,
    jobTitle: 0,
    region: 0,
    phoneNumber: 0,
    email: 0,
    tab:"none"
  };
  handleClick = id => {
    const xen = People.filter((e, i) => id === i);
    this.setState({
      fullName: xen[0].firstName + xen[0].lastName,
      jobTitle: xen[0].jobTitleName,
      region: xen[0].region,
      phoneNumber: xen[0].phoneNumber,
      email: xen[0].emailAddress,
      tab:""
    });
  };
  render() {
    const uuu = <div>Person List</div>
    
    return (
      <div className="list">
        <Header headerele={uuu} />
        <div style={{display:this.state.tab}}>
        <Table bordered size="sm">
          <thead>
            <tr>
              <th>Full name</th>
              <th>Job title</th>
              <th>Region</th>
              <th>Phone number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{this.state.fullName}</th>
              <th>{this.state.jobTitle}</th>
              <th>{this.state.region}</th>
              <th>{this.state.phoneNumber}</th>
              <th>{this.state.email}</th>
            </tr>
          </tbody>
        </Table>
        </div>
        <ListGroup size="sm">
          <ListGroupItem active>Click on person for more details</ListGroupItem>
          {People.map((e, i) => (
            <ListGroupItem
              onClick={() => this.handleClick(e.id)}
              action
              key={e.id}
            >
              {e.firstName} {e.lastName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <Footer ru="table"/>
      </div>
    );
  }
}

export default List;
