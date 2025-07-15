import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './GetStartedPage.css';

const GetStartedPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
        alert('✅ Your quote request has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setIsSubmitting(false);
    }, (error) => {
        alert('❌ An error occurred, please try again.');
        setIsSubmitting(false);
    });
  };

  return (
    <div className="get-started-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="form-container" data-aos="fade-up">
              <div className="section-title text-center">
                <h2>Get a Quote</h2>
                <p>We'd love to hear from you. Please fill out the form below, and we'll get back to you as soon as possible.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="company" className="form-label">Company</label>
                    <input type="text" className="form-control" id="company" name="company" value={formData.company} onChange={handleChange} />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </form>

              <div className="contact-info-alt text-center">
                <h4>Our Contact Info</h4>
                <p>
                  Kolkata, India, 700156<br />
                  +91 91239 41790<br />
                  innovatechwebworks@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
