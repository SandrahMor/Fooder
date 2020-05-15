import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/WelcomJumbotron";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


class Home extends Component{
  render() {
  return (
    <Container fluid >
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center ">Welcome to Fooder</h1>
            <p className="text-center ">
              <Button variant="outline-success" type="submit">
                <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/signup" >
              </Link> 
                    Sign Up
              </Button>

              <Button variant="outline-success" type="submit">
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                  to="/signin" >
              </Link> 
                    Log In
              </Button>
            </p>
          </Jumbotron>         
        </Col>
      </Row>
    </Container>
  );
}
}

export default Home;
