exports.run = (bot, message, args, member) => {
    if(message.member.roles.has('364149859407888387')) {
      message.member.removeRole('364149859407888387').catch(console.error);
      message.reply("ca marche")
    } else {
    message.member.addRole('364149859407888387').catch(console.error);
    message.reply('ca marche')
  }
}