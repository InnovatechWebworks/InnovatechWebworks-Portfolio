import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import EditPortfolioPage from './pages/EditPortfolioPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/edit/:id" element={<EditPortfolioPage />} />
      </Routes>
    </div>
  );
}

export default App;
