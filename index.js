const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready', async () =>{
  bot.user.setActivity('Papounets');
});

bot.login(process.emv.BOT_TOKEN);
