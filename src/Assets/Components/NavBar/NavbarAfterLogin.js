import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "../NavBar/NavbarAfterLogin.css"
import list from "../../Img/list.svg"
import alarm from "../../Img/alarm.svg"
import user from "../../Img/user.svg"


export const NavbarAfterLogin = () => {
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
                            </Nav>
                            <div className='buttonLogo'>
                                <img className='imageButton' src={list}
                                    width={20}>
                                </img>
                            </div>
                            <div>
                                <img className='imageButton' src={alarm}
                                    width={20}>
                                </img>
                            </div>
                            <div>
                                <img className='imageButton' src={user}
                                    width={20}>
                                </img>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
  )
}
