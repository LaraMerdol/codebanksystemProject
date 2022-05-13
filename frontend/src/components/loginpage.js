import React, { Component } from "react";
import { Navbar, Nav, Container, NavbarBrand} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Input from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
class Login extends Component {
  /**
   * 
  handleSubmit = input => {
    this.setState({ loading: true });
    input.preventDefault();

    if (this.formisValid(this.state)) {
      this.setState({ errors: [], loading: true });
      axios({
        method: 'POST',
        url: 'http:localhost:3003/api/v1/login',
        data: {
          email    : this.state.email,
          password : this.state.password
        }
      }).then( user => {

        this.setState({ 
          initialState,
          submit: true
        });
        this.setState({ loading: false});
        console.log('User Login', user)

      }).catch((response) => {
        // ? Show to user that request is failed
        this.setState({ errors:[response ]})
        this.setState({ loading: false });
        console.log('request failed', response)
      });
    }
  };
   */

  render() {

    return (
      <div className="login-page">
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
                <Button active onClick={() => { localStorage.setItem("userType", "coder"); alert(localStorage.getItem("userType"))}}>
                Coder
                  <Input
                    ref="input1"
                    type="radio"
                    name="radioButtonSet"
                    value="Coder"
                  />
                </Button>
                <Button active onClick={() => { localStorage.setItem("userType", "company"); alert(localStorage.getItem("userType"))}}>
                Company
                  <Input
                    ref="input2"
                    type="radio"
                    name="radioButtonSet"
                    value="Company"
                    
                  />
                </Button>
                <Button active onClick={() => { localStorage.setItem("userType", "editor"); alert(localStorage.getItem("userType"))}}>
                Editor
                  <Input
                    ref="input3"
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
                className="form-control"
                placeholder="Enter User ID"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <Link to="/mainpage" type="submit" className="btn btn-dark btn-lg btn-block">
              Sign in
            </Link>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
