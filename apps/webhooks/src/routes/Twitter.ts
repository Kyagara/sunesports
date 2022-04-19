import { FastifyInstance, HookHandlerDoneFunction } from 'fastify'

import TwitterCreateCRC from '../api/twitter/CreateCRC'
import TwitterNewActivity from '../api/twitter/NewActivity'
import { TwitterBody } from '../types'

export default function TwitterRoutes(
    fastify: FastifyInstance,
    _: any,
    done: HookHandlerDoneFunction,
) {
    fastify.get<{
        Querystring: {
            crc_token: string
        }
    }>('/webhooks/twitter', async (request) => {
        const crc = TwitterCreateCRC(request.query.crc_token)

        fastify.log.info(`CRC '${request.query.crc_token}' do Twitter recebido`)

        return crc
    })

    fastify.post<{ Body: TwitterBody }>('/webhooks/twitter', async (request) => {
        if (!request.body.tweet_create_events) return { ok: true }

        await TwitterNewActivity(fastify.log, request.body)

        fastify.log.info('Post do Twitter recebido')

        return { ok: true }
    })

    done()
}
