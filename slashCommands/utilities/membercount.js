const {
  CommandInteraction,
  Client,
//   Message,
//   MessageActionRow,
//   MessageButton,
  ApplicationCommandType, 
  ApplicationCommandOptionType,
  ChannelType,
} = require("discord.js");
const Schema = require("../../schemas/MemberCount");

module.exports = {
  name: "membercount",
  description: "create a vc to display membercount",
  options: [
    {
      name: "channel",
      description: "channel to start the activity",
      type: ApplicationCommandOptionType.Channel,
      channelTypes: [ChannelType.GuildVoice],
      required: false,
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
    const channelID = interaction.options.getChannel("channel")?.id;
    const channel = interaction.options.getChannel("channel");
    console.log(interaction.options);
    //const channel = interaction.guild.channels.cache.get(channelID);
    // const name = interaction.options.get("activity").name;
    /*
    if (channel.type !== ChannelTypes.GuildVoice)
      return interaction.followUp({
        content: "Please choose a voice channel!",
      });*/
    await interaction.deferReply().catch(() => {});
    const guild = await client.guilds.fetch(interaction.guild?.id); //interaction.guild;
    await guild.members.fetch();
    const memberCount = guild.members.cache.filter(member => !member.user.bot).size; //guild.memberCount;
    if (!channelID) {
        await guild.channels.create(`Members: ${memberCount}`, {
            type: ChannelType.GuildVoice,
            // parent: interaction.channel.parent, // optional, specify the parent category channel
            permissionOverwrites: [
              {
                id: guild.roles.everyone,
                deny: ['CONNECT', 'SPEAK'], // optionally deny the @everyone role the ability to connect and speak
              },
            ],
          }).then(async (channel) => {
            await interaction.followUp({
                content:`Created voice channel: ${channel}`,
                ephemeral: true
                });
                setTimeout(async () => {
                  const data = await Schema.findOne({
                guildID: interaction.guild?.id,
              });
              if (data) {
                data.channelID = channel.id;
                data.save();
              } else {
                console.log(`${channel}`);
                await new Schema({
                  guildID: interaction.guild.id,
                  channelID: channel.id,
                }).save();
              }
            }, 5000);
          }).catch(console.error);

    }

    
  },
};
