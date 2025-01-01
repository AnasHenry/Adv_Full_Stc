import React from "react";
import "../../assets/NavBar.css"

function DefaultUse(){
    return(
        <div className="mt-box">
            <h1>Default exports ensure only a single value being exported at a time. Unlike Named exports which allow multiple value to be exported.</h1>
        </div>
    )
}
export default DefaultUse;