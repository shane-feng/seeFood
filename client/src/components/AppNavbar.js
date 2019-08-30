import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css';

import AddModal from './AddModal';

class AppNavbar extends Component {
    state = {
        isOpen: false,
        modal: false
    };

    // Mobile Menu Toggle
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    // Add Ingredient Modal
    addIngredient = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <Container className="navBar">
                        <NavbarBrand href="/">SeeFood</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/about">About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">My Ingredients</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.addIngredient}>Add Ingredients</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <AddModal modal={this.state.modal} addIngredient={this.addIngredient}></AddModal>
            </div>
        );
    }
}

export default AppNavbar;
