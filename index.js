const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');

bot.on('ready', async () =>{
  console.log('le bot est lancé');
  bot.user.setActivity('Papounets');
});

bot.on('message', async (msg) => {
  if(msg.content.startsWith(config.prefix) && !msg.author.bot){
    cmdArray = msg.content.substring(config.prefix.length).split(" ");
    cmd = cmdArray[0];
    args = cmdArray.slice(1);

  }
});

bot.login(config.token);
