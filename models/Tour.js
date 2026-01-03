const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  dates: [{ type: String }],
  buttonText: { type: String, default: "Турды брондау" }
}, { timestamps: true });

module.exports = mongoose.model('Tour', tourSchema);
