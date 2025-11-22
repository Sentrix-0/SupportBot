module.exports = {
  data: {
    name: 'feedback',
    description: 'Submit feedback',
  },
  async execute(interaction) {
    // TODO: Feedback logic
    await interaction.reply('Feedback submitted (mock implementation).');
  }
};