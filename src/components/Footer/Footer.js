import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../assets/Icon/Logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row className="margin-top">
                    <Col sm={6}>
                        <img src={logo} alt="" />
                    </Col>
                    <Col sm={3}>
                        <p>About Online Food</p>
                        <p>Read Our Blog</p>
                        <p>Sign Up To Deliver</p>
                        <p>Add Your Restaurant</p>
                    </Col>
                    <Col sm={3}>
                        <p>Get Help</p>
                        <p>Read FAQ</p>
                        <p>View All Cities</p>
                        <p>Restaurant Near Me</p>
                    </Col>
                </Row>
            </Container>
            <p className="space">Copyright © 2020 Online Food</p>

        </div>
    );
};

export default Footer;