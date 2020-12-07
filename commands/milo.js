const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'milo',
    description: 'fat',
    run: async(client, message, args) => {
        const Embed = new MessageEmbed()
        .setColor('#38b4ff')
        .setTitle('Milo')
        .addFields({name: "fat", value: "MILO IS VERY FAT!1!1!1!"})
        .setFooter("This bot was coded by Michael Srenaski © 2020");
        message.channel.send(Embed)
    }
}