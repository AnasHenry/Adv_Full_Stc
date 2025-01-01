import React from "react";
import "../../assets/NavBar.css";
import { useState, useEffect } from "react";

const UseEffect = () => {
  var [text, setText] = useState("Elden");
  useEffect(() => {
    console.log(text);
    setText("Sekiro");
  }, [text]);
  return (
    <div className='mt-box'>
      <h1 className='heading'>Hooks</h1>
      <div className='flex'>
        <div>
          <h4>Hooks are nothing but a normal function.</h4>
          <h4>The syntax of useEffect is useEffect(arrowfn,dependency)</h4>
          <h4>
            The function gets invoked based upon the dependency, mostly the
            useState
          </h4>
          <h4>
            It is a side effect that is gonna happen when the useState is
            getting updated
          </h4>
          <h4>
            It is a reaction fr whatever action performed upon the dependency
          </h4>
          <h4>
            The reaction time of UseEffect is very fast, a fraction of second
          </h4>
          <h4>Whenever state variable gets updated, UseEffect gets rendered</h4>
        </div>
        <div>
          <h4>Below is an example of useEffect Hook</h4>
          <input
            type='text'
            placeholder='Text here'
            value={text}
            onChange={(event) => {
              /*advised to use 'e' or 'event'*/
              setText(event.target.value);
            }}
          />
          <h4>The text typed is {text}</h4>
        </div>
      </div>
    </div>
  );
};
export default UseEffect;
