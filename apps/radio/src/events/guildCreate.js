const { greenBright } = require('chalk')

module.exports = {
    name: 'guildCreate',

    execute(guild, client) {
        client.servers.ensure(guild.id, {
            guildId: guild.id,
        })

        console.log(greenBright(`Guilda ${guild.name}-(${guild.id}) adicionada.`))
    },
}
