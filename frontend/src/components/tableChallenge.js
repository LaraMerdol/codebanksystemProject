import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
export default function TableChallenge(props) {
  function setLink() {
    if (localStorage.getItem("userType")=="coder") {
      return (
        <table class="table">
        <thead>
          <tr>
            <th>Challenge Id</th>
            <th>Challenge Category </th>
            <th>Challenge Description</th>
            <th>Challenge Status </th>
            <th>Challenge Duration </th>
            <th>Challenge Level </th>
            <th>Challenge Codding Language </th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row) => (
            <tr>
              <td>{row.activity_id}</td>
              <td>{row.category}</td>
              <td>{row.description}</td>
              <td>{row.status}</td>
              <td>{row.duration}</td>
              <td>{row.level}</td>
              <td>{row.codding_language}</td>
              <td>
                <Link
                  type="button"
                  class="btn btn-outline-success"
                  onClick={() => {
                    localStorage.setItem("activity_id", row.activity_id);
                    localStorage.setItem(
                      "activity_description",
                      row.description
                    );
                    localStorage.setItem("activity_duration", row.duration);
                  }}
                  to="/solvechallenge"
                >
                  Go
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      );
    } else {
      return (
        <table class="table">
        <thead>
          <tr>
            <th>Challenge Id</th>
            <th>Challenge Category </th>
            <th>Challenge Description</th>
            <th>Challenge Status </th>
            <th>Challenge Duration </th>
            <th>Challenge Level </th>
            <th>Challenge Codding Language </th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row) => (
            <tr>
              <td>{row.activity_id}</td>
              <td>{row.category}</td>
              <td>{row.description}</td>
              <td>{row.status}</td>
              <td>{row.duration}</td>
              <td>{row.level}</td>
              <td>{row.codding_language}</td>
              <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      );
    }
  }
  return (
    <div>
      {setLink()}
    </div>
  );
}
