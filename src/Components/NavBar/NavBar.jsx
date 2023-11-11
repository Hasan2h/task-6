import "./NavBarStyle.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoNav from "./../../assets/img/logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import NavBarSelect from './NavBarSelect';
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-white nav">
        <Container>
          <Navbar.Brand href="#home"><img src={LogoNav} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="NavBarPages gap-1 ">
            <Nav className="me-auto">
              <Nav.Link><Link to="/" className=" text-decoration-none text-dark">Home</Link></Nav.Link>
              <NavDropdown title="Collection" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Shop</Nav.Link>
              <Nav.Link href="#link">Android</Nav.Link>
              <Nav.Link href="#link">Accessories</Nav.Link>
              <Nav.Link href="#link">Memory&Storage</Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to='/About' className=" text-decoration-none text-dark ">About Us</Link></NavDropdown.Item>
                <NavDropdown.Item>
                <Link to='/Contact' className=" text-decoration-none text-dark ">Contact Us</Link>
                </NavDropdown.Item>
                <NavDropdown.Item><Link to='/Faqs' className=" text-decoration-none text-dark ">Faqs</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="TheIcon d-flex justify-content-center align-items-center gap-3 ">
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faCartShopping} />
                <NavBarSelect className="NavBarSelect" />
              </div>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar