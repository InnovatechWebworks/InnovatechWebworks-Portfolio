import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';
import { Form, Button, Container, Card, Spinner, Alert } from 'react-bootstrap';

const EditPortfolioPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const categories = [
    'Web Development',
    'App Development',
    'AI & Automation',
    'Cyber Security',
    'DevOps'
  ];

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/portfolio/${id}`);
        setFormData(res.data);
      } catch (err) {
        setError('Failed to fetch portfolio item. It may have been deleted.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await api.post(`/portfolio/update/${id}`, formData);
      navigate('/'); // Redirect to dashboard on success
    } catch (err) {
      setError('Failed to update portfolio item. Please try again.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="text-center p-5"><Spinner animation="border" /></div>;
  }

  if (error || !formData) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="danger">{error || 'Portfolio item not found.'}</Alert>
        <Button variant="secondary" onClick={() => navigate('/')}>Back to Dashboard</Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Card className="p-4 p-md-5">
        <Card.Body>
          <h2 className="text-center mb-4">Edit Portfolio Item</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={4} name="description" value={formData.description} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProjectUrl">
              <Form.Label>Project URL</Form.Label>
              <Form.Control type="text" name="projectUrl" value={formData.projectUrl} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select name="category" value={formData.category} onChange={handleChange}>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <p className="text-muted">Note: Image URL cannot be changed from this form. To change the image, please delete and re-add the item.</p>

            <Button variant="primary" type="submit" disabled={submitting} className="w-100 mt-3">
              {submitting ? <Spinner as="span" animation="border" size="sm" /> : 'Save Changes'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditPortfolioPage;
