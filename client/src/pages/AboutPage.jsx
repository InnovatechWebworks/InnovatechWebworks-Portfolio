import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutPage.css';
import logo from '../assets/logo.png';

const teamMembers = [
  {
    name: 'Ritak Bag',
    role: 'Product Manager',
    imageUrl: '/1751106316855.jpg',
    githubUrl: 'https://github.com/ritakB0',
    linkedinUrl: 'https://www.linkedin.com/in/ritak-bag-/',
  },
  {
    name: 'Raman Patra',
    role: 'Lead Developer',
    imageUrl: '/1751478067476.jpg',
    githubUrl: 'https://github.com/RAMANP-007',
    linkedinUrl: 'https://www.linkedin.com/in/raman-patra-/',
  },
  {
    name: 'Hritik Mondal',
    role: 'DevOps Engineer & Marketing Lead',
    imageUrl: '/IMG_E1755.JPG',
    githubUrl: 'https://github.com/hritikmondal2003',
    linkedinUrl: 'https://www.linkedin.com/in/hritikmondal/',
  },
  {
    name: 'Manoj Mandal',
    role: 'Cyber Security Expert',
    imageUrl: '/1748955254670.jpg',
    githubUrl: 'https://github.com/ManojMandal01',
    linkedinUrl: 'https://www.linkedin.com/in/manoj-mandal-/',
  },
];

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="about-page">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
          <h2>About Us</h2>
          <h3>Our Mission & Vision</h3>
          <p>
            We are a team of passionate developers and designers dedicated to creating innovative solutions that drive business growth.
          </p>
        </div>

        <div className="row align-items-center about-story mb-5">
          <div className="col-lg-6" data-aos="fade-right">
            <img src={logo} className="img-fluid about-logo" alt="Innovatech Logo" />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h4>Our Story</h4>
            <p>
              Innovatech Web Works was founded with the goal of helping businesses succeed in the digital world. We believe in the power of technology to transform industries and create meaningful experiences.
            </p>
            <p>
              Our journey began with a small team of dedicated professionals, and we have since grown into a full-service agency that offers a wide range of services to clients worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="team-section">
        <div className="container">
          <div className="section-title text-center" data-aos="fade-up">
            <h3>Meet Our Team</h3>
            <p>The talented people behind our success.</p>
          </div>

          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="team-member-card text-center">
                  <img src={member.imageUrl} className="team-img" alt={member.name} />
                  <div className="card-body">
                    <h5>{member.name}</h5>
                    <span className="role">{member.role}</span>
                    <div className="social-links mt-auto">
                      <a href={member.githubUrl} target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                      <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
