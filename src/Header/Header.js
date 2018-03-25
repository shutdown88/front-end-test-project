import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import madisoftLogo from './img/logo-madisoft.png';

import './Header.css';

export default ({ onSelect, navItems = [] }) => (
    <Navbar className="Header" fixedTop collapseOnSelect onSelect={onSelect}>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">
                    <img alt="Brand" src={madisoftLogo} />
                </a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                {navItems.map(({ name, key }) => (
                    <NavItem key={key} eventKey={key} href={`#${key}`}>
                        {name}
                    </NavItem>
                ))}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
