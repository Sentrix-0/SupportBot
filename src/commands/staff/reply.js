module.exports = {
  data: {
    name: 'reply',
    description: 'Reply to a ticket',
  },
  async execute(interaction) {
    // TODO: Reply logic
    await interaction.reply('Replied to ticket (mock implementation).');
  }
};