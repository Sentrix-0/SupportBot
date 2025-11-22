const { EmbedBuilder } = require('discord.js');

function createBasicEmbed(title, description, color = '#0099ff') {
  return new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setColor(color);
}

module.exports = { createBasicEmbed };