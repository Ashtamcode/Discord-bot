const Discord = require('discord.js');
const discord = require('discord.js');
const axios = require("axios");
const dadJokeURL = "https://icanhazdadjoke.com";
const headers = { "Accept": "application/json" };


module.exports = async function(message) {
  let user = message.author
  let name = message.author.username
  
  
  let avatar = user.displayAvatarURL({dynamic:true})
  if (message.content.toLowerCase() === '$dadjoke'){
    const response = await axios.get(dadJokeURL, { headers: headers });
    let data =  response.data;
    
    let e = new Discord.MessageEmbed()
    .setTitle('Funny dad jokes')
    .setColor('RANDOM')
    .setDescription(data.joke)
    .setThumbnail(avatar)
    .setTimestamp()
    .addFields(
		{ name: 'Requested by:', value: name })
    message.channel.send(embed=e)
  }
}