require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 5000;

// ----------------- MIDDLEWARE -----------------
const allowedOrigins = [
  'http://localhost:3000', // Your local client
  'http://localhost:5173', // Your local admin dashboard
  'http://localhost:5174', // Fallback port for admin dashboard
  process.env.FRONTEND_URL
].filter(Boolean); // Removes any falsy values if FRONTEND_URL is not set

const corsOptions = {
  origin: allowedOrigins,
  credentials: true
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

// ----------------- ROUTES -----------------
const portfolioRouter = require('./routes/portfolio');
app.use('/api/portfolio', portfolioRouter);

app.get('/', (req, res) => {
  res.send('✅ Innovatech Web Works API is running...');
});

// ----------------- MONGO CONNECTION -----------------
const uri = process.env.MONGO_URI;
if (!uri) {
  console.error('🔴 MONGO_URI is not defined in .env file. Please check your configuration.');
} else {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('✅ MongoDB database connection established successfully');
  }).catch(error => {
    console.error('🔴 Database connection failed!');
    console.error('   - Error Message:', error.message);
  });
}

// ----------------- EXPORT OR LISTEN -----------------
// Required by Vercel
module.exports = app;

// If running locally or directly (not in Vercel)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 Server is running on port: ${port}`);
  });
}
