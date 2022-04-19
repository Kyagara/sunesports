require('dotenv').config({ path: '../../.env' })

const fastify = require('fastify')({ logger: true, disableRequestLogging: true })

// Rotas
fastify.register(require('./routes/Twitter'))

// Ligando o servidor Fastify
fastify.listen(process.env.WEBHOOKS_SERVICE_PORT!, (err: Error, address: string) => {
    if (err) throw err

    fastify.log.info(`Serviço de players ligado no endereço: ${address}`)
})
