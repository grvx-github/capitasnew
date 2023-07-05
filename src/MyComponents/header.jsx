import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { useState } from "react";
import Logo from "../assets/logo.png"
// const [activeLink, setActiveLink] = useState('home')

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Our Services</Nav.Link>
            <Nav.Link href="#link">Team</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="socials">
              <a href="#">Call Us: +1 (514) 022-8419</a>
              <a href="#">Log In</a>
							<button className="signUp" >Sign Up</button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
