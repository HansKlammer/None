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
  state = {
    email: "",
    password: "",
    message: "",
    isvalid1: false,
    isinvalid1: false,
    isvalid2: false,
    isinvalid2: false,
    isvalid3: false,
    isinvalid3: false,
    popupError: true
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    if (this.state.email.length <= 0) {
      this.setState({ isinvalid1: true });
      this.setState({ isvalid1: false });
    } else {
      this.setState({ isvalid1: true });
      this.setState({ isinvalid1: false });
    }
    if (this.state.password.length <= 0) {
      this.setState({ isinvalid2: true });
      this.setState({ isvalid2: false });
    } else {
      this.setState({ isvalid2: true });
      this.setState({ isinvalid2: false });
    }
    if (this.state.message.length <= 0) {
      this.setState({ isinvalid3: true });
      this.setState({ isvalid3: false });
    } else {
      this.setState({ isvalid3: true });
      this.setState({ isinvalid3: false });
    }
    if (
      this.state.email.length <= 0 ||
      this.state.password.length <= 0 ||
      this.state.message.length <= 0
    ) {
      this.setState({popupError:false})
    } else {
      this.setState({popupError:true})
    }
  };
  render() {
    const uuu = <div>Contact Us</div>;
    const arr = [1, 2, 3];
    return (
      <div>
        <div>
          <Button color="danger" hidden={this.state.popupError}>All fields are required</Button>
          <FormGroup>
            <Form>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Dundie@is-the.best"
                value={this.state.email}
                key={arr[0]}
                name="email"
                onSubmit={this.handleSubmiting}
                onChange={this.handleChange}
                valid={this.state.isvalid1 ? true : false}
                invalid={this.state.isinvalid1 ? true : false}
              ></Input>
            </Form>
            <Form>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="Name"
                value={this.state.password}
                key={arr[1]}
                name="password"
                onChange={this.handleChange}
                valid={this.state.isvalid2 ? true : false}
                invalid={this.state.isinvalid2 ? true : false}
              ></Input>
            </Form>
            <Form>
              <Label>Message</Label>
              <Input
                type="text"
                placeholder="Please send us message"
                value={this.state.message}
                key={arr[2]}
                name="message"
                onChange={this.handleChange}
                valid={this.state.isvalid3 ? true : false}
                invalid={this.state.isinvalid3 ? true : false}
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
