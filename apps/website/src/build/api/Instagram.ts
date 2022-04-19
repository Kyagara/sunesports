import fs from 'fs'
import axios from 'axios'
import sharp from 'sharp'
import YamlParser from '../YamlParser'
sharp.cache(false)

export default async function Instagram() {
    // https://rapidapi.com/search/instagram
    console.log('Conectando na API do Instagram pelo RapidAPI.')
    const response = await axios
        .get(`https://${process.env.RAPID_API_INSTAGRAM_HOST}/account-feed`, {
            params: { username: process.env.INSTAGRAM_USERNAME },
            headers: {
                'x-rapidapi-host': process.env.RAPID_API_INSTAGRAM_HOST!,
                'x-rapidapi-key': process.env.RAPID_API_INSTAGRAM_KEY!,
            },
        })
        .catch((err) => {
            console.error('Ocorreu um erro ao enviar um pedido para o RapidAPI', err)

            process.exit(1)
        })

    const posts: any = []

    console.log("Salvando imagens do Instagram em './public/instagram/'.")
    response.data.forEach(async (obj: any, index: number) => {
        const outputPath = `./public/instagram/${index}.webp`

        const post = {
            image: `/instagram/${index}.webp`,
            id: obj.node.shortcode,
            link: `https://www.instagram.com/p/${obj.node.shortcode}`,
        }

        posts.push(post)

        await ImageDownload(obj.node.thumbnail_src, outputPath)
    })

    console.log("Salvando posts do Instagram em './src/data/instagram.yaml'.")
    YamlParser(posts.slice(0, 6), './src/data/instagram.yaml')
}

async function ImageDownload(url: string, downloadPath: string) {
    return axios({
        url,
        responseType: 'stream',
    })
        .then((response) => {
            return new Promise(() => {
                response.data.pipe(
                    fs.createWriteStream(downloadPath).on('finish', () => {
                        return ConvertImage(downloadPath)
                    }),
                )
            })
        })
        .catch((err) => {
            console.error('Ocorreu um erro ao baixar imagens do Instagram', err)

            process.exit(1)
        })
}

async function ConvertImage(path: string) {
    const buffer = await sharp(path).resize(300, 300).toBuffer()

    return sharp(buffer).toFile(path)
}
