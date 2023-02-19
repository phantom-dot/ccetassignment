import NavBar from './components/Navbar/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './PAGES';
import About from './PAGES/about';
import Register from './PAGES/register';
import Signin from './PAGES/signin';
import Contact from './PAGES/contact';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
