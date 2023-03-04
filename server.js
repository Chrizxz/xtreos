const { Client, Collection, IntentsBitField } = require("discord.js");
const Discord = require("discord.js");
const handler = require("./handler");
require('dotenv').config()

const client = new Discord.Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.GuildMessageTyping,
    IntentsBitField.Flags.GuildVoiceStates,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildWebhooks,
    IntentsBitField.Flags.GuildIntegrations,
    // IntentsBitField.Flags.GuildPresences,
    // IntentsBitField.Flags.DirectMessages,
    // IntentsBitField.Flags.DirectMessageReactions,
    // IntentsBitField.Flags.DirectMessageTyping,
  ],
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client); 

client.login(process.env.TOKEN); 
