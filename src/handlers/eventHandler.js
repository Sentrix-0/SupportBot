const { readdirSync } = require('fs');
const path = require('path');

function handleEvents(client) {
  const eventsPath = path.join(__dirname, '../events');
  for (const file of readdirSync(eventsPath).filter(f => f.endsWith('.js'))) {
    const event = require(path.join(eventsPath, file));
    if (event && event.name && typeof event.execute === 'function') {
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
      } else {
        client.on(event.name, (...args) => event.execute(...args, client));
      }
    }
  }
}

module.exports = { handleEvents };