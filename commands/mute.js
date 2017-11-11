exports.run = (bot, message) => {

     if (message.mentions.users.size === 0) {
      return message.reply("Please mention a user to mute");
    }

    if(message.member.roles.has('136196804571168769')) {
    const muteMember = message.mentions.members.first();
        const member = message.mentions.members.first();
        member.removeRole('356220216084004897').catch(console.error);
    message.reply(`${muteMember} a été mute.`)
    var channel = bot.channels.find("name", "staff");
    channel.send(`${muteMember} a été mute par ` + message.author);
    } else if(message.member.roles.has('335451639387258882')) { 
      const muteMember = message.mentions.members.first();
      const member = message.mentions.members.first();
      member.removeRole('356220216084004897').catch(console.error);
  message.reply(`${muteMember} a été mute.`)
  var channel = bot.channels.find("name", "staff");
  channel.send(`${muteMember} a été mute par ` + message.author);
  } else {
    message.reply("You can't use this command.");
    }
}