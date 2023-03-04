const mongoose = require("mongoose");

module.exports = mongoose.model("membercount_channels", new mongoose.Schema({
    channelID: { type: String },
    guildID: { type: String },
}))
