import React from "react";
import { useRef, useState, useEffect } from "react";
import "../../assets/NavBar.css";

const UseRef = () => {
  var [text, SetText] = useState("");
  var prevText = useRef("");
  useEffect(()=>{
    prevText.current = text
  },[text])
  return (
    <div className="mt-box">
      <h1 className="heading">UseRef</h1>
      <h4>UseRef is used for referencing</h4>
      <h4>Goes like UseStaff UseRef UseEffect</h4>
      <input
        type='text'
        placeholder='Text Here'
        value={text}
        onChange={(event) => {
          SetText(event.target.value);
        }}
      />
      <h2>My Current Render is {text}</h2>
      <h3>My Previous Render is {prevText.current}</h3>
    </div>
  );
};

export default UseRef;
