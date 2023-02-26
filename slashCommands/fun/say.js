const discordTogether = require("../../client/discordTogether");
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
  ],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   *
   */
  run: async (client, interaction, args) => {
    //const [channelID] = args[1];
    const channelID = interaction.options.getChannel("channel").id;
    const channel = interaction.options.getChannel("channel");
    //const channel = interaction.guild.channels.cache.get(channelID);
    const name = interaction.options.get("activity").name;
    /*
    if (channel.type !== "GUILD_VOICE")
      return interaction.followUp({
        content: "Please choose a voice channel!",
      });*/

    const value = interaction.options.get("activity").value;

    if (value === "watchtogether") {
      discordTogether
        .createTogetherCode(channelID, "youtube")
        .then((x) =>
          interaction.followUp(
            `[Click to start ${name} in ${channel.name}!](${x.code})`
          )
        );
    } else if (value === "doodlecrew") {
      discordTogether
        .createTogetherCode(channelID, "doodlecrew")
        .then((x) =>
          interaction.followUp(
            `[Click to start ${name} in ${channel.name}!](${x.code})`
          )
        );
    } else if (value === "fishington") {
      discordTogether
        .createTogetherCode(channelID, "fishing")
        .then((x) =>
          interaction.followUp(
            `[Click to start ${name} in ${channel.name}!](${x.code})`
          )
        );
    } else if (value === "poker") {
      discordTogether
        .createTogetherCode(channelID, "poker")
        .then((x) =>
          interaction.followUp(
            `[Click to start ${name} in ${channel.name}!](${x.code})`
          )
        );
    } else if (value === "chess") {
      discordTogether
        .createTogetherCode(channelID, "chess")
        .then((x) =>
          interaction.followUp(
            `[Click to start ${name} in ${channel.name}!](${x.code})`
          )
        );
    } else if (value === "checkers") {
      discordTogether
        .createTogetherCode(channelID, "checkers")
        .then((x) =>
          interaction.followUp(
            `[Click to start ${name} in ${channel.name}!](${x.code})`
          )
        );
    } else if (value === "betrayal") {
      discordTogether
        .createTogetherCode(channelID, "betrayal")
        .then((x) =>
          interaction.followUp(
            `[Click to start ${name} in ${channel.name}!](${x.code})`
          )
        );
    } else if (value === "letterleague") {
      discordTogether
        .createTogetherCode(channelID, "lettertile")
        .then((x) =>
          interaction.followUp(
            `[Click to start ${name} in ${channel.name}!](${x.code})`
          )
        );
    } else if (value === "wordsnack") {
      discordTogether
        .createTogetherCode(channelID, "wordsnack")
        .then((x) =>
          interaction.followUp(
            `[Click to start ${name} in ${channel.name}!](${x.code})`
          )
        );
    } else if (value === "spellcast") {
      discordTogether
        .createTogetherCode(channelID, "spellcast")
        .then((x) =>
          interaction.followUp(
            `[Click to start ${name} in ${channel.name}!](${x.code})`
          )
        );
    } else if (value === "awkword") {
      discordTogether
        .createTogetherCode(channelID, "awkword")
        .then((x) =>
          interaction.followUp(
            `[Click to start ${name} in ${channel.name}!](${x.code})`
          )
        );
    } else if (value === "puttparty") {
      discordTogether
        .createTogetherCode(channelID, "puttparty")
        .then((x) =>
          interaction.followUp(
            `[Click to start ${name} in ${channel.name}!](${x.code})`
          )
        );
    } else if (value === "sketchheads") {
      discordTogether
        .createTogetherCode(channelID, "sketchheads")
        .then((x) =>
          interaction.followUp(
            `[Click to start ${name} in ${channel.name}!](${x.code})`
          )
        )
      } else if (value === "ocho") {
        discordTogether
          .createTogetherCode(channelID, "ocho")
          .then((x) =>
            interaction.followUp(
              `[Click to start ${name} in ${channel.name}!](${x.code})`
            )
          )
      }
    /*else if (value === "sketchheads") {
      interaction.followUp(`**Coming soon!**`);
    }*/
    
  },
};
