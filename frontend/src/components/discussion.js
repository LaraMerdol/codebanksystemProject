import React, { Component } from "react";
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
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

class Discussion extends Component {
  username = "Can"

  goToProfilePage = () =>{
    this.props.useNavigate()('/profilepage');

  }

  sayHello = () =>{
    alert("Hello!");
  }

  postMessage = () =>{
    document.getElementById("p_1").innerText = document.getElementById("p_1").innerText 
                    + "\n" + document.getElementById("ta_1").value
                    + " - " + this.username;
    document.getElementById("ta_1").value = "";
  }



  render() {
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

        
        <div>
        <Link to="/profilepage" className="btn btn-primary">Profile</Link>
        </div>

        <br></br>

        <h1 align="center">Discussions</h1>
        <br></br>
        <div align="center">
        <label
        name = "disc_1" 
        id = "p_1">
          Beginning of the discussion
        </label>
        <br></br>
          <label >Write Something: </label>
          <input type="textarea" 
            name="textValue"
            onChange={this.handleChange}
            id="ta_1"
          />
          <button 
            name="post_button"
            id="post_b"
            onClick={this.postMessage}
          >
            Post</button>

        </div>


        <Footer></Footer>

      </div>

    );
  }

}

export default Discussion;
