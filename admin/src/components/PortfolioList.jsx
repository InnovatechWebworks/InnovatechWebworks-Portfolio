import React, { useState, useEffect } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
import { Table, Button, Spinner, Alert } from 'react-bootstrap';

const PortfolioList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '', variant: 'success' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await api.get('/portfolio');
      setItems(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      setError('Failed to fetch portfolio items.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item permanently?')) {
      try {
        await api.delete(`/portfolio/${id}`);
        setItems(items.filter(item => item._id !== id)); // Update UI immediately
        setAlert({ show: true, message: 'Item deleted successfully!', variant: 'success' });
      } catch (err) {
        const errorMessage = err.response?.data?.message || 'Failed to delete item.';
        setAlert({ show: true, message: errorMessage, variant: 'danger' });
      }
      setTimeout(() => setAlert({ show: false, message: '', variant: 'success' }), 5000);
    }
  };

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
        <p>Loading items...</p>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  const renderAlert = () => (
    alert.show && (
      <Alert 
        variant={alert.variant} 
        onClose={() => setAlert({ ...alert, show: false })} 
        dismissible
        className="mt-3"
      >
        {alert.message}
      </Alert>
    )
  );

  return (
    <div className="portfolio-list-container mt-5">
      <h3>Existing Portfolio Items</h3>
      {renderAlert()}
      {items.length === 0 ? (
        <p>No portfolio items found. Add one using the form above!</p>
      ) : (
        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>
                  <Button as={Link} to={`/edit/${item._id}`} variant="outline-primary" size="sm" className="me-2">Edit</Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(item._id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default PortfolioList;
