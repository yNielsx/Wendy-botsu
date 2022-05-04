module.exports = {
  name: 'ping',
  description: '📡 Send a ping request',
  run(client, interaction, langs) {
    interaction.reply(`🏓 **pong!!** **\` ${client.ws.ping}ms \`**`) 
 }
}