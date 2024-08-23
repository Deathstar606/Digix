import React from 'react';
import {
  Navbar as BootstrapNavbar,
  NavLink,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import logo from "../images/Digixwhitelogo.png"
/* import Burger from './Burger'; */
import MediaQuery from 'react-responsive';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <Container className='nav-container d-flex justify-content-center'>
      <div className='nav-c'>
{/*         <MediaQuery maxWidth={639}>
          <Burger />
        </MediaQuery> */}
        <BootstrapNavbar light expand="md">
          <NavbarBrand href="/" className='text-white'><img className='logo' src={logo}/></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem className='nav-ele'>
              <Link
                style={{ color: "white", fontSize: "18px", fontWeight: "500" }}
                to="casestu"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Case Studies
              </Link>
            </NavItem>
            <NavItem className='nav-ele'>
              <Link
                style={{ color: "white", fontSize: "18px", fontWeight: "500" }}
                to="learn"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Learn
              </Link>
            </NavItem>
            <NavItem className='nav-ele'>
              <Link
                style={{ color: "white", fontSize: "18px", fontWeight: "500" }}
                to="learn"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About Us
              </Link>
            </NavItem>
          </Nav>
        </BootstrapNavbar>
      </div>
    </Container>
  );
}

export default Navbar;
