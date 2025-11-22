const mongoose = require('mongoose');
async function dbConnect(uri) {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected');
  } catch (e) {
    console.error('Database connection error:', e);
  }
}
module.exports = dbConnect;