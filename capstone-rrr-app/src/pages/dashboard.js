
import React, { useState, useEffect } from "react";

const Dashboard  = () => {
    const[data, setData] = useState([]);

useEffect(() => {
    //make API request to fetch data from server
    fetch("/api/schedules")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error(error));
}, []);

    return (
        <>
        <div className="container">
        <h1 className="display-1">
            Dashboard
        </h1>
       </div>
       <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Groomer ID</th>
                <th>Groomer Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {data.map((schedule) => (
            <tr key={schedule.id}>
                <td>{schedule.id}</td>
                <td>{schedule.groomerID}</td>
                <td>{schedule.groomerName}</td>
                <td>{schedule.date}</td>
                <td>{schedule.time}</td>
                <td>{schedule.status}</td>
                </tr>
            ))}
        </tbody>
       </table>
        </>
    );
   };
    


export default Dashboard;