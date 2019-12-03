import React from "react";
import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import List from "./List";
import Tablet from "./Table"

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path='/list'><List/></Route>
            <Route path='/table'><Tablet/></Route>
            <Route path='/about'></Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;

//<div className="home">
//          <div>
//            Send Nortification{" "}
//            <Button outline color="primary" onClick={this.handleCount}>
//              Send
//            </Button>
//          </div>
//          <Home />
//        </div>
