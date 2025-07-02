import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import logo from '../assets/logo.png';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${logo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
  };

  const glassStyle = {
    background: 'rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '1rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '2rem',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  };

  return (
    <div style={heroStyle} className="d-flex align-items-center justify-content-center text-white text-center p-4">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <div style={glassStyle}>
              <Fade triggerOnce cascade damping={0.1}>
                <h1 className="display-4 fw-bold">Empowering Innovation Through Digital Solutions</h1>
              </Fade>
              <Slide triggerOnce direction="up">
                <p className="lead mt-4">
                  We specialize in creating innovative web solutions tailored to your business needs. From stunning designs to robust functionality, we have you covered.
                </p>
                <div className="mt-5">
                  <Button as={Link} to="/services" variant="primary" size="lg" className="me-sm-3 mb-3 mb-sm-0">Explore Our Services</Button>
                  <Button as={Link} to="/get-started" variant="outline-light" size="lg">Get Started</Button>
                </div>
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;


