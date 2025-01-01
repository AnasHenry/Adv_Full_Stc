import React, { createContext } from "react";
import Component2 from "../ContextComponents/Component2";
export var ThemeProvider = createContext();
const UseContext = () => {
  return (
    <div>
      <ThemeProvider.Provider value = {{cgpa:"10.00",sgpa: "9.99"}}>
        <h1>UseContext</h1>
        <h2>Uses to transfer data to nested components without letting it pass to other components</h2>
        <h3>It helps overcome memory decay by means of props drilling</h3>
        <Component2 />
      </ThemeProvider.Provider>
    </div>
  );
};

export default UseContext;
