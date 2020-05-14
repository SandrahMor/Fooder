import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Restaurant({ title, openNow, rating, Button }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
        </Col>
        <Col size="md-2">
            <h3 className="font-italic">{rating}</h3>
        </Col>
        <Col size="md-2">
            <Button />
        </Col>
      </Row>
      <Row>
        {/* <Col size="md-6">
          <p className="font-italic">{openNow}</p>
        </Col> */}
      </Row>
      {/* <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
      </Row> */}
    </ListItem>
  );
}

export default Restaurant;
