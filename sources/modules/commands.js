module.exports = async (client, PGlob, cool) => {
  const commands = await PGlob(process.cwd() + '/sources/commands/*/*.js');

  let commandsArray = [];

  commands.map((files) => {
    const cmds = require(files);

    if (!cmds) return;

    client.commands.set(cmds.name, cmds);
    commandsArray.push(cmds);

    if (cmds) {
      return console.log(`[SLASH COMMAND] - Comando ${cool.green.bold(`${cmds.name}`)} carregado com sucesso.`)
    }

  });

  client.on('ready', async () => {
    const mainGuild = await client.guilds.cache.get('968499292673278083');

    mainGuild.commands.set(commandsArray);
  });
}