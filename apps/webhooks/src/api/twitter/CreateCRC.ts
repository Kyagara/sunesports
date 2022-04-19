import { createHmac } from 'crypto'

export default function TwitterCreateCRC(crcToken: string) {
    if (!crcToken) return

    const hmac = createHmac('sha256', process.env.TWITTER_CONSUMER_SECRET!)
        .update(crcToken)
        .digest('base64')

    const response = { response_token: `sha256=${hmac}` }

    return response
}
