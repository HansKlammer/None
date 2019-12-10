import { Component } from "react";
import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from "reactstrap";
import { Button } from "reactstrap";

class About extends Component {
  state = { set1: "", set2: "", set3: "", yes1:false, yes2:false, yes3:false, no1:false, no2:false, no3:false};
  handleChange1 = event => {
    this.setState({ set1: event.target.value });
  };
  handleChange2 = event => {
    this.setState({ set2: event.target.value });
  };
  handleChange3 = event => {
    this.setState({ set3: event.target.value });
  };
  handleSubmit = () => {
    if(this.state.set1 === ""){
      this.setState({no1:true})
    }else{
      this.setState({yes1:true})
    }
    if(this.state.set2 === ""){
      this.setState({no2:true})
    }else{
      this.setState({yes2:true})
    }
    if(this.state.set3 === ""){
      this.setState({no3:true})
    }else{
      this.setState({yes3:true})
    }
  };
  render() {
    const uuu = <div>Contact Us</div>;
    const arr = [1, 2, 3];
    return (
      <div>
        <div>
          <FormGroup>
            <Form>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Dundie@is-the.best"
                value={this.state.set1}
                key={arr[0]}
                onChange={this.handleChange1}
                valid={this.state.yes1}
                invalid={this.state.no1}
              ></Input>
            </Form>
            <Form>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="Name"
                value2={this.state.set2}
                key={arr[1]}
                onChange={this.handleChange2}
                valid={this.state.yes2}
                invalid={this.state.no2}
              ></Input>
            </Form>
            <Form>
              <Label>Message</Label>
              <Input
                type="text"
                placeholder="Please send us message"
                value3={this.state.set3}
                key={arr[2]}
                onChange={this.handleChange3}
                valid={this.state.yes3}
                invalid={this.state.no3}
              ></Input>
            </Form>
          </FormGroup>
        </div>
        <Button color="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
        <Footer ru="home" />
      </div>
    );
  }
}

export default About;

// <Header headerele={uuu}/>
