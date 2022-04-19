import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

import { SocialSectionProps } from '@/types'

import Layout from '@/components/layout'

import Home from '@/components/sections/Home'
import Social from '@/components/sections/Social'
import Discord from '@/components/sections/Discord'
import Image from '@/components/NextImage'

const IndexPage = ({ twitter, instagram }: SocialSectionProps) => {
    return (
        <Layout
            pageTitle="Sunlight Esports"
            pageDescription="A SUN é uma organização de Esports brasileira que atualmente compete em League of Legends."
        >
            <div id="moving-stars" />

            <section
                id="home"
                className="flex justify-center overflow-hidden items-center min-h-screen"
            >
                <Home />
            </section>

            <section id="social" className="relative flex flex-col min-h-screen bg-gray-100">
                <Image
                    className="absolute h-full right-0 opacity-5"
                    layout="fill"
                    src="/sun-section.svg"
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

    const twitterPath = path.join(postsDirectory, './src/data/twitter.yaml')
    const instagramPath = path.join(postsDirectory, './src/data/instagram.yaml')

    const twitterFile = fs.readFileSync(twitterPath, 'utf8')
    const instagramFile = fs.readFileSync(instagramPath, 'utf8')

    const twitter = yaml.load(twitterFile)
    const instagram = yaml.load(instagramFile)

    return {
        props: { twitter, instagram },
    }
}

export default IndexPage
