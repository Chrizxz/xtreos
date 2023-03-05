const { 
  Client, 
  CommandInteraction, 
  EmbedBuilder,
  ApplicationCommandType, 
  ApplicationCommandOptionType
 } = require("discord.js");
const TicTacToe = require("discord-tictactoe");
const game = new TicTacToe({ language: "en", commandOptionName: "user"});
const botName = require("../../config.json").botName;
const botPfp = require("../../config.json").botPfp;

module.exports = {
  name: "tictactoe",
  description: "play tic tac toe with your friends, or with the bot",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: "user",
      description: "The user you want to play with",
      type: ApplicationCommandOptionType.User,
      required: false,
    },
  ], 

  run: async (client, interaction, args) => {
    // await interaction.deferReply().catch(() => {});
    game.handleInteraction(interaction);
  },
};
