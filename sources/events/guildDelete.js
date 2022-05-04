const dbs = require('../modules/database');
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'guildDelete',
  async run(client, guild) {
    await dbs.delete('Guilds', guild.id);

    const channel = client.channels.cache.get('969911269731762196')
    channel.send({
      content: `> ﹐✿﹒🌸﹔Infelizmente a Wendy foi removida do servidor **${guild.name}** ( \`${guild.id}\` ) !﹒⁺ `
    })
  }
}