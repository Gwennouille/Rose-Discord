const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');

bot.on('ready', async () =>{
  console.log('le bot est lancé');
  bot.user.setActivity('Papounets');
});

bot.on('message', async (msg) => {
  if(msg.content == 'bonjour'){
    msg.channel.send('Coucou !')
  }
});

bot.login(config.token);
