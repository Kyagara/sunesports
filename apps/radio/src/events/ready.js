const {
    createAudioPlayer,
    NoSubscriberBehavior,
    createAudioResource,
    joinVoiceChannel,
    getVoiceConnection,
    VoiceConnectionStatus,
    entersState,
} = require('@discordjs/voice')

const { greenBright, yellowBright } = require('chalk')
const ytdl = require('ytdl-core-discord')

const GetVideoDetails = require('../helpers/GetVideoDetails')

module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        // Criando broadcasts em client.radios
        client.radiosList.map(async (video) => {
            const radio = {
                broadcast: createAudioPlayer({
                    behaviors: {
                        noSubscriber: NoSubscriberBehavior.Play,
                        maxMissedFrames: 250,
                    },
                }),
                video: await GetVideoDetails(video.url),
            }

            client.radios.set(video.genre, radio)
            client.genres.push(video.genre)

            console.log(greenBright(`Radio ${video.genre} adicionada.`))

            if (client.radios.size === client.radiosList.length) {
                StreamsRecursions()
            }
        })

        // Recursão que refaz as conexões de voz e o ytdl-core-discord
        function StreamsRecursions() {
            const guilds = client.servers.fetchEverything()

            guilds.map(async (guild) => {
                if (guild.channelId && guild.genre) {
                    const channel = client.channels.cache.get(guild.channelId)

                    let connection = getVoiceConnection(guild.guildId)

                    if (!connection) {
                        connection = joinVoiceChannel({
                            channelId: guild.channelId,
                            guildId: guild.guildId,
                            adapterCreator: channel.guild.voiceAdapterCreator,
                        })

                        try {
                            await entersState(connection, VoiceConnectionStatus.Ready, 30000)
                        } catch (err) {
                            connection.destroy()
                            throw err
                        }

                        const radio = client.radios.get(guild.genre)

                        connection.subscribe(radio.broadcast)
                    }
                }
            })

            client.radiosList.map(async (video) => {
                const radio = client.radios.get(video.genre)

                const resource = createAudioResource(await ytdl(radio.video.url, client.ytOptions))

                radio.broadcast.play(resource)
            })

            setTimeout(StreamsRecursions, 3600000)
        }

        console.log(yellowBright(`${client.user.tag} online.`))
    },
}
