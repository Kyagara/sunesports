import React from 'react'
import { DefaultSeo } from 'next-seo'
import '../css/screen.scss'

function SunlightApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <DefaultSeo
                title="Sunlight Esports"
                description="A SUN é uma organização de Esports brasileira que atualmente compete em League of Legends."
                locale="pt_BR"
                canonical="https://sunesports.com.br/"
                openGraph={{
                    type: 'website',
                    url: 'https://sunesports.com.br/',
                    title: 'Sunlight Esports',
                    site_name: 'Sunlight Esports',
                    description:
                        'A SUN é uma organização de Esports brasileira que atualmente compete em League of Legends.',
                    images: [
                        {
                            url: 'https://sunesports.com.br/sun.svg',
                            width: '2000',
                            height: '2000',
                        },
                        {
                            url: 'https://sunesports.com.br/card.png',
                            width: '400',
                            height: '400',
                        },
                    ],
                }}
                twitter={{
                    site: '@sunesportsbr',
                    cardType: 'summary',
                    title: 'Sunlight Esports',
                    description:
                        'A SUN é uma organização de Esports brasileira que atualmente compete em League of Legends.',
                }}
            ></DefaultSeo>

            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default SunlightApp
