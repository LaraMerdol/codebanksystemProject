import React from 'react'
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
export default function TableDiscussion(props) {
    return (
        <div>
        <table class="table">

            <thead>

                <tr>
                    <th>Discussion Id</th>
                    <th>Discussion Header</th>
                    <th>Discussion Creator Id</th>
                    <th>Discussion Text</th>
                    <th>Go to Discussion </th>

                </tr>
            </thead>
            <tbody>

                {
                props.data.map(row =>(
                    <tr>
                        <td>{row.discussion_id}</td>
                        <td>{row.header}</td> 
                        <td>{row.user_id}</td>
                        <td>{row.text}</td>
                        <Link
                  type="button"
                  class="btn btn-outline-success"
                  onClick={() => {
                    localStorage.setItem("discussion_id", row.discussion_id);
                    localStorage.setItem("discussion_header", row.header);
                    localStorage.setItem("discussion_text", row.text);
                  }}
                  to="/discussion"
                >
                  Go
                </Link>
                    </tr>

                ))
                }

            </tbody>
        </table>
        </div>
    )

}