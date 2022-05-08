import React, { Component } from "react";
import axios from 'axios';
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  Card,
  Image,
  Row,
  CardGroup,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Footer from "./footer";
class Profile extends Component {
  state = {
    coder: []
  };  
  componentDidMount() {
    axios.get(`/coder/displayProfile?id=1`)
      .then(res => {
        const body = res.data;
        alert(body)
        this.setState({ coder :body });
      })
  }
  render() {

    const {coder} = this.state;
    return (
      <div>
        <h2>Welcome</h2>
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="sm"
          bg="dark"
          variant="dark"
        >
          <NavbarBrand>CodeBank</NavbarBrand>
          <Container>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="nav_right">
              <Nav>
                <Nav.Link href="/login">Log Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br></br>
        <Container className="align-items-center">
          <div className="row" >
            <div className="col-6">
          <Image 
            className="square border border-4 rounded"
            alt="100x100"
            src="https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top"
          />
          </div>
          <div className="col-6">
              <h1> {coder.fullname}</h1>
              <Card>
                <Card.Header  style={{ backgroundColor:"#1f80e8", color:"#fff"}} >Contact Information</Card.Header>
                <Card.Body>
              <Card.Text>Email: {coder.email}</Card.Text> 
              <Card.Text>Phone: +90{coder.phoneString}</Card.Text>
              </Card.Body>
              </Card> 
          </div>     
          </div>
          <Card bg="light" style={{ width: "40rem", marginTop: "20px" }}>
            <Card.Header>Information Card</Card.Header>
            <Card.Body>
              <Card.Text>Question Answered : </Card.Text>
              <Card.Text>Challenge Completed :</Card.Text>
              <Card.Text>Contest Participated : </Card.Text>
              <Card.Text>Employement Status : </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}

export default Profile;
