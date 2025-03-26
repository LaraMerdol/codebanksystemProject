import React, { Component } from "react";
import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
class Login extends Component {
  /**
   * vvvvvvv
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
    localStorage.setItem('userType', 'coder');
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
              <label>User ID</label>
              <input
                type="text"
                className="form-control"
                name="user_id"
                placeholder="Enter User ID"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter password"
              />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Sign in
            </button>
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
