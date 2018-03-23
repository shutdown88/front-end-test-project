import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import madisoftLogo from './img/logo-madisoft.png';

import './Header.css';

export default () => (
    <Navbar className="Header" fixedTop collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#brand">
                    <img alt="Brand" src={madisoftLogo} />
                </a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">
                    Features
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Pricing
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Contact us
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
