/* eslint-disable */
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

import logo from '../../assets/images/logos/white-text.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/

    return (
        <div className="topbar" id="top">
            <div className="header6">
                <Container className="po-relative">
                    <Navbar className="navbar-expand-lg h6-nav-bar">
                        <NavbarBrand href="/"><img src={logo} alt="wrapkit" /></NavbarBrand>
                        <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                        <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 justify-content-end" id="h6-info">
                            <Nav navbar className="ms-auto">
                                <NavItem>
                                    <Link className="nav-link" to={"/"}>
                                        Productos
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/custom-components"}>
                                        Armá tu PC
                                    </Link>
                                </NavItem>
                            </Nav>
                            <div className="act-buttons">
                                <Link to="/signin" className="btn btn-success-gradiant font-14">Iniciar sesión</Link>
                            </div>
                            <div className="act-buttons">
                                <Link to={"/signup"} className="btn btn-success-gradiant font-14">Registrarse</Link>
                            </div>
                            <Link to={"/profile"} >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <PersonIcon />
                                </Avatar>
                            </Link>
                    </Collapse>
                    </Navbar>
                </Container>
            </div>
        </div>
    );

}
export default Header;
