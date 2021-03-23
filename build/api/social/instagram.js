const fs = require('fs')
const axios = require('axios')
const sharp = require('sharp')
const { YamlParser } = require('../../yamlParser')
sharp.cache(false)

async function Instagram() {
    console.log('Conectando na API do Instagram pelo RapidAPI.')
    const options = {
        method: 'GET',
        url:
            'https://instagramdimashirokovv1.p.rapidapi.com/feed/28248168912/optional',
        headers: {
            'x-rapidapi-key': process.env.RapidAPIInstagramKey,
            'x-rapidapi-host': 'InstagramdimashirokovV1.p.rapidapi.com',
        },
    }

    let responseArr

    console.log('Recebendo feed do usuário do Instagram.')
    await axios
        .request(options)
        .then((response) => {
            responseArr = response.data.edges
        })
        .catch((error) => {
            console.error(error)
        })

    index = 0
    let posts = []

    console.log("Salvando imagens do Instagram em './public/instagram/'.")
    responseArr.forEach(async (obj) => {
        index += 1

        let outputImage = `./public/instagram/${index}.webp`

        let post = {
            image: `./instagram/${index}.webp`,
            id: obj.node.shortcode,
            link: `https://www.instagram.com/p/${obj.node.shortcode}`,
        }

        posts.push(post)

        await ImageDownload(obj.node.thumbnail_src, outputImage)
    })

    console.log("Salvando posts do Instagram em './src/data/instagram.yml'.")
    YamlParser(posts.slice(0, 6), './src/data/instagram.yml')
}

async function ImageDownload(url, downloadPath) {
    return axios({
        url,
        responseType: 'stream',
    }).then((response) => {
        return new Promise(() => {
            response.data.pipe(
                fs.createWriteStream(downloadPath).on('finish', () => {
                    return ConvertImage(downloadPath)
                }),
            )
        })
    })
}

async function ConvertImage(path) {
    let buffer = await sharp(path).resize(300, 300).toBuffer()
    return sharp(buffer).toFile(path)
}

exports.Instagram = Instagram
