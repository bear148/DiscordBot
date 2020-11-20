module.exports = {
    name: 'github',
    description: "sends github link",
    execute(message, args){
        message.channel.send("This is the creator's github page: https://github.com/BizzyPythonBear");
    }
}