const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
const portfolioRouter = require('./routes/portfolio');
app.use('/api/portfolio', portfolioRouter);

app.get('/', (req, res) => {
  res.send('Innovatech Web Works API is running...');
});

// Connect to MongoDB
const uri = process.env.MONGO_URI;
if (!uri) {
  console.error('🔴 MONGO_URI is not defined in .env file. Please check your configuration.');
} else {
    mongoose.connect(uri).then(() => {
        console.log('✅ MongoDB database connection established successfully');
    }).catch(error => {
        console.error('🔴🔴🔴 Database connection failed! 🔴🔴🔴');
        console.error('   - Error Message:', error.message);
    });
}

// Export the app for Vercel
module.exports = app;

