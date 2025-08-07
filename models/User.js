const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  bio: { type: String, default: '' },
  photo_profile: { type: String, default: '' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  counters: {
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
  },
}, { collection: 'user' });

module.exports = mongoose.model('User', userSchema);
