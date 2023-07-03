// src/pages/SignupPage.js

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



function SignupPage(props) {

  const API_URL = "http://localhost:5005";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);

  
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = {email, password, name, address}

    axios.post(`${API_URL}/auth/signup`, requestBody)
        .then((res) => {
          console.log(res);
            navigate('/login')
        })
        .catch((e) => {
            const error = e.response.data.message;
            setErrorMessage(error);
        })
  };
  
  return (
    <div className="SignupPage-Form">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit} className="SignupPage-Form">
        <label>Email</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />

        <label>Password</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Name</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={handleName}
        />
        
        <label>Address</label>
        <input 
          type="text"
          name="address"
          value={address}
          onChange={handleAddress}
        />
        
        {/* <label>Picture</label>
        <input 
          type="file"
          name="picture"
          value={picture}
        /> */}

        <button type="submit">Sign Up</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  )
}

export default SignupPage;
