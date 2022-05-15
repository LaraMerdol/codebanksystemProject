import React, { Component, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "react-dom";

export default class CoderResult extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  componentDidMount() {
    axios
      .get("/getSolutionResultByCoderId?user_id="+localStorage.getItem("userId")+"&activity_id="+ localStorage.getItem("activity_id"))
      .then((res) => {
        console.log(typeof res.data);
        console.log(res.data);
        this.setState({ list: res.data });
      });
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
        <table align="center" class="table" style={{marginTop:"40px", width: "70%" }}>
          <thead>
            <tr>
            <th>Solution ID </th>
              <th>Test ID</th>
              <th>Pass</th>

            </tr>
          </thead>
          <tbody>
          
          {this.state.list.map(row => (
            <tr>
              <td >{row.solution_id}</td>
                <td >{row.test_id}</td>
                <td>{row.pass}</td>
            </tr>
            ))}
           
          </tbody>
        </table>
        <Footer></Footer>
      </div>
    );
  }
}
