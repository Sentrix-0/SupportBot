module.exports = {
  name: 'messageCreate',
  async execute(message, client) {
    // Example: log direct messages, ignore if from bot
    if (message.author.bot) return;
    if (message.channel.type === 1) {
      // Handle DMs if needed
      // console.log(`DM from ${message.author.tag}: ${message.content}`);
    }
  }
};