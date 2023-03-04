const bot = require("../server");
const colors = require('colors');


bot.on("ready", () =>
  console.log(
    `${bot.user.tag} is up and ready to go! `.blue + 
    `Also I like cookies :)`.blue
  )
);

bot.on("ready", () => {
  const servers = bot.guilds.cache.size;
  const usercount = bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0);
  const activities = [
    { type: "PLAYING", message: "you can't see this" },
    { type: "WATCHING", message: "over chriz.cf" },
    { type: "WATCHING", message: `${servers} servers (${usercount} users)` },
    { type: "WATCHING", message: `${usercount} users (${servers} servers)` },
    // { type: "PLAYING", message: "on play.venox.network" },
    // { type: "LISTENING", message: "bapplause.xyz/playlist" },
    { type: "LISTENING", message: "chriz.cf/playlist" },
    { type: "WATCHING", message: "over chriz.cf/discord" },
    { type: "WATCHING", message: "over venox.network" },
  ];

  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
    bot.user.setActivity(activities[randomIndex].message, {
      type: activities[randomIndex].type,
    });
  }, 20000);
});

/*
bot.on('ready', function() {
    const servers = bot.guilds.cache.size;
    const servercount = bot.guilds.cache.reduce((a,b) => a+b.memberCount, 0);
    // ${servers} server`s & ${servercount} users
    bot.user.setActivity(`the future: v.srnyx.xyz`, { type: `WATCHING` }); // PLAYING, WATCHING, LISTENING, STREAMING, COMPETING
    bot.user.setStatus("online");
  });*/