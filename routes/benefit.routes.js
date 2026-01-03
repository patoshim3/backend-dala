const express = require('express');
const router = express.Router();
const {
  getBenefits,
  createBenefit,
  updateBenefit,
  deleteBenefit
} = require('../controllers/benefit.controller');

const auth = require('../middlewares/auth'); // Protected routes (admin үшін)

// Барлық benefits алу (ашық)
router.get('/', getBenefits);

// Жаңа benefit қосу
router.post('/', auth, createBenefit);

// Benefit жаңарту
router.put('/:id', auth, updateBenefit);

// Benefit өшіру
router.delete('/:id', auth, deleteBenefit);

module.exports = router;
