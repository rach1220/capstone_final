import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';

function Login() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        console.log(res);
        //Check the response here to determine if login was successful
        const loginSuccess = res.data === "Login Successful";

        if (loginSuccess) {
          // redirect to another page
          window.open("https://localhost/capstone/dashboard.php","_blank")
          window.location.href="http://localhost:3000/"; //close the current tab
        } else {
          setError("Invalid credentials. Please try again."); //unsuccessful message
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Invalid username or password"); //error message
      });
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center border">
    <div className="p-3 bg-light w-25 border rounded shadow">
      <h3 className="text-center">Admin Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
  );
}

export default Login;