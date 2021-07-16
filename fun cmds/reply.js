const Discord = require("discord.js");
// const urban = require("urban");
const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = '$'
module.exports = async function (msg){
  msg1 = msg.content
  if (msg1.toLowerCase() === 'cool'){
    msg.channel.send("I know i am cool!")
    msg.react('🆒')
  }
  if (msg1.toLowerCase() === 'damn'){
    msg.channel.send("Damn bruh")
    msg.channel.send("ᕗ ͠ ° ਊ ͠ °) ᕗ")
  }
}