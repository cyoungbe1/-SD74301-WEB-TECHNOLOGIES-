import React from "react";
import { Button, Container, Card, Col, Row, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Image
            src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fluid
            rounded
            className=""
          />
        </Col>
      </Row>
      <Row>
        <h2 className="text-center .fs-1 fw-bold my-2 py-4 ">
          Why choose Cibus to provide your recipe needs?
        </h2>
      </Row>

      <Row md-4 mb-3>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Card.Body>
              <Card.Title>Recipes</Card.Title>
              <Card.Text>
                We offer a diverse collection of mouthwatering recipes for every
                occasion.
              </Card.Text>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary" type="button">
                  Browse
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Card.Body>
              <Card.Title>Ingredients</Card.Title>
              <Card.Text>
                Get to discover the freshest and finest ingredients to elevate
                your culinary creations.
              </Card.Text>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary" type="button">
                  Browse
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/8540213/pexels-photo-8540213.jpeg?auto=compress&cs=tinysrgb&h=650&w=238"
            />
            <Card.Body>
              <Card.Title>Providers</Card.Title>
              <Card.Text>
                We connect you with trusted food providers offering quality
                products and services to enhance your dining experience.
              </Card.Text>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button className="btn btn-primary" type="button">
                  Browse
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
