import React from "react";
import DefaultUse from "./Components/FunctionalComponents/DefaultUse";
import NavBar from "./Components/FunctionalComponents/NavBar";
import About from "./Components/ClassComponents/About";
import Contact from "./Components/FunctionalComponents/Contact";
import Gallery from "./Components/FunctionalComponents/Gallery";
import Footer from "./Components/FunctionalComponents/Footer";
import EmptyOccupier from "./Components/FunctionalComponents/EmptyOccupier";
import UseEffect from "./Components/FunctionalComponents/UseEffect";
import Useffect2 from "./Components/FunctionalComponents/UseEffect2";
import UseRef from "./Components/FunctionalComponents/UseRef";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseContext from "./Components/FunctionalComponents/UseContext";
import UseRefNum from "./Components/FunctionalComponents/UseRefNumber";
import UseEffectImages from "./Components/FunctionalComponents/UseEffectImages";
import UseMeme from "./Components/FunctionalComponents/UseMemo";
import Login from "./Components/FunctionalComponents/Login";
import SignUp from "./Components/FunctionalComponents/SignUp";
import Land from "./Components/FunctionalComponents/Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<EmptyOccupier />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route
            path='/contact'
            element={
              <Contact
                contact='98765431'
                address='London, UK'
                email='one@gmail.com'
              />
            }
          />
          <Route path='/home' element={<DefaultUse />} />
          <Route path='/effect' element={<UseEffect />} />
          <Route path='/effect2' element={<Useffect2 />} />
          <Route path='/ref' element={<UseRef />} />
          <Route path='/context' element={<UseContext />} />
          <Route path='/refnum' element={<UseRefNum />} />
          <Route path="/imgeffect" element={< UseEffectImages/>} />
          <Route path="/memo" element={<UseMeme/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/land" element={<Land />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
