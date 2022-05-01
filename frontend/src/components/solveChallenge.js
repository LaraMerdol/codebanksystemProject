import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
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
        <MDBRow>
              <MDBCol md="6" className="col-example">
                <Card bg="light" style={{ width: "40rem", margin: "60px"}}>
                    <Card.Body>
                        <Card.Title>
                            Codding Challenge 1
                        </Card.Title>
                        <Card.Subtitle>
                        <p>Write a function that takes an integer minutes and converts it to seconds.</p>
                        <h3>
                        Notes
                        </h3>
                        <ul>
                            <li>
                            Don't forget to return the result.
                            </li>
                            <li>
                            If you get stuck on a challenge, find help in the Resources tab.
                            </li>
                        </ul>
                        
                        </Card.Subtitle>
                    </Card.Body>

                </Card>
              </MDBCol>

              <MDBCol md="6" className="col-example">
              <Card bg="light" style={{ width: "40rem", margin: "30px"}}>
                    <Card.Body>
                        <Card.Title>
                            Answer
                        </Card.Title>
                        <CodeEditor
                      value={code}
                      language="java"
                      placeholder="Please enter Java code."
                      onChange={(evn) => setCode(evn.target.value)}
                      padding={15}
                      style={{
                        fontSize: 12,
                        backgroundColor: "#000",
                        height:"65vh",
                        fontFamily:
                          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                      }}
                    />
                    <div class="text-right" >
                    <button type="button" class="btn btn-primary btn-md" style={{  margin: "10px"}}>Run</button>
                    <button type="button" class="btn btn-success btn-md"style={{  margin: "10px"}}>Submit</button>
                    </div>
                    </Card.Body>

                </Card>
              </MDBCol>
            </MDBRow>

        <Footer></Footer>
      </div>
    );

}

