module.exports.run = async (bot, msg, args) => {
  const awnser = ["Bien évidement !", "Mmmmmmmmmmmmmh je n'en suis pas certaine...", "Malheuresement non..."];
  msg.channel.send(awnser[Math.floor(Math.random() * (awnser.length - 1))]);
}

module.exports.help = {
  name: 'Rose'
}
