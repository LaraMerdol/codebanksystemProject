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

export default function CreateInterview() {
  const [date, setDate] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");
  const [participant1, setParticipant1] = useState("");
  const [participant2, setParticipant2] = useState("");
  function handleClick() {
    alert("Add Challenge");
  }
  const AddInterview = async () => {
    let url ="/addInterview?date="+date+"&difficulty="+ parseInt(difficulty)+"&duration="+ parseInt(duration)+"&participant1=" +participant1+"&participant2="+participant2
    alert(url)
    await axios.post(url).then(function (response) {
      console.log(response.data);
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
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
                <h1> Create Interview </h1>
              <div>
                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                  Date
                </label>
                <input
                  type="text"
                  id="date"
                  placeholder="Enter Date"
                  className="form-control"
                  onChange={(e) => setDate(e.target.value)}
                />
                <br></br>
              </div>
              <div>
                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                  Difficulty
                </label>
                <input
                  type="number"
                  id="difficulty"
                  placeholder="Enter Difficulty Level /10"
                  className="form-control"
                  onChange={(e) => setDifficulty(e.target.value)}
                />
                <br></br>
              </div>
              <div>
                <label
                  htmlFor="defaultFormContactMessageEx"
                  className="grey-text"
                >
                  Duration
                </label>
                <input
                  type="number"
                  id="duration"
                  className="form-control"
                  value={duration}
                  placeholder="Enter Duration"
                  onChange={(e) => setDuration(e.target.value)}
                />
                <br></br>
              </div>
              <div>
                <label
                  htmlFor="defaultFormContactMessageEx"
                  className="grey-text"
                >
                  Participant 1
                </label>
                <input
                  type="text"
                  id="participant1"
                  className="form-control"
                  value={participant1}
                  placeholder="Enter participant 1"
                  onChange={(e) => setParticipant1(e.target.value)}
                />
                <br></br>
              </div>
              <div>
                <label
                  htmlFor="defaultFormContactMessageEx"
                  className="grey-text"
                >
                  Participant 2
                </label>
                <input
                  type="text"
                  id="participant2"
                  className="form-control"
                  value={participant2}
                  placeholder="Enter participant 2"
                  onChange={(e) => setParticipant2(e.target.value)}
                />
                <br></br>
              </div>
              <Button
              size="lg"
              variant="outline-primary"
              style={{ marginLeft: "45%" }}
              onClick={() => { AddInterview() }}
            >
              Add Interview
            </Button>{" "}
            </form>
            </MDBCol>
        </MDBRow>
        
      </MDBContainer>
      <Footer></Footer>
    </div>
  );
}
