const Discord = require("discord.js");
// const urban = require("urban");
const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = '$'
module.exports = async function (msg){
  msg1 = msg.content
  if (msg1.toLowerCase() === 'cool'){
    msg.channel.send("I know I am cool!")
    msg.react('🆒')
  }
  if (msg1.toLowerCase() === 'damn'){
    msg.channel.send("Damn bruh")
    msg.channel.send("ᕗ ͠ ° ਊ ͠ °) ᕗ")
  }
  if (msg1.toLowerCase() === 'oof'){
    msg.channel.send("Ye dukh aur dard")
    msg.channel.send("https://tenor.com/view/oof-fall-die-gif-19880084")
  }
}
