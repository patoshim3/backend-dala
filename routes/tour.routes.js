const express = require('express');
const router = express.Router();
const {
  getTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour
} = require('../controllers/tour.controller');

const auth = require('../middlewares/auth'); // Protected routes (admin үшін)

// Барлық турларды алу (ашық)
router.get('/', getTours);

// Бір турды алу
router.get('/:id', getTourById);

// Жаңа тур қосу
router.post('/', auth, createTour);

// Турды жаңарту
router.put('/:id', auth, updateTour);

// Турды өшіру
router.delete('/:id', auth, deleteTour);

module.exports = router;
