import React from "react";

import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Recipe = ({ label, cal, Image, ingredients }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <Card className="mb-5">
              <Card.Title>Recipe Name : {label} </Card.Title>
              <h5>Calories:{cal} </h5>

              <img src={Image} alt={"label"} width="250" height="250"></img>
              <h5>ingredients are:-</h5>
              <ol>
                {ingredients.map((items) => {
                  return <li>{items.text}</li>;
                })}
              </ol>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Recipe;
