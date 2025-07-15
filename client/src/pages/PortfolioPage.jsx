import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PortfolioPage.css';

const staticProjects = [
  {
    _id: '1',
    title: "weather-app",
    description: "A basic weather app",
    category: "JavaScript",
    projectUrl: "https://github.com/InnovatechWebworks/weather-app",
    imageUrl: "/images/weather-app.png",
  },
  {
    _id: '2',
    title: "shopmenia",
    description: "A full stack e-commerce website with admin panel",
    category: "JavaScript",
    projectUrl: "https://github.com/InnovatechWebworks/shopmenia",
    imageUrl: "/images/shopmenia.png",
  },
  {
    _id: '3',
    title: "pizza-delivery-app",
    description: "A full stack pizza delivery application",
    category: "JavaScript",
    projectUrl: "https://github.com/InnovatechWebworks/pizza-delivery-app",
    imageUrl: "/images/pizza-delivery-app.png",
  },
  {
    _id: '4',
    title: "bhagwat_geeta_verse_explainer",
    description: "A Bhagwat Geeta verse explainer using Bhagwat Geeta API",
    category: "JavaScript",
    projectUrl: "https://github.com/InnovatechWebworks/bhagwat_geeta_verse_explainer",
    imageUrl: "/images/bhagwat_geeta_verse_explainer.png",
  },
  {
    _id: '5',
    title: "event-sheduler",
    description: "A smart event scheduler that integrates with weather and helps you to schedule your plans",
    category: "JavaScript",
    projectUrl: "https://github.com/InnovatechWebworks/event-sheduler",
    imageUrl: "/images/event-sheduler.png",
  },
  {
    _id: '6',
    title: "eve-cafe",
    description: "A basic website for a cafe with email messaging feature",
    category: "JavaScript",
    projectUrl: "https://github.com/InnovatechWebworks/eve-cafe",
    imageUrl: "/images/eve-cafe.png",
  }
];

const PortfolioPage = () => {
  const [filteredItems, setFilteredItems] = useState(staticProjects);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    const uniqueCategories = ['All', ...new Set(staticProjects.map(item => item.category))];
    setCategories(uniqueCategories);
  }, []);

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredItems(staticProjects);
    } else {
      setFilteredItems(staticProjects.filter(item => item.category === category));
    }
  };

  return (
    <div className="portfolio-page">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Our Portfolio</h2>
          <h3>Explore Our Recent Work</h3>
          <p>Here are some of the projects we're proud to have worked on.</p>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="portfolio-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`btn ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => handleFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={item._id || index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card portfolio-card">
                  <img src={item.imageUrl} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href={item.projectUrl} className="btn btn-view-project" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="text-center p-5">
                <h4>No Projects Found</h4>
                <p>There are no projects matching the current filter.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;