/* eslint-disable */
import React, { useState } from 'react';
import { Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, NavbarBrand, Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

import logo from '../../../assets/images/logos/green-logo.png';
import logo2 from '../../../assets/images/logos/white-logo.png';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [textSearch ,setTextSeacrch ] = useState('')
    
    const handleSearch = (e) => {
        console.log(e.target.value)
    }

    return (
        <div id="section">
            <div className="header1 po-relative">
                <Container>
                    <Navbar className="navbar-expand-lg h1-nav">
                        <NavbarBrand href="#"><img src={logo} style={{ width: '90px' }} alt="wrapkit" /></NavbarBrand>
                        <form role="form" style={{width: '30%', display: 'flex', alignItems: 'center'}} id="top-buscar">
                            <input type="hidden" name="buscar" value="1" />
                            <input type="text" name="palabra" className="search-form form-control p-1" autoComplete="off"   onChange={handleSearch} id="palabra" placeholder="¿Qué producto estás buscando?"  style={{flexGrow: 1}} />
                            <button className="btn btn-buscartop p-1"  type="submit" style={{marginLeft: '10px', border:'1px solid yellow'}}>
                                <i className="fa fa-search" style={{color:'yellow', }}></i>
                            </button>
                        </form>


                        <NavbarToggler style={{color:'yellow'}} onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                        <Collapse isOpen={isOpen} navbar id="header1">
                            <Nav navbar className="ms-auto mt-2 mt-lg-0">
                               
                                <NavItem className="active">
                                    <NavLink>
                                        <Link className="nav-link" to={"/"}>
                                            Productos
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link className="nav-link" to={"/custom-components"}>
                                            Armá tu PC
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                {/* <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        Services <i className="fa fa-angle-down m-l-5"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="b-none animated fadeInUp">
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem>Separated link</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>One more separated link</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown> */}
                                <NavItem style={{ marginTop: '7px' }}>
                                    <Link to={"/signin"} className='btn btn-outline-success'>
                                        Iniciar sesión
                                    </Link>
                                </NavItem>
                                <NavItem style={{ marginTop: '7px' }}>
                                    <Link to={"/signup"} className='btn btn-success'>
                                        Registrate
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
            {/* <div className="header1 po-relative bg-dark">
                <Container>
                    <Navbar className="navbar-expand-lg h2-nav">
                        <NavbarBrand href="#"><img src={logo2} alt="wrapkit" /></NavbarBrand>
                        <NavbarToggler onClick={toggle}><span className="ti-menu text-white"></span></NavbarToggler>
                        <Collapse isOpen={isOpen} navbar id="header1">
                            <Nav navbar className="ms-auto mt-2 mt-lg-0">
                                <NavItem className="active"><NavLink href="#">Home</NavLink></NavItem>
                                <NavItem><NavLink href="#">About Me</NavLink></NavItem>
                                <NavItem><NavLink href="#">Work</NavLink></NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        Services <i className="fa fa-angle-down m-l-5"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="b-none animated fadeInUp">
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem>Separated link</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>One more separated link</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem><NavLink href="#">Freebies</NavLink></NavItem>
                                <NavItem><a className="btn btn-outline-info" href="#">Hire Me</a></NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div> */}
        </div>
    );
}

export default HeaderComponent;
