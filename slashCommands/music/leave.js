const { Client, CommandInteraction } = require("discord.js");
const { getVoiceConnection } = require('@discordjs/voice');
//const { joinVoiceChannel } = require('@discordjs/voice');
const player = require("../../client/player");

module.exports = {
  name: "leave",
  description: "leaves the voice channel",
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    if (!interaction.member.voice.channel)
    return interaction.followUp({
      content: "❌ | Join a voice channel first",
    });

  if (
    interaction.guild.me.voice.channelId &&
    interaction.member.voice.channelId !==
      interaction.guild.me.voice.channelId
  ) {
    interaction.followUp({
      content: "❌ | You are not in my voice channel",
      ephemeral: true,
    });
  }

    const channel = interaction.member.voice.channel;
    const queue = player.getQueue(interaction.guildId);
    const connection = getVoiceConnection(interaction.guild.me.voice.channelId);

    if (channel) {
        await queue?.playing || queue ? queue.destroy() : interaction.followUp({content: "❌ | Nothing was in the queue", ephemeral:true}).then(connection.destroy());
        await interaction.followUp({content: "✅ | Disconnected"});
    } else {
      interaction.followUp({content: "❌ | I'm not connected to a voice channel"});
    }

  },
  catch(error) {
    console.log(error);
    interaction.followUp({
      content:
        "❌ | There was an error trying to execute that command: " + `\`${error.message}\``,
    });
  },
};
