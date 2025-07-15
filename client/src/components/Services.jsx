import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css'; // Import the new stylesheet

const services = [
  {
    icon: 'bi-display',
    name: 'Web Design & Development',
    description: 'Creating visually appealing and user-friendly websites that convert visitors into customers.',
  },
  {
    icon: 'bi-phone',
    name: 'Mobile App Development',
    description: 'Building native and cross-platform mobile applications that engage users and drive growth.',
  },
  {
    icon: 'bi-server',
    name: 'DevOps Solutions',
    description: 'Streamlining your development and deployment processes for faster and more reliable software releases.',
  },
  {
    icon: 'bi-shield-lock',
    name: 'Cybersecurity Services',
    description: 'Protecting your digital assets and data from cyber threats with robust security measures.',
  },
  {
    icon: 'bi-robot',
    name: 'AI & Automation',
    description: 'Integrating AI and automation to enhance efficiency and unlock new business opportunities.',
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>We offer a comprehensive suite of web solutions to help your business thrive in the digital landscape.</p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={service.name}>
              <div className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h4>{service.name}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
