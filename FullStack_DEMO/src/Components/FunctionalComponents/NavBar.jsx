import React from "react";
import { Link } from "react-router-dom";

var NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
