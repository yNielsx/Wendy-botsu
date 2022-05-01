const dbs = require('../modules/database');
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'guildCreate',
  async run(client, guild) {
    await dbs.set('Guilds', guild.id, {
      GuildID: guild.id,
      langs: 0,
      welcome: {
        channel: 'Indefinido',
        message: 'Não definido',
        image: 'https://',
        status: false
      }
    });

    const channel = client.channels.cache.get('969911269731762196')

    channel.send({
      content: `> ﹐✿﹒🌸﹔Aee, Wendy foi adicionada em mais um servidor que se chama **${guild.name}** ( \`${guild.id}\` ) e contém **${guild.memberCount}** usuários !﹒⁺ `
    })
  }
}