import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const staticProjects = [
  {
    _id: '1',
    title: "weather-app",
    description: "A basic weather app",
    category: "JavaScript",
    projectUrl: "https://github.com/InnovatechWebworks/weather-app",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Weather+App",
  },
  {
    _id: '2',
    title: "shopmenia",
    description: "A full stack e-commerce website with admin panel",
    category: "JavaScript",
    projectUrl: "https://github.com/InnovatechWebworks/shopmenia",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Shopmenia",
  },
  {
    _id: '3',
    title: "pizza-delivery-app",
    description: "A full stack pizza delivery application",
    category: "JavaScript",
    projectUrl: "https://github.com/InnovatechWebworks/pizza-delivery-app",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Pizza+App",
  },
  {
    _id: '4',
    title: "bhagwat_geeta_verse_explainer",
    description: "A Bhagwat Geeta verse explainer using Bhagwat Geeta API",
    category: "JavaScript",
    projectUrl: "https://github.com/InnovatechWebworks/bhagwat_geeta_verse_explainer",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Geeta+Explainer",
  },
  {
    _id: '5',
    title: "event-sheduler",
    description: "A smart event scheduler that integrates with weather and helps you to schedule your plans",
    category: "JavaScript",
    projectUrl: "https://github.com/InnovatechWebworks/event-sheduler",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Event+Scheduler",
  },
  {
    _id: '6',
    title: "eve-cafe",
    description: "A basic website for a cafe with email messaging feature",
    category: "JavaScript",
    projectUrl: "https://github.com/InnovatechWebworks/eve-cafe",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Eve+Cafe",
  }
];

const PortfolioPage = () => {
  const [filteredItems, setFilteredItems] = useState(staticProjects);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    // Extract unique categories from the static data
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
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2 className="text-primary text-uppercase fw-bold">Our Portfolio</h2>
        <h3 className="display-6 fw-bold">Explore Our Recent Work</h3>
        <p className="lead text-muted">
          Here are some of the projects we're proud to have worked on.
        </p>
      </div>

      <>
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
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
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <Col key={item._id || index}>
                <Fade triggerOnce delay={index * 100}>
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Img
                      variant="top"
                      src={item.imageUrl}
                      alt={item.title}
                      style={{ objectFit: 'cover', height: '200px' }}
                    />
                    <Card.Body className="p-4 d-flex flex-column">
                      <Card.Title as="h4" className="fw-bold mb-3">{item.title}</Card.Title>
                      <Card.Text className="text-muted flex-grow-1">{item.description}</Card.Text>
                      <Button
                        variant="primary"
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </Button>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <div className="text-center p-5">
                <h4 className="text-muted">No Projects Found</h4>
                <p className="text-muted">
                  There are no projects matching the current filter.
                </p>
              </div>
            </Col>
          )}
        </Row>
      </>
    </Container>
  );
};

export default PortfolioPage;