import React from "react";
var Land = () =>{
    let username = localStorage.getItem('user');
    return(
        <div>
            <h1>Welcome, {username}</h1>
        </div>
    )
}
export default Land;