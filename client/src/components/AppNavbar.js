import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css';

export class AppNavbar extends Component {
    state = {
        isOpen: false
    };

    // Mobile Menu Toggle
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <Navbar dark expand="md">
                <Container className="navBar">
                    <NavbarBrand href="/">SeeFood</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Ingredients</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/add">Add</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/logout">Logout</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default AppNavbar;
