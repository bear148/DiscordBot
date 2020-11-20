module.exports = {
    name: "say",
    descriptiom: "Get the bot to say something!",
    usage: "<msg>",
    run: async (client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return;
        let MSG = message.content.split(``).join("");
        if(!MSG)
            return message.channel.send(`You did not specify your message to send!`);
        message.channel.send(MSG);
        message.delete();
    }
}