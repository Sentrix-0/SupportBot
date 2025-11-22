const mongoose = require('mongoose');
const userLogSchema = new mongoose.Schema({
  userId: String,
  action: String,
  timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('UserLog', userLogSchema);