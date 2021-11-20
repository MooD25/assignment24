import React from 'react'
import { Button, Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap'



const Header = () => {
  return (
    <header>
      <div id="Home-Page-Top"></div>


      <Navbar bg="light" expand="lg">
        <img style={{
          width: '70px',
          height: '50px'
        }}


          src="https://t3.ftcdn.net/jpg/04/19/34/56/360_F_419345634_RZ7E81Uy3gsY6P1szIrStdR9R9iQIwvZ.jpg"
          alt="Logo"
        />
        <Container fluid>
          <Navbar.Brand href="#">ShopmartRUs</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/prodlisting">Products</Nav.Link>
              <Nav.Link href="/registration">Registration</Nav.Link>
              <Nav.Link href="/login" >
                Login
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
