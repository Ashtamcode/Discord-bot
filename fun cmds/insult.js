const unirest = require('unirest');
const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = '$'
module.exports = async function(message) {
  if (message.content.startsWith(`$insult`)) {
      var req = unirest('GET', 'https://insult.mattbas.org/api/insult');

      //no mention no api call
      let member = message.mentions.members.first();
      if (member == '' || member == null) {
        return message.reply(
          'Dude you had to include two things and you screwed that up...'
        );
      }

      //insults themself
      if (member.user.username === message.author.username) {
        message.reply(
          'Dang hating on themself.. I mean I guess I can..'
        );
      }
      req.end((res) => {
        if (res.error) {
          errorMessage();
          throw new Error(res.error);
        }
        try {
          var insult = res.raw_body.toLowerCase();
          message.channel
            .send('<@'+ member.id +'>' + ', ' + insult + '.')
            .then((e) => {
              e.react('🔥');
              stats.insult.update();
            })
            .catch((err) => {
              oatMeal('insult error ' + err);
            });
        } catch (err) {
          oatMeal('insult api error ' + err);
          errorMessage();
        }
      });
    }
}