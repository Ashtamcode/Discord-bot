const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = async function (msg) {
  let tokens = msg.cleanContent.split(" ");
  if (tokens[0] == "$meme") {
    let url = `https://meme-api.herokuapp.com/gimme`;
    let response = await fetch(url);
    let json = await response.json();
    let e = new Discord.MessageEmbed()
    .setTitle(json.title)
    .setImage(json.url)
    msg.channel.send(embed=e)
    
  }
// }
}