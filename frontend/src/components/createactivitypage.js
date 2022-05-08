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
export default function CreateActivity() {
  const TestCase = () => {
    return (
      <Button style={{ margin: "3px" }} variant="primary">
        Test Case {qlist.length + 1}{" "}
      </Button>
    );
  };

  const [qlist, setQlist] = useState([]);
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  const addTestCase = (event) => {
    document.getElementById("test_id").value = "";
    setCode("");
    setQlist(qlist.concat(<TestCase />));
  };
  const [activity, setActivity] = useState(null);
  function setActivityDiv() {
    switch (activity) {
      case "first":
        return;
      case "Challenge":
        return (
          <div>
            <MDBRow>
              <MDBCol md="6" className="col-example">
                <form>
                  <div>
                    <br></br>
                    <label
                      htmlFor="defaultFormContactNameEx"
                      className="grey-text"
                    >
                      Codding Challenge ID
                    </label>
                    <input type="text" id="id" className="form-control" />
                    <br />
                    <label
                      htmlFor="defaultFormContactEmailEx"
                      className="grey-text"
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      id="desc"
                      className="form-control"
                      rows="3"
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactSubjectEx"
                      className="grey-text"
                    >
                      Challenge Status
                    </label>
                    <FormSelect id="status">
                      <option>Opened</option>
                      <option>Closed</option>
                    </FormSelect>
                    <br />
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
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactSubjectEx"
                      className="grey-text"
                    >
                      Level
                    </label>
                    <FormSelect id="challengelevel">
                      <option>Hard</option>
                      <option>Medium</option>
                      <option>Easy</option>
                    </FormSelect>
                    <br />
                    <label
                      htmlFor="defaultFormContactSubjectEx"
                      className="grey-text"
                    >
                      Codding Language
                    </label>
                    <FormSelect id="challengelevel">
                      <option>C++</option>
                      <option>Java</option>
                      <option>Python</option>
                      <option>C#</option>
                    </FormSelect>
                    <br />
                    <label
                      htmlFor="defaultFormContactEmailEx"
                      className="grey-text"
                    >
                      Category
                    </label>
                    <input type="text" id="category" className="form-control" />
                    <div className="text-center mt-4"></div>
                  </div>
                  {qlist}
                </form>
              </MDBCol>

              <MDBCol md="6" className="col-example">
                <br></br>
                <div
                  className="form"
                  style={{ maxWidth: "100%", marginLeft: "20px" }}
                >
                  <form style={{ marginLeft: "10px" }}>
                    <p className="h4 text-center mb-4">Add Test Case</p>
                    <br />
                    <label
                      htmlFor="defaultFormContactEmailEx"
                      className="grey-text"
                    >
                      Test Id
                    </label>
                    <input
                      type="text"
                      id="test_id"
                      className="form-control"
                      rows="3"
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactEmailEx"
                      className="grey-text"
                    >
                      Test Case
                    </label>
                    <CodeEditor
                      value={code}
                      language="java"
                      placeholder="Please enter Java code."
                      onChange={(evn) => setCode(evn.target.value)}
                      padding={15}
                      style={{
                        fontSize: 12,
                        backgroundColor: "#000",
                        fontFamily:
                          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                      }}
                    />
                  </form>
                  <br></br>

                  <Button
                    variant="primary"
                    size="lg"
                    active
                    onClick={addTestCase}
                  >
                    Add Test Case
                  </Button>
                </div>
              </MDBCol>
            </MDBRow>
            <Button
              size="lg"
              variant="outline-primary"
              style={{ marginLeft: "45%" }}
            >
              Publish Coding Question
            </Button>{" "}
          </div>
        );
      case "Non_Coding":
        return (
          <div>
            <br></br>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Non Codding Question Id
            </label>
            <input type="text" id="id" className="form-control" />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Description
            </label>
            <textarea type="text" id="desc" className="form-control" rows="3" />
            <br />
            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
              Non Coding Question Status
            </label>
            <FormSelect id="status">
              <option>Opened</option>
              <option>Closed</option>
            </FormSelect>
            <br />
            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
              Duration
            </label>
            <input type="number" id="duration" className="form-control" />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Category
            </label>
            <input type="text" id="category" className="form-control" />
            <div className="text-center mt-4"></div>
            <Button
              size="lg"
              variant="outline-primary"
              style={{ marginLeft: "45%" }}
            >
              Publish Non Coding Question
            </Button>{" "}
          </div>
        );
      default:
        return null;
    }
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
      <Container>
        <Form.Select
          size="lg"
          onClick={(event) => {
            setActivity(event.target.value);
          }}
        >
          <option value="first">Select activity type</option>
          <option value="Challenge">Codding Challenge</option>
          <option value="Non_Coding">Non Coding Question</option>
        </Form.Select>
        {setActivityDiv()}
      </Container>

      <Footer></Footer>
    </div>
  );
}
