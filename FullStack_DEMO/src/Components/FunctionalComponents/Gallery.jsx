import React from "react";
import { useState } from "react";
import "./../../assets/NavBar.css"

function Gallery() {
  var [counter, setcount] = useState(0);
  function increment() {
    setcount(counter + 1);
  }
  function decrement(){
    setcount(counter - 1);
  }
  function reset(){
    setcount(counter = 0);
  }
  return (
    <div className="mt-box">
      <h1 style={{ textAlign: "center" }}>Hello.... this is Gallery page</h1>
      <p>The number of photos in this gallery is {counter}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>0</button>
      <br />
      <h3>
        <li>
          UseState is used for updating a state that is declared as variable by
          using a function
        </li>
        <li>var [variable,function] = useState(0);</li>
      </h3>
    </div>
  );
}

export default Gallery;
