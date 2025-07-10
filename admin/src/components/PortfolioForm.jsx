import React, { useState } from 'react';
import axios from 'axios';
import { uploadToCloudinary } from '../utils/cloudinaryUpload';
import { Form, Button, Alert } from 'react-bootstrap';
import './PortfolioForm.css';

const PortfolioForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    projectUrl: '',
    category: 'Web Development', // Default category
  });
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState({ submitted: false, message: '', error: false });

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
      setStatus({ submitted: true, message: 'Error: Please select an image.', error: true });
      return;
    }

    try {
      // 1. Upload image to Cloudinary from the frontend
      setStatus({ submitted: false, message: 'Uploading image...', error: false });
      const imageUrl = await uploadToCloudinary(image);
      setStatus({ submitted: false, message: 'Image uploaded! Saving data...', error: false });

      // 2. Send the image URL and other form data to the backend
      const portfolioData = {
        ...formData,
        imageUrl: imageUrl, // Add the Cloudinary URL to the data
      };

      await axios.post('http://localhost:5000/api/portfolio/add', portfolioData);

      // 3. Handle success
      setStatus({ submitted: true, message: 'Success!', error: false });
      setFormData({ title: '', description: '', projectUrl: '', category: 'Web Development' });
      setImage(null);
      document.getElementById('formImage').value = null;

      setTimeout(() => {
        window.location.href = 'https://innovatech-webworks-portfolio-clien-gamma.vercel.app/portfolio';
      }, 2000);

    } catch (error) {
      const errorMessage = error.response?.data?.error || error.response?.data?.message || error.message || error.toString();
      setStatus({ submitted: true, message: `Error: ${errorMessage}`, error: true });
    }
  };

  return (
    <div className="portfolio-form-container">
      <h2>Add New Portfolio Item</h2>

      {status.submitted && (
        <div className={`success-animation ${status.error ? 'error' : ''}`}>
          <div className="success-message">
            <Alert variant={status.error ? 'danger' : 'success'}>
              {status.message}
            </Alert>
          </div>
        </div>
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

        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>
    </div>
  );
};

export default PortfolioForm;



