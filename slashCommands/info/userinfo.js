const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");
const botName = require("./../../config.json").botName;
const footer = require("./../../config.json").botFooter;

module.exports = {
  name: "User Info",
  type: "USER",
  /**
   *
   * @param {Client} client
   * @param {ContextMenuInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const target = await interaction.guild.members.fetch(interaction.targetId);

    

    const embed = new MessageEmbed()
      .setColor(target.roles.cache.size - 1 ? target.displayHexColor : "b9bbbe" )
      .setAuthor(target.user.tag)
      .setDescription(`${target.user}`)
      .setThumbnail(target.user.avatarURL({ dynamic: true, size: 512 }))
      .addFields(
        "Member Since:",
        `<t:${parseInt(target.joinedTimestamp / 1000)}:R>`,
        true
      )
      .addFields(
        "Discord User Since:",
        `<t:${parseInt(target.user.createdTimestamp / 1000)}:R>`,
        true
      )
      .addFields(
        "Roles:", target.roles.cache.size - 1 ?
        target.roles.cache
          .map((r) => r)
          .join(" ").replace("@everyone", " ") : "No roles"
          /**/
      )
      //.addFields("Custom Status:", `${target.user.presence.game ? target.user.presence.game.name : 'Null'}`, true)
      //.addFields("Status:", `${target.user.presence.status ? target.user.presence.status.name : 'Null'}`, true)
      /*.addFields(
        "Mutual Servers",
        await client.guilds.cache
          .filter((u) => u.members.cache.get(interaction.user.id))
          .map((g) => g.name)
          .join(", "),
        true
      )*/
      .addFields("User's ID:", `${target.user.id}`, true)
      .setFooter(
        // `${botName}`,
        // `${botPfp}`
        `${footer}`
      );

    interaction.followUp({ embeds: [embed], ephemeral: true });
  },
};
