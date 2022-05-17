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

export default function SearchContest() {

    const [list, setList] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [isLoding, setLoading] = useState(true);
    const [isLoding2, setLoading2] = useState(false);
    function setTable(){
        if(isLoding2){
            axios
            .get("/getContestByDate/?start="+startDate+"&end="+endDate)
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
                         <th>Contest ID</th>
                        <th>Contest Name</th>
                        <th>Contest Duration</th>
                        <th>Contest Start Date</th>
                        <th>Contest End Date</th>
                        <th>Contest Callenges</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((row) => (
                        <tr>
                          <td>{row.contest_id}</td>
                          <td>{row.name}</td>
                          <td>{row.duration}</td>
                          <td>{row.endDate}</td>
                          <td>{row.startDate}</td>
                          <td>{JSON.stringify(row.coddingChallenges)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
            }
            
        }
        return (
            <h2>Enter Start and End Date Interval</h2>
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
            Start Date
          </label>
          <input
            type="text"
            id="startDate"
            className="form-control"
            placeholder="Enter Date as yyyy-mm-dd"
            onChange={(e) => setStartDate(e.target.value)}
          />
                    <label htmlFor="defaultFormContactMessageEx" className="grey-text">
            End Date
          </label>
          <input
            type="text"
            id="endDate"
            className="form-control"
            placeholder="Enter Date as yyyy-mm-dd"
            onChange={(e) => setEndDate(e.target.value)}
          />
          <br></br>
          <Button type="button" class="btn btn-primary btn-block" onClick={() => setLoading2(true)}> Search Contest</Button>
          <br></br>
        </div>
        {setTable()}

        <Footer></Footer>
      </div>
    );

}
