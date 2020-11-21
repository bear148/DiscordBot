const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    description: "shows all commands in an imbed",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#38b4ff')
        .setTitle('Commands')
        .setDescription('All of the current commands for this bot.')
        .addFields(
            {name: '-help', value: 'Command that brings up help menu'},
            {name: '-github', value: "Creator's github"},
            {name: '-ping', value: 'Test command'},
            {name: "-8ball", value: 'Simple 8Ball I coded.'},
            {name: '-avatar', value: 'This is a simple command that tells roles, join date, and id.'},
            {name: '-meme', value: "Simple command that grabs memes from subreddits like r/memes."},
            {name: '-giveaway', value: "Simple command that creates giveaways, '-giveaway <time> <channel> <prize>"},
            {name: '-dm', value: "Simple command that dms users, '-dm <user> <message>"}
        )
        .setFooter('This bot was coded by Michael Srenaski © 2020');
        message.channel.send(newEmbed)
    }
}