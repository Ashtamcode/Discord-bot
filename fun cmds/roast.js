const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = async function (msg) {
  let tokens = msg.cleanContent.split(" ");
  if (tokens[0] == "$roast") {
    let user = msg.author
    let avatar = user.displayAvatarURL({dynamic:true})
    let url = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
    let name = msg.author.username
    let response = await fetch(url);
    let json = await response.json();
    let insult = json.insult
    let e = new Discord.MessageEmbed()
    .setTitle('Roast')
    .setColor('RANDOM')
    .setDescription(insult)
    .setThumbnail(avatar)
    .setTimestamp()
    .addFields(
		{ name: 'Requested by:', value: `@${name}` })
    msg.channel.send(embed=e)
  }
// }
}