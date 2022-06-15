import React from 'react';
import { Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarComponent = () => {
    return (
        <div>
            <div className='container mb-4'>
                <Navbar bg="light" expand="md">
                    <Container fluid>
                        <Navbar.Brand href="#">HOME</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-md-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Notifikasi
                                    <sup className='text-danger h6'>12</sup>
                                </Nav.Link>
                                <Nav.Link href="#action2">Daftar Jual</Nav.Link>
                                <Nav.Link href="#action3">Akun Saya</Nav.Link>
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
            </div>
        </div>
    )
}
