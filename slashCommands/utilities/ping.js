const { 
  Client, 
  CommandInteraction, 
  EmbedBuilder,
  ApplicationCommandType, 
  // ApplicationCommandOptionType
 } = require("discord.js");
const botName = require("./../../config.json").botName;
const botPfp = require("./../../config.json").botPfp;

module.exports = {
  name: "ping",
  description: "returns websocket ping",
  type: ApplicationCommandType.ChatInput,
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    await interaction.deferReply().catch(() => {});
    interaction.followUp("Pinging...");
    const reply = await interaction.fetchReply();
    const embed = new EmbedBuilder()
      .setTitle("Pong!")
      .setColor("FFFFFF")
      .addFields(
        {name:"❤️ Heartbeat", 
        value:`${client.ws.ping}ms`},
        {name:"🔁 Roundtrip",
        value:`${reply.createdTimestamp - interaction.createdTimestamp}ms`}
      )
      .setFooter({
        text:`${botName}`,
        iconURL:`${botPfp}`
      });
    reply.edit({ content: " ", embeds: [embed] });
  },
};
