const { body } = require('express-validator');

exports.registerValidation = [
  body('name').notEmpty().withMessage('Name required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password min 6 chars')
];

exports.loginValidation = [
  body('email').isEmail(),
  body('password').notEmpty()
];

