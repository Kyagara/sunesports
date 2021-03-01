import Head from 'next/head'
import Navbar from './layout/navbar'
import Footer from './layout/footer'
import { NextSeo } from 'next-seo'

const Layout = ({ children, title = 'Sunlight Esports' }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <html lang="pt"></html>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link rel="icon" href="sun.svg"></link>
            </Head>

            <NextSeo
                title={title}
                description="#SUN"
                locale="pt_BR"
                canonical="https://sunesports.com.br/"
                openGraph={{
                    url: 'https://sunesports.com.br/',
                    title: 'Sunlight Esports',
                    description: '#SUN',
                    images: {
                        url: 'https://sunesports.com.br/sun.svg',
                        width: 800,
                        height: 600,
                        alt: 'Og Image Alt',
                    },
                    site_name: 'Sunlight Esports',
                }}
                twitter={{
                    handle: '@sunesportsbr',
                    cardType: 'summary',
                }}
            />

            <Navbar />

            {children}

            <Footer />
        </>
    )
}

export default Layout
