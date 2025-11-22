require('dotenv').config();
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
  ],
  partials: ['CHANNEL']
});

client.commands = new Collection();
client.events = new Collection();

const { handleCommands } = require('./handlers/commandHandler');
const { handleEvents } = require('./handlers/eventHandler');

// Load commands & events
handleCommands(client);
handleEvents(client);

client.login(process.env.BOT_TOKEN);