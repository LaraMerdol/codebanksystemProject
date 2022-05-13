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
const [id, setId] = useState("")
const [activity_id, setActivityId] = useState("")
const [desc, setDescription] = useState("")
const [status, setStatus] = useState("")
const [duration, setDuration] = useState("")
const [level, setLevel] = useState("")
const [language, setLanguage] = useState("")
const [text, setText] = useState("")
const [test_id, setTestID] = useState("")
const [challenge_test_id, setChallengeTestID] = useState("")
const axios = require('axios')

const AddChallenge = async () => {
      let url ="/addCoddingChallenge?activity_id="+ parseInt(activity_id)+"&category_id="+ parseInt(id)+"&description="+ desc + "&status="+ "OPEN" +"&duration=" +parseInt(duration) +"&level="+level+"&codding_language="+language
      alert(url)
      await axios.post(url).then(function (response) {
        console.log(response.data);
    })
}
const AddNonCoddingQuestion = async () => {
  let url ="/addNonCodingQuestion?activity_id="+ parseInt(activity_id)+"&category_id="+ parseInt(id)+"&description="+ desc + "&status="+ "OPEN" +"&duration=" +parseInt(duration) +"&question_text="+text
  alert(url)
  await axios.post(url).then(function (response) {
    console.log(response.data);
})
}
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
  const AddTestCase = async () => {
    let url ="/addTestCase?test_code="+code+"&activity_id="+challenge_test_id
    alert(url)
    await axios.post(url).then(function (response) {
      console.log(response.data);
  })    
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
                  <label
                      htmlFor="defaultFormContactNameEx"
                      className="grey-text"
                    >
                      Activity ID
                    </label>
                    <input type="text" id="activity_id" className="form-control"
                                      value={activity_id}
                                      onChange={(e) => setActivityId(e.target.value)}
                                       />
                    <br></br>
                    <label
                      htmlFor="defaultFormContactNameEx"
                      className="grey-text"
                    >
                      Category ID
                    </label>
                    <input type="text" id="id" className="form-control"
                                      value={id}
                                      onChange={(e) => setId(e.target.value)}
                                       />
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
                      value={desc}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactSubjectEx"
                      className="grey-text"
                    >
                      Challenge Status
                    </label>
                    <FormSelect id="status"
                                          value={status}
                                          onChange={(e) => setStatus(e.target.value)}
                    >
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
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactSubjectEx"
                      className="grey-text"
                    >
                      Level
                    </label>
                    <FormSelect id="level"
                                          value={level}
                                          onChange={(e) => setLevel(e.target.value)}>
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
                    <FormSelect id="language"
                       value={language}
                       onChange={(e) => setLanguage(e.target.value)}>
                      <option>C++</option>
                      <option>Java</option>
                      <option>Python</option>
                      <option>C#</option>
                    </FormSelect>
                    <br />
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
                      onChange={(e) => setTestID(e.target.value)}
                      className="form-control"
                      rows="3"
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactEmailEx"
                      className="grey-text"
                    >
                      Challenge ID
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setChallengeTestID(e.target.value)}
                      id="chalenge_test_id"
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
                    onClick={AddTestCase}
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
              onClick={() => { AddChallenge() }}
            >
              Publish Coding Question
            </Button>{" "}
          </div>
        );
      case "Non_Coding":
        return (
          <div>
            <br></br>
            <label
                      htmlFor="defaultFormContactNameEx"
                      className="grey-text"
                    >
                      Activity ID
                    </label>
                    <input type="text" id="activity_id" className="form-control"
                                      value={activity_id}
                                      onChange={(e) => setActivityId(e.target.value)}
                                       />
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Category Id
            </label>
            <input type="text" id="id" className="form-control" 
                                   value={id}
                                   onChange={(e) => setId(e.target.value)} />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Description
            </label>
            <textarea type="text" id="desc" className="form-control" rows="3" 
                                  value={desc}
                                  onChange={(e) => setDescription(e.target.value)}/>
            <br />
            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
              Non Coding Question Status
            </label>
            <FormSelect id="status"
              value={status}
              type="text"
              onChange={(e) => setStatus(e.target.value)}>
              <option>Opened</option>
              <option>Closed</option>
            </FormSelect>
            <br />
            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
              Duration
            </label>
            <input type="number" id="duration" 
             value={duration}
             onChange={(e) => setDuration(e.target.value)}
            className="form-control" />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Question Text
            </label>
            <input type="text" id="text" 
                                              value={text}
                                              onChange={(e) => setText(e.target.value)}
            className="form-control" />
            <div className="text-center mt-4"></div>
            <Button
              size="lg"
              variant="outline-primary"
              style={{ marginLeft: "45%" }}
              onClick={() => { AddNonCoddingQuestion() }}
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
