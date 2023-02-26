const { DiscordTogether } = require("discord-together");
const client = require("../server");
const discordTogether = new DiscordTogether(client);

module.exports = discordTogether;