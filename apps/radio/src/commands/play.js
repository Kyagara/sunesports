const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const {
    joinVoiceChannel,
    getVoiceConnection,
    entersState,
    VoiceConnectionStatus,
} = require('@discordjs/voice')

const SimpleEmbed = require('../helpers/SimpleEmbed')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Seleciona e salva uma rádio.')
        .addStringOption((option) =>
            option
                .setName('genre')
                .setDescription('Escolha o gênero da rádio para tocar.')
                .setRequired(true),
        ),
    permissions: 'ADMINISTRATOR',

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

        const selectedGenre = interaction.options.getString('genre')

        const radio = client.radios.get(selectedGenre)

        if (!radio) throw 'Rádio não existe'

        const video = radio.video

        const embed = new MessageEmbed()
            .setAuthor({
                name: video.channelName,
                iconURL: video.channelAvatar,
                url: video.channelURL,
            })
            .setTitle(`Tocando agora:`)
            .setColor(0xfcd34d)
            .setThumbnail(client.user.avatarURL())
            .setImage(video.thumbnail)
            .addField(video.title, video.url)

        if (guild.genre == selectedGenre) {
            await interaction.reply({ embeds: [embed] })

            return
        }

        const genres = client.genres.join(' | ')

        if (!client.genres.includes(selectedGenre)) {
            await interaction.reply({
                embeds: [
                    SimpleEmbed(
                        ':x: Erro',
                        'Rádio inválida',
                        `Você não especificou uma rádio válida, adicione um dos gêneros disponíveis \`\`${genres}\`\` após o comando \`\`/play\`\`.`,
                        client.user.avatarURL(),
                    ),
                ],
                ephemeral: true,
            })

            return
        }

        let connection = getVoiceConnection(guild.guildId)

        if (!connection) {
            connection = joinVoiceChannel({
                channelId: guild.channelId,
                guildId: guild.guildId,
                adapterCreator: interaction.channel.guild.voiceAdapterCreator,
            })

            try {
                await entersState(connection, VoiceConnectionStatus.Ready, 30000)
            } catch (err) {
                connection.destroy()
                throw err
            }
        }

        connection.subscribe(radio.broadcast)

        if (guild.genre) {
            client.servers.update(interaction.guildId, {
                genre: selectedGenre,
            })
        } else {
            client.servers.ensure(interaction.guildId, {
                genre: selectedGenre,
            })
        }

        await interaction.reply({ embeds: [embed] })
    },
}
