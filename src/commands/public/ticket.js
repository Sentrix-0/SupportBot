module.exports = {
  data: {
    name: 'ticket',
    description: 'Open a support ticket',
  },
  async execute(interaction) {
    // TODO: Ticket opening logic
    await interaction.reply('Support ticket created (mock implementation).');
  }
};