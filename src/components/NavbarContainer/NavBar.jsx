import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiLogIn, FiUserPlus} from 'react-icons/fi';
import { BsCart2} from 'react-icons/bs';
import { useSelector } from 'react-redux';

const NavBar = () => {
     const items = useSelector((state) => state.cart);

    return (
        
        <Navbar bg="light" expand="lg" navbar-light bg-white py-3 shadow-sm>
        <Container>
          <Navbar.Brand  fw-bold fs-4 href="/">H&H</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
           <div className="buttons d-flex flex-row justify-content-between">
           <button className="btn btn-outline-dark ms-1"><Nav.Link href="/login">
           <i className="fa fa-sign-in me-1"></i><FiLogIn/> Login </Nav.Link></button>
           <button className="btn btn-outline-dark ms-1"><Nav.Link href="/registro">
           <i className="fa fa-sign-in me-1"></i><FiUserPlus/> Registro </Nav.Link></button>
           <button className="btn btn-outline-dark ms-1"><Nav.Link href="/cart">
           <i className="fa fa-sign-in me-1"></i><BsCart2/>{items.length} </Nav.Link></button>
           </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
 
export default NavBar;