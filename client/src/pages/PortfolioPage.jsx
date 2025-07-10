import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const staticProjects = [
  {
    _id: '1',
    title: "Weather App",
    description: "A basic weather app",
    category: "JavaScript",
    projectUrl: "https://github.com/RAMANP-007/weather-app",
    liveUrl: "",
    imageUrl: "",
  },
  {
    _id: '2',
    title: "Shopmenia",
    description: "A full stack e-commerce website with admin panel",
    category: "JavaScript",
    projectUrl: "https://github.com/RAMANP-007/shopmenia",
    liveUrl: "https://shopmenia.vercel.app/",
    imageUrl: "",
  },
  {
    _id: '3',
    title: "Eve Cafe",
    description: "A basic website for a cafe with email messaging feature",
    category: "JavaScript",
    projectUrl: "https://github.com/RAMANP-007/eve-cafe",
    liveUrl: "https://eve-cafe.vercel.app/",
    imageUrl: "",
  },
  {
    _id: '4',
    title: "Bhagwat Geeta Verse Explainer",
    description: "An explainer app using Bhagwat Geeta API",
    category: "JavaScript",
    projectUrl: "https://github.com/RAMANP-007/bhagwat_geeta_verse_explainer",
    liveUrl: "",
    imageUrl: "",
  },
  {
    _id: '5',
    title: "Event Scheduler",
    description: "A smart event scheduler that integrates with weather APIs",
    category: "JavaScript",
    projectUrl: "https://github.com/RAMANP-007/event-sheduler",
    liveUrl: "",
    imageUrl: "",
  },
  {
    _id: '6',
    title: "Final Work",
    description: "DevOps-based academic portfolio submission",
    category: "Frontend",
    projectUrl: "https://github.com/hritikmondal2003/Final_Work",
    liveUrl: "https://my-project-roan-six-45.vercel.app/",
    imageUrl: "",
  },
  {
    _id: '7',
    title: "Temperature Converter",
    description: "A basic converter using HTML, CSS and JS",
    category: "Frontend",
    projectUrl: "https://github.com/hritikmondal2003/OIBSIP-TEMPERATURE-CONVERTER",
    liveUrl: "",
    imageUrl: "",
  },
  {
    _id: '8',
    title: "Landing Page",
    description: "A clean and responsive landing page",
    category: "Frontend",
    projectUrl: "https://github.com/hritikmondal2003/OIBSIP-LANDING-Page",
    liveUrl: "https://oibsip-landing-page-rosy.vercel.app/",
    imageUrl: "",
  },
  {
    _id: '9',
    title: "Innovatech Webworks Portfolio",
    description: "Official portfolio of Innovatech WebWorks",
    category: "Full Stack",
    projectUrl: "https://github.com/InnovatechWebworks/InnovatechWebworks-Portfolio",
    liveUrl: "https://innovatech-webworks-portfolio-clien-gamma.vercel.app/",
    imageUrl: "",
  }
];

const PortfolioPage = () => {
  const [filteredItems, setFilteredItems] = useState(staticProjects);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const uniqueCategories = ['All', ...new Set(staticProjects.map(item => item.category))];
    setCategories(uniqueCategories);
  }, []);

  const handleFilter = (category) => {
    setActiveFilter(category);
    setShowAll(false);
    if (category === 'All') {
      setFilteredItems(staticProjects);
    } else {
      setFilteredItems(staticProjects.filter(item => item.category === category));
    }
  };

  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, 3);

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2 className="text-primary text-uppercase fw-bold">Our Portfolio</h2>
        <h3 className="display-6 fw-bold">Explore Our Recent Work</h3>
        <p className="lead text-muted">Here are some of the projects we're proud to have worked on.</p>
        <p className="small text-muted">
          <strong>Credits:</strong> Developed by <a href="https://github.com/RAMANP-007" target="_blank" rel="noopener noreferrer">Raman Patra</a>, Product by <a href="https://www.linkedin.com/in/ritak-bag-/" target="_blank" rel="noopener noreferrer">Ritak Bag</a>, DevOps by <a href="https://www.linkedin.com/in/hritikmondal/" target="_blank" rel="noopener noreferrer">Hritik Mondal</a>.
        </p>
      </div>

      <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
        {categories.map(category => (
          <Button
            key={category}
            variant={activeFilter === category ? 'primary' : 'outline-primary'}
            onClick={() => handleFilter(category)}
            className="rounded-pill px-4 text-capitalize"
          >
            {category}
          </Button>
        ))}
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {itemsToShow.length > 0 ? (
          itemsToShow.map((item, index) => (
            <Col key={item._id || index}>
              <Fade triggerOnce delay={index * 100}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img
                    variant="top"
                    src={item.imageUrl || `https://source.unsplash.com/400x200/?project,code,web&sig=${index}`}
                    alt={`Project preview of ${item.title}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://source.unsplash.com/400x200/?technology,software&sig=${index + 20}`;
                    }}
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                  <Card.Body className="p-4 d-flex flex-column">
                    <Card.Title className="fw-bold mb-2">{item.title}</Card.Title>
                    <Card.Text className="text-muted flex-grow-1">{item.description}</Card.Text>
                    <div className="d-grid gap-2 mt-3">
                      <Button
                        variant="primary"
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </Button>
                      {item.liveUrl && (
                        <Button
                          variant="outline-secondary"
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <div className="text-center p-5">
              <h4 className="text-muted">No Projects Found</h4>
              <p className="text-muted">Try selecting a different category.</p>
            </div>
          </Col>
        )}
      </Row>

      {!showAll && filteredItems.length > 3 && (
        <div className="text-center mt-5">
          <Button variant="primary" size="lg" onClick={() => setShowAll(true)}>
            Show All Projects
          </Button>
        </div>
      )}
    </Container>
  );
};

export default PortfolioPage;
