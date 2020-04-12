import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

export const CustomNavbar: React.FC = props =>{
    return (
        <Navbar bg="light" expand="lg">
        <Link className="navbar-brand" to="/">Tasky</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <NavLink className="nav-link" to="/register">Register</NavLink>
            <NavLink className="nav-link" to="/login">Login</NavLink>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    
    )
}


export default CustomNavbar;