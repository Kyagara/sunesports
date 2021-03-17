import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

import Layout from '../components/layout'

import Inicio from '../components/sections/inicio'
import Social from '../components/sections/social'
import Discord from '../components/sections/discord'

const IndexPage = ({ twitter, instagram }) => {
    return (
        <>
            <Layout>
                <section className="flex justify-center items-center h-full min-h-screen">
                    <Inicio />
                </section>

                <section
                    id="social"
                    className="flex flex-col h-full min-h-screen bg-gray-100 relative"
                >
                    <img
                        className="absolute h-full bottom-0 right-0 sun-section-svg"
                        src="sun-section.svg"
                        alt=""
                    ></img>
                    <Social twitter={twitter} instagram={instagram} />
                </section>

                <section
                    id="discord"
                    className="flex flex-col flex-1 justify-center items-center h-full min-h-200"
                >
                    <Discord />
                </section>
            </Layout>
        </>
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
