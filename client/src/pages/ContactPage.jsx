import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
        alert('An error occurred, please try again.');
    });
  };
  return (
    <Container className="py-5">
      <Fade triggerOnce>
        <div className="text-center mb-5">
          <h2 className="text-primary text-uppercase fw-bold">Contact Us</h2>
          <h3 className="display-6 fw-bold">Get in Touch</h3>
          <p className="lead text-muted">
            We'd love to hear from you. Please fill out the form below or reach out to us directly.
          </p>
        </div>
      </Fade>

      <Row>
        <Col md={6} className="mb-4 mb-md-0">
          <Fade triggerOnce direction="left">
            <h4>Send Us a Message</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Your message" required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Fade>
        </Col>
        <Col md={6}>
          <Fade triggerOnce direction="right">
            <h4>Contact Information</h4>
            <p className="text-muted d-flex align-items-center">
              <FaMapMarkerAlt className="me-3 text-primary" size={20} />
              123 Innovatech Way, Silicon Valley, CA 94025
            </p>
            <p className="text-muted d-flex align-items-center">
              <FaPhone className="me-3 text-primary" size={20} />
              (123) 456-7890
            </p>
            <p className="text-muted d-flex align-items-center">
              <FaEnvelope className="me-3 text-primary" size={20} />
              contact@innovatech.com
            </p>

          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;

