  const Discord = require('discord.js');
  const music = require('discord.js-music-v11');
  const Bot = new Discord.Client();
  const token = "MzQyODQ5MjY2ODEwNzQ4OTI4.DGfNJQ.D0lansUoqvk6wDfefAlF0FTtcC0" // Recommended to load from json file.

  Bot.on('ready', () => {
      console.log(`[Start] ${new Date()}`);
      Bot.user.setGame('O-onii-san... <3')
  });

  music(Bot);

  let PREFIX = '+';
  let ADM_PREFIX = '++';

  let cor_destaque = '5351170';

  Bot.on('message', msg => {

    const message = msg.content.trim();

    // Verifica se a mensagem é um comando
    if (message.toLowerCase().startsWith(PREFIX.toLowerCase())) {
      // Get the command and suffix.
      const command = message.substring(PREFIX.length).split(/[ \n]/)[0].toLowerCase().trim();
      const suffix = message.substring(PREFIX.length + command.length).trim();

      // Comando
     switch (command) {
    case 'permission':
      return test(msg, suffix);
    case 'delet':
      return delet(msg, suffix);

    default:
      msg.channel.send(basicembed('5351170', 'Comando errado ' + msg.author + ' b-baka...'));
    }
  }

    if ((/oi/).test(message.content) || (/oie/).test(message.content) || (/yo/).test(message.content)) {
      const mention = message.mentions.users.first();
      console.log('asdasd');
      msg.channel.send(basicembed(cor-destaque, 'Olá'));
  });

  function basicembed(color,text) {
    return {embed: {
      color: color,
      description: text
      }};
  }

  function imageembed(color,image,text) {
  return {embed: {
    "color": color,
    "description": text,
    "image": {
    "url": image}
    }};
}

  function ohayo(msg, suffix) {
    msg.delete();
    const mention = msg.mentions.users.first();
    msg.channel.send(basicembed('5351170', 'Ohayo ' + mention.toString()));
  }

  function isAdmin(member) {
    return member.hasPermission("ADMINISTRATOR");
  }

  function permission(msg, suffix) {
    msg.delete();
    if (isAdmin(msg.member)) {
      msg.channel.send(basicembed('5351170', 'Com permissão, nha'));
    } else {
      msg.channel.send(basicembed('5351170', 'Sem permissão'));
    }
  }

  Bot.login(token);
