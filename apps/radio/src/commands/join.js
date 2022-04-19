const { SlashCommandBuilder } = require('@discordjs/builders')
const { joinVoiceChannel, VoiceConnectionStatus, entersState } = require('@discordjs/voice')

const SimpleEmbed = require('../helpers/SimpleEmbed')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('Conecta o bot e salva o canal de voz como sala de rádio.'),
    permissions: 'ADMINISTRATOR',

    async execute(client, interaction, guild) {
        const channel = interaction.member.voice.channel

        if (!channel) {
            await interaction.reply({
                content: 'Você precisa estar em um canal de voz visível ao bot.',
                ephemeral: true,
            })

            return
        }

        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        })

        try {
            await entersState(connection, VoiceConnectionStatus.Ready, 30000)
        } catch (err) {
            connection.destroy()
            throw err
        }

        if (guild.channelId) {
            client.servers.update(interaction.guildId, {
                channelId: channel.id,
            })
        } else {
            client.servers.ensure(interaction.guildId, {
                channelId: channel.id,
            })
        }

        if (guild.genre) {
            const radio = client.radios.get(guild.genre)

            connection.subscribe(radio.broadcast)

            await interaction.reply({
                embeds: [
                    SimpleEmbed(
                        ':loud_sound: Sala de rádio salva',
                        channel.name,
                        `A sala de rádio \`\`${channel.name}\`\` foi salva, tocando \`\`${guild.genre}\`\` no momento.`,
                        client.user.avatarURL(),
                    ),
                ],
                ephemeral: true,
            })

            return
        }

        const genres = client.genres.join(' | ')

        await interaction.reply({
            embeds: [
                SimpleEmbed(
                    ':loud_sound: Sala de rádio salva',
                    channel.name,
                    `Sala de rádio \`\`${channel.name}\`\` foi salva. Use o comando \`\`/play\`\` seguido de um dos gêneros disponíveis (\`\`${genres}\`\`) para adicionar uma rádio.`,
                    client.user.avatarURL(),
                ),
            ],
            ephemeral: true,
        })
    },
}
