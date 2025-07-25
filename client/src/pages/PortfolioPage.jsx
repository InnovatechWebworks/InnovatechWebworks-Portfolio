import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PortfolioPage.css';

const staticProjects = [
  {
    _id: '1',
    title: "shopmenia",
    description: "A full stack e-commerce website with admin panel",
    projectUrl: "https://github.com/RAMANP-007/shopmenia",
    liveDemoUrl: "https://shopmenia.vercel.app/",
    imageUrl: "/Images/Screenshot%202025-07-16%20171845.png",
  },
  {
    _id: '2',
    title: "eve-cafe",
    description: "A basic website for a cafe with email messaging feature",
    projectUrl: "https://github.com/RAMANP-007/eve-cafe",
    liveDemoUrl: "https://eve-cafe.vercel.app/",
    imageUrl: "/Images/eve-cafe.png",
  }
];

const PortfolioPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="portfolio-page">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Our Portfolio</h2>
          <h3>Explore Our Recent Work</h3>
          <p>Here are some of the projects we're proud to have worked on.</p>
        </div>

        <div className="row g-4">
          {staticProjects.length > 0 ? (
            staticProjects.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={item._id || index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card portfolio-card">
                  <img src={item.imageUrl} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className="d-flex justify-content-between">
                      <a
                        href={item.projectUrl}
                        className="btn btn-view-project"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                      <a
                        href={item.liveDemoUrl}
                        className="btn btn-demo-project"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="text-center p-5">
                <h4>No Projects Found</h4>
                <p>There are no projects available at the moment.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
