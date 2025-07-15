import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';
import videoBg from '../assets/smoke-video.mp4';
import logo from '../assets/logo.png';

const Hero = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <div className="container">
          {showLogo && (
            <img
              src={logo}
              alt="Innovatech Webworks Logo"
              className="hero-logo img-fluid"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;


