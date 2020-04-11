const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');

bot.on('ready', async () =>{
  console.log('le bot est lancé');
  bot.user.setActivity('Papounets');
});

bot.login(config.token);
