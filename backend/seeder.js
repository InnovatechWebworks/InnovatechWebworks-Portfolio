const mongoose = require('mongoose');
const dotenv = require('dotenv');
const portfolioItems = require('./data/portfolioItems');
const PortfolioItem = require('./models/PortfolioItem');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    await PortfolioItem.deleteMany();
    await PortfolioItem.insertMany(portfolioItems);
    console.log('Data Imported!');
    process.exit();
  } catch (err) {
    console.error(`Error importing data: ${err}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await PortfolioItem.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (err) {
    console.error(`Error destroying data: ${err}`);
    process.exit(1);
  }
};

const run = async () => {
  await connectDB();
  if (process.argv[2] === '-d') {
    await destroyData();
  } else {
    await importData();
  }
};

run();
