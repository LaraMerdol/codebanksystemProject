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
export default function CreateContest() {
  const [contest_id, setContestId] = useState("");
  const [contest2_id, setContest2Id] = useState("");
  const [activity_id, setActivityId] = useState("");
  const [contest_name, setContestName] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [qlist, setQlist] = useState([]);
  function handleClick() {
    alert("Add Challenge");
  }
  const AddContest = async () => {
    let url ="/addContest?contest_id="+ parseInt(contest_id)+"&name="+ contest_name+"&duration=" +parseInt(duration) +"&startDate="+startDate+"&endDate="+endDate
    alert(url)
    await axios.post(url).then(function (response) {
      console.log(response.data);
  })
}
const AddChallengeToTheContest = async () => {
  let url ="/addChallengeToTheContest?contest_id="+ parseInt(contest2_id)+"&activity_id="+  parseInt(activity_id)
  alert(url)
  await axios.post(url).then(function (response) {
    console.log(response.data);
})
}
  const Challenge = () => {
    return (
      <Button style={{ margin: "3px" }} variant="success">
        Challenge {qlist.length + 1}{" "}
      </Button>
    );
  };
  const addChallenge = (event) => {
    setQlist(qlist.concat(<Challenge />));
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
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <div>
                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                  Contest Id
                </label>
                <input
                  type="text"
                  id="contest_id"
                  placeholder="Enter Contest ID"
                  className="form-control"
                  onChange={(e) => setContestId(e.target.value)}
                />
                <br></br>
              </div>
              <div>
                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                  Contest Name
                </label>
                <input
                  type="text"
                  id="contest_name"
                  placeholder="Enter Contest Name"
                  className="form-control"
                  onChange={(e) => setContestName(e.target.value)}
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
                  Start Fate
                </label>
                <input
                  type="text"
                  id="duration"
                  className="form-control"
                  value={startDate}
                  placeholder="Enter Start Date"
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <br></br>
              </div>
              <div>
                <label
                  htmlFor="defaultFormContactMessageEx"
                  className="grey-text"
                >
                  End Date
                </label>
                <input
                  type="text"
                  id="duration"
                  className="form-control"
                  value={endDate}
                  placeholder="Enter End Date"
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <br></br>
              </div>
              <Button
              size="lg"
              variant="outline-primary"
              style={{ marginLeft: "45%" }}
              onClick={() => { AddContest() }}
            >
              Publish Coding Contest
            </Button>{" "}
            </form>
            </MDBCol>
          <MDBCol md="6">
              <InputGroup className="mb-3">
                <Button
                  variant="success"
                  size="lg"
                  active
                  onClick={() => { AddChallengeToTheContest() }}
                  >
                  Add Challenge
                </Button>
                <FormControl
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  placeholder="Enter Contest ID"
                  value={contest2_id}
                  onChange={(e) => setContest2Id(e.target.value)}
                />              
                <FormControl
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  placeholder="Enter Challenge ID"
                  value={activity_id}
                  onChange={(e) => setActivityId(e.target.value)}
                />
              </InputGroup>
              {qlist}
          </MDBCol>
        </MDBRow>
        
      </MDBContainer>
      <Footer></Footer>
    </div>
  );
}
