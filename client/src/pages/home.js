import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/WelcomJumbotron";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button'

class Home extends Component{
  render() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">Welcome to Fooder</h1>
            <p>
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/" >
                sign-up
              </Link> 
              <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                  to="/" >
                log-in
              </Link> 
            </p>
          </Jumbotron>         
        </Col>
      </Row>
    </Container>
  );
}
}

  


export default Home;