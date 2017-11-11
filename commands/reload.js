exports.run = (bot, message, args, member) => {
  if(message.member.roles.has('136196804571168769')) {
    if(!args || args.size < 1) return message.reply("Indique une commande a reload.");
    delete require.cache[require.resolve(`./${args[0]}.js`)];
  } else if(message.member.roles.has('335451639387258882')) {
    if(!args || args.size < 1) return message.reply("Indique une commande a reload.");
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    channel.send(`La commande ${args[0]} a bien été reload!`);
  } else {
    message.channel.send("Tu n'a pas la perm d'utiliser cette commande")
  }
  };