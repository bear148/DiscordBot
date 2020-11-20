const { description } = require("./ping");

module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#38b4ff')
        .setTitle('Rules')
        .setDescription("This is a embed for server rules.")
        .addFields(
            {name: 'Rule 1', value: 'Be nice'},
            {name: 'Rule 2', value: 'no farting'},
            {name: 'Rule 3', value: 'Be nice'}
        )
        .setImage('https://i.redd.it/3axwfsrsz5n01.jpg')
        .setFooter('This bot was coded by Michael Srenaski © 2020');
        message.channel.send(newEmbed)
    }

}