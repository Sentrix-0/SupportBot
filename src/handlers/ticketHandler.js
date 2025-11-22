const Ticket = require('../database/models/ticket');

async function createTicket(userId, category, description) {
  const ticket = await Ticket.create({ userId, category, description, status: 'open' });
  return ticket;
}

async function closeTicket(ticketId) {
  return Ticket.findByIdAndUpdate(ticketId, { status: 'closed', closedAt: new Date() });
}

async function getOpenTickets() {
  return Ticket.find({ status: 'open' });
}

module.exports = { createTicket, closeTicket, getOpenTickets };