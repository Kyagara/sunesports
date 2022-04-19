require('dotenv').config({ path: '../../.env' })

const fs = require('fs')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')

const { redBright, greenBright } = require('chalk')

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN)

const commands = []

const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    commands.push(command.data.toJSON())
}

rest.put(Routes.applicationCommands(process.env.APPLICATION_ID), { body: commands })
    .then(() => {
        console.log(greenBright('Comandos registrados com sucesso.'))
    })
    .catch((err) => {
        console.error(redBright('Ocorreu um erro', err))
    })
