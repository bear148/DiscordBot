module.exports = {
    name: 'ping',
    description: "This is a ping command!",
    execute(message, args){


        //let role = message.guild.roles.cache.find(r => r.name === "Owner")

        //if(message.member.permissions.has("BAN_MEMBERS")){
        //    message.channel.send('You have the permission to ban members.')
        //} else {
        //    message.channel.send('You dont have perms to ban.')
        //}

        if(message.member.roles.cache.some(r => r.name === "Owner")){
            message.channel.send('pong!');

        } else {
            message.channel.send("You don't have to permissions to do that.");
        }
    }
}