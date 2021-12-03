const Discord = require('discord.js');
const bot = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] });
require('dotenv').config();


bot.login(process.env.TOKEN);