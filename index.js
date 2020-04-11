const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');

bot.on('ready', async () =>{
  console.log('le bot est lancé');
  bot.user.setActivity('Papounets');
});

bot.on('message', async (msg) => {
  if(msg.content.startsWith(config.prefix) && !msg.author.bot){
    cmdArray = msg.content.substring(1).split(" ")
    cmd = cmdArray[0]
    args = cmdArray.slice(1)

    if(cmd == 'ping'){
      msg.channel.send("pong xD")
    }
    if(cmd == 'message'){
      if(args.length < 1) return msg.channel.send("Pas assez d'arguments")
      var message = ""
      for(let i = 0; i < args.length; i++){
        message += args[i] + " "
      }
      msg.chanel.send("message: " + message)
    }
  }
});

bot.login(config.token);
