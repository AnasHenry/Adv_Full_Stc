import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";

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
        </ul>
      </nav>
      <div className="mt-box">

      </div>
      <Footer />
    </header>
  );
};
export default NavBar;
