
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar className="navbar" bg="light" expand="lg">
            <Navbar.Brand href="">
                <h2 style={{ color: 'black', padding: '1rem' }}>
                    <i className="fab fa-github"></i> GitHub User Search
                </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
