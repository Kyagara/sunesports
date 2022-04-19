import Twitter from './api/Twitter'
import Instagram from './api/Instagram'

const _start = async () => {
    console.log('Iniciando API do Twitter.')
    await Twitter()

    console.log('Iniciando API do Instagram.')
    await Instagram()
}

_start()
