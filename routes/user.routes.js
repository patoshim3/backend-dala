const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/user.controller');
const { registerValidation, loginValidation } = require('../middlewares/validation');
const auth = require('../middlewares/auth'); // JWT тексеретін middleware
const { updateProfile, changePassword } = require('../controllers/user.controller');
const { deleteUser, getAllUsers } = require('../controllers/user.controller');


router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.put('/update-profile', auth, updateProfile);
router.put('/change-password', auth, changePassword);
router.delete('/:id', auth, deleteUser); 
router.get('/', auth, getAllUsers);

router.get('/me', auth, (req, res) => {
  res.json(req.user);
});

module.exports = router;
