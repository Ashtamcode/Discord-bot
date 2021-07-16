const hot = Math.floor(Math.random() * 100);

module.exports = async function(msg){
  if(msg.content === '$howhot'){
    let name = msg.author.username
    msg.channel.send(`**${name}** is **${hot}**% hot 💗`)
  }
};