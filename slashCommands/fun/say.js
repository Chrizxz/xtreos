const {
    CommandInteraction,
    Client,
  //   Message,
  //   MessageActionRow,
  //   MessageButton,
  } = require("discord.js");
  
  module.exports = {
    name: "say",
    description: "make the bot say something",
    options: [
      {
        name: "message",
        description: "activity you want to play",
        type: "STRING",
        required: true,
        maxLength: 2000,
      },
      {
          name: "channel",
          description: "channel to say your message",
          type: "CHANNEL",
          channelTypes: ["GUILD_TEXT"],
          required: false,
      }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     *
     */
    run: async (client, interaction, args) => {
      const message = interaction.options.getString("message");
      const channelID = interaction.options.getChannel("channel")?.id;
      if (!channelID) {
        let channel = interaction.channel;
        channel.send(message);
      } else {
        let channel = interaction.guild.channels.cache.get(channelID);
        channel.send(message);
      }
      interaction.reply({ content: "Sent the message!", ephemeral: true })
    },
  };
  