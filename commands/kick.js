exports.run = (bot, message, [mention, ...reason]) => {
  
    if (message.mentions.users.size === 0) {
      return message.reply("Please mention a user to kick");
    }

    if(message.member.roles.has('136196804571168769')) {
    const kickMember = message.mentions.members.first();
    kickMember.kick();
    message.reply(`${kickMember} was succesfully kicked.`)
    var channel = bot.channels.find("name", "staff");
    channel.sendMessage(`${kickMember} a été kick par ` + message.author);
    } else if(message.member.roles.has('335451639387258882')) {
      const kickMember = message.mentions.members.first();
      kickMember.kick();
      message.reply(`${kickMember} was succesfully kicked.`)
      var channel = bot.channels.find("name", "staff");
      channel.sendMessage(`${kickMember} a été kick par ` + message.author);
    } else {
      return message.reply("Tu n'a pas la perm d'utiliser cette commande!")
    }
  }