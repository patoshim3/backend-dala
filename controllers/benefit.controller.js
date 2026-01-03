const Benefit = require('../models/Benefit');

// Барлық benefits алу
exports.getBenefits = async (req, res) => {
  try {
    const benefits = await Benefit.find();
    res.json(benefits);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Жаңа benefit қосу
exports.createBenefit = async (req, res) => {
  try {
    const benefit = await Benefit.create(req.body);
    res.status(201).json(benefit);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Benefit жаңарту
exports.updateBenefit = async (req, res) => {
  try {
    const benefit = await Benefit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!benefit) return res.status(404).json({ message: 'Benefit not found' });
    res.json(benefit);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Benefit өшіру
exports.deleteBenefit = async (req, res) => {
  try {
    const benefit = await Benefit.findByIdAndDelete(req.params.id);
    if (!benefit) return res.status(404).json({ message: 'Benefit not found' });
    res.json({ message: 'Benefit deleted ✅' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
