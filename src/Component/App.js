import React from "react"
import Navbar from "./Navbar"
import Home from "./Home"
import Signup from "./Signup"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"
import Lookbook from "./Lookbook"
import News from "./News"
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/about" element={<About />} />
      <Route path ="/services" element={<Services />} />
      <Route path ="/contact" element={<Contact />} />
      <Route path ="/lookbook" element={<Lookbook />} />
      <Route path ="/news" element={<News />} />
      <Route path ="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
