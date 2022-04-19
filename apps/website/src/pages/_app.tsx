import router from 'next/router'

import { DefaultSeo, SocialProfileJsonLd, LogoJsonLd } from 'next-seo'

import ProgressBar from '@badrap/bar-of-progress'

import '@/styles/globals.scss'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    const progress = new ProgressBar({
        size: 2,
        color: '#ff9400',
        className: 'bar-of-progress',
        delay: 100,
    })

    router.events.on('routeChangeStart', () => progress.start())
    router.events.on('routeChangeComplete', () => progress.finish())
    router.events.on('routeChangeError', () => progress.finish())

    return (
        <>
            <DefaultSeo
                defaultTitle="Sunlight Esports"
                canonical="https://sunesports.com.br/"
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

            <LogoJsonLd logo="https://sunesports.com.br/sun.svg" url="https://sunesports.com.br" />

            <Component {...pageProps} />
        </>
    )
}
