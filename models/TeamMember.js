const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String },
  image: { type: String },
  socialLinks: {
    instagram: { type: String }
  }
}, { timestamps: true });

module.exports = mongoose.model('TeamMember', teamMemberSchema);
