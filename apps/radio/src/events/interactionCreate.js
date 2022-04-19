module.exports = {
    name: 'interactionCreate',

    async execute(interaction, client) {
        if (!interaction.isCommand()) return
        if (!interaction.inGuild()) return

        const guild = client.servers.ensure(interaction.guildId, {
            guildId: interaction.guildId,
        })

        const command = client.commands.get(interaction.commandName)

        if (!interaction.memberPermissions.has(command.permissions)) {
            await interaction.reply({
                content: 'Você não possui permissões suficientes para usar esse comando.',
                ephemeral: true,
            })

            return
        }

        const cooldown = client.cooldown

        if (cooldown.has(interaction.user.id)) return

        try {
            await command.execute(client, interaction, guild)
        } catch (err) {
            await interaction.reply({
                content: `Ocorreu um erro ao executar esse comando, verifique os argumentos usados. ${err}`,
                ephemeral: true,
            })
        }

        cooldown.add(interaction.user.id)

        setTimeout(() => {
            cooldown.delete(interaction.user.id)
        }, 2000)
    },
}
