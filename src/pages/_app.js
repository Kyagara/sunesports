import React from 'react'
import { DefaultSeo, SocialProfileJsonLd, LogoJsonLd } from 'next-seo'
import '../css/globals.scss'

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
                additionalMetaTags={[
                    {
                        name: 'theme-color',
                        content: '#FF9400',
                    },
                ]}
            />

            <SocialProfileJsonLd
                type="Organization"
                name="Sunlight Esports"
                url="https://sunesports.com.br"
                sameAs={[
                    'https://twitter.com/sunesportsbr',
                    'https://www.instagram.com/sunlightesports',
                    'https://www.facebook.com/sunesportsbr',
                ]}
            />

            <LogoJsonLd
                logo="https://sunesports.com.br/sun.svg"
                url="https://sunesports.com.br"
            />

            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default SunlightApp
