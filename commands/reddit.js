const {MessageEmbed} = require("discord.js");
const api = require("imageapi.js");
module.exports = {
    name: "reddit",
    description: "command that grabs images from selected subreddit",
    run: async (client, message, args) => {
        let Subreddit = message.content.slice(8);
        if(!Subreddit)
            return message.channel.send(`You did not specify your subreddit!`);
        try{
            let img = await api(Subreddit, true);
            const Embed = new MessageEmbed()
                .setTitle(`Random image from r/${Subreddit}`)
                .setColor("RANDOM")
                .setImage(img)
                .setURL(`https://reddit.com/r/${Subreddit}`)
                message.channel.send(Embed);
            } catch (err) {
              message.channel.send(err);
            }
          },
        };