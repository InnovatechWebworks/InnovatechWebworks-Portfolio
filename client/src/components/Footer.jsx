import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css'; // Import the new stylesheet

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-about">
              <div className="footer-logo">
                <Link to="/"><img src={logo} alt="Innovatech Web Works" /></Link>
              </div>
              <p>Empowering Innovation Through Digital Solutions. We specialize in creating modern, secure, and high-performance web solutions tailored to your business needs.</p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/services">Web Development</Link></li>
                <li><Link to="/services">Mobile App Development</Link></li>
                <li><Link to="/services">DevOps Solutions</Link></li>
                <li><Link to="/services">Cybersecurity</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://twitter.com/innovatechweb" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                <a href="https://facebook.com/innovatechwebworks" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/innovatech_webworks/" target="_blank" rel="noopener noreferrer
                "><i className="bi bi-instagram"></i></a>
                <a href="https://linkedin.com/company/innovatech-webworks" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                <a href="https://github.com/InnovatechWebworks" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          &copy; {new Date().getFullYear()} <strong><span>Innovatech Web Works</span></strong>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
