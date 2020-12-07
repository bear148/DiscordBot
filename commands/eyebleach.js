const {MessageEmbed} = require("discord.js");
const api = require("imageapi.js");
module.exports = {
    name: "eyebleach",
    description: "Get an image from r/eyebleach.",
    run: async (client, message, args) => {
        let subreddits = ["eyebleach", "dogs", "cats"];
        let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
        let img = await api(subreddit, true);
        const Embed = new MessageEmbed()
            .setTitle(`Bleach your eyes with a post from r/${subreddit}`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img);
        message.channel.send(Embed);
    },
};