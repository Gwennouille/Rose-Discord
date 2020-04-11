module.exports.run = async (bot, msg, args) => {
  if(args.length < 1) return msg.channel.send("Laissez moi")
  var message = '';
  for(let i = 0; i < args.length; i++){
    message += args [i] + ' ';
  }

  msg.channel.send(" " + message)
};

module.exports.help = {
  name: 'message'
}
