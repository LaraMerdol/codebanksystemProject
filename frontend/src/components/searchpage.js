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
import Footer from "./footer";
import TableActivity from "./tableActivity";
import TableChallenge from "./tableChallenge";
import { FormSelect } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import TableNonCodding from "./tableNonCodding";
import Button from "react-bootstrap/Button";
export default function Search() {
  const [filter, setFilter] = useState("All");
  const [activities, setActivities] = useState(null);
  const [noncoding, setNonCodding] = useState(null);
  const [challenges, setChallenges] = useState(null);
  const [search, setSearch] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [isLoading3, setLoading3] = useState(true);

  let textInput = React.createRef();
  let searchInput = React.createRef();
  function handleClick() {
    setLoading(true);
    setLoading2(true);
    setLoading3(true);
    setFilter(textInput.current.value);
    setSearch(searchInput.current.value);
  }
  function setSearchDiv() {
    switch (search) {
      case "All":
        axios
          .get("/getActivityForCategory?name=" + filter)
          .then(function (response) {
            setActivities(response.data);
            setLoading(false);
          });
        if (isLoading) {
          return <div className="App">Loading...</div>;
        }

        return (
          <div>
            <TableActivity data={activities} />
          </div>
        );

      case "Challenge":
        axios
          .get("/getChallengesForCategory?name=" + filter)
          .then(function (response) {
            setChallenges(response.data);
            setLoading2(false);
          });
        if (isLoading2) {
          return <div className="App">Loading...</div>;
        }
        return (
          <div>
            <TableChallenge data={challenges} />
          </div>
        );
      case "NonCoding":
        axios
          .get("/getNonCodingsForCategory?name=" + filter)
          .then(function (response) {
            setNonCodding(response.data);
            setLoading3(false);
          });
        if (isLoading3) {
          return <div className="App">Loading...3</div>;
        }
        return (
          <div>
            <TableNonCodding data={noncoding} />
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div>
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
      <Container className="align-items-center" style={{ margin: "10%" }}>
        <div className="form-group">
          <InputGroup className="mb-3">
            <Button
              variant="outline-secondary"
              id="button-addon1"
              onClick={handleClick}
            >
              Filter
            </Button>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              ref={textInput}
            />
          </InputGroup>
        </div>
        <br></br>
        <Form.Select
          size="lg"
          ref={searchInput}
          onClick={(event) => {
            setSearch(event.target.value);
          }}
        >
          <option value="All">Search All</option>
          <option value="Challenge">Search Codding Challenge</option>
          <option value="NonCoding">Search Non Coding Question</option>
        </Form.Select>

        {setSearchDiv()}
      </Container>
      <Footer></Footer>
    </div>
  );
}
