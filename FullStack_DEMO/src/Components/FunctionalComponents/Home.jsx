import React from "react";

function Home() {
  return (
    <div>
      <h1>This is a Home page.</h1>
      <br></br>
      <h3>Props</h3>
      <ul>
        <li>We can transfer data from one component to another component.</li>
        <li>Props can't be changed after being defined.</li>
        <li>
          Data can be transfered between Parent component to Child Component
        </li>
        <li>
          Props need to be assigned in the component only then it can be
          transferred to a child component
        </li>
      </ul>
      <br></br>
      <h3>State</h3>
      <ul>
        <li>State can be changed</li>
        <li>State will not be passed from a component.</li>
      </ul>
    </div>
  );
}

export default Home;
