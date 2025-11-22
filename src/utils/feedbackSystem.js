// Mock implementation for feedback logic
function receiveFeedback(userId, feedback) {
  return { userId, feedback, receivedAt: new Date() };
}

module.exports = { receiveFeedback };