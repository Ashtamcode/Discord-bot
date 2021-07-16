const Discord = require('discord.js');
const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = '$'
const userCreatedPolls = new Map();
// const poll = require('./poll.js');
const mySecret = process.env['TOKEN'];
module.exports = async function(message) {
     if(message.author.bot || message.channel.type === "dm") return;

  const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

    if (cmd === '$poll'){
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('😲 New Poll! 😲')
        .setDescription(pollDescription)
        .setColor('RANDOM')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    }
}