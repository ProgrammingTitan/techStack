import React from 'react';
import { ListGroup, ListGroupItem, Container, Row, Col  } from 'reactstrap';

export default class BottomNav extends React.Component {
  render() {
    return (
        <Container fluid>
            <Row>
                <Col>
            <ListGroup>
                <ListGroupItem  tag="a" href="https://github.com/ProgrammingTitan/techStack">GitHub</ListGroupItem>
                <ListGroupItem tag="a" href="#">LinkedIn</ListGroupItem>
                <ListGroupItem disabled tag="a" href="#">Disabled</ListGroupItem>
            </ListGroup>
            </Col>
            <Col>
            <ListGroup>
                <ListGroupItem tag="a" href="#">Careers</ListGroupItem>
                <ListGroupItem tag="a" href="/EmployeePage">Employee Site</ListGroupItem>
                <ListGroupItem tag="a" href="#">Contact Us</ListGroupItem>
            </ListGroup>
            </Col>
            <Col>
            <ListGroup>
                <ListGroupItem disabled tag="a" href="#">Feedback</ListGroupItem>
                <ListGroupItem tag="a" href="#">Contribute</ListGroupItem>
                <ListGroupItem tag="a" href="#">Advertise Your Product</ListGroupItem>
            </ListGroup>
            </Col>
            </Row>
            <p></p>
      </Container>
    );
  }
}