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
    case 'kiss':
      return kiss(msg, suffix);
    case 'say':
      return say(msg, suffix);
    case 'onii':
      return onii(msg, suffix);
    case 'ship':
      return ship(msg, suffix);
    case 'casar':
      return casar(msg, suffix);

    // Comandos Kitty-cat
    case 'banho':
      return banho(msg, suffix);
    case 'sopa':
      return sopa(msg, suffix);
    case 'beijo':
      return beijo(msg, suffix);

    // Comandos Suporte Adm
    case 'ajuda':
      return ajuda(msg, suffix);
    case 'kick':
      return kick(msg, suffix);
    case 'delet':
      return delet(msg, suffix);
    default:
      msg.channel.send(basicembed('5351170', 'Comando errado ' + msg.author + ' b-baka...'));
    }
  }

    if ((/~lolicon/).test(message.content)) {
      const mention = message.mentions.users.first();
      message.channel.send({embed: {
        color: 5351170,
        description: mention.toString() + ", O-onii-san"
      }});
      message.delete().then(msg => console.log(`Deleted message from ${msg.author}`)).catch(console.error);
    }
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

  function banho(msg, suffix) {
    msg.delete();
    const mention = msg.mentions.users.first();
    msg.channel.send(imageembed('5351170', 'https://68.media.tumblr.com/cbad86fd71e480486c1d6ef983a03b97/tumblr_o4jxlkyrMd1rc0rvzo1_500.png', mention.toString() + ' está dando banho na ' + Bot.user));
  }

  function beijo(msg, suffix) {
    msg.delete();
    const mention = msg.mentions.users.first();
    msg.channel.send(imageembed('5351170', 'https://i.ytimg.com/vi/_IRuDIsj3vE/maxresdefault.jpg', mention.toString() + ' deu beijo indireto na ' + Bot.user));
  }

  function kiss(msg, suffix) {
    msg.delete();
    const mention = msg.mentions.users.first();
    const mention_other = msg.mentions.users.last();
    msg.channel.send(basicembed('5351170', mention.toString() + ' deu um beijo em ' + mention_other.toString()));
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

    msg.channel.send(basicembed('5351170', ship_name));
  }

  function say(msg, suffix) {
    msg.delete();
    msg.channel.send(basicembed('5351170', suffix));
  }

  function onii(msg, suffix) {
    msg.delete();
    msg.channel.send(basicembed('5351170', mention.toString() + ', O-onii-san'));
  }

  function ajuda(msg, suffix) {
    msg.delete();
    msg.channel.send({embed: {
      color: 3447003,
      author: {
        name: Bot.user.username,
        icon_url: Bot.user.avatarURL
      },
      title: "COMANDOS DA KITTY-CAT",
      description: "B-baka :heart: ",
      fields: [{
        name: "!banho @user",
        value: "@user da banho na Kitty"
      },
      {
        name: "RABBITÃO",
        value: "[Rabbit - iFonteSeca](https://www.rabb.it/ifonteseca) \r[Rabbit - MaVi](https://www.rabb.it/MaVi) "
      },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: Bot.user.avatarURL,
        text: "© Kitty-Cat"
      }
    }
  });
  }

    function delet(msg, suffix) {
      const messages = msg.channel.DownloadMessages(5);

      msg.DeleteMessages(messages);
    }

  Bot.login(token);
