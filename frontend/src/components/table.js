import React from 'react'
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
export default function Table(props) {
    return (
        <div>
        <table class="table">

            <thead>

                <tr>
                    <th>Discussion Id</th>
                    <th>Discussion Header</th>
                    <th>Go to Discussion </th>

                </tr>
            </thead>
            <tbody>

                {
                props.data.map(row =>(
                    <tr>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td><Link type="button" class="btn btn-outline-success" to="/discussion">Go</Link></td>
                    </tr>

                ))
                }

            </tbody>
        </table>
        <button type="button" class="btn btn-success">Create New Discussion</button>
        </div>
    )

}