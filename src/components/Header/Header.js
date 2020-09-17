import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/Icon/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="nav-border sticky-top">
            <Navbar className="navber d-flex justify-content-between">
                <Form inline>
                    <Navbar.Brand><Link to="/"><img className="img" src={logo} alt="" /></Link></Navbar.Brand>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Place Name"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Form>
                <Form inline>
                    <Nav>
                        <Link to="" className="navLink">News</Link>
                        <Link to="" className="navLink">Destination</Link>
                        <Link to="" className="navLink">Blogs</Link>
                        <Link to="" className="navLink">Contact</Link>
                        <Link to="/login" className="navLink">Login</Link>
                    </Nav>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;