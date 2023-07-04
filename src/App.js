import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./PAGES";
import About from "./PAGES/about";
import Register from "./PAGES/register";
import Signin from "./PAGES/signin";
import Contact from "./PAGES/contact";
import CSE from "./PAGES/CSE";
import ECE from "./PAGES/ECE";
import MECH from "./PAGES/MECH";
import CIVIL from "./PAGES/CIVIL";
import Books from "./PAGES/books";
import Notes from "./PAGES/notes";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/CSE" element={<CSE />} />
        <Route path="/ECE" element={<ECE />} />
        <Route path="/ME" element={<MECH />} />
        <Route path="/CE" element={<CIVIL />} />
        <Route path="/books" element={<Books />} />
        <Route path="/notes" element={<Notes />} />



      </Routes>
      
    </Router>
  ); 
}

export default App;
