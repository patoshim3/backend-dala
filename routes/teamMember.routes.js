const express = require('express');
const router = express.Router();
const {
  getTeamMembers,
  getTeamMemberById,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember
} = require('../controllers/teamMember.controller');

const auth = require('../middlewares/auth'); // Protected routes (admin үшін)

// Барлық команданы алу (ашық)
router.get('/', getTeamMembers);

// Бір мүшені алу
router.get('/:id', getTeamMemberById);

// Жаңа мүшені қосу
router.post('/', auth, createTeamMember);

// Мүшені жаңарту
router.put('/:id', auth, updateTeamMember);

// Мүшені өшіру
router.delete('/:id', auth, deleteTeamMember);

module.exports = router;
