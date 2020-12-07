const {MessageEmbed} = require("discord.js")
const prefix = '-';
module.exports = {
    name: "8ball",
    description: "Basic Magic 8 Ball",
    run: async (client, message, args) => {
        let question = message.content.slice(prefix.length + 6);
        if(!question)
            return message.channel.send('You did not specify your question!');
        else {
            let responses = [
                "Yes",
                "No",
                "Definetly",
                "Absolutely",
                "Not in a million years",
                "Not Sure",
                "Try Again",
                "OH HELL NAWW",
                "bruh",
                "xd",
                "*inhale*",
                "Milo",
                "Michael is the best",
                "Roku did that yesterday",
                "No, but Ian does.",
                "Roku loves it.",
                "Collin",
                "æügh",
                "No, but Ian does.",
                "No, but Roku does.",
                "No, but Milo does.",
                "No, but Michael does.",
                "No, but Collin does.",
                "No, but Ian is.",
                "No, but Roku is.",
                "No, but Michael is.",
                "No, but Collin is.",
                "",
            ];
            let response =
                responses[Math.floor(Math.random() * responses.length - 1)];
            let Embed = new MessageEmbed()
                .setTitle("Michael's 8 Ball!!")
                .setDescription(`Your question: ${question}\nMy reply: ${response}`)
                .setColor('RANDOM');
            message.channel.send(Embed);
        }
    }
}