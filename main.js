const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
]});

const re = /.*(quoi\s*\?*\s*)$/i;

client.on('messageCreate', (message) => {
    if (message.author.bot) return false;
    let channelId = message.channelId;
    client.channels.fetch(channelId).then(channel => {
        if (channel.name == "general") {
            if (message.content.match(re))
                message.reply("feur");
            else if (message.content.indexOf("overwatch") >= 0 || message.content.indexOf("Overwatch") >= 0) {
                message.reply("Overwatch ??????? hahahhahahahaha allez retourne jouer à WoW sale fraude.");
            }
        }
    });
});

client.login("MTAzMzc2NDQxNTY3MTEwNzY0NA.G7m-rh.42_44gowDrfg32e_RsmClkr3Cygodx4aWPp6Ds");