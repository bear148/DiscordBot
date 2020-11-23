const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: 'ping',
    description: "This is a ping command!",
    run: async(client, message, args) => {
        message.channel.send(`🏓 Pinging...`).tehn((msg) => {
            const _ = new Discord.MessageEmbed()
            .setTitle("Pong!")
            .setDescription(
                `🏓 Pong!\nLatency is ${Math.floor(
                    msg.createTimestamp - message.createdTimestamp
                )}ms\nAPI Latency is ${Math.round(client.ws.ping)}ms`
            )
            .setColor("RANDOM");
        msg.edit(_);
        msg.edit("\u200B");
        })
    },
}