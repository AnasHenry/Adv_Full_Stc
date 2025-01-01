import React from "react";
import "./../../assets/NavBar.css";
const Footer = () =>{
    return(
        <div className="footer-box">
            <div>
                <h3>Learn React</h3>
                <p>Quick start</p>
                <p>Installation</p>
                <p>Describing the UI</p>
            </div>
            <div>
                <h3>Api Reference</h3>
                <p>React APIs</p>
                <p>React DOM APIs</p>
            </div>
            <div>
                <h3>Community</h3>
                <p>Code of condut</p>
                <p>Meet the Team</p>
                <p>Docs contributor</p>
            </div>
            <div>
                <h3>More</h3>
                <p>Blog</p>
                <p>React Native</p>
                <p>Privacy</p>
            </div>
        </div>
    )
}

export default Footer;