const router = require('express').Router();
const PortfolioItem = require('../models/PortfolioItem');

// GET all portfolio items
router.get('/', async (req, res) => {
  try {
    const items = await PortfolioItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching portfolio items', error: err.message });
  }
});

// POST a new portfolio item
router.post('/add', async (req, res) => {
  const { title, description, imageUrl, projectUrl, category } = req.body;
  const newItem = new PortfolioItem({ title, description, imageUrl, projectUrl, category });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: 'Error adding portfolio item', error: err.message });
  }
});

// GET a specific portfolio item by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await PortfolioItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Portfolio item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching portfolio item', error: err.message });
  }
});

// DELETE a portfolio item by ID
router.delete('/:id', async (req, res) => {
  try {
    const item = await PortfolioItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Portfolio item not found' });
    res.json({ message: 'Portfolio item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting portfolio item', error: err.message });
  }
});

// UPDATE a portfolio item by ID
router.post('/update/:id', async (req, res) => {
  try {
    const updatedItem = await PortfolioItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedItem) return res.status(404).json({ message: 'Portfolio item not found' });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: 'Error updating portfolio item', error: err.message });
  }
});

module.exports = router;
