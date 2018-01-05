const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");



bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '/anonyme', type : 0}});
    console.log("Bot Ready");
});

bot.login('Mzk0MjgwNTYyNjQ4NDE2MjU2.DSCB9A.91HTreeEvLnaEH-8hIm4uQIgHR4');

bot.on('message', message => {
    if (message.content.startsWith(prefix+'anonyme')) {
        var say = message.content.substr(8)
           message.channel.send(`${say}`, {disableEveryone: false})
           message.delete()
        console.log(`**${message.author.username} : ** a utilisé la commande anonyme sur ${message.guild.name} voici son message: \`${say}\``)
   bot.guilds.get('396360744687370242').channels.get('398820566070460426').send(`**${message.author.username} : ** a utilisé la commande anonyme sur ${message.guild.name} voici son message: \`${say}\``);
      }
});
