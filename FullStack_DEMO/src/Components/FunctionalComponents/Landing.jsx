import React from "react";
import { useNavigate } from "react-router-dom";
import "./../../assets/NavBar.css";
var Land = () => {
  var navigate = useNavigate();
  let username = localStorage.getItem("user");
  var logoutfn = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className='mt-box'>
      <div className='flex'>
        <h1>Welcome, {username}</h1>
        <button onClick={logoutfn} style={{ height: 40 }}>
          Log Out
        </button>
      </div>
    </div>
  );
};
export default Land;
