import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';

const PortfolioPage = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get('/api/portfolio');
        if (Array.isArray(res.data)) {
          setItems(res.data);
          setFilteredItems(res.data);
          const uniqueCategories = ['All', ...new Set(res.data.map(item => item.category))];
          setCategories(uniqueCategories);
        } else {
          setError('Received invalid data from server.');
          setItems([]);
          setFilteredItems([]);
        }
      } catch (err) {
        console.error('Error fetching portfolio items:', err);
        setError(err.response?.data?.message || err.message || 'An unknown error occurred.');
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.category === category));
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

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2">Loading Portfolio...</p>
        </div>
      ) : error ? (
        <Alert variant="danger" className="text-center">{error}</Alert>
      ) : (
        <>
          <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeFilter === category ? 'primary' : 'outline-primary'}
                onClick={() => handleFilter(category)}
                className="rounded-pill px-4"
              >
                {category}
              </Button>
            ))}
          </div>

          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <Col key={item._id}>
                  <Fade triggerOnce delay={index * 100}>
                    <Card className="h-100 shadow-sm border-0 portfolio-card">
                      <Card.Img variant="top" src={item.imageUrl} />
                      <Card.Body className="p-4">
                        <Card.Title as="h4" className="fw-bold mb-3">{item.title}</Card.Title>
                        <Card.Text className="text-muted">{item.description}</Card.Text>
                        <Button variant="primary" href={item.projectUrl} target="_blank">View Project</Button>
                      </Card.Body>
                    </Card>
                  </Fade>
                </Col>
              ))
            ) : (
              <Col className="text-center w-100">
                <p className="text-muted">No portfolio items found. Add some in the admin dashboard!</p>
              </Col>
            )}
          </Row>
        </>
      )}
    </Container>
  );
};

export default PortfolioPage;

