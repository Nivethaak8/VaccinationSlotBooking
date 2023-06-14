// backend/models/Centre.js
const mongoose = require('mongoose');

const centreSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  workingHours: { type: String, required: true },
  slotsAvailable: { type: Number, default: 10 },
});

module.exports = mongoose.model('Centre', centreSchema);
