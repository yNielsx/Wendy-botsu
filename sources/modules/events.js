module.exports = async (client, PGlob, cool) => {
  const events = await PGlob(process.cwd() + '/sources/events/*.js');

  events.map((files) => {
    const evts = require(files);

    if(!evts) return;
    if(!evts.name) return console.log(`${cool.bold.cyan('[EVENTOS]')} - Evento indefinido em: ${cool.red.bold(`${files.split("/")[6]}`)}`);

    client.on(evts.name, (...args) => evts.run(client, ...args))
 })
}