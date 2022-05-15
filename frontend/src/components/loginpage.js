import React, { Component, useState } from "react";
import axios from "axios";
import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Input from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const loginFunction = async () => {
    await axios.get("/login?id=" + id + "&pass=" + password).then((res) => {
      if(res.data){
        localStorage.setItem("userId",id)
        navigate('/mainpage');
      }
      else{
        alert("Plrase Enter Valid Id or password")
      }

    });
  }
  return (
    <div className="login-page">
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <NavbarBrand>CodeBank</NavbarBrand>
        <Container>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="nav_right">
            <Nav>
              <Nav.Link href="/">Welcome Page </Nav.Link>
              <Nav.Link href="/register">Register </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div class="form">
        <form className="login-form">
          <h3>Login Page</h3>
          <div className="form-group">
            <label>User Type</label>
            <ButtonGroup>
                <Button active onClick={() => { localStorage.setItem("userType", "coder")}}>
                Coder
                  <Input
                    type="radio"
                    name="radioButtonSet"
                    value="Coder"
                  />
                </Button>
                <Button active onClick={() => { localStorage.setItem("userType", "company")}}>
                Company
                  <Input
                    type="radio"
                    name="radioButtonSet"
                    value="Company"
                    
                  />
                </Button>
                <Button active onClick={() => { localStorage.setItem("userType", "editor")}}>
                Editor
                  <Input
                    type="radio"
                    name="radioButtonSet"
                    value="Editor"
                  />
                </Button>
              </ButtonGroup>
          </div>
          <div className="form-group">
            <label>User ID</label>
            <input
              type="id"
              onChange={(e) => setId(e.target.value)}
              className="form-control"
              placeholder="Enter User ID"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <Button
            type="button"
            className="btn btn-dark btn-lg btn-block"
            onClick={() => { loginFunction() }} 
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
