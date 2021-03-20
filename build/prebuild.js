require('dotenv').config()

const { Twitter } = require('./api/social/twitter')
const { Instagram } = require('./api/social/instagram')

async function StartPrebuild() {
    console.log('Iniciando API do Twitter.')
    await Twitter()

    console.log('Iniciando API do Instagram.')
    await Instagram()
}

StartPrebuild()
