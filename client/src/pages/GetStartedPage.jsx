import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const GetStartedPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then((result) => {
        alert('Your quote request has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, (error) => {
        alert('An error occurred, please try again.');
    });
  };
  return (
    <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <Fade triggerOnce>
          <Card className="p-4 p-md-5 shadow-sm border-0">
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="text-center">
                  <h2 className="fw-bold">Get a Quote</h2>
                  <p className="text-muted mb-4">
                    We'd love to hear from you. Please fill out the form below, and we'll get back to you as soon as possible.
                  </p>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formGridName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formGridPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formGridCompany">
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4" controlId="formGridMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us about your project" />
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="primary" type="submit">
                      Submit Request
                    </Button>
                  </div>
                </Form>
                <hr className="my-5" />
                <div className="text-center">
                  <h4 className="fw-bold">Our Contact Info</h4>
                  <p className="text-muted">
                    123 Innovation Drive, Tech City, CA 91234
                    <br />
                    (555) 123-4567
                    <br />
                    info@innovatech.com
                  </p>
                </div>
              </Col>
            </Row>
          </Card>
        </Fade>
      </Container>
    </div>
  );
};

export default GetStartedPage;
