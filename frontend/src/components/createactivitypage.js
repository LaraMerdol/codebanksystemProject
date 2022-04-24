import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
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
  const Question = () => {
    return <Button style={{ margin: "3px" }} variant="primary">Question {qlist.length +1} </Button>;
  };

  const [qlist, setQlist] = useState([]);

  const addListQuestion = (event) => {
    document.getElementById( 'answer').value= '';
    document.getElementById( 'question').value= '';
    setQlist(qlist.concat(<Question/>));
  };
  const [activity, setActivity] = useState(null);
  function setActivityDiv() {
    switch (activity) {
      case "first":
        return;
      case "Challenge":
        return (
          <div>
            <br></br>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Codding Challenge Name
            </label>
            <input type="text" id="name" className="form-control" />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Description
            </label>
            <textarea type="text" id="desc" className="form-control" rows="3" />
            <br />
            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
              Challenge Status
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
            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
              Level
            </label>
            <FormSelect id="challengelevel">
              <option>Hard</option>
              <option>Medium</option>
              <option>Easy</option>
            </FormSelect>
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Category
            </label>
            <input type="text" id="category" className="form-control" />
            <div className="text-center mt-4"></div>
          </div>
        );
      case "Contest":
        return (
          <div>
            <br></br>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Codding Contest Name
            </label>
            <input type="text" id="name" className="form-control" />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Description
            </label>
            <textarea type="text" id="desc" className="form-control" rows="3" />
            <br />
            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
              Contest Status
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
            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
              Start Date
            </label>
            <input type="date" id="startdateContest" className="form-control" />
            <br />
            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
              End Date
            </label>
            <input type="date" id="enddateContest" className="form-control" />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Category
            </label>
            <input type="text" id="category" className="form-control" />
            <div className="text-center mt-4"></div>
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
        <MDBRow>
          <MDBCol md="6" className="col-example">
            <form>
              <p className="h4 text-center mb-4">Create Activity</p>

              <Form.Select
                size="lg"
                onClick={(event) => {
                  setActivity(event.target.value);
                }}
              >
                <option value="first">Select activity type</option>
                <option value="Challenge">Codding Challenge</option>
                <option value="Contest">Coding Contest</option>
              </Form.Select>
              {setActivityDiv()}
              {qlist}
            </form>
          </MDBCol>
          <MDBCol md="6" className="col-example">
            <div
              className="form"
              style={{ maxWidth: "100%", marginLeft: "20px" }}
            >
              <form style={{ marginLeft: "10px" }}>
                <p className="h4 text-center mb-4">Add Question</p>
                <br />
                <label
                  htmlFor="defaultFormContactEmailEx"
                  className="grey-text"
                >
                  Question
                </label>
                <input
                  type="text"
                  id="question"
                  className="form-control"
                  rows="3"
                />
                <br />
                <label
                  htmlFor="defaultFormContactEmailEx"
                  className="grey-text"
                >
                  Example Answer
                </label>
                <textarea
                  type="code"
                  id="answer"
                  className="form-control"
                  rows="3"
                />
              </form>
              <br></br>

              <Button variant="primary" size="lg" active onClick={addListQuestion}>
                Add Question
              </Button>
            </div>
          </MDBCol>
        </MDBRow>
        <Button size="lg" variant="outline-primary" style={{ marginLeft:"45%"}}>Publish Activity</Button>{' '}
      </Container>

      <Footer></Footer>
    </div>
  );
}
