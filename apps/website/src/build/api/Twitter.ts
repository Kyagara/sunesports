import { TwitterClient } from 'twitter-api-client'
import YamlParser from '../YamlParser'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { TwitterPost } from '@/types'
require('dotenv').config()

export default async function Twitter() {
    const client = new TwitterClient({
        apiKey: process.env.TWITTER_API_KEY!,
        apiSecret: process.env.TWITTER_API_SECRET!,
        accessToken: process.env.TWITTER_ACCESS_TOKEN,
        accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    })

    const response = await client.tweets
        .statusesUserTimeline({
            exclude_replies: false,
            screen_name: process.env.TWITTER_USERNAME,
        })
        .catch((err: Error) => {
            console.error('Ocorreu um erro ao enviar um pedido para o Twitter', err)

            process.exit(1)
        })

    const tweets: any = []

    response.forEach((obj) => {
        if (obj.in_reply_to_screen_name) return
        if (obj.in_reply_to_user_id) return
        if (obj.is_quote_status) return
        if (obj.retweeted_status) return
        if (obj.user.screen_name !== process.env.TWITTER_USERNAME) return

        const text = obj.text
            .replace(/\r?\n|\r/g, ' ') // Newlines
            .replace(/(https?:\/\/[^ ]*)/g, '') // Links

        const date = dayjs(obj.created_at).locale('pt-br').format('MMMM D, YYYY')

        const tweet = {
            text: text,
            date: date,
            id: obj.id_str,
            link: `https://twitter.com/${process.env.TWITTER_USERNAME}/status/${obj.id_str}`,
        }

        tweets.push(tweet)
    })

    const removeStr = [
        `https://twitter.com/${process.env.TWITTER_USERNAME}/status/1414374505808646148`,
        `https://twitter.com/${process.env.TWITTER_USERNAME}/status/1416742265515565062`,
    ]

    const filteredTweets = tweets.filter((tweet: TwitterPost) =>
        removeStr.indexOf(tweet.link) == -1 ? true : false,
    )

    console.log("Salvando Tweets em './src/data/twitter.yaml'.")
    YamlParser(filteredTweets.slice(0, 4), './src/data/twitter.yaml')
}
