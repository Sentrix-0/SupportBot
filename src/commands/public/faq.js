module.exports = {
  data: {
    name: 'faq',
    description: 'Display frequently asked questions',
  },
  async execute(interaction) {
    // TODO: FAQ logic
    await interaction.reply('FAQ: [No entries in mock implementation]');
  }
};