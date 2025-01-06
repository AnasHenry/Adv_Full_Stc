import React from "react";
import "../../assets/NavBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

var Login = () => {
  var navigate = useNavigate();
  var [email, SetEmail] = useState("");
  var [password, SetPassword] = useState("");
  var login = async (event) => {
    event.preventDefault();
    var req = axios
      .post("http://localhost:3000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data.message);
        localStorage.setItem('user',res.data.user);
        if(res.data.isLoggedIn){
          navigate("/land");
        }
      })
      .catch((err) => console.log(err));
    console.log(req);
  };

  var navi = () => {
    navigate("/signup");
  };
  return (
    <div className='form-box' onSubmit={login}>
      <form>
        <label htmlFor='email'>Email: </label>
        <input
          type='text'
          id='email'
          onChange={(e) => SetEmail(e.target.value)}
        />
        <br />
        <label htmlFor='pass'>Password: </label>
        <input
          type='password'
          id='pass'
          onChange={(e) => SetPassword(e.target.value)}
        />
        <br />
        <button type='submit' value='Submit'>
          Login
        </button>
      </form>
      <button type='button' onClick={navi}>
        Click here to register a New User!
      </button>
    </div>
  );
};
export default Login;
