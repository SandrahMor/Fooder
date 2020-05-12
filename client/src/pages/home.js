import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

render() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">Welcome to Fooder</h1>
            
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default render;