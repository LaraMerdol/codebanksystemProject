import React, { Component, useState,useEffect, error } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
export default function Footer() {
  const [userType, setUsertype] = useState("");

  useEffect(() => {
    if(!error){
      setUsertype("company")
   }
  })
  function setUserDiv() {

    switch (userType) {
      case "editor":
        return (         
          <div>
          <Navbar fixed="bottom" bg="light" variant="light">
            <Container>
              <NavbarToggle aria-controls="responsive-navbar-nav" />
              <Nav className="bottom">
                <Nav.Link href="/mainpage">Home </Nav.Link>
                <Nav.Link href="/searchpage">Search </Nav.Link>
                <Nav.Link href="/createactivitypage">
                  Create New Activity{" "}
                </Nav.Link>
                <Nav.Link href="/createcontest">Create Contest </Nav.Link>
                <Nav.Link href="/discussionpage">Discussion </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
        );
      case "coder":
        return (
          <div>
            <Navbar fixed="bottom" bg="light" variant="light">
              <Container>
                <NavbarToggle aria-controls="responsive-navbar-nav" />
                <Nav className="bottom">
                  <Nav.Link href="/mainpage">Home </Nav.Link>
                  <Nav.Link href="/searchpage">Search </Nav.Link>
                  <Nav.Link href="/discussionpage">Discussion </Nav.Link>
                  <Nav.Link href="/profilepage">Profile </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>
        );
        case "company":
          return (
            <div>
            <Navbar fixed="bottom" bg="light" variant="light">
              <Container>
                <NavbarToggle aria-controls="responsive-navbar-nav" />
                <Nav className="bottom">
                  <Nav.Link href="/mainpage">Home </Nav.Link>
                  <Nav.Link href="/searchpage">Search </Nav.Link>
                  <Nav.Link href="/InterviewPage">
                    Interview Results
                  </Nav.Link>
                  <Nav.Link href="/createInterview">Create Interview </Nav.Link>
                  <Nav.Link href="/discussionpage">Discussion </Nav.Link>
                  <Nav.Link href="/profilepage">Profile </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>
          );
      default:
        return null;
    }
  }

  return (        
    <div>
  {setUserDiv()}
</div>
);
}
