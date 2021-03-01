import '../css/screen.scss'
import { useRouter } from 'next/router'
import React from 'react'
import { DefaultSeo } from 'next-seo'

function SunlightApp({ Component, pageProps }) {
    const router = useRouter()
    return (
        <React.Fragment>
            <DefaultSeo
                title="Sunlight Esports"
                description="#SUN"
                locale="pt_BR"
                canonical="https://sunesports.com.br/"
                openGraph={{
                    url: 'https://sunesports.com.br/',
                    title: 'Sunlight Esports',
                    description: '#SUN',
                    images: {
                        url: 'https://sunesports.com.br/sun.svg',
                        width: 2000,
                        height: 2000,
                        alt: 'Og Image Alt',
                    },
                    site_name: 'Sunlight Esports',
                }}
                twitter={{
                    handle: '@sunesportsbr',
                    cardType: 'summary',
                }}
            />

            <Component {...pageProps} key={router.route} />
        </React.Fragment>
    )
}

export default SunlightApp
