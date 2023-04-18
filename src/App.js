import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./PAGES";
import About from "./PAGES/about";
import Register from "./PAGES/register";
import Signin from "./PAGES/signin";
import Contact from "./PAGES/contact";
import Dashboard from "./PAGES/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
