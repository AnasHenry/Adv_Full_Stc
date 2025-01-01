import React from "react";
import "./../../assets/NavBar.css";

function Contact(props) {
  return (
    <div className="mt-box">
      <h1>This is a Contact page.</h1>
      <h2>The contact number is {props.contact}</h2>
      <h2>The email ID is {props.email}</h2>
      <h2>The address is {props.address}</h2>
    </div>
  );
}

export default Contact;
