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

export default class Discussion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: "",
      header: localStorage.getItem("discussion_header"),
      discussion_id: localStorage.getItem("discussion_id"),
      discussion_text: localStorage.getItem("discussion_text"),
    };
  }

onTitleChange = e => {
  this.setState({
    value: e.target.value
  });
};
handleSubmit = e => {
  e.preventDefault();
  axios.post("/createReply?discussion_id="+parseInt(this.state.discussion_id)+"&text="+ this.state.value +"&user_id='6'").then(function (response) {
    console.log(response.data);
})

};
  componentDidMount() {
    axios.get("/getReplies?id="+parseInt(this.state.discussion_id)).then((res) => {
      console.log(typeof res.data);
      console.log(res.data);
      this.setState({ list:res.data });
      console.log(this.state.list);
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
        <Card style={{ width: "40rem", marginLeft: "30%", height: "75vh" }}>
          <Card.Body>
            <Card.Title align="center">Discussion {this.state.header}</Card.Title>
            <Card.Subtitle align="center">{this.state.discussion_text}</Card.Subtitle>
            <br></br>
            <div >
              <div style={{ marginTop: "0", height: "48vh" }}>
                <ul class="list-group">
                  {this.state.list.map((row,id) => (
                    <li  class="list-group-item" key={id}>  {row.reply_text}  -User{row.user_id}   </li>
                  ))}
                </ul>
              </div>
              <br></br>
              <form className="post" onSubmit={this.handleSubmit}>
              <div style={{ marginBottom: "0" }}   align="center">
              <label align="center">Write Something: </label>

              <br></br>
                <input
                  type="textarea"
                  onChange={this.onTitleChange} required
                  id="ta_1"
                  padding={15}
                  style={{
                    width: 200,
                    marginBottom: "0",
                  }}
                />{" "}
                <button name="post_button" id="post_b" type="submit">
                  Post
                </button>
              </div>
              </form>
            </div>
          </Card.Body>
        </Card>
        <Footer></Footer>
      </div>
    );
  }
}
