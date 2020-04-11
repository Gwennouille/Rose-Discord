module.exports.run = async (bot, msg, args) => {
  if(args.length < 1) return msg.channel.send("Laissez moi")
  var message = args.join(' ');
  msg.channel.send(" " + message)
}

module.exports.help = {
  name: 'message'
}
