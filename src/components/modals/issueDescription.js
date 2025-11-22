module.exports = {
  customId: 'issueDescription',
  async execute(interaction) {
    // Handle issue description modal
    await interaction.reply('Issue description submitted (mock implementation).');
  }
};