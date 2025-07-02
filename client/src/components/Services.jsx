import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const services = [
  {
    name: 'Web Design & Development',
    description: 'Creating visually appealing and user-friendly websites that convert visitors into customers.',
  },
  {
    name: 'Mobile App Development',
    description: 'Building native and cross-platform mobile applications that engage users and drive growth.',
  },
  {
    name: 'DevOps Solutions',
    description: 'Streamlining your development and deployment processes for faster and more reliable software releases.',
  },
  {
    name: 'Cybersecurity Services',
    description: 'Protecting your digital assets and data from cyber threats with robust security measures.',
  },
  {
    name: 'AI & Automation',
    description: 'Integrating AI and automation to enhance efficiency and unlock new business opportunities.',
  },
];

const Services = () => {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <Fade triggerOnce cascade damping={0.1}>
          <h2 className="text-primary text-uppercase fw-bold">Our Services</h2>
          <h3 className="display-6 fw-bold">A Better Way to Grow Your Business</h3>
          <p className="lead text-muted">
            We offer a comprehensive suite of web solutions to help your business thrive in the digital landscape.
          </p>
        </Fade>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service, index) => (
          <Col key={service.name}>
            <Fade triggerOnce delay={index * 100}>
              <Card className="h-100 shadow-sm border-0 text-center">
                <Card.Body className="p-4">
                  <Card.Title as="h4" className="fw-bold mb-3">{service.name}</Card.Title>
                  <Card.Text className="text-muted">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
