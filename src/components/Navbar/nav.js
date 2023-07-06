import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css'


function DropDown(){
  return  <NavDropdown title="Other.." className='dropdown' id="basic-nav-dropdown">
              
  <div className='dropdown-content'>
  <NavDropdown.Item href="/notes">Notes </NavDropdown.Item>
  <NavDropdown.Item href="/books">  Books</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.3">Assignments</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item href="#action/3.4">Contribute ❤️</NavDropdown.Item>
  </div>
  </NavDropdown> 
}
 
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    
    <Container className='nav'>
        <Navbar.Brand  className="title" href="/">Jñāna</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className='tab'><Nav.Link href="/"><i className="fa fa-home"> Home</i></Nav.Link></div>
            <div className='tab'><Nav.Link href="/contact"><i className="fa fa-phone"> ContactUs</i></Nav.Link></div>

        <DropDown />
            
          </Nav>
        </Navbar.Collapse>
      </Container>
     </Navbar>
  );
}

export default NavBar;