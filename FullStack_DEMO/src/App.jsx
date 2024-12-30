import React from "react";
import DefaultUse from "./Components/FunctionalComponents/DefaultUse";
import NavBar from "./Components/FunctionalComponents/NavBar";
import About from "./Components/ClassComponents/About";
import Contact from "./Components/FunctionalComponents/Contact";
import Gallery from "./Components/FunctionalComponents/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          {/* <Route path='/' element={<NavBar />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact contact='98765431' address='London, UK' email='one@gmail.com' />} />
          <Route path="/home" element={<DefaultUse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
