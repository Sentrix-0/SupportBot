module.exports = {
  data: {
    name: 'adduser',
    description: 'Add a new user to the support system',
  },
  async execute(interaction) {
    // TODO: Implement logic to add a user
    await interaction.reply('User has been added (mock implementation).');
  }
};