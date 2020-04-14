import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import {navbarProps} from '../../containers/types.module';

export const CustomNavbar: React.FC<navbarProps> = props =>{
    let navLinks = (
        <React.Fragment>
            <NavLink className="nav-link" to="/register">Register</NavLink>
            <NavLink className="nav-link" to="/login">Login</NavLink>
        </React.Fragment>
    );
    if(props.isAuth){
        navLinks = (
            <React.Fragment>
                <a className="nav-link" href="/#">{props.last_name ? props.first_name + ' ' + props.last_name : props.first_name}</a>
                <NavLink className="nav-link" to="/logout">Logout</NavLink>
            </React.Fragment>
        );
    }
    return (
        <Navbar bg="light" expand="lg">
        <Link className="navbar-brand" to="/">Tasky</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            {navLinks}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    
    )
}


export default CustomNavbar;