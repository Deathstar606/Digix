import React from 'react';
import logo from "../images/Digixwhitelogo.png"
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button } from 'reactstrap';
import Burger from './Burger';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <>
        <div className='nav-color'></div>
        <div className='nav-c'>
        <Burger/>
        <Navbar light expand="md">
          <NavbarBrand href="/"><img src={logo} alt="Logo" className='logo'/></NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button href="/#" className='butt'>Palce?</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      </>
    );
  }
}