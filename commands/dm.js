module.exports = {
    name: "dm",
    description: "DM a guild member!",
    run: async (client, message, user) => {
        if(!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send("You don't have enough permissions.");
        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]);
        if(!user)
            return message.channel.send(
                `You did not mention a user, or you gave an invalid id`
            );
        if(!args.slice(1).join(" "))
            return message.channel.send("You did not specify a message!");
        user.user
            .send(args.slice(1).join(" "))
            .catch(() => message.channel.send("That user could not be DMed."))
            .then(() => message.channel.send(`Sent message tp ${user.user.tag}`));
    },
};