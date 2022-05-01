const { Client, Collection } = require('discord.js');

const { promisify } = require("util");
const glob = require("glob");
const cool = require('colors');
const PGlob = promisify(glob);

const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"]
});

client.commands = new Collection();
client.cooldowns = new Collection();

['events', 'commands'].forEach((Files) => {
  require(`./modules/${Files}`)(client, PGlob, cool)
});

client.login(process.env.token)