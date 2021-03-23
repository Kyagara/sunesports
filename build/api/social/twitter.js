const twitterAPI = require('twitter-api-client')
const { YamlParser } = require('../../yamlParser')

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

    responseArr.forEach((obj) => {
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
        'https://twitter.com/sunesportsbr/status/1373698025743339521',
        'https://twitter.com/sunesportsbr/status/1373702795044487173',
        'https://twitter.com/sunesportsbr/status/1365633399772352517',
        'https://twitter.com/sunesportsbr/status/1371137910863446027',
        'https://twitter.com/sunesportsbr/status/1368253463914811396',
        'https://twitter.com/sunesportsbr/status/1368654731317571586',
        'https://twitter.com/sunesportsbr/status/1365770300818923528',
        'https://twitter.com/sunesportsbr/status/1368641511995367428',
    ]

    tweets = tweets.filter((val) => {
        return removeStr.indexOf(val.link) == -1 ? true : false
    })

    console.log("Salvando Tweets em './src/data/twitter.yml'.")
    YamlParser(tweets.slice(0, 4), './src/data/twitter.yml')
}

exports.Twitter = Twitter
