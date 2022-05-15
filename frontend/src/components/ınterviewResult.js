import React, { Component, useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  Card,
  Image,
  Row,
  CardGroup,
  Button,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "react-dom";

export default function InterviewResult() {

    const [list, setList] = useState([]);
    const [participant, setParticipant] = useState("");
    const [isLoding, setLoading] = useState(true);
    const [isLoding2, setLoading2] = useState(false);
    function setTable(){
        if(isLoding2){
            axios
            .get("/participantInterviews/?p="+participant)
            .then((res) => {
              setList(res.data);
              setLoading(false)
            });
            if(isLoding){
                return <h1>Looding ....</h1>
            }
            else{
                return(
                    <table class="table">
                    <thead>
                      <tr>
                        <th>Creator Name</th>
                        <th>Partcipant Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((row) => (
                        <tr>
                          <td>{row.creator}</td>
                          <td>{row.participant}</td>
                          <td>
                          <Link
                            type="button"
                            class="btn btn-outline-success"
                            onClick={() => {
                              localStorage.setItem("participant", row.participant);
                            }}
                            to="/profilePage"
                          >
                            Go
                          </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
            }
            
        }
        return (
            <h2>Choose Participant</h2>
        );


    }
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
        <div align="center">
          <label htmlFor="defaultFormContactMessageEx" className="grey-text">
            Participant Name
          </label>
          <input
            type="text"
            id="participant"
            className="form-control"
            placeholder="Enter participant"
            onChange={(e) => setParticipant(e.target.value)}
          />
          <br></br>
          <Button type="button" class="btn btn-primary btn-block" onClick={() => setLoading2(true)}> Search Participant</Button>
          <br></br>
        </div>
        {setTable()}

        <Footer></Footer>
      </div>
    );

}
