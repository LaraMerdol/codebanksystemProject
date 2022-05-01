import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
class Footer extends Component {
  
  render() {
    return (
        <div>
          <Navbar  fixed='bottom'  bg='light' variant='light'>
          <Container>
          <NavbarToggle aria-controls='responsive-navbar-nav' />
          <Nav className='bottom' >                
              <Nav.Link href="/mainpage" >Home </Nav.Link>
              <Nav.Link href="/searchpage" >Search </Nav.Link>
              <Nav.Link href="/createactivitypage" >Create New Activity </Nav.Link>
              <Nav.Link href="/createcontest" >Create Contest </Nav.Link>
              <Nav.Link href="/discussionpage" >Discussion </Nav.Link>
              <Nav.Link href="/profilepage" >Profile </Nav.Link>

          </Nav>
          </Container>
          </Navbar>
        </div>
    );
  }
}

export default Footer;