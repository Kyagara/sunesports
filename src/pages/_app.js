import React from 'react'
import { DefaultSeo } from 'next-seo'
import '../css/screen.scss'

function SunlightApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <DefaultSeo
                title="Sunlight Esports"
                description="A SUN é um time de Esports que está atualmente competindo em League of Legends."
                locale="pt_BR"
                canonical="https://sunesports.com.br/"
                openGraph={{
                    type: 'website',
                    url: 'https://sunesports.com.br/',
                    title: 'Sunlight Esports',
                    site_name: 'Sunlight Esports',
                    description:
                        'A SUN é um time de Esports que está atualmente competindo em League of Legends.',
                    images: [
                        {
                            url: 'https://sunesports.com.br/sun.svg',
                        },
                    ],
                }}
                twitter={{
                    site: '@sunesportsbr',
                    cardType: 'summary',
                    title: 'Sunlight Esports',
                    description:
                        'A SUN é um time de Esports que está atualmente competindo em League of Legends.',
                }}
            ></DefaultSeo>

            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default SunlightApp
