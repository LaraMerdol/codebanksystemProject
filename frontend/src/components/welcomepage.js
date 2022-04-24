import React, { Component } from 'react';
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
class Welcome extends Component {
  render() {
    return (
        <div>
          <h2>Welcome</h2>
          <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
            <NavbarBrand >CodeBank</NavbarBrand>
          <Container>
          <NavbarToggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'className='nav_right'>
          <Nav >                
              <Nav.Link href="/login" >Login </Nav.Link>
              <Nav.Link href="/register" >Register </Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>
        </div>
    );
  }
}

export default Welcome;