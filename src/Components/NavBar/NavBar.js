import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../Style/CustomStyle.css'

export default function NavBar() {
  return (
    <>
    <Navbar expand="lg" className='navbg px-4'>
      <Container fluid>
        <Navbar.Brand href="/" className='text-light'>  Lab Buddy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 text-light"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='text-light'>  Home</Nav.Link>
            <Nav.Link href="/tas" className='text-light'>  Class</Nav.Link>
            <Nav.Link href="/" className='text-light'>  Lab</Nav.Link>
          </Nav>
          <Form className="d-flex mx-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
           
          </Form>

      
      <button type="" className='btn  px-4 py-2 me-2 btn-light '>Log In</button>
      <button type="" className='btn px-4 py-2 text-light btn-outline-light '>Sign Up</button>
    
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}
