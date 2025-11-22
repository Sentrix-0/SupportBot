const mongoose = require('mongoose');
const ticketSchema = new mongoose.Schema({
  userId: String,
  category: String,
  description: String,
  status: String,
  createdAt: { type: Date, default: Date.now },
  closedAt: Date
});
module.exports = mongoose.model('Ticket', ticketSchema);