const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

const SimpleEmbed = require('../helpers/SimpleEmbed')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('radio')
        .setDescription('Exibe informações sobre a rádio selecionada no momento.'),
    permissions: 'SEND_MESSAGES',

    async execute(client, interaction, guild) {
        if (!guild.channelId) {
            await interaction.reply({
                embeds: [
                    SimpleEmbed(
                        ':x: Erro',
                        'Canal de voz não encontrado',
                        'Você ainda não selecionou um canal de voz para ser usado como sala de rádio, por favor use o comando ``/join`` em um canal de voz.',
                        client.user.avatarURL(),
                    ),
                ],
                ephemeral: true,
            })

            return
        }

        if (!guild.genre) {
            const channel = client.channels.cache.get(guild.channelId)

            const genres = client.genres.join(' | ')

            await interaction.reply({
                embeds: [
                    SimpleEmbed(
                        ':x: Erro',
                        'Rádio não encontrada',
                        `Você ainda não selecionou uma das rádios disponíveis (\`\`${genres}\`\`) para ser tocada na sala de rádio \`\`${channel.name}\`\`.`,
                        client.user.avatarURL(),
                    ),
                ],
                ephemeral: true,
            })

            return
        }

        const radio = client.radios.get(guild.genre)
        const video = radio.video

        const embed = new MessageEmbed()
            .setAuthor(video.channelName, video.channelAvatar, video.channelURL)
            .setTitle(`Tocando agora:`)
            .setColor(0xfcd34d)
            .setThumbnail(client.user.avatarURL())
            .setImage(video.thumbnail)
            .addField(video.title, video.url)

        return interaction.reply({ embeds: [embed] })
    },
}
