const Discord = require("discord.js");
const urban = require("urban");
const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = '$'
module.exports = async function (msg,args){
  msg1 = msg.content
  if (msg1 === '$urban'){
    if (!args[0]) return message.channel.send("Please specify some test");
    let res = await urban(args.join(' ')).catch(e =>{
      return message.channel.send("Sorry! Word not found.")
    });
    const embed = new Discord.MessageEmbed()
    .setcolor('RANDOM')
    .setTitle(res.word)
    .setURL(res.urbanURL)
    .setDescription(`Definition\n${res.definition}\nExample:\n${res.example}`)
    .addFeild('Author',res.author,true)
    .addFeild('Rating', `Upvotes:${res.thumbUp} | Downvotes:${res.thumbsDown}`)
    message.channel.send(embed=embed)
  }
}