const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  role: { type: String, enum: ['client', 'freelancer'], required: true },
  name: String,
  email: { type: String, unique: true },
  password: String,
  profile: {
    bio: String,
    skills: [String],
    portfolio: [String],
    ratings: [{ stars: Number, comment: String }],
    xp: { type: Number, default: 0 },
    badges: [String]
  },
  verified: { type: Boolean, default: false }
});
module.exports = mongoose.model('User', userSchema);