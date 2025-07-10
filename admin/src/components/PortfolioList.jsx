import React, { useState, useEffect } from 'react';
import api from '../api';
import { Table, Button, Spinner, Alert } from 'react-bootstrap';

const PortfolioList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const res = await api.get('/portfolio');
        setItems(res.data);
      } catch (err) {
        setError('Failed to fetch portfolio items.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

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

  return (
    <div className="portfolio-list-container mt-5">
      <h3>Existing Portfolio Items</h3>
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
                  <Button variant="outline-primary" size="sm" className="me-2">Edit</Button>
                  <Button variant="outline-danger" size="sm">Delete</Button>
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
