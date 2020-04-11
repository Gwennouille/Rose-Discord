const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');
const commands = require('./commands.js');

bot.on('ready', async () =>{
  console.log('le bot est lancé');
  bot.user.setActivity('Papounets');
});

bot.on('message', async (msg) => {
  if(msg.content.startsWith(config.prefix) && !msg.author.bot){
    cmdArray = msg.content.substring(config.prefix.length).split(" ");
    cmd = cmdArray[0];
    args = cmdArray.slice(1);

    let command = commands.getCommand(cmd);
    if(command) comand.run(bot, msg, args);
  }
});

bot.login(config.token);
