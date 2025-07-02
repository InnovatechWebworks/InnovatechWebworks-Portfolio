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

const startServer = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('🔴 MONGO_URI is not defined in .env file. Please check your configuration.');
    process.exit(1);
  }

  console.log('🟡 Attempting to connect to MongoDB...');
  console.log(`   - URI Host: ${uri.split('@')[1]?.split('/')[0] || 'Not found'}`); // Log host without credentials

  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB database connection established successfully');
    app.listen(port, () => {
      console.log(`🚀 Server is running on port: ${port}`);
    });
  } catch (error) {
    console.error('🔴🔴🔴 Database connection failed! 🔴🔴🔴');
    console.error('   - Error Message:', error.message);
    console.error('   - Please ensure your MONGO_URI is correct in the .env file and that your IP address is whitelisted in MongoDB Atlas.');
    process.exit(1);
  }
};

startServer();

