const fs = require('fs')
const axios = require('axios')
const sharp = require('sharp')
const yaml = require('js-yaml')
const twitterAPI = require('twitter-api-client')
require('dotenv').config()
sharp.cache(false)

// Twitter

Twitter()
async function Twitter() {
    console.log('Autenticando usuário do Twitter.')
    const twitterClient = new twitterAPI.TwitterClient({
        apiKey: process.env.TwitterAPIKey,
        apiSecret: process.env.TwitterAPISecret,
        accessToken: process.env.TwitterAccessToken,
        accessTokenSecret: process.env.TwitterAccessTokenSecret,
    })

    console.log('Recebendo Tweets.')
    let responseArr = await twitterClient.tweets
        .statusesUserTimeline({
            exclude_replies: false,
            screen_name: 'sunesportsbr',
            count: 25,
        })
        .catch(function (error) {
            console.error(error)
        })

    const months = {
        Jan: 'Jan',
        Feb: 'Fev',
        Mar: 'Mar',
        Apr: 'Abr',
        May: 'Mai',
        Jun: 'Jun',
        Jul: 'Jul',
        Aug: 'Ago',
        Sep: 'Set',
        Oct: 'Out',
        Nov: 'Nov',
        Dec: 'Dez',
    }

    let tweets = []

    responseArr.forEach(function (obj) {
        if (obj.in_reply_to_screen_name) return

        let dateArr = obj.created_at.split(' ')

        let dateStr = `${Object(months[dateArr[1]])} ${dateArr[2]}, ${
            dateArr[5]
        }`

        let tweetStr = obj.text
            .replace(/\r?\n|\r/g, ' ') // Newlines
            .replace(/(https?:\/\/[^ ]*)/g, '') // Links

        let tweet = {
            text: tweetStr,
            date: dateStr,
            id: obj.id_str,
            link: `https://twitter.com/sunesportsbr/status/${obj.id_str}`,
        }

        tweets.push(tweet)
    })

    const removeStr = [
        'https://twitter.com/sunesportsbr/status/1365633399772352517',
        'https://twitter.com/sunesportsbr/status/1371137910863446027',
        'https://twitter.com/sunesportsbr/status/1368253463914811396',
        'https://twitter.com/sunesportsbr/status/1368654731317571586',
        'https://twitter.com/sunesportsbr/status/1365770300818923528',
        'https://twitter.com/sunesportsbr/status/1368641511995367428',
    ]

    tweets = tweets.filter(function (val) {
        return removeStr.indexOf(val.link) == -1 ? true : false
    })

    console.log("Salvando Tweets em './src/data/twitter.yml'.")
    YamlParser(tweets.slice(0, 4), './src/data/twitter.yml')

    Instagram()
}

// Instagram

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
        .then(function (response) {
            responseArr = response.data.edges
        })
        .catch(function (error) {
            console.error(error)
        })

    index = 0
    let posts = []

    console.log("Salvando imagens do Instagram em './public/instagram/'.")
    responseArr.forEach(async function (obj) {
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
                fs
                    .createWriteStream(downloadPath)
                    .on('finish', () => ConvertImage(downloadPath)),
            )
        })
    })
}

async function ConvertImage(path) {
    let buffer = await sharp(path).resize(300, 300).toBuffer()
    return sharp(buffer).toFile(path)
}

function YamlParser(obj, path) {
    let yamlParsed = yaml.dump(obj)
    fs.writeFileSync(path, yamlParsed)
}
