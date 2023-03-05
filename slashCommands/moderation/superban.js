const { 
  CommandInteraction, 
  Client,
  ApplicationCommandType,
  ApplicationCommandOptionType,
  PermissionsBitField 
 } = require("discord.js");
const owners = ["273538684526264320", "242385234992037888"];

module.exports = {
  name: "superban",
  description: "bans a user in every the server the bot is in (owner only)",
  options: [
    {
      name: "user",
      description: "member to superban",
      type: ApplicationCommandOptionType.User,
      required: true,
    },
    {
      name: "reason",
      description: "reason for the superban",
      type: ApplicationCommandOptionType.String,
      required: false,
    },
  ],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction) => {
    if (!owners.includes(interaction.user.id))
      return interaction.followUp("Only the bot owner can use this command.");
    const targetID = interaction.options.getUser("user").id;
    const target = interaction.options.getUser("user");
    const reason = interaction.options.getString("reason");
    if (!targetID) return interaction.followUp("Please provide the targets ID");

      target
        .send(
          `You've been banned from all **Venox Network** servers\n> Reason: ${
            reason || `no reason provided`
          }`
        )
        .catch((error) =>
          interaction
            .followUp({
              content: "❌ Could not dm that user",
              ephemeral: true,
              //"❌ There was an error trying to execute that command: " + `\`${error.message}\``,
            })
            .then(console.log(error))
        );
    

    client.guilds.cache.forEach((a) => a.members.ban(targetID));
    //client.on("error", () => { client.login(token) });
    interaction.followUp(`**Successfully banned** <@${targetID}>`);
  },
};
