import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import CodeEditor from "@uiw/react-textarea-code-editor";
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  Card,
  Image,
  Row,
  CardGroup,
  FormSelect,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Footer from "./footer";

export default function SolveNonCoddingQuestion() {
  const [solution_id, setSolutionId] = useState("");
  const [solution, setSolution] = useState("");
  const axios = require("axios");
  const activity_id = localStorage.getItem("activity_id");
  const activity_description = localStorage.getItem("activity_description");
  const activity_duration = localStorage.getItem("activity_duration");
  const activity_text = localStorage.getItem("activity_text");
  const AddSolution = async () => {
    let url ="/answerNonCoding?solution_id="+parseInt(solution_id)+"&activity_id="+parseInt(activity_id)+"&solution_text="+solution+"&user_id=5"
    axios.post(url);
  };
  
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
      <MDBRow>
        <MDBCol md="6" className="col-example">
          <Card bg="light" style={{ width: "40rem", margin: "60px" }}>
            <Card.Body>
              <Card.Title>Activity Id : {activity_id}</Card.Title>
              <Card.Subtitle>Duration: {activity_duration}</Card.Subtitle>
              <br></br>
              <Card.Subtitle>{activity_description}</Card.Subtitle>
              <br></br>
              {activity_text}
            </Card.Body>
            <Link
              type="button"
              to="/nonCoddingResults"
              class="btn btn-primary btn-md"
              style={{ margin: "10px" }}
            >
              See Pass Results{" "}
            </Link>
          </Card>
        </MDBCol>

        <MDBCol md="6" className="col-example">
          <br />

          <Card bg="light" style={{ width: "40rem", margin: "30px" }}>
          
            <Card.Body>
            <Card.Title>Answer</Card.Title>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
            Solution ID
          </label>
          <input
            type="number"
            id="solution_id"
            placeholder="Enter Solution ID"
            className="form-control"
            onChange={(e) => setSolutionId(e.target.value)}
          />
                <div class="form-group">
                  <label for="comment">Comment:</label>
                  <textarea
                    class="form-control"
                    rows="5"
                    id="comment"
                    onChange={(e) => setSolution(e.target.value)}
                  ></textarea>
                </div>
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-success btn-md"
                  style={{ margin: "10px" }}
                  onClick={() => {
                    AddSolution();
                  }}
                >
                  Submit
                </button>
              </div>
            </Card.Body>
          </Card>
        </MDBCol>
      </MDBRow>

      <Footer></Footer>
    </div>
  );
}
