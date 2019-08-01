import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

import SearchButton from './SearchButton';
import techStackLogo from '../logos/Techstack.2.jpg';

const logoStyles ={
  maxHeight: 30,
  maxWidth: 30
}

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
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/"><img src={techStackLogo} style={logoStyles}/>    techStack</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
           <NavItem><NavLink className="piping" href="/section/Entertainment" >Entertainment</NavLink></NavItem>
           <NavItem><NavLink className="piping" href="/section/Health" >Health</NavLink></NavItem>
           <NavItem><NavLink className="piping" href="/section/Business">Business</NavLink></NavItem>
           <NavItem><NavLink className="piping" href="/section/Technology" >Technology</NavLink></NavItem>
           <NavItem><NavLink className="piping" href="/section/Sports" >Sports</NavLink></NavItem>
           <NavItem><NavLink className="piping" href="/Search/Gaming" >Gaming</NavLink></NavItem>
           <NavItem><SearchButton/></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}