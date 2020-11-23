const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { formatDate } = require("C:\\Users\\shane\\Desktop\\Programming Projects and stuff\\DiscordBot");
module.exports = {
    name: "avatar",
    description: "Get your own, or someone elses avatar",
    run: async (client, message, args) => {
        let Embed = new Discord.MessageEmbed();
        let roles = [];
        const newEmbed = new Discord.MessageEmbed()
        if (!message.mentions.users.first()) {
            message.member.roles.cache.forEach((role) => {
                roles.push(role.name);
            });
            Embed.setTitle('Your avatar!');
            Embed.setThumbnail(message.author.displayAvatarURL());
            Embed.setColor('RANDOM');
            Embed.setDescription(
                `**Joined**: ${formatDate(message.member.joinedAt)}\n**ID**: ${
                  message.author.id
                }\n**Roles**: ${roles}`
            );
            return message.channel.send(Embed);
        } else {
            let User = message.mentions.members.first();
            User.roles.cache.forEach((role) => {
              roles.push(role.name);
            });
            Embed.setTitle(`${client.users.cache.get(User.id).tag}'s avatar!`);
            Embed.setThumbnail(client.users.cache.get(User.id).displayAvatarURL());
            Embed.setColor(`RANDOM`);
            Embed.setDescription(
              `**Joined**: ${formatDate(User.joinedAt)}\n**ID**: ${
                User.id
              }\n**Roles**: ${roles}`
            );
            return message.channel.send(Embed);
          }
        },
      };