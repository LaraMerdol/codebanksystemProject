import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { useTable } from "react-table";
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import Footer from "./footer";
import TableActivity from "./tableActivity";
import TableChallenge from "./tableChallenge";
import { FormSelect } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import TableNonCodding from "./tableNonCodding";
import Button from "react-bootstrap/Button";

export default function CreateDiscussion() {
  const [discussion_id, setDiscussionId] = useState("");
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");

  const AddDiscussion = async () => {
    let url ="/createDiscussion?discussion_id="+parseInt(discussion_id)+"&header="+header+"This is a discussion&text="+text+"&user_id='6'";
    alert(url)
    await axios.post(url).then(function (response) {
      alert(response.data);
  })
}

  return (
    <div>
      <h2>Welcome</h2>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
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
      <MDBContainer style={{ width: "250rem", marginLeft:"30%", height:"80vh"}}>
        <MDBRow>
          <MDBCol md="6" align="center">
            <form>
              <div>
                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                  Discussion Id
                </label>
                <input
                  type="text"
                  id="discussion_id"
                  placeholder="Enter Discussion ID"
                  className="form-control"
                  onChange={(e) => setDiscussionId(e.target.value)}
                />
                <br></br>
              </div>
              <div>
                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                  Discussion Header
                </label>
                <input
                  type="text"
                  id="header"
                  placeholder="Enter Discussion Header"
                  className="form-control"
                  onChange={(e) => setHeader(e.target.value)}
                />
                <br></br>
              </div>
              <div>
                <label
                  htmlFor="defaultFormContactMessageEx"
                  className="grey-text"
                >
                  Discussion Text
                </label>
                <input
                  type="text"
                  id="text"
                  className="form-control"
                  placeholder="Enter Text"
                  onChange={(e) => setText(e.target.value)}
                />
                <br></br>
              </div>
              <Button
              size="lg"
              variant="outline-primary"
              onClick={() => { AddDiscussion() }}
            >
              Publish Discussion
            </Button>{" "}
            </form>
            </MDBCol>

        </MDBRow>
        
      </MDBContainer>
      <Footer></Footer>
    </div>
  );
}
