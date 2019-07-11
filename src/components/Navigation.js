import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

export default class Navigation extends React.Component {
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
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">techStack</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
           <NavItem><NavLink className="piping" href="/section/US" inline>US</NavLink></NavItem>
           <NavItem><NavLink className="piping" href="/section/Entertainment" >Entertainment</NavLink></NavItem>
           <NavItem><NavLink className="piping" href="/section/Health" >Health</NavLink></NavItem>
           <NavItem><NavLink className="piping" href="/section/Business">Business</NavLink></NavItem>
           <NavItem><NavLink className="piping" href="/section/Technology" >Technology</NavLink></NavItem>
           <NavItem><NavLink className="piping" href="/section/Sports" >Sports</NavLink></NavItem>
           <NavItem><NavLink className="piping" href="/section/Gaming" >Gaming</NavLink></NavItem>
           <NavItem><NavLink className="piping" href="/section/Feedback">Feeback</NavLink></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}