import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then((result) => {
        alert('✅ Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
    }, (error) => {
        alert('❌ An error occurred. Please try again.');
        setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Contact Us</h2>
          <h3>Get in Touch</h3>
          <p>We'd love to hear from you. Fill out the form below or reach us directly through our contact info.</p>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <div className="contact-form">
              <h4>Send Us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="contact-info">
              <h4>Contact Information</h4>
              <div className="info-item">
                <i className="bi bi-geo-alt"></i>
                <p>Kolkata, India, 700156</p>
              </div>
              <div className="info-item">
                <i className="bi bi-phone"></i>
                <p>+91 91239 41790</p>
              </div>
              <div className="info-item">
                <i className="bi bi-envelope"></i>
                <p>innovatechwebworks@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
