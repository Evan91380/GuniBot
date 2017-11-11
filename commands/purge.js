exports.run = (bot, message, args) =>  {

  if(message.member.roles.has('136196804571168769')) {
    let messagecount = parseInt(args);

    if(!messagecount || messagecount < 2 || messagecount > 100){
    return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    }
    if(messagecount || messagecount < 2 || messagecount > 100){
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    }
} else if(message.member.roles.has('335451639387258882')) {
  let messagecount = parseInt(args);

  if(!messagecount || messagecount < 2 || messagecount > 100){
  return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
  }
  if(messagecount || messagecount < 2 || messagecount > 100){
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
} 
} else {
  return message.reply("You can't use this command.");
}
};
