import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget'
import logo from "../Img/IvoDev.png";
import "./NavBar.css"

function NavBar() {
  return (
    <Navbar sticky="top" bg="light" expand="lg" >
      <Container fluid className="nav">
                    <Link to="/" className="nav-link">
                        <img src={logo} width={80} height={80} alt="logo" className="nav-logo" />
                    </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 navbar"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >            
            <Nav href="#action1"><Link to="/" className="nav-link">Home</Link></Nav>          
            
            <Nav href="#action2"><Link to="/about" className="nav-link">About US</Link></Nav>
            

            <NavDropdown title="Store" id="navbarScrollingDropdown" className="store-tit">

              <NavDropdown.Item href="#action3"><Link to="/category/Gaming-PC" className="nav-link">Gaming PC</Link></NavDropdown.Item>   

                <NavDropdown.Divider />

              <NavDropdown.Item href="#action4"><Link to="/category/Accesories" className="nav-link">Accesories</Link></NavDropdown.Item>

            </NavDropdown>
            <Nav href="#action5"><Link to="/Orders" className="nav-link">Check your Orders</Link></Nav>
          </Nav>
          <div className="widget">
            <CartWidget />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;