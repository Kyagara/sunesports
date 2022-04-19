require('dotenv').config({ path: '../../.env' })

const fs = require('fs')
const { Client, Intents, Collection } = require('discord.js')
const Enmap = require('enmap')

const client = new Client({
    presence: {
        activities: [
            {
                name: '🎵',
                type: 'LISTENING',
            },
        ],
    },
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES],
})

client.commands = new Collection()
// eslint-disable-next-line
client.cooldown = new Set()
client.servers = new Enmap('servers')

client.radios = new Collection()
client.radiosList = require('../radios.json')
client.genres = new Array()

client.ytOptions = {
    highWaterMark: 1 << 25,
}

const eventFiles = fs.readdirSync('./src/events').filter((file) => file.endsWith('.js'))

for (const file of eventFiles) {
    const event = require(`./events/${file}`)

    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client))
    } else {
        client.on(event.name, (...args) => event.execute(...args, client))
    }
}

const commandFiles = fs.readdirSync('./src/commands').filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.data.name, command)
}

client.login(process.env.BOT_TOKEN)
