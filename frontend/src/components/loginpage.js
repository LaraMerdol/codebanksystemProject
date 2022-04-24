import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div class="form">
          <form className="login-form">
            <h3>Login Page</h3>

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
