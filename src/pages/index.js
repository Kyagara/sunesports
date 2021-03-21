import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

import Layout from '../components/layout'

import Inicio from '../components/index/inicio'
import Social from '../components/index/social'
import Discord from '../components/index/discord'

const IndexPage = ({ twitter, instagram }) => {
    return (
        <Layout>
            <div id="stars" />
            <div id="moving-stars" />

            <section className="flex justify-center overflow-hidden items-center min-h-screen">
                <Inicio />
            </section>

            <section
                id="social"
                className="relative flex flex-col min-h-screen bg-gray-100"
            >
                <img
                    className="absolute h-full right-0 opacity-5"
                    src="sun-section.svg"
                    alt=""
                />
                <Social twitter={twitter} instagram={instagram} />
            </section>

            <section id="discord" className="min-h-200">
                <Discord />
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const postsDirectory = path.join(process.cwd())

    const twitterPath = path.join(postsDirectory, 'src/data/twitter.yml')
    const instagramPath = path.join(postsDirectory, 'src/data/instagram.yml')

    const twitterFile = fs.readFileSync(twitterPath, 'utf8')
    const instagramFile = fs.readFileSync(instagramPath, 'utf8')

    const twitter = yaml.load(twitterFile)
    const instagram = yaml.load(instagramFile)

    return {
        props: { twitter, instagram },
    }
}

export default IndexPage
