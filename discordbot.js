const Discord = require('discord.js');
const client = new Discord.Client(); //This line needed to be Discord.Client instead of just Client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('SUPER-SECRET-OAUTH-TOKEN');