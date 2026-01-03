const mongoose = require('mongoose');

const benefitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  size: { type: String, enum: ['small','large'], default: 'small' }
}, { timestamps: true });

module.exports = mongoose.model('Benefit', benefitSchema);
