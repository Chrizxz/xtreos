const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");
const botName = require("./../../config.json").botName;
const botPfp = require("./../../config.json").botPfp;

module.exports = {
  name: "User Info",
  description: "Get info about a user",
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
      .setAuthor({
        name: `${target.user.tag}`,
      })
      .setDescription(`${target.user}`)
      .setThumbnail(target.user.avatarURL({ dynamic: true, size: 512 }))
      .addFields(
        { name: "Member Since:", value: `<t:${parseInt(target.joinedTimestamp / 1000)}:R>`, inline: false },
        { name: "Discord User Since:", value: `<t:${parseInt(target.user.createdTimestamp / 1000)}:R>`, inline: false },
        { name: "Roles:", value: target.roles.cache.size - 1 ? target.roles.cache.map((r) => r).join(" ").replace("@everyone", " ") : "No roles", inline: false },
        { name: "User's ID:", value: `\`${target.user.id}\``, inline: false },
      )
      .setFooter({
        text: `${botName}`,
        iconURL:`${botPfp}`
      });

    
    // await interaction.deferReply({ephemeral: true});
    interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
