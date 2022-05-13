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

export default function SolveChallenge() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  const [solution_id, setSolutionId] = useState("");
  const axios = require("axios");
  const activity_id = localStorage.getItem("activity_id");
  const [language, setLanguage] = useState("");
  const activity_description = localStorage.getItem("activity_description");
  const activity_duration = localStorage.getItem("activity_duration");

  const AddSolution = async () => {
    let url =
      "/answerChallenge?solution_id=" +
      parseInt(solution_id) +
      "&activity_id=" +
      parseInt(activity_id) +
      "&solution_text=" +
      code +
      "&solution_language=" +
      language +
      "&user_id=" +
      "5";
    let url2 =
      "/passAllTest?activity_id=" +
      parseInt(activity_id) +
      "&solution_id=" +
      parseInt(solution_id);
    alert(url);
    alert(url2);

    axios.all([await axios.post(url), axios.post(url2)]);
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
              Description: {activity_description}
            </Card.Body>
            <Link
              type="button"
              to="/coderResult"
              class="btn btn-primary btn-md"
              style={{ margin: "10px" }}
            >
              See Pass Results{" "}
            </Link>
          </Card>
        </MDBCol>

        <MDBCol md="6" className="col-example">
          <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
            Codding Language
          </label>
          <FormSelect
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>C++</option>
            <option>Java</option>
            <option>Python</option>
            <option>C#</option>
          </FormSelect>
          <br />
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
          <Card bg="light" style={{ width: "40rem", margin: "30px" }}>
            <Card.Body>
              <Card.Title>Answer</Card.Title>
              <CodeEditor
                value={code}
                language="java"
                placeholder="Please enter Java code."
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                  fontSize: 12,
                  backgroundColor: "#000",
                  height: "65vh",
                  fontFamily:
                    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                }}
              />
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-primary btn-md"
                  style={{ margin: "10px" }}
                >
                  Run
                </button>
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
