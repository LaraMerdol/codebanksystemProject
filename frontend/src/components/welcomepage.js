import React, { Component } from 'react';
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import photo from './mainphoto.jpeg';
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
          <br></br>
          <h1 >CodeBank</h1>
          <body >
            <h2>Welcome to CodeBank</h2>
            <p> CodeBank is created to facilitate programming practice,</p>

            <p>contests and job interviews. CodeBank allows users tp</p>
            <p>improve their programming skills by practicing programming</p>
            <p> and system design questions.</p>
            <div>
              <img src={photo}/>
            </div>
          </body>
        </div>
    );
  }
}

export default Welcome;