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
        <Navbar.Brand href="/" className='text-light'>  Virtual Lab</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-light"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='text-light'>  Home</Nav.Link>
            <Nav.Link href="/" className='text-light'>  Link</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button variant="outlie-white" className='text-light   btn-outline-light'>  Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}
