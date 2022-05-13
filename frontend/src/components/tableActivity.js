import React from 'react'
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
export default function TableActivity(props) {
    return (
        <div>
        <table class="table">

            <thead>

                <tr>
                    <th>Activity Id</th>
                    <th>Activity Category </th>
                    <th>Activity Description</th>
                    <th>Activity Duration </th>
                    <th>Activity Status </th>


                </tr>
            </thead>
            <tbody>

                {
                props.data.map(row =>(
                    <tr>
                        <td>{row.activity_id}</td>
                        <td>{row.category}</td>
                        <td>{row.description}</td>
                        <td>{row.status}</td>
                        <td>{row.duration}</td>
                        <td><Link type="button" class="btn btn-outline-success" to="/discussion">Go</Link></td>
                    </tr>

                ))
                }

            </tbody>
        </table>
        </div>
    )

}