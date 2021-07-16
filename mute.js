const Discord = require('discord.js');
const fetch = require('node-fetch');
const PREFIX = "$";
const ms = require("ms");
module.exports = async function mute(message){
  let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case 'mute':
            var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
            if(!person) return  message.reply("I CANT FIND THE USER " + person)
 
            let mainrole = message.guild.roles.cache.find(role => role.name === "test");
            let role = message.guild.roles.cache.find(role => role.name === "Muted");
           
 
            if(!role) return message.reply("Couldn't find the mute role.")
 
 
            let time = args[2];
            if(!time){
                return message.reply("You didnt specify a time!");
            }
 
            person.roles.remove(mainrole.id)
            person.roles.add(role.id)
 
 
            message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)
 
            setTimeout(function(){
                
                person.roles.remove(mainrole.id)
                person.roles.add(role.id)
                console.log(role.id)
                message.channel.send(`@${person.user.tag} has been unmuted.`)
            }, ms(time));

        break;
    }
};
