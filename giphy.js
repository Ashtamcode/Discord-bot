
const discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = async function (msg) {
  let tokens = msg.cleanContent.split(" ");
  if (tokens[0] == "$gif") {
    let keywords = "scary";
    if (tokens.length > 1) {
      keywords = tokens.slice(1, tokens.length).join(" ");
    }
    let url = `https://api.tenor.com/v1/search?q=${keywords}&key=XNI30DCK62AR&contentfilter=high`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
    msg.channel.send("GIF from Tenor: " + keywords);
  }
// }
}