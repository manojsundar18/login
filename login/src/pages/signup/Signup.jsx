import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
const Signup = () => {
  const[userdata, setuserdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    contactnumber: "",
  });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    let localdata = localStorage.getItem("userData");
    if (localdata) {
      let userArray = JSON.parse(localdata);
      if (userArray.find((item) => item.email === userdata.email)) {
        alert("Email exist!");
      } else {
        userArray.push(userdata);
        localStorage.setItem("userData", JSON.stringify(userArray));
        navigate("/home");
      }
    } else {
      localStorage.setItem("userData", JSON.stringify([userdata]));
      navigate("/home");
    }
  };
  return (
      <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          placeholder="FirstName"
          value={userdata.firstName}
          required
          onChange={(e) =>
            setuserdata({ ...userdata, firstName: e.target.value })
          }
        />

      <input
          type="text"
          placeholder="firstname"
          value={userdata.lastname}
          onChange={(e) => setuserdata(e.target.value)}
        />
       
        <input
          type="email"
          placeholder="Email"
          value={userdata.email}
          onChange={(e) => setuserdata(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={userdata.password}
          onChange={(e) => setuserdata(e.target.value)}
        />
        <input
          type="contactnumber"
          placeholder="contactnumber"
          value={userdata.contactnumber}
          onChange={(e) => setuserdata(e.target.value)}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
export default Signup;