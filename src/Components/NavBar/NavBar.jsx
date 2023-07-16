import React from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import memories from '../../images/memories.png';

const NavBar = () => {
  return (
    <Navbar expand="lg" className='bg-body-tertiary'>
        <Container>
            <Navbar.Brand href='#'>
                <img className='nav__img' src={memories} alt='memories' />
            </Navbar.Brand>
            <Navbar.Toggle id='basic-navbar-nav'>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#'>Home</Nav.Link>
                        <Nav.Link href='#'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar.Toggle>
        </Container>
    </Navbar>
  )
}

export default NavBar
