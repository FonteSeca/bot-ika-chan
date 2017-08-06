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

  let cor = 'cor-destaque',

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
    		case 'ohayo':
    			return ohayo(msg, suffix);
    		default:
    			msg.channel.send(basicembed('cor-destaque', 'Comando errado ' + msg.author + ' b-baka...'));
    		}
    }
  }

  // Template Mensagem Básica
  function basicembed(color, text) {
    return {embed: {
      color: color,
      description: text
      }};
  }

  // Template Mensagem com Imagem
  function imageembed(color, image, text) {
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
    msg.channel.send(basicembed('cor-destaque', 'Ohayo ' + mention.toString()));
  }

  function isAdmin(member) {
    return member.hasPermission("ADMINISTRATOR");
  }

  function permission(msg, suffix) {
    msg.delete();
    if (isAdmin(msg.member)) {
      msg.channel.send(basicembed('cor-destaque', 'Com permissão, nha'));
    } else {
      msg.channel.send(basicembed('cor-destaque', 'Sem permissão'));
    }
  }

  function ship(msg, suffix) {
    msg.delete();
    const mention = msg.mentions.users.first();
    const strmention = mention.username.toString();
    const strname = mention.length();
    const mention_other = msg.mentions.users.last();
    const strmention_other = mention_other.username.toString();
    const strname_other = mention.length();
    const strtotal = (strname + strname_other)/2;
    const ship_trimOne = strmention.substring(4);
    const ship_trimTwo = strmention_other.substring(4);
    const ship_name = ship_trimOne + ship_trimTwo;

    msg.channel.send(basicembed('cor-destaque', ship_name));
  }

  function delet(msg, suffix) {
    const messages = msg.channel.DownloadMessages(5);
    msg.DeleteMessages(messages);
  }

  function ajuda(msg, suffix) {
    msg.delete();
    msg.channel.send({embed: {
      color: cor-destaque,
      author: {
        name: Bot.user.username,
        icon_url: Bot.user.avatarURL
      },
      title: "COMANDOS DA IKA-CHAN",
      description: "B-baka :heart: ",
      fields: [{
        name: "Em Desenvolvimento",
        value: "Em Desenvolvimento"
      },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: Bot.user.avatarURL,
        text: "© Ika-chan"
      }
    }
  });
  }



  Bot.login(token);
