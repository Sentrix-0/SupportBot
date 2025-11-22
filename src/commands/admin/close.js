module.exports = {
  data: {
    name: 'close',
    description: 'Close a ticket.',
  },
  async execute(interaction) {
    // TODO: Close ticket logic
    await interaction.reply('Ticket closed (mock implementation).');
  }
};