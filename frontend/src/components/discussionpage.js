import React, { Component,useEffect, useState  } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { useTable } from "react-table"
import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Footer from "./footer";
import Table from "./table"
export default class DiscussionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }
  async getUsersData() {
    // const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = [
      {"id":"1","name":"How to Solve DP?"},

    ]
    this.setState({ loading: false, users: data });
  }
  componentDidMount() {
    this.getUsersData();
  }

  render() {

    const columns = [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
        formatter: this.AddButtonToCell,
      }
    ];
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
          <Table data={this.state.users}  />
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}
