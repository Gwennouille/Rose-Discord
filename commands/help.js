const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
  let hEmbed = new Discord.MessageEmbed()
  .setColor('ff0000')
  .setTtile('Vous êtes perdu ?')
  .setDescription('Je me dévoile à vous')
  .addField('prefixe:', 'Utiliez le préfixe $ avant chaque commande ^^')
  .addField('Commandes:', '-message: Répéter un message choisi')
  .setFooter("J'espère vous avoir aidé...");
  msg.channel.send(hEmbed);
};

module.exports.help = {
  name: 'help'
}
