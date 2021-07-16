const { Canvas } = require('canvacord')
module.exports = async function(message){
  if(message.content === '$image'){
  const user = message.mentions.users.first() || message.author
  const avatar = user.displayAvatarURL({format:"png"})
  const image = await Canvas.trigger(avatar)
  message.channel.send(new MessageAttachment(image,"image.gif"))
  }
}