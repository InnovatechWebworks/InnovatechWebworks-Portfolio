import React from 'react';
import logo from '../assets/logo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0 text-center text-md-start">
            <img
              src={logo}
              alt="Innovatech Web Works logo"
              height="40"
              className="mb-2"
            />
            <p className="text-white-50 small">Empowering Innovation Through Digital Solutions</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/portfolio" className="text-white text-decoration-none">Portfolio</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
              <a href="#" className="text-white me-3"><FaTwitter size={24} /></a>
              <a href="#" className="text-white me-3"><FaLinkedin size={24} /></a>
              <a href="#" className="text-white"><FaInstagram size={24} /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 pt-4 border-top border-secondary">
          <Col>
            <p className="mb-0 text-white-50 small">&copy; {new Date().getFullYear()} Innovatech Web Works. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
