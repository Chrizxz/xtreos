const client = require("../server.js");

client.on("interactionCreate", async (interaction) => {
  // Slash Command Handling
  if (interaction.isCommand()) {
    // await interaction.deferReply().catch(() => {}); // THIS IS DEFERREPLY FOR SLASH COMMANDS

    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd)
      return interaction.followUp({
        content: "Uh oh.... srnyx broke the bot.. ",
        ephemeral: true,
      });

    const args = [];

    for (let option of interaction.options.data) {
      if (option.type === "SUB_COMMAND") {
        if (option.name) args.push(option.name);
        option.options?.forEach((x) => {
          if (x.value) args.push(x.value);
        });
      } else if (option.value) args.push(option.value);
    }
    // if (interaction.guild) {
    //   interaction.member = interaction.guild.members.cache.get(interaction.user.id);
    // }    
    interaction.member = interaction.guild.members.cache.get(
      interaction.user.id
    );
    
    if (interaction.isCommand()) {
      // for CommandInteraction
      if (!interaction.guild) return;
      if (!interaction.member) {
        interaction.reply('Could not fetch member data. Make sure the bot has the necessary permissions.');
        return;
      }
    } else {
      if (!interaction.member || !interaction.member.permissions.has(cmd.userPermissions || []))
        return interaction.followUp({
          content: "Your lacking permissions to use this command",
          ephemeral: true,
        });
        if (!interaction.guild.me.permissions.has(cmd.botPermissions || []))
        return interaction.followUp({
          content: "I lack permissions to use this command",
          ephemeral: true,
        });
    }
    

    cmd.run(client, interaction, args);
  }

  // Context Menu Handling
  if (interaction.isContextMenuCommand()) {

    // await interaction.deferReply({ephemeral: true}); // THIS IS DEFERREPLY FOR CONTEXT MENU

    const command = client.slashCommands.get(interaction.commandName);
    if (command) command.run(client, interaction);
  }

  /*
  if (interaction.isSelectMenu()) {
    interaction.reply({
      ephemeral: true,
      content: `You chose ${interaction.values[0]}`,
    });
}*/
});
