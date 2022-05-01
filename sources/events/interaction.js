const dbs = require('../modules/database');
const { MessageEmbed, Collection } = require('discord.js');
const pt = require('../locales/ptbr');
const en = require('../locales/enus');
const emj = require('../files/emotes');

module.exports = {
  name: 'interactionCreate',
  async run(client, interaction, message) {
    const cooldowns = client.cooldowns;
    const commands = client.commands;
    const interactionUser = interaction.user.id;
    const GuildDB = await dbs.fetch('Guilds', interaction.guild.id);
    const UserDB = await dbs.fetch('Users', interaction.user.id);

    if (GuildDB) {
      if (interaction.isCommand()) {
        const command = commands.get(interaction.commandName);
        const langs = GuildDB.langs === 0 ? pt : en;

        if (!command) return;
        if (!interaction.member.permissions.has(command.permissions || [])) {
          return interaction.reply({
            content: `> ( ${emj.warn} ) **・** ${String(langs.hasPermissions.user).replace('{PERMS}', command.permissions)}`,
            ephemeral: true
          })
        };

        if (!interaction.guild.me.permissions.has(command.botPermissions || [])) {
          return interaction.reply({
            content: `> ( ${emj.warn} ) **・**  ${String(langs.hasPermissions.bot).replace('{PERMS}', command.botPermissions)}`,
            ephemeral: true
          })
        }

        if (!UserDB) {
          return interaction.reply({
            content: `> ( ${emj.megafone} ) **・** ${String(langs.userDB)}`,
            ephemeral: true
          })
        }

        if (!cooldowns.has(interactionUser)) cooldowns.set(interactionUser, new Collection());

        const now = Date.now();
        const stamps = cooldowns.get(interactionUser);
        const cAmount = 10 * 1000;

        if (stamps.has(interactionUser)) {
          const exTime = stamps.get(interactionUser) + cAmount;

          if (now < exTime) {
            const Timeout = (exTime - now) / 1000;
            return interaction.reply({
              content: `> ${String(langs.cooldownInt).replace('{TIME}', Math.round(Timeout.toFixed(1)))}`,
              ephemeral: true
            });
          }
        }

        stamps.set(interactionUser, now);
        setTimeout(() => stamps.delete(interactionUser), cAmount);


        if (command) {
          try {
            command.run(client, interaction, langs);
          } catch (err) {
            const channel = client.channels.cache.get('970001491689607168')

            channel.send(`Um novo erro encontrado \n ${err}\n no comando ${command.name}`)
          }
        }
      }
    }
  }
}