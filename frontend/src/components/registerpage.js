import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
export default function Register() {
  const [user, setUser] = useState(null);
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [fullname, setFullname] = useState("")
  const [phone, setPhone] = useState("")
  const [workercount, setWorkercount] = useState("")
  const [hiringStatus, setHiringStatus] = useState("")
  const [budget, setBudget] = useState("")  
  const [type, setType] = useState("") 

  const axios = require('axios')

  const AddCoder = async () => {
        let url ="/addCoder?id="+id+"&password="+password+"&email="+email +"&phone="+phone +"&name=" + fullname
        alert(url)
        await axios.post(url).then(function (response) {
          console.log(response.data);
      })
  }
  const AddCompany = async () => {
    let url ="/addCompany?id="+id+"&password="+password+"&email="+email  +"&name=" + fullname +"&workerCount=" + parseInt(workercount) +"&hiringStatus=" + parseInt(hiringStatus) +"&budget=" + parseInt(budget)+"&avgRate=" +0
    alert(url)
    await axios.post(url).then(function (response) {
      console.log(response.data);
  })
  } 
  const AddEditor = async () => {
    let url ="/addEditor?id="+id+"&password="+password+"&email="+email  +"&name=" + fullname +"&type=" + type
    alert(url)
    await axios.post(url).then(function (response) {
      console.log(response.data);
  })
  }     
  function setUserDiv() {
    switch (user) {
      case "first":
        return;
      case "coder":
        
        return (
          <div>
            <form className="register-form">
              <div className="form-group">
                <label>User ID</label>
                <input
                  type="id"
                  className="form-control"
                  placeholder="Enter User ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="form-group ">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="fullname"
                  className="form-control"
                  placeholder="Full Name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="phone"
                  className="form-control"
                  placeholder="Enter Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button type="submit" onClick={() => { AddCoder() }} className="btn btn-dark btn-lg btn-block">
                Register
              </button>
            </form>
          </div>
        );
      case "company":
        return (
          <div>
            <form className="register-form">
              <div className="form-group">
                <label>User ID</label>
                <input
                  type="id"
                  className="form-control"
                  placeholder="Enter User ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="form-group ">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter Your Company Name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
                </div>
                <div className="form-group">
                <label>Worker Count </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Your Company Worker Number"
                  value={workercount}
                  onChange={(e) => setWorkercount(e.target.value)}
                />
                </div>
                <div className="form-group">
                <label>Hiring Status</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Hiring status"
                  value={hiringStatus}
                  onChange={(e) => setHiringStatus(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Budget</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={() => { AddCompany() }}>
                Register
              </button>
            </form>
          </div>
        );
      case "editor":
        return (
          <div>
            <form className="register-form">
              <div className="form-group">
                <label>User ID</label>
                <input
                  type="id"
                  className="form-control"
                  placeholder="Enter User ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Editor Name</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter Name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
                </div>
              <div className="form-group ">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Editor Type</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Editor Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={() => { AddEditor() }}>
                Register
              </button>
            </form>
          </div>
        );
      default:
        return null;
    }
  }
  return (
    <div className="register-page">
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <NavbarBrand>CodeBank</NavbarBrand>
        <Container>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="nav_right">
            <Nav>
              <Nav.Link href="/">Welcome Page  </Nav.Link>
              <Nav.Link href="/login">Login </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div class="form">
        <div className="form-group">
          <h3>Register Page </h3>

          <Form.Select
            size="lg"
            onClick={(event) => {
              setUser(event.target.value);
            }}
          >
            <option value="first">Select user type</option>
            <option value="coder">Coder</option>
            <option value="company">Company</option>
            <option value="editor">Editor</option>
          </Form.Select>
        </div>
        {setUserDiv()}
      </div>
    </div>
  );
}
