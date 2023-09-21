import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Timeline = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} lg={6}>
          <Card className="mb-3">
            <Card.Body>
              <h4 className="card-title">Event Title 1</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam euismod tortor eget sem vulputate, vel tempus neque
                tincidunt.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} className="order-lg-first">
          <Card className="mb-3">
            <Card.Body>
              <h4 className="card-title">Event Title 2</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam euismod tortor eget sem vulputate, vel tempus neque
                tincidunt.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card className="mb-3">
            <Card.Body>
              <h4 className="card-title">Event Title 3</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam euismod tortor eget sem vulputate, vel tempus neque
                tincidunt.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} className="order-lg-first">
          <Card className="mb-3">
            <Card.Body>
              <h4 className="card-title">Event Title 4</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam euismod tortor eget sem vulputate, vel tempus neque
                tincidunt.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Timeline;
