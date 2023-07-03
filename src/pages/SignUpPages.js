// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";



// function SignupPage(props) {

//   const API_URL = "http://localhost:5005";
  
//   const [picture, setPicture] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");

//   const [errorMessage, setErrorMessage] = useState(undefined);

//   const navigate = useNavigate();
  
//   const handleEmail = (e) => setEmail(e.target.value);
//   const handlePassword = (e) => setPassword(e.target.value);
//   const handleName = (e) => setName(e.target.value);
//   const handleAddress = (e) => setAddress(e.target.value);

//   const uploadImage= (file) => {
//     return axios
//       .post(`${API_URL}/auth/upload`, file)
//       .then(res => res.data)
//       .catch(e => console.log("failed to upload the image", e));
//   };

//   const handleFileUpload = (e) => {
//     const uploadData = new FormData();

//     uploadData.append("picture", e.target.files[0]);

//     uploadImage(uploadData)
//       .then(response => {
//         // console.log(response.picture)
//         setPicture(response.picture)
//       })
//       .catch(err => console.log("error while uploading the file", err));
//   }

//   const handleSignupSubmit = (e) => {
//     e.preventDefault();

//     const requestBody = {email, password, name, address, picture}

//     axios.post(`${API_URL}/auth/signup`, requestBody)
//         .then((res) => {
//           console.log(res);
//             navigate('/login')
//         })
//         .catch((e) => {
//             const error = e.response.data.message;
//             setErrorMessage(error);
//         })
//   };
  
//   return (
//     <div className="SignupPage-Container">
//       <h1>Sign Up</h1>

//       <form onSubmit={handleSignupSubmit} className="SignupPage-Form">
//         <label>Email</label>
//         <input 
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleEmail}
//           className="email"
//         />

//         <label>Password</label>
//         <input 
//           type="password"
//           name="password"
//           value={password}
//           onChange={handlePassword}
//           className="password"
//         />

//         <label>Name</label>
//         <input 
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleName}
//           className="name"
//         />
        
//         <label>Address</label>
//         <input 
//           type="text"
//           name="address"
//           value={address}
//           onChange={handleAddress}
//           className="address"
//         />
        
//         <label>Picture</label>
//         <input 
//           type="file"
//           name="picture"
//           onChange={e => handleFileUpload(e)}
//         />

//         <button type="submit">Sign Up</button>
//       </form>

//       { errorMessage && <p className="error-message">{errorMessage}</p> }

//       <p>Already have account?</p>
//       <Link to={"/login"}> Login</Link>
//     </div>
//   )
// }

// export default SignupPage;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage(props) {
  const API_URL = "http://localhost:5005";
  const navigate = useNavigate();

  const [picture, setPicture] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setPicture(file);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", name);
    formData.append("address", address);
    formData.append("picture", picture);

    axios
      .post(`${API_URL}/auth/signup`, formData)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((e) => {
        const error = e.response.data.message;
        setErrorMessage(error);
      });
  };

  return (
    <div className="SignupPage-Container">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit} className="SignupPage-Form">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          className="email"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          className="password"
        />

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          className="name"
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={handleAddress}
          className="address"
        />

        <label>Picture</label>
        <input
          type="file"
          name="picture"
          accept="image/*"
          onChange={handleFileUpload}
        />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have an account?</p>
      <Link to={"/login"}>Login</Link>
    </div>
  );
}

export default SignupPage;
