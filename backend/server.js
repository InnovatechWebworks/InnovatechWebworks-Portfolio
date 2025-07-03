const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// ----------------- MIDDLEWARE -----------------
app.use(cors({
  origin: process.env.FRONTEND_URL || '*', // ✅ use specific origin in production
  credentials: true
}));
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
