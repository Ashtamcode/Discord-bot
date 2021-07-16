const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = '$'
module.exports = async function (msg){
  let tokens = msg.cleanContent.split(" ");
  if (tokens[0] == "$beer") {
    msg.reply("party!!🎉")
    }
}