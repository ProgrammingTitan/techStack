import React from 'react';
import { ListGroup, ListGroupItem, Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse  } from 'reactstrap';
import techStackLogo from '../logos/Techstack.2.jpg';


const logoStyles ={
  maxHeight: 100,
  maxWidth: 100
}

export default class BottomNav extends React.Component {
  


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {

    const mediaStyle = {
      color: "black",
      "text-decoration" : "none"
    }
    return (
        
      
      <div>
      <Navbar color="white" light expand="md">
        <NavbarToggler onClick={this.toggle} className="mr-auto" />
        <NavbarBrand href="/"><img src={techStackLogo} style={logoStyles} alt="logo"/></NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
        <Container fluid>
            <Row>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
            <ListGroup>
                <ListGroupItem style={mediaStyle} tag="a" href="https://github.com/ProgrammingTitan/techStack">GitHub</ListGroupItem>
                <ListGroupItem  style={mediaStyle} tag="a" href="https://www.linkedin.com/in/paul-valenzuela-511b28187/">LinkedIn</ListGroupItem>
            </ListGroup>
            </Col>
            <Col xs="12" sm="12" md="4" lg="4" xl="4">
            <ListGroup>
                <ListGroupItem  style={mediaStyle} tag="a" href="/EmployeePage">Employee Site</ListGroupItem>
                <ListGroupItem  style={mediaStyle} tag="a" href="https://www.instagram.com/tech_stack/">Contact Us</ListGroupItem>
            </ListGroup>
            </Col>
            <Col xs="12" sm="12" md="4" lg="4" xl="4">
            <ListGroup>
                <ListGroupItem  style={mediaStyle} tag="a" href="https://www.patreon.com/user?u=16320739">Contribute</ListGroupItem>
                <ListGroupItem  style={mediaStyle} tag="a" href="/Sponsors">Advertise Your Product</ListGroupItem>
            </ListGroup>
            </Col>
            </Row>
            <p></p>
      </Container>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}