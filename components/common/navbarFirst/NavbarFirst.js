import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'

const NavbarFirst = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">next.js project </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default NavbarFirst