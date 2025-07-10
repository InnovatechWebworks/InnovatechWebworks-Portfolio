import React, { useState } from 'react';
import api from '../api'; // Use the configured axios instance
import { uploadToCloudinary } from '../utils/cloudinaryUpload';
import { Form, Button, Alert, Spinner } from 'react-bootstrap'; // Import Spinner
import './PortfolioForm.css';

const PortfolioForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    projectUrl: '',
    category: 'Web Development', // Default category
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', variant: 'success' });

  const categories = [
    'Web Development',
    'App Development',
    'AI & Automation',
    'Cyber Security',
    'DevOps'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setAlert({ show: true, message: 'Please select an image to upload.', variant: 'danger' });
      return;
    }

    setLoading(true);
    setAlert({ show: false, message: '', variant: 'success' });

    try {
      // 1. Upload image to Cloudinary
      const imageUrl = await uploadToCloudinary(image);

      // 2. Send the complete portfolio data to the backend
      const portfolioData = { ...formData, imageUrl };
      await api.post('/portfolio/add', portfolioData);

      // 3. Handle success: show message and reset form
      setAlert({ show: true, message: 'Portfolio item added successfully!', variant: 'success' });
      setFormData({ title: '', description: '', projectUrl: '', category: 'Web Development' });
      setImage(null);
      e.target.reset(); // Reset the form fields

    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'An error occurred while adding the item.';
      setAlert({ show: true, message: errorMessage, variant: 'danger' });
    } finally {
      setLoading(false);
      // Hide alert after 5 seconds
      setTimeout(() => setAlert({ show: false, message: '', variant: 'success' }), 5000);
    }
  };

  return (
    <div className="portfolio-form-container">
      <h2>Add New Portfolio Item</h2>

      {alert.show && (
        <Alert 
          variant={alert.variant} 
          onClose={() => setAlert({ ...alert, show: false })} 
          dismissible
          className="fade"
        >
          {alert.message}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Item Title</Form.Label>
          <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Enter item title" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} placeholder="Enter item description" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name="image" onChange={handleImageChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProjectUrl">
          <Form.Label>Project URL</Form.Label>
          <Form.Control type="text" name="projectUrl" value={formData.projectUrl} onChange={handleChange} placeholder="Enter project URL" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Select name="category" value={formData.category} onChange={handleChange}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading} className="w-100">
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="ms-2">Adding Item...</span>
            </>
          ) : (
            'Add Item'
          )}
        </Button>
      </Form>
    </div>
  );
};

export default PortfolioForm;



