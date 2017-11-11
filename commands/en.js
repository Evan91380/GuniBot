exports.run = (bot, message, args, member) => {
      if(message.member.roles.has('364149966966620160')) {
        message.member.removeRole('364149966966620160').catch(console.error);
        message.reply("ca marche")
      } else {
      message.member.addRole('364149966966620160').catch(console.error);
      message.reply('ca marche')
    }
  }