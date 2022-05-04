const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'icons',
  description: '🖼 Display icons of the provided user and server',
  botPermissions: ["ADMINISTRATOR"],
  options: [
    {
      name: 'membros',
      description: '🖼 Display icon of the user',
      type: 'SUB_COMMAND',
      options: [
        {
          name: 'usuário',
          description: 'User to display',
          type: 'USER'
        }
      ]
    },
    {
      name: 'servidor',
      description: '🖼 Display icon of the server',
      type: 'SUB_COMMAND',
      options: [
        {
          name: 'guilda',
          description: 'Server to display',
          type: 'STRING'
        }
      ]
    }
  ],
  run(client, interaction, langs) {
    const Usericon = interaction.options.getSubcommand('usuário');

    if (Usericon) {
      try {
        babalu.send();
        interaction.reply(`${babalu.jovem}`)
      } catch (err) {
       const int = interaction.reply({
          content: `${String(langs.ErrorCommand)}`,
          ephemeral: true
        });

        const channel = client.channels.cache.get('970001491689607168')

            const msg = channel.send(`> ✿┆₊🌼୧◦Foi encontrado um novo erro no comando \`/icons membros\`, no servidor **${interaction.guild.name}** ( \`${interaction.guild.id}\` )! ˖.⭒

**ʚ🐞୧﹕Erro encontradoഒ**\`\`\`js
${err}
\`\`\``)

        return int, msg
      }
    } else {
      try {
        
      } catch (err) {
        return interaction.reply({
          content: `${String(langs.ErrorCommand)}`,
          ephemeral: true
        });

      const channel = client.channels.cache.get('970001491689607168')

            channel.send(`> ✿┆₊🌼୧◦Foi encontrado um novo erro no comando \`/icons servidor\`, no servidor **${interaction.guild.name}** ( \`${interaction.guild.id}\` )! ˖.⭒

**ʚ🐞୧﹕Erro encontradoഒ**\`\`\`js
${err}
\`\`\``)
      }
    }

  }
}