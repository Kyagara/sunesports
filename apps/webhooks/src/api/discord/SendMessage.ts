import axios, { AxiosError } from 'axios'
import { FastifyLoggerInstance } from 'fastify'

require('dotenv').config({ path: '../../../../.env' })

export default async function DiscordSendMessage(logger: FastifyLoggerInstance, tweetId: string) {
    const url = `https://discord.com/api/webhooks/${process.env.DISCORD_WEBHOOK_ID}/${process.env.DISCORD_WEBHOOK_TOKEN}`

    const body = {
        content: `https://twitter.com/${process.env.TWITTER_USERNAME}/status/${tweetId}`,
    }

    await axios
        .post(url, body)
        .then(() => {
            logger.info(
                `Tweet https://twitter.com/${process.env.TWITTER_USERNAME}/status/${tweetId} enviado para o Discord.`,
            )
        })
        .catch((err: AxiosError) => {
            if (err.response) {
                logger.error(err.response.data, 'Ocorreu um erro enviando mensagem para o Discord')
            } else if (err.request) {
                logger.error(err.request, 'Nenhuma resposta do Discord foi recebida')
            } else {
                logger.error(err.message, 'Erro ao criar um request para o Discord')
            }
        })
}
