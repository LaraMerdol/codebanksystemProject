import React, { Component,useEffect, useState  } from "react";
import axios from "axios";
import ReactTable from "react-table";
import { Link } from 'react-router-dom'
import "react-table/react-table.css";
import { useTable } from "react-table"
import { Navbar, Nav, Container, NavbarBrand, Button} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Footer from "./footer";
import TableDiscussion from "./tableDiscussion"
export default class DiscussionPage extends Component {

  state = {
    persons: []
  }

  componentDidMount() {
    axios.get("/getDiscussions?header=All")
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  render() {

    return (
      <div>
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
        <Container className="align-items-center" style={{margin:"10%"}}>
        <TableDiscussion data={this.state.persons}  />
        
        <Footer></Footer>
        <Link align="center" to={'/createDiscussion'}><button   class="btn btn-primary btn-md"> Create New Discussion </button></Link>
        </Container>
      </div>
    );
  }
}
