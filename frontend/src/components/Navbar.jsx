import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import { FaSearch, FaMoon, FaSun, FaEllipsisV } from 'react-icons/fa';

export default function CustomNavbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
  };

  return (
    <Navbar expand="lg" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} sticky="top" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#"> MyBlog</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavDropdown title="Categories" id="navbarScrollingDropdown1">
              <NavDropdown.Item href="#">Tech</NavDropdown.Item>
              <NavDropdown.Item href="#">Travel</NavDropdown.Item>
              <NavDropdown.Item href="#">Food</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Pages" id="navbarScrollingDropdown2">
              <NavDropdown.Item href="#">Home</NavDropdown.Item>
              <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Contact Us</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
          </Nav>

          <Form className="d-flex align-items-center gap-2">
            <InputGroup>
              <InputGroup.Text><FaEllipsisV /></InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary"><FaSearch /></Button>
            </InputGroup>

            <Button variant={darkMode ? "light" : "dark"} onClick={toggleTheme}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

