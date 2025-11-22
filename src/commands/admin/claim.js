module.exports = {
  data: {
    name: 'claim',
    description: 'Claim a ticket for yourself.',
  },
  async execute(interaction) {
    // TODO: Ticket claim logic
    await interaction.reply('Ticket claimed (mock implementation).');
  }
};