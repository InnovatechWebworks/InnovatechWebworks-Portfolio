import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioForm from './components/PortfolioForm';
import PortfolioList from './components/PortfolioList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4 display-4 fw-bold text-primary">Admin Dashboard</h1>
            <p className="text-center text-muted mb-5">Manage your portfolio content here.</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <PortfolioForm />
            <PortfolioList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
