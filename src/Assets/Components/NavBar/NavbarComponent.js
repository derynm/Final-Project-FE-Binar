import React from 'react';
import { Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import "../NavBar/NavbarComponent.css"

export const NavbarComponent = () => {
    return (
        <div>
            <div className='Navbar container nav-footer-bg mb-4'>
            <div className='box1'></div>
                <Navbar className='nav-footer-bg' expand="md">
                    <Container fluid>
                        <Navbar.Brand href="#">HOME</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-md-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                            </Nav>
                            <Form className="searchFrom d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button className='buttonSearch' variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}
