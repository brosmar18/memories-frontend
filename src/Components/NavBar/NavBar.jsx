import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../images/logo.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg='dark' data-bs-theme='dark' expand="lg" className='bg-body-tertiary'>
        <Container>
            <Navbar.Brand href='#'>
                <img className='nav__img' src={logo} alt='logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link href='#'>Home</Nav.Link>
                    <Nav.Link href='#'>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar
