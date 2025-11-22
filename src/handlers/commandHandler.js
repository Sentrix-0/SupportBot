const { readdirSync } = require('fs');
const path = require('path');

function handleCommands(client) {
  const commandFolders = ['admin', 'public', 'staff'];
  for (const folder of commandFolders) {
    const folderPath = path.join(__dirname, '../commands', folder);
    for (const file of readdirSync(folderPath).filter(f => f.endsWith('.js'))) {
      const command = require(path.join(folderPath, file));
      if (command.data && command.execute) {
        client.commands.set(command.data.name, command);
      }
    }
  }
}

module.exports = { handleCommands };