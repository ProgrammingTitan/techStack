import React from 'react';
import { ListGroup, ListGroupItem, Container, Row, Col  } from 'reactstrap';

export default class BottomNav extends React.Component {
  render() {

    const mediaStyle = {
      color: "black",
      "text-decoration" : "none"
    }
    return (
        <Container fluid>
            <Row>
                <Col>
            <ListGroup>
                <ListGroupItem style={mediaStyle} tag="a" href="https://github.com/ProgrammingTitan/techStack">GitHub</ListGroupItem>
                <ListGroupItem  style={mediaStyle} tag="a" href="https://www.linkedin.com/in/paul-valenzuela-511b28187/">LinkedIn</ListGroupItem>
                <ListGroupItem  style={mediaStyle} disabled tag="a" href="#">Disabled</ListGroupItem>
            </ListGroup>
            </Col>
            <Col>
            <ListGroup>
                <ListGroupItem  style={mediaStyle} tag="a" href="#">Careers</ListGroupItem>
                <ListGroupItem  style={mediaStyle} tag="a" href="/EmployeePage">Employee Site</ListGroupItem>
                <ListGroupItem  style={mediaStyle} tag="a" href="#">Contact Us</ListGroupItem>
            </ListGroup>
            </Col>
            <Col>
            <ListGroup>
                <ListGroupItem  style={mediaStyle} disabled tag="a" href="#">Feedback</ListGroupItem>
                <ListGroupItem  style={mediaStyle} tag="a" href="https://www.patreon.com/user?u=16320739">Contribute</ListGroupItem>
                <ListGroupItem  style={mediaStyle} tag="a" href="#">Advertise Your Product</ListGroupItem>
            </ListGroup>
            </Col>
            </Row>
            <p></p>
      </Container>
    );
  }
}