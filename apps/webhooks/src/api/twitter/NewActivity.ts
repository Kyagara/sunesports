import { FastifyLoggerInstance } from 'fastify'
import { TwitterBody } from '../../types'
import DiscordSendMessage from '../discord/SendMessage'

export default async function TwitterNewActivity(logger: FastifyLoggerInstance, body: TwitterBody) {
    const message = body.tweet_create_events.shift()

    if (!message) return

    if (message.favorited) return
    if (message.in_reply_to_screen_name != null) return
    if (message.in_reply_to_user_id != null) return
    if (message.user.screen_name != process.env.TWITTER_USERNAME) return

    await DiscordSendMessage(logger, message.id_str)
}
