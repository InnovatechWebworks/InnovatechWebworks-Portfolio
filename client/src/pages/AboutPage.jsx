import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';

const teamMembers = [
  {
    name: 'Ritak Bag',
    role: 'Product Manager',
    imageUrl: 'https://placehold.co/150',
    githubUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Raman Patra',
    role: 'Lead Developer',
    imageUrl: 'https://placehold.co/150',
    githubUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Hrittik Mondal',
    role: 'DevOps Engineer & Marketing Lead',
    imageUrl: 'https://placehold.co/150',
    githubUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Manoj Mondal',
    role: 'Cyber Security Expert',
    imageUrl: 'https://placehold.co/150',
    githubUrl: '#',
    linkedinUrl: '#',
  },
];

const AboutPage = () => {
  return (
    <Container className="py-5">
      <Fade triggerOnce>
        <div className="text-center mb-5">
          <h2 className="text-primary text-uppercase fw-bold">About Us</h2>
          <h3 className="display-6 fw-bold">Our Mission & Vision</h3>
          <p className="lead text-muted">
            We are a team of passionate developers and designers dedicated to creating innovative solutions that drive business growth.
          </p>
        </div>
      </Fade>

      <Row className="align-items-center mb-5">
        <Col lg={6}>
          <Fade triggerOnce direction="left">
            <Image src={logo} rounded fluid />
          </Fade>
        </Col>
        <Col lg={6}>
          <Fade triggerOnce direction="right">
            <h4>Our Story</h4>
            <p className="text-muted">
              Innovatech Web Works was founded with the goal of helping businesses succeed in the digital world. We believe in the power of technology to transform industries and create meaningful experiences.
            </p>
            <p className="text-muted">
              Our journey began with a small team of dedicated professionals, and we have since grown into a full-service agency that offers a wide range of services to clients worldwide.
            </p>
          </Fade>
        </Col>
      </Row>

      <div className="text-center mb-5">
        <h3 className="display-6 fw-bold">Meet Our Team</h3>
        <p className="lead text-muted">
          The talented people behind our success.
        </p>
      </div>

      <Row>
        {teamMembers.map((member, index) => (
          <Col md={6} lg={3} key={index} className="mb-4">
            <Fade triggerOnce delay={index * 100}>
              <Card className="h-100 text-center shadow-sm border-0">
                <Card.Img variant="top" src={member.imageUrl} className="p-4" style={{ borderRadius: '50%' }} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h5" className="fw-bold">{member.name}</Card.Title>
                  <Card.Text className="text-muted">{member.role}</Card.Text>
                  <div className="mt-auto">
                    <a href={member.githubUrl} className="text-muted me-3" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
                    <a href={member.linkedinUrl} className="text-muted" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
                  </div>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AboutPage;

