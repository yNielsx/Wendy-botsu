const emj = require('../../files/emotes');

module.exports = {
  name: 'ping',
  description: '📡 Send a request ping',
  permissions: ["SEND_MESSAGES"],
  run(client, interaction, langs) {
    interaction.reply({
      content: `${emj.ping} ${String(langs.utilities.ping)
        .replace('{PING}', Math.round(client.ws.ping))}`,
    })
  }
}